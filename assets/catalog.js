/* ============================================================
   内容清单 —— 加新课 / 新单元，只改这个文件
   ready:false = 还没做好（主页显示"敬请期待"，不可点）
   ============================================================ */
window.CATALOG = {
  site: "中文听力练习",          // 主页大标题（想改名字改这里）
  tagline: "VCE 中文 · 分主题真题与对话听力",
  units: [
    {
      id: "kongzi",
      title: "《学而不厌》孔子",
      level: "Y9",
      topic: "人物·文化",
      lessons: [
        { id:"kongzi-1", n:1, title:"孔子是谁？", url:"units/kongzi/1.html",
          tags:["孔子","身高","出身","生词"], ready:true },
        { id:"kongzi-2", n:2, title:"六艺 & 会学习", url:"units/kongzi/2.html",
          tags:["六艺","学习方法"], ready:false },
        { id:"kongzi-3", n:3, title:"有教无类 & 三人行", url:"units/kongzi/3.html",
          tags:["有教无类","老师","诚实"], ready:false },
        { id:"kongzi-4", n:4, title:"两小儿辩日 & 复习", url:"units/kongzi/4.html",
          tags:["两小儿辩日","知之为知之","复习"], ready:false },
      ]
    }
    // 以后的单元（旅游、传统文化…）继续往这里加
  ]
};
