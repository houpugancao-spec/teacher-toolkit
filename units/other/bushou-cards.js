// 部首分节词卡（止部、心部…）共用脚本：读页面里的 window.ZB_WORDS 渲染翻面卡 + 🔊 播放
(() => {
  const words = window.ZB_WORDS || [];
  const cards = document.querySelector("#cards");
  const status = document.querySelector(".audio-status");
  let audio = null;

  function esc(text){
    return String(text).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[c]));
  }
  function lengthClass(text){
    const n=[...text].length;
    if(n===1)return"len-1";
    if(n===3)return"len-3";
    if(n===4)return"len-4";
    if(n>=5)return"len-long";
    return"";
  }

  cards.innerHTML=words.map(word=>`<div class="flip prototype-card" role="button" tabindex="0"
                 aria-label="${esc(word.hz)}词卡，点击翻面" aria-pressed="false">
      <div class="inner">
        <div class="side front">
          <button class="spk" type="button" aria-label="播放${esc(word.hz)}的读音"
                  data-au="audio/${esc(word.hz)}.mp3" data-hz="${esc(word.hz)}">🔊</button>
          <div class="hz ${lengthClass(word.hz)}">${esc(word.hz)}</div>
          <div class="py">${esc(word.py)}</div>
        </div>
        <div class="side back">
          <div class="meaning-label">中文解释</div>
          <div class="meaning-zh">${esc(word.zh)}</div>
          <div class="meaning-label en-label" style="margin-top:14px">ENGLISH</div>
          <div class="meaning-en">${esc(word.en)}</div>
          <div class="example-block">
            <div class="example-label">例句</div>
            <div class="example-zh">${esc(word.eg)}</div>
          </div>
        </div>
      </div>
    </div>`).join("");

  function flipCard(card){
    const isOn=card.classList.toggle("on");
    card.setAttribute("aria-pressed",String(isOn));
  }
  function playWord(event,speaker){
    event.stopPropagation();
    if(audio){audio.pause();audio.currentTime=0}
    audio=new Audio(speaker.dataset.au);
    status.textContent=`正在播放：${speaker.dataset.hz}`;
    audio.addEventListener("ended",()=>{status.textContent=""},{once:true});
    audio.addEventListener("error",()=>{
      status.textContent="音频暂时无法播放，请稍后再试。";
    },{once:true});
    audio.play().catch(()=>{status.textContent="请再次点击小喇叭播放读音。"});
  }

  cards.addEventListener("click",event=>{
    const speaker=event.target.closest(".spk");
    if(speaker){playWord(event,speaker);return}
    const card=event.target.closest(".prototype-card");
    if(card)flipCard(card);
  });
  cards.addEventListener("keydown",event=>{
    if(event.target.closest(".spk"))return;
    if(event.key==="Enter"||event.key===" "){
      event.preventDefault();
      const card=event.target.closest(".prototype-card");
      if(card)flipCard(card);
    }
  });
})();
