(function(){
  const clean=s=>(s||"").replace(/[\s，。！？；：、“”‘’《》,.!?;:'"\-]/g,"").toLowerCase();
  function answerOK(el){
    const value=clean(el.value);
    return (el.dataset.answer||"").split("|").some(a=>clean(a)===value);
  }
  window.checkPractice=function(){
    const fields=[...document.querySelectorAll("[data-answer]")];
    const orders=[...document.querySelectorAll("[data-order]")];
    let good=0,total=fields.length+orders.length;
    fields.forEach(el=>{const ok=answerOK(el);el.classList.toggle("good",ok);el.classList.toggle("bad",!ok&&!!el.value.trim());if(ok)good++;});
    orders.forEach(el=>{const ok=el.value===el.dataset.order;el.classList.toggle("good",ok);el.classList.toggle("bad",!ok&&!!el.value);if(ok)good++;});
    const out=document.querySelector(".result");
    if(!out)return;
    out.textContent=good===total?`太棒了！${good}/${total} 全部正确。`:`目前答对 ${good}/${total}，请检查标红的项目。`;
    out.className="result "+(good===total?"good":"bad");
    out.scrollIntoView({behavior:"smooth",block:"nearest"});
  };
  window.resetPractice=function(){
    document.querySelectorAll("input,textarea,select").forEach(el=>{if(el.type!=="button")el.value="";el.classList.remove("good","bad")});
    const out=document.querySelector(".result");if(out){out.textContent="";out.className="result"}
  };
  const story=document.getElementById("mysteryStory"),count=document.getElementById("charCount");
  if(story&&count)story.addEventListener("input",()=>count.textContent=`${story.value.replace(/\s/g,"").length} 字`);
  if("serviceWorker" in navigator)navigator.serviceWorker.register("../../sw.js").catch(()=>{});
})();
