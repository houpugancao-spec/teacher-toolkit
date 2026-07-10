/* ============================================================
   内容清单 —— 加新课 / 新单元，只改这个文件
   · grades：年级主轴（主页按这个分组+筛选），顺序即显示顺序
   · 每个 unit 有 grade（该单元默认年级）
   · 某一课要归到别的年级，可在该 lesson 上加 grade 覆盖
   · ready:false = 还没做好（主页显示"敬请期待"，不可点）
   ============================================================ */
window.CATALOG = {
  site: "VCE 中文",
  tagline: "",                       // 留空则主页只显示大标题
  grades: ["VCE准备", "Y11", "Y12"],  // 年级主轴顺序
  units: [
    {
      id: "kongzi",
      title: "《学而不厌》孔子",
      grade: "VCE准备",              // Y9 归到 VCE 准备
      topic: "人物·文化",
      lessons: [
        { id:"kongzi-1", n:1, title:"孔子是谁？", url:"units/kongzi/1.html",
          tags:["孔子","身高","长人","出身","自学","圣人","生词"], ready:true },
        { id:"kongzi-2", n:2, title:"六艺 & 会学习", url:"units/kongzi/2.html",
          tags:["六艺","学习方法","射御书数礼乐"], ready:false },
        { id:"kongzi-3", n:3, title:"有教无类 & 三人行", url:"units/kongzi/3.html",
          tags:["有教无类","老师","诚实","三人行"], ready:false },
        { id:"kongzi-4", n:4, title:"两小儿辩日 & 复习", url:"units/kongzi/4.html",
          tags:["两小儿辩日","知之为知之","复习"], ready:false },
      ]
    }
    // 以后的单元继续往这里加，记得写 grade（VCE准备 / Y11 / Y12）
  ]
};
