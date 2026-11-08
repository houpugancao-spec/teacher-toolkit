/* ============================================================
   VCE 访问锁 · 前端认证 / 受保护内容模块
   —— 仅 Y11/Y12 受保护内容加载；准备班（公开）不引用本文件。
   —— 只用 publishable key + 用户登录后的 JWT，绝不含任何 secret。
   对外暴露 window.VCEAuth
   ============================================================ */
(function(){
  "use strict";
  const URL_ = "https://xzexcfqrftllicoqaizs.supabase.co";
  const KEY  = "sb_publishable_ly64tG2XPMv8N-34Np5qkQ_2d8rNRU5";  // 公开 key
  const LS   = "vce_auth";                       // localStorage 键：存 session
  const authBase = URL_ + "/auth/v1";
  const restBase = URL_ + "/rest/v1";

  // ---------- session 存取 ----------
  const saveSession  = s => localStorage.setItem(LS, JSON.stringify(s));
  const loadSession  = () => { try { return JSON.parse(localStorage.getItem(LS) || "null"); } catch(e){ return null; } };
  const clearSession = () => localStorage.removeItem(LS);

  // 解 JWT 载荷（取 email / sub / session_id / exp）
  function decodeJwt(t){
    try {
      const p = t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");
      return JSON.parse(decodeURIComponent(escape(atob(p))));
    } catch(e){ return {}; }
  }

  // ---------- 基础请求 ----------
  function authFetch(path, opts){
    opts = opts || {};
    opts.headers = Object.assign({ "apikey": KEY, "Content-Type": "application/json" }, opts.headers || {});
    return fetch(authBase + path, opts);
  }

  // 拿有效 access_token（快过期自动用 refresh_token 刷新）
  async function getAccessToken(){
    const s = loadSession();
    if (!s || !s.access_token) return null;
    const claims = decodeJwt(s.access_token);
    const now = Math.floor(Date.now()/1000);
    if (claims.exp && claims.exp - 60 > now) return s.access_token;   // 还没过期
    if (!s.refresh_token) { clearSession(); return null; }
    const r = await authFetch("/token?grant_type=refresh_token", {
      method: "POST", body: JSON.stringify({ refresh_token: s.refresh_token })
    });
    if (!r.ok) { clearSession(); return null; }
    const ns = await r.json(); saveSession(ns); return ns.access_token;
  }

  // 带登录身份的 REST 请求（RLS 据此判权限）
  async function restFetch(path, opts){
    const tok = await getAccessToken();
    opts = opts || {};
    opts.headers = Object.assign({
      "apikey": KEY, "Authorization": "Bearer " + (tok || KEY), "Content-Type": "application/json"
    }, opts.headers || {});
    return fetch(restBase + path, opts);
  }

  // ---------- 认证请求的错误分类 ----------
  // 2026-11-08 教训：Supabase 超额被限时回 402 {message}，旧代码把它兜底成「邮箱或密码不对」，
  // 老师和学生都以为密码错。现在按状态码区分：网络错 / 服务不可用 / 请求太频繁 / 真·密码错。
  const MSG_NET  = "网络连不上，请检查网络后重试。Network error — please check your connection and try again.";
  const MSG_DOWN = "登录服务暂时不可用（不是你的密码问题），请稍后再试或联系老师。Login service is temporarily unavailable (not a password problem) — please try later or contact your teacher.";
  const MSG_MANY = "尝试次数太多，请等几分钟再试。Too many attempts — please wait a few minutes.";
  const MSG_PW   = "邮箱或密码不对 Wrong email or password";

  // 发认证请求：网络断了直接抛「网络错」；回包不是 JSON 也不炸（当成空对象）
  async function authCall(path, body){
    let r;
    try { r = await authFetch(path, { method:"POST", body: JSON.stringify(body) }); }
    catch(e){ throw new Error(MSG_NET); }
    let data = {};
    try { data = await r.json(); } catch(e){}
    return { r, data };
  }

  // 非 2xx 的通用分类；返回 null 表示交给调用方按业务细分
  function serviceError(status){
    if (status === 402 || status === 503 || status >= 500) return new Error(MSG_DOWN + "（" + status + "）");
    if (status === 429) return new Error(MSG_MANY);
    return null;
  }

  // ---------- 认证动作 ----------
  // name 放进 user metadata，由数据库触发器写入 vce_profiles.display_name
  async function signup(email, password, name){
    const body = { email, password };
    if (name) body.data = { name };
    const { r, data } = await authCall("/signup", body);
    if (!r.ok) throw serviceError(r.status) || new Error(data.msg || data.error_description || data.error || data.message || ("注册失败 " + r.status));
    if (data.access_token) saveSession(data);   // 未开邮箱确认时直接给 session
    return data;   // 含 { access_token?, user, ... }
  }

  async function login(email, password){
    const { r, data } = await authCall("/token?grant_type=password", { email, password });
    if (!r.ok) {
      const svc = serviceError(r.status);
      if (svc) throw svc;
      // 只有 Supabase 明确说「凭据不对」才显示密码错
      const raw = data.msg || data.error_description || data.message || "";
      if (data.error_code === "invalid_credentials" || /invalid login credentials/i.test(raw)) throw new Error(MSG_PW);
      throw new Error("登录失败（" + r.status + "）：" + (raw || "请稍后再试或联系老师") + "  Login failed, please try again or contact your teacher.");
    }
    saveSession(data);
    return data;
  }

  async function logout(){
    try { await claimRelease(); } catch(e){}                 // 释放单设备会话
    const tok = await getAccessToken();
    if (tok) { try { await authFetch("/logout", { method:"POST", headers:{ "Authorization":"Bearer "+tok } }); } catch(e){} }
    clearSession();
  }

  // ---------- profile（自己的一行；RLS 保证只读到自己）----------
  async function getProfile(){
    const r = await restFetch("/vce_profiles?select=*", {});
    // 请求失败要抛错，不能返回 null：null 专指「真没有档案」，否则 401/500 都会被显示成「等待建档」
    if (!r.ok) {
      if (r.status === 401) {
        clearSession();   // 登录失效：清掉本地会话，重试时自然回登录页
        throw new Error("登录已失效，请重新登录。Session expired, please log in again.");
      }
      throw new Error("读取账号信息失败（" + r.status + "），请稍后重试。Could not load your account, please try again.");
    }
    const rows = await r.json();
    return rows[0] || null;
  }

  // ---------- 单设备占坑 ----------
  async function claimSession(deviceLabel){
    const r = await restFetch("/rpc/vce_claim_session", {
      method: "POST", body: JSON.stringify({ p_device: deviceLabel || navigator.userAgent.slice(0,80) })
    });
    if (!r.ok) return "error";
    return await r.json();   // 'claimed'|'ok'|'took_over'|'occupied'|'not_allowed'|'no_auth'
  }
  async function claimRelease(){
    const s = loadSession(); if (!s) return;
    const uid = decodeJwt(s.access_token).sub; if (!uid) return;
    await restFetch("/vce_active_sessions?user_id=eq." + uid, { method: "DELETE" });
  }

  // ---------- 拉取受保护课程（RLS 按 tier + 有效登录放行）----------
  async function getLesson(id){
    const r = await restFetch("/vce_lessons?id=eq." + encodeURIComponent(id) + "&select=*", {});
    if (!r.ok) throw new Error("拉取失败 " + r.status);
    const rows = await r.json();
    return rows[0] || null;   // 无权时 RLS 返回空 → null
  }


  // ---------- 老师身份（水印用：老师不显示邮箱小字，投屏时不漏私人邮箱）----------
  // 问数据库的 vce_is_teacher()，避免把老师邮箱写进公开仓。
  // 未登录/出错一律当学生处理（显示完整水印），安全方向不会错。
  async function isTeacher(){
    try {
      const r = await restFetch("/rpc/vce_is_teacher", { method:"POST", body:"{}" });
      if (!r.ok) return false;
      return (await r.json()) === true;
    } catch(e){ return false; }
  }

  // ---------- 小工具 ----------
  const currentEmail = () => { const s = loadSession(); return s ? (decodeJwt(s.access_token).email || "") : ""; };
  const isLoggedIn   = () => !!loadSession();

  window.VCEAuth = {
    signup, login, logout, getProfile, getAccessToken, isTeacher,
    claimSession, claimRelease, getLesson, currentEmail, isLoggedIn
  };
})();
