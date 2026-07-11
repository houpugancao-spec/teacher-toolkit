/* Service Worker —— 离线缓存
   缓存网页+资源+音频，学生在线打开一次后即可离线做题。
   加新单元后请把 CACHE 版本号 +1（触发更新）。 */
const CACHE = "vce-zhongwen-v12";
const CORE = [
  "./", "./index.html", "./teacher.html", "./manifest.json", "./icon.svg",
  "./assets/style.css", "./assets/catalog.js", "./assets/lesson.js",
  "./assets/fonts/lxgw-kai.woff2",
  "./units/kongzi/index.html", "./units/kongzi/words.js",
  "./units/kongzi/audio/reading-article.mp3", "./units/kongzi/audio/reading-dialogue.mp3",
  "./units/kongzi/1.html", "./units/kongzi/2.html", "./units/kongzi/3.html", "./units/kongzi/4.html",
  "./units/kongzi/audio/seg1.mp3", "./units/kongzi/audio/seg2.mp3",
  "./units/kongzi/audio/seg3.mp3", "./units/kongzi/audio/seg4.mp3",
  "./units/kongzi/audio/seg5.mp3", "./units/kongzi/audio/seg6.mp3",
  "./units/kongzi/audio/seg7.mp3", "./units/kongzi/audio/seg8.mp3",
  // 诸葛亮课
  "./units/zhuge/index.html", "./units/zhuge/words.js",
  "./units/zhuge/1.html", "./units/zhuge/2.html", "./units/zhuge/3.html", "./units/zhuge/4.html",
  "./units/zhuge/5.html", "./units/zhuge/6.html", "./units/zhuge/7.html",
  "./units/zhuge/audio/dialogue-full.mp3", "./units/zhuge/audio/reading-narrative.mp3",
  "./units/zhuge/audio/beat1.mp3", "./units/zhuge/audio/beat2.mp3", "./units/zhuge/audio/beat3.mp3",
  "./units/zhuge/audio/beat4.mp3", "./units/zhuge/audio/beat5.mp3", "./units/zhuge/audio/beat6.mp3",
  "./units/zhuge/audio/beat7.mp3",
  "./units/zhuge/img/beat1.png", "./units/zhuge/img/beat2.png", "./units/zhuge/img/beat3.png",
  "./units/zhuge/img/beat4.png", "./units/zhuge/img/beat5.png", "./units/zhuge/img/beat6.png",
  "./units/zhuge/img/beat7.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.allSettled(CORE.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;                       // 成绩提交(POST)不拦，直连网络
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;             // 跨域(Supabase/CDN)不缓存，直连
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));       // 边用边缓存(以后新内容自动进缓存)
      return res;
    }).catch(() => hit))
  );
});
