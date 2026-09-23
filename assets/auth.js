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

  // ---------- 认证动作 ----------
  async function signup(email, password){
    const r = await authFetch("/signup", { method:"POST", body: JSON.stringify({ email, password }) });
    const data = await r.json();
    if (!r.ok) throw new Error(data.msg || data.error_description || data.error || ("注册失败 " + r.status));
    if (data.access_token) saveSession(data);   // 未开邮箱确认时直接给 session
    return data;   // 含 { access_token?, user, ... }
  }

  async function login(email, password){
    const r = await authFetch("/token?grant_type=password", { method:"POST", body: JSON.stringify({ email, password }) });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error_description || data.msg || "邮箱或密码不对 Wrong email or password");
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
