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

  // ---- 计算满分 ----
  let score = 0, maxScore = 0;
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
      listen:listen, vocab:vocab, match:match, culture:culture, speak:speak, quiz:quiz
    }[s.type]||(()=> ""))(s);
  }
  function mcq(qs){
    return qs.map(q=>{
      const opts = q.options.map(o=>`<button class="opt">${esc(o)}</button>`).join("");
      return `<div class="q" data-a="${q.answer}"><div class="ask">${esc(q.ask)}${q.py?` <span class="py">${esc(q.py)}</span>`:""}</div>${opts}<div class="fb"></div></div>`;
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
      `<audio controls preload="none" src="${esc(s.audio)}"></audio>${mcq(s.questions)}</div>`;
  }
  function vocab(s){
    const c = s.words.map(v=>`<button class="flip"><div class="inner"><div class="side front"><div class="hz">${esc(v.hz)}</div><div class="py">${esc(v.py)}</div></div><div class="side back"><div class="emo">${esc(v.emo||"")}</div>${esc(v.en)}</div></div></button>`).join("");
    return `<div class="card"><div class="grid">${c}</div><div class="hint">👆 点一下翻面 tap to flip</div></div>`;
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
  function quiz(s){ return `<div class="card">${mcq(s.questions)}</div>`; }

  // ---- 组装页面 ----
  document.title = `${courseLabel} 第${CN[curN-1]}节 · ${L.title}`;
  const body = `
  <div class="topbar">
    <div class="row">
      <div class="brand">${esc(courseLabel)}<small>第${CN[curN-1]}节 · ${esc(L.title)} ${L.subtitle?"· "+esc(L.subtitle):""}</small></div>
      <div class="score">⭐ <span id="score">0</span>/${maxScore}</div>
    </div>
    <div class="navbtns">
      <a href="../../index.html">🏠 主页</a>
      <a href="../../index.html">🔍 目录/搜索</a>
      ${navLink(prev,"◀ 上一节")}
      ${navLink(next,"下一节 ▶")}
    </div>
  </div>
  <div class="wrap">
    <div class="card idcard">
      <div style="font-weight:600;margin-bottom:8px">开始前 · 填一下（老师用，<u>不要写名字</u>）</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input id="classCode" placeholder="班级代号 class（例 9A）">
        <input id="seatNo" placeholder="座号 seat no.（例 12）">
      </div>
    </div>
    ${L.sections.map(section).join("")}
    <div class="card" style="text-align:center">
      <div style="font-weight:600;margin-bottom:10px">做完了？把成绩交给老师 👇<br><small style="color:#6b7686;font-weight:400">Finished? Send your score to the teacher</small></div>
      <button id="submitBtn" class="submit-btn">提交成绩 Submit</button>
      <div id="submitFb" class="fb" style="margin-top:12px"></div>
    </div>
    <div class="done-box" id="done"><div class="star">🎉⭐</div><div>太棒了！你完成了这一课！</div><div class="n"><span id="finalScore">0</span> / ${maxScore}</div></div>
    <p class="foot">${esc(gradeName)} · ${esc(courseLabel)} · 第${CN[curN-1]}节<br>学生自测练习</p>
  </div>`;
  document.body.innerHTML = body;

  // ---- 计分 ----
  const scoreEl = document.getElementById("score");
  function addPoint(){ score++; scoreEl.textContent=score; if(score>=maxScore) showDone(); }
  function showDone(){ const d=document.getElementById("done"); d.classList.add("show"); document.getElementById("finalScore").textContent=score; }

  // ---- MCQ ----
  document.querySelectorAll(".q").forEach(q=>{
    const ans=+q.dataset.a, opts=[...q.querySelectorAll(".opt")], fb=q.querySelector(".fb");
    opts.forEach((o,i)=>o.addEventListener("click",()=>{
      if(q.dataset.done)return; q.dataset.done=1; opts.forEach(x=>x.disabled=true);
      if(i===ans){o.classList.add("correct");fb.textContent="✓ 对了！ Correct";fb.className="fb g";addPoint();}
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

  // ---- 提交成绩 ----
  document.getElementById("submitBtn").addEventListener("click",async()=>{
    const cls=document.getElementById("classCode").value.trim();
    const seat=document.getElementById("seatNo").value.trim();
    const fb=document.getElementById("submitFb");
    if(!cls||!seat){fb.textContent="请先在最上面填班级和座号 Please fill class & seat first";fb.className="fb b";window.scrollTo({top:0,behavior:"smooth"});return;}
    const btn=document.getElementById("submitBtn");btn.disabled=true;fb.textContent="提交中… Submitting…";fb.className="fb";
    try{
      const res=await fetch(SUPABASE_URL+"/rest/v1/kongzi_results",{
        method:"POST",
        headers:{"apikey":SUPABASE_KEY,"Authorization":"Bearer "+SUPABASE_KEY,"Content-Type":"application/json","Prefer":"return=minimal"},
        body:JSON.stringify({lesson:L.id,class_code:cls,seat_no:seat,score:score,max_score:maxScore})
      });
      if(res.ok){fb.textContent="✓ 已提交！得分 "+score+"/"+maxScore+"　Submitted!";fb.className="fb g";btn.textContent="已提交 ✓";}
      else{const t=await res.text();fb.textContent="提交失败 Failed ("+res.status+")："+t.slice(0,140);fb.className="fb b";btn.disabled=false;}
    }catch(e){fb.textContent="网络错误 Network error："+e.message;fb.className="fb b";btn.disabled=false;}
  });
})();
