/* ============================================================
   内容清单 —— 全站唯一数据源，加内容只改这里
   结构：年级 → 类别(授课/练习/作业/测验/其它) → 课/项 → 节
   · 授课 lecture[] ：每门课 {no,title,sections[]}，section 是一「节」
   · 练习 practice{} ：按技能分 口语/听力/阅读/作文/综合，各是数组
   · 作业 homework[] / 测验 exam[] / 其它 other[] ：项目数组
   · ready:false = 还没做好（显示"敬请期待"，不可点）
   ============================================================ */
window.CATALOG = {
  site: "VCE 中文",
  categories: [   // 固定五类，顺序即显示顺序
    { id:"lecture",  name:"授课" },
    { id:"practice", name:"练习" },
    { id:"homework", name:"作业" },
    { id:"exam",     name:"测验" },
    { id:"other",    name:"其它" }
  ],
  practiceSkills: ["口语","听力","阅读","作文","综合"],
  grades: [
    {
      id:"prep", name:"VCE准备",
      lecture:[
        {
          id:"kongzi", no:"第九课", title:"孔子", topic:"人物·文化",
          sections:[
            { id:"kongzi-1", n:1, title:"孔子是谁？", url:"units/kongzi/1.html",
              tags:["孔子","身高","长人","出身","自学","圣人","生词"], ready:true },
            { id:"kongzi-2", n:2, title:"六艺 & 独立思考", url:"units/kongzi/2.html",
              tags:["六艺","射箭","打仗","独立思考","射御书数礼乐"], ready:true },
            { id:"kongzi-3", n:3, title:"好学 & 有教无类", url:"units/kongzi/3.html",
              tags:["好学","有教无类","三人行","平等","反省","老师"], ready:true },
            { id:"kongzi-4", n:4, title:"两小儿辩日 & 真智慧", url:"units/kongzi/4.html",
              tags:["两小儿辩日","知之为知之","智慧","诚实","承认","复习"], ready:true }
          ]
        }
      ],
      practice:{ "口语":[], "听力":[], "阅读":[], "作文":[], "综合":[] },
      homework:[], exam:[], other:[]
    },
    {
      id:"y11", name:"Y11",
      lecture:[],
      practice:{ "口语":[], "听力":[], "阅读":[], "作文":[], "综合":[] },
      homework:[], exam:[], other:[]
    },
    {
      id:"y12", name:"Y12",
      lecture:[],
      practice:{ "口语":[], "听力":[], "阅读":[], "作文":[], "综合":[] },
      homework:[], exam:[], other:[]
    }
  ]
};
