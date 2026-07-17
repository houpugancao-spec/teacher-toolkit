/* ============================================================
   课程通用引擎 —— 读取 window.LESSON 渲染整课
   每课的 html 只需定义 LESSON 数据，其余全自动
   ============================================================ */
(function(){
  "use strict";
  const SUPABASE_URL = "https://xzexcfqrftllicoqaizs.supabase.co";
  const SUPABASE_KEY = "sb_publishable_ly64tG2XPMv8N-34Np5qkQ_2d8rNRU5";
  const L = window.LESSON, CAT = window.CATALOG;
  const esc = s => (s==null?"":String(s));
  const WORDS = window.WORDS || {};
  // 自动划线的词：长词优先；标了 manual:true 的词不自动划线，只在课文里用 [[词]] 手动标
  const wkeys = Object.keys(WORDS).filter(w=>!WORDS[w].manual).sort((a,b)=>b.length-a.length);

  // ---- 计算满分 ----
  let score = 0, maxScore = 0;
  const detail = [];   // 每道选择题的对错明细，用于老师看板的题目分析
  L.sections.forEach(s=>{
    if(s.type==="listen"||s.type==="quiz") maxScore += (s.questions||[]).length;
    if(s.type==="match") maxScore += (s.words||[]).length;
  });

  // ---- 在 catalog 里定位本节所属的「课」，取同课的上一节/下一节 ----
  const CN=["一","二","三","四","五","六","七","八","九","十","十一","十二"];
  let course=null, gradeName="";
  (CAT?CAT.grades:[]).forEach(g=>(g.lecture||[]).forEach(co=>{
    if((co.sections||[]).some(s=>s.id===L.id)){course=co;gradeName=g.name;}
  }));
  const secs = course?(course.sections||[]):[];
  const si = secs.findIndex(s=>s.id===L.id);
  const curN = si>=0?secs[si].n:(L.n||1);
  const prev = si>0 ? secs[si-1] : null;
  const next = si>=0 && si<secs.length-1 ? secs[si+1] : null;
  const courseLabel = course ? `${course.no} ${course.title}` : (L.unitTitle||"");
  const rel = u => "../../" + u;                 // 课页在 units/<u>/，根目录退两级
  const navLink = (le,label)=> le && le.ready!==false
      ? `<a href="${rel(le.url)}">${label}</a>`
      : `<a class="disabled">${label}</a>`;

  // ---- 各区块渲染 ----
  let sn = 0;
  function section(s){
    if(s.type==="hook") return hook(s);
    sn++;
    const head = `<h2><span class="n">${sn}</span>${esc(s.title)}</h2>`+
                 (s.sub?`<p class="sub">${esc(s.sub)}</p>`:"");
    return head + ({
      listen:listen, vocab:vocab, match:match, culture:culture, speak:speak, quiz:quiz,
      reading:reading, sectionnav:sectionnav
    }[s.type]||(()=> ""))(s);
  }
  // 把文本里出现的重点词自动包成可点的下划线；长词优先，非贪婪扫描避免嵌套
  function wd(w){ return `<u class="wd" data-w="${esc(w)}">${esc(w)}</u>`; }
  function linkify(text){
    let out="", i=0;
    while(i<text.length){
      // 手动标注 [[词]]：只标这一处（用于 manual 词，如“是[[知]]也”）
      if(text.startsWith("[[",i)){
        const end=text.indexOf("]]",i+2);
        if(end>=0){ out+=wd(text.slice(i+2,end)); i=end+2; continue; }
      }
      let hit=null;
      for(let k=0;k<wkeys.length;k++){ if(text.startsWith(wkeys[k],i)){ hit=wkeys[k]; break; } }
      if(hit){ out+=wd(hit); i+=hit.length; }
      else { const ch=text[i]; out += ch==="<"?"&lt;":(ch===">"?"&gt;":(ch==="&"?"&amp;":ch)); i++; }
    }
    return out;
  }
  // 课文 / 文字稿：可选「全文朗读」+ 段落（对话段带角色名）+ 自动划线重点词
  function reading(s){
    const fig = s.img ? `<img class="rd-img" src="${esc(s.img)}" alt="" loading="lazy">` : "";
    const audio = s.audio ? `<div class="listen-tip">🔊 ${esc(s.audioLabel||"全文朗读 · Listen to the whole text")}</div><audio controls controlsList="nodownload noplaybackrate" preload="metadata" oncontextmenu="return false" src="${esc(s.audio)}"></audio>` : "";
    const paras = (s.paras||[]).map(p=>{
      const role = (p&&p.role)!=null ? p.role : null;
      const t = typeof p==="string" ? p : (p.t||"");
      return role!=null
        ? `<p class="dl"><b class="who">${esc(role)}：</b>${linkify(t)}</p>`
        : `<p class="rd-p">${linkify(t)}</p>`;
    }).join("");
    return `<div class="card reading">${fig}${audio}<div class="rd-body">${paras}</div><div class="hint">👆 有下划线的词可以点，看解释、听读音 · Tap underlined words</div></div>`;
  }
  // 分节导航（总览页用）
  function sectionnav(s){
    const items=(s.items||[]).map((it,i)=>{
      const inner=`<span class="sn">第${CN[i]}节</span><span class="st">${esc(it.title)}</span>`+
                  (it.ready===false?`<span class="soonbadge">敬请期待</span>`:`<span class="go">▶</span>`);
      return it.ready===false
        ? `<div class="secitem soon">${inner}</div>`
        : `<a class="secitem" href="${esc(it.url)}">${inner}</a>`;
    }).join("");
    return `<div class="card"><div class="secnav">${items}</div></div>`;
  }
  function mcq(qs, prefix){
    return qs.map((q,i)=>{
      const opts = q.options.map(o=>`<button class="opt">${esc(o)}</button>`).join("");
      const label = `${prefix||""} ${i+1}`.trim();
      return `<div class="q" data-a="${q.answer}" data-label="${esc(label)}"><div class="ask">${esc(q.ask)}${q.py?` <span class="py">${esc(q.py)}</span>`:""}</div>${opts}<div class="fb"></div></div>`;
    }).join("");
  }
  function hook(s){
    const opts = s.options.map(o=>`<button data-c="${o.correct?1:0}">${o.html||esc(o.t)}</button>`).join("");
    return `<h2><span class="n">?</span>${esc(s.title||"猜一猜 Guess")}</h2>`+
      (s.sub?`<p class="sub">${esc(s.sub)}</p>`:"")+
      `<div class="card"><div class="choose">${opts}</div><div class="reveal">${s.reveal}</div></div>`;
  }
  function listen(s){
    return `<div class="card"><div class="listen-tip">🔊 可以反复听 · You can replay it</div>`+
      `<audio controls controlsList="nodownload noplaybackrate" preload="metadata" oncontextmenu="return false" src="${esc(s.audio)}"></audio>${mcq(s.questions, s.title)}</div>`;
  }
  function vocab(s){
    const c = s.words.map(v=>{
      const au = v.audio || (WORDS[v.hz] && WORDS[v.hz].audio) || "";
      const py = v.py || (WORDS[v.hz] && WORDS[v.hz].py) || "";
      const en = v.en || (WORDS[v.hz] && WORDS[v.hz].en) || "";
      const zh = v.zh || (WORDS[v.hz] && WORDS[v.hz].zh) || "";   // 中文释义（有才显示，向后兼容旧卡）
      const spk = au ? `<span class="spk" data-au="${esc(au)}">🔊</span>` : "";
      const back = `<div class="emo">${esc(v.emo||"")}</div>`+
                   (zh?`<div class="bk-zh">${esc(zh)}</div>`:"")+
                   `<div class="bk-en">${esc(en)}</div>`;
      return `<button class="flip"><div class="inner"><div class="side front">${spk}<div class="hz">${esc(v.hz)}</div><div class="py">${esc(py)}</div></div><div class="side back">${back}</div></div></button>`;
    }).join("");
    return `<div class="card"><div class="grid">${c}</div><div class="hint">👆 点卡片翻面，点 🔊 听读音 · tap to flip, 🔊 to listen</div></div>`;
  }
  function match(s){
    return `<div class="card"><div class="match"><div class="col" data-side="L"></div><div class="col" data-side="R"></div></div><div class="fb mfb" style="text-align:center;margin-top:10px"></div></div>`;
  }
  function culture(s){
    const f = s.facts.map(x=>`<div class="fact"><span class="k">${esc(x.k)}</span><div>${x.html}</div></div>`).join("");
    return `<div class="card"><div class="facts">${f}</div></div>`;
  }
  function speak(s){
    const b = (s.bank||[]).map(x=>`<span>${esc(x)}</span>`).join("");
    return `<div class="card"><div class="frame">${s.frame}</div><div class="bank">${b}</div>${s.eg?`<p class="eg">${s.eg}</p>`:""}</div>`;
  }
  function quiz(s){ return `<div class="card">${mcq(s.questions, s.title)}</div>`; }

  // ---- 组装页面 ----
  const isOverview = (L.kind==="overview");   // 课文总览页：无计分、无提交
  const scored = maxScore>0 && !isOverview;   // 有可评分题才显示计分/提交
  document.title = isOverview ? `${courseLabel} · ${L.title}` : `${courseLabel} 第${CN[curN-1]}节 · ${L.title}`;
  const brandSmall = isOverview
    ? esc(L.title) + (L.subtitle?" · "+esc(L.subtitle):"")
    : `第${CN[curN-1]}节 · ${esc(L.title)} ${L.subtitle?"· "+esc(L.subtitle):""}`;
  const scoreBox = scored ? `<div class="score">⭐ <span id="score">0</span>/${maxScore}</div>` : "";
  const navRow = `<a href="../../index.html">🏠 主页</a><a href="../../index.html">🔍 目录/搜索</a>`+
    (isOverview ? "" : `${navLink(prev,"◀ 上一节")}${navLink(next,"下一节 ▶")}`);
  const idcard = scored ? `<div class="card idcard">
      <div style="font-weight:600;margin-bottom:8px">开始前 · 填一下（老师用，<u>不要写名字</u>）</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input id="classCode" placeholder="班级代号 class（例 9A）">
        <input id="seatNo" placeholder="座号 seat no.（例 12）">
      </div>
    </div>` : "";
  const submitBox = scored ? `<div class="card" style="text-align:center">
      <div style="font-weight:600;margin-bottom:10px">做完了？把成绩交给老师 👇<br><small style="color:#6b7686;font-weight:400">Finished? Send your score to the teacher</small></div>
      <button id="submitBtn" class="submit-btn">提交成绩 Submit</button>
      <div id="submitFb" class="fb" style="margin-top:12px"></div>
    </div>
    <div class="done-box" id="done"><div class="star">🎉⭐</div><div>太棒了！你完成了这一课！</div><div class="n"><span id="finalScore">0</span> / ${maxScore}</div></div>` : "";
  const body = `
  <div class="topbar">
    <div class="row">
      <div class="brand">${esc(courseLabel)}<small>${brandSmall}</small></div>
      ${scoreBox}
    </div>
    <div class="navbtns">${navRow}</div>
  </div>
  <div class="wrap">
    ${isOverview ? "" : `<div class="seclabel"><span class="sn">第${CN[curN-1]}节</span>${esc(L.title)}</div>`}
    ${idcard}
    ${L.sections.map(section).join("")}
    ${submitBox}
    <p class="foot">${esc(gradeName)} · ${esc(courseLabel)}${isOverview?"":" · 第"+CN[curN-1]+"节"}<br>学生自测练习</p>
  </div>`;
  document.body.innerHTML = body;

  // ---- 计分 ----
  const scoreEl = document.getElementById("score");
  function addPoint(){ if(!scored) return; score++; if(scoreEl) scoreEl.textContent=score; if(score>=maxScore) showDone(); }
  function showDone(){ const d=document.getElementById("done"); if(!d) return; d.classList.add("show"); const fs=document.getElementById("finalScore"); if(fs) fs.textContent=score; }

  // ---- MCQ ----
  document.querySelectorAll(".q").forEach(q=>{
    const ans=+q.dataset.a, opts=[...q.querySelectorAll(".opt")], fb=q.querySelector(".fb"), label=q.dataset.label||"";
    opts.forEach((o,i)=>o.addEventListener("click",()=>{
      if(q.dataset.done)return; q.dataset.done=1; opts.forEach(x=>x.disabled=true);
      const ok=(i===ans); detail.push({q:label,ok:ok});
      if(ok){o.classList.add("correct");fb.textContent="✓ 对了！ Correct";fb.className="fb g";addPoint();}
      else{o.classList.add("wrong");opts[ans].classList.add("correct");fb.textContent="✗ 正确答案已标出 See the green one";fb.className="fb b";}
    }));
  });

  // ---- Hook ----
  document.querySelectorAll(".choose").forEach(box=>{
    const rev = box.parentElement.querySelector(".reveal");
    box.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{
      box.querySelectorAll("button").forEach(x=>x.disabled=true);
      rev.classList.add("show");
      if(b.dataset.c==="1"){b.style.borderColor="#1a7f4b";b.style.background="#e6f6ec";}
    }));
  });

  // ---- Flashcards ----
  document.querySelectorAll(".flip").forEach(f=>f.addEventListener("click",()=>f.classList.toggle("on")));

  // ---- Match（每个 match 区块独立）----
  const shuffle=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
  L.sections.filter(s=>s.type==="match").forEach((s,mi)=>{
    const box=document.querySelectorAll(".match")[mi];
    const L2=box.querySelector('[data-side="L"]'), R=box.querySelector('[data-side="R"]');
    const fb=box.parentElement.querySelector(".mfb"); const total=s.words.length;
    shuffle(s.words).forEach(v=>{const c=document.createElement("button");c.className="chip";c.textContent=v.hz;c.dataset.id=v.hz;L2.appendChild(c);});
    shuffle(s.words).forEach(v=>{const c=document.createElement("button");c.className="chip";c.textContent=v.en;c.dataset.id=v.hz;R.appendChild(c);});
    let selL=null,selR=null,done=0;
    function pick(side,el){
      if(el.classList.contains("done"))return;
      if(side==="L"){selL&&selL.classList.remove("sel");selL=el;}else{selR&&selR.classList.remove("sel");selR=el;}
      el.classList.add("sel");
      if(selL&&selR){
        if(selL.dataset.id===selR.dataset.id){
          [selL,selR].forEach(x=>{x.classList.add("done");x.classList.remove("sel");}); selL=selR=null; done++; addPoint();
          fb.textContent=done===total?"全部配对成功！ All matched! 🎉":`配对成功 ${done}/${total} ✓`; fb.className="fb g";
        }else{
          const a=selL,b=selR; a.classList.add("miss");b.classList.add("miss");
          fb.textContent="再试一次 Try again"; fb.className="fb b";
          setTimeout(()=>{a.classList.remove("miss","sel");b.classList.remove("miss","sel");},400); selL=selR=null;
        }
      }
    }
    [...L2.children].forEach(c=>c.onclick=()=>pick("L",c));
    [...R.children].forEach(c=>c.onclick=()=>pick("R",c));
  });

  // ---- 单个音频播放器（划线词弹卡 / 生词卡 🔊 共用）----
  const _player = new Audio();
  function playAudio(src){ if(!src) return; try{ _player.pause(); _player.src=src; _player.currentTime=0; _player.play().catch(function(){}); }catch(e){} }

  // ---- 划线词弹卡 ----
  (function(){
    if(!Object.keys(WORDS).length) return;
    const pop=document.createElement("div"); pop.className="wpop";
    pop.innerHTML=`<div class="wpop-box"><button class="wpop-x" aria-label="close">×</button><div class="wpop-hz"></div><div class="wpop-py"></div><div class="wpop-zh"></div><div class="wpop-en"></div><button class="wpop-au">🔊 读一遍 Listen</button></div>`;
    document.body.appendChild(pop);
    const $hz=pop.querySelector(".wpop-hz"),$py=pop.querySelector(".wpop-py"),$zh=pop.querySelector(".wpop-zh"),$en=pop.querySelector(".wpop-en"),$au=pop.querySelector(".wpop-au");
    let curAu="";
    function open(w){ const d=WORDS[w]||{}; $hz.textContent=w; $py.textContent=d.py||""; $zh.textContent=d.zh||""; $en.textContent=d.en||""; curAu=d.audio||""; $au.style.display=curAu?"":"none"; pop.classList.add("show"); if(curAu) playAudio(curAu); }
    function close(){ pop.classList.remove("show"); }
    document.addEventListener("click",function(e){
      const w=e.target.closest(".wd"); if(w){ open(w.dataset.w); return; }
      if(e.target.closest(".wpop-x")||e.target===pop) close();
    });
    $au.addEventListener("click",function(){ playAudio(curAu); });
    document.addEventListener("keydown",function(e){ if(e.key==="Escape") close(); });
  })();

  // ---- 生词卡 🔊（阻止冒泡，避免触发翻面）----
  document.querySelectorAll(".spk").forEach(function(b){ b.addEventListener("click",function(e){ e.stopPropagation(); playAudio(b.dataset.au); }); });

  // ---- 提交成绩 ----
  const _submitBtn = document.getElementById("submitBtn");
  if(_submitBtn) _submitBtn.addEventListener("click",async()=>{
    const cls=document.getElementById("classCode").value.trim();
    const seat=document.getElementById("seatNo").value.trim();
    const fb=document.getElementById("submitFb");
    if(!cls||!seat){fb.textContent="请先在最上面填班级和座号 Please fill class & seat first";fb.className="fb b";window.scrollTo({top:0,behavior:"smooth"});return;}
    const btn=document.getElementById("submitBtn");btn.disabled=true;fb.textContent="提交中… Submitting…";fb.className="fb";
    const payload={lesson:L.id,category:(L.category||"授课"),class_code:cls,seat_no:seat,score:score,max_score:maxScore,details:detail};
    try{
      const res=await postResult(payload);
      if(res.ok){fb.textContent="✓ 已提交！得分 "+score+"/"+maxScore+"　Submitted!";fb.className="fb g";btn.textContent="已提交 ✓";}
      else{const t=await res.text();fb.textContent="提交失败 Failed ("+res.status+")："+t.slice(0,140);fb.className="fb b";btn.disabled=false;}
    }catch(e){
      queueResult(payload);
      fb.textContent="📴 离线已保存，联网后自动补交 Saved offline — will submit when back online";fb.className="fb g";btn.textContent="已保存 ✓";
    }
  });

  function postResult(p){
    return fetch(SUPABASE_URL+"/rest/v1/kongzi_results",{
      method:"POST",
      headers:{"apikey":SUPABASE_KEY,"Authorization":"Bearer "+SUPABASE_KEY,"Content-Type":"application/json","Prefer":"return=minimal"},
      body:JSON.stringify(p)
    });
  }
  function queueResult(p){const q=JSON.parse(localStorage.getItem("pendingResults")||"[]");q.push(p);localStorage.setItem("pendingResults",JSON.stringify(q));}
  async function flushQueue(){
    let q=JSON.parse(localStorage.getItem("pendingResults")||"[]"); if(!q.length)return;
    const rest=[];
    for(const p of q){ try{ const r=await postResult(p); if(!r.ok) rest.push(p); }catch(e){ rest.push(p); } }
    localStorage.setItem("pendingResults",JSON.stringify(rest));
  }

  // 离线补交 + 注册 Service Worker（离线缓存）
  flushQueue();
  window.addEventListener("online", flushQueue);
  if("serviceWorker" in navigator){ var _hadCtrl=!!navigator.serviceWorker.controller; navigator.serviceWorker.register("../../sw.js").catch(function(){}); var _reloaded=false; navigator.serviceWorker.addEventListener("controllerchange",function(){ if(_reloaded||!_hadCtrl)return; _reloaded=true; location.reload(); }); }
})();
