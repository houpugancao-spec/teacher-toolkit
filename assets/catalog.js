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
          overview:"units/kongzi/index.html",      // 课文总览页（《学而不厌》全文朗读+划线词+分节）
          sections:[
            { id:"kongzi-1", n:1, title:"孔子是谁？", url:"units/kongzi/1.html",
              tags:["孔子","身高","长人","出身","自学","圣人","生词"], ready:true },
            { id:"kongzi-2", n:2, title:"六艺 & 独立思考", url:"units/kongzi/2.html",
              tags:["六艺","射箭","打仗","独立思考","射御书数礼乐"], ready:true },
            { id:"kongzi-3", n:3, title:"好学 & 有教无类", url:"units/kongzi/3.html",
              tags:["好学","有教无类","三人行","平等","反省","老师"], ready:true },
            { id:"kongzi-4", n:4, title:"两小儿辩日 & 真智慧", url:"units/kongzi/4.html",
              tags:["两小儿辩日","知之为知之","智慧","诚实","承认","复习"], ready:true },
            { id:"kongzi-5", n:5, title:"词汇练习", url:"units/kongzi/5.html",
              tags:["词汇","描写外貌","描写性格","近义词","反义词","四字词","选词填空"], ready:true },
            { id:"kongzi-6", n:6, title:"名言", url:"units/kongzi/6.html",
              tags:["名言","论语","学而不思则罔","三人行必有我师","知之为知之","学而不厌","接龙","造句"], ready:true },
            { id:"kongzi-7", n:7, title:"复述故事", url:"units/kongzi/7.html",
              tags:["复述","概述","两小儿辩日","起因经过结果","顺序词","口语","实事求是"], ready:true },
            { id:"kongzi-8", n:8, title:"介绍孔子", url:"units/kongzi/8.html",
              tags:["介绍人物","称呼","籍贯","身世","外貌","成就","性格","看法","介绍自己","口语"], ready:true }
          ]
        },
        {
          id:"zhuge", no:"第十课", title:"诸葛亮", topic:"人物·文化",
          overview:"units/zhuge/index.html",      // 课文总览页（全文朗读+分节导航）
          sections:[
            { id:"zhuge-1", n:1, title:"他是真人吗？开场", url:"units/zhuge/1.html",
              tags:["诸葛亮","三国","厉害","历史人物"], ready:true },
            { id:"zhuge-2", n:2, title:"卧龙出身", url:"units/zhuge/2.html",
              tags:["卧龙","刘备","才华","富贵","种田读书"], ready:true },
            { id:"zhuge-3", n:3, title:"三顾茅庐", url:"units/zhuge/3.html",
              tags:["三顾茅庐","诚意","尽心尽力","辅佐","老板"], ready:true },
            { id:"zhuge-4", n:4, title:"草船借箭（上）", url:"units/zhuge/4.html",
              tags:["草船借箭","不慌不忙","扎满","大雾","草人"], ready:true },
            { id:"zhuge-5", n:5, title:"草船借箭（下）", url:"units/zhuge/5.html",
              tags:["应战","拼命","虚实","靠近","十万支箭","轻轻松松"], ready:true },
            { id:"zhuge-6", n:6, title:"借箭成功 · 忠诚", url:"units/zhuge/6.html",
              tags:["家喻户晓","忠诚","操劳","忠心报国"], ready:true },
            { id:"zhuge-7", n:7, title:"智慧的象征", url:"units/zhuge/7.html",
              tags:["象征","尊敬","智慧","臭皮匠","三个臭皮匠","动脑筋"], ready:true },
            { id:"zhuge-8", n:8, title:"词汇练习", url:"units/zhuge/8.html",
              tags:["词汇","聪明才智","忠诚品格","足智多谋","近义词","反义词","成语","选词填空"], ready:true },
            { id:"zhuge-9", n:9, title:"名言", url:"units/zhuge/9.html",
              tags:["名言","诫子书","淡泊明志","宁静致远","鞠躬尽瘁","三个臭皮匠","接龙","造句"], ready:true },
            { id:"zhuge-10", n:10, title:"复述故事", url:"units/zhuge/10.html",
              tags:["复述","概述","草船借箭","起因经过结果","顺序词","口语","足智多谋"], ready:true },
            { id:"zhuge-11", n:11, title:"介绍诸葛亮", url:"units/zhuge/11.html",
              tags:["介绍人物","称呼","籍贯","身世","外貌","成就","性格","看法","介绍自己","口语"], ready:true }
          ]
        }
      ],
      practice:{ "口语":[
        { title:"介绍人物-孔子", url:"units/renwu-practice/index.html",
          tags:["人物介绍","外貌","孔子","孔子名言","排序","填空","口语"], ready:true,
          sections:[   // 有 sections 才有「上一节/下一节」
            { id:"renwu-practice-1", n:1, title:"词汇", url:"units/renwu-practice/1.html", ready:true },
            { id:"renwu-practice-2", n:2, title:"介绍孔子", url:"units/renwu-practice/2.html", ready:true },
            { id:"renwu-practice-3", n:3, title:"介绍一个名人／熟悉的人", url:"units/renwu-practice/3.html", ready:true }
          ] },
        { title:"介绍人物-诸葛亮", url:"units/renwu-zhuge-practice/index.html",
          tags:["人物介绍","诸葛亮","孔明","草船借箭","名言","排序","填空","口语"], ready:true,
          sections:[
            { id:"renwu-zhuge-practice-1", n:1, title:"词汇", url:"units/renwu-zhuge-practice/1.html", ready:true },
            { id:"renwu-zhuge-practice-2", n:2, title:"介绍诸葛亮", url:"units/renwu-zhuge-practice/2.html", ready:true },
            { id:"renwu-zhuge-practice-3", n:3, title:"介绍一个熟悉的人", url:"units/renwu-zhuge-practice/3.html", ready:true }
          ] },
        { title:"个人情况-介绍自己", url:"units/geren-ziwo/index.html",
          tags:["个人情况","介绍自己","自我介绍","性格","兴趣爱好","优点","缺点","理想","专业","职业",
                "句型","关联词","中西合璧","乐天派","开心果","SL","SLA","词卡","纠错","口语"], ready:true,
          sections:[
            { id:"geren-ziwo-1", n:1, title:"字词 · 基础 SL",  url:"units/geren-ziwo/1.html", ready:true },
            { id:"geren-ziwo-2", n:2, title:"句式 · 基础 SL",  url:"units/geren-ziwo/2.html", ready:true },
            { id:"geren-ziwo-3", n:3, title:"文章 · 基础 SL",  url:"units/geren-ziwo/3.html", ready:true },
            { id:"geren-ziwo-4", n:4, title:"字词 · 进阶 SLA", url:"units/geren-ziwo/4.html", ready:true },
            { id:"geren-ziwo-5", n:5, title:"句式 · 进阶 SLA", url:"units/geren-ziwo/5.html", ready:true },
            { id:"geren-ziwo-6", n:6, title:"文章 · 进阶 SLA", url:"units/geren-ziwo/6.html", ready:true },
            { id:"geren-ziwo-7", n:7, title:"综合练习 · 计分", url:"units/geren-ziwo/7.html", ready:true }
          ] },
        { title:"个人情况-介绍家庭", url:"units/geren-jiating/index.html",
          tags:["个人情况","介绍家庭","家庭","家人","家庭成员","职业","量词","语序","句型","关联词",
                "中西合璧","百善孝为先","家和万事兴","语气词","SL","SLA","词卡","纠错","跑题","口语"], ready:true,
          sections:[
            { id:"geren-jiating-1", n:1, title:"字词 · 基础 SL",  url:"units/geren-jiating/1.html", ready:true },
            { id:"geren-jiating-2", n:2, title:"句式 · 基础 SL",  url:"units/geren-jiating/2.html", ready:true },
            { id:"geren-jiating-3", n:3, title:"文章 · 基础 SL",  url:"units/geren-jiating/3.html", ready:true },
            { id:"geren-jiating-4", n:4, title:"字词 · 进阶 SLA", url:"units/geren-jiating/4.html", ready:true },
            { id:"geren-jiating-5", n:5, title:"句式 · 进阶 SLA", url:"units/geren-jiating/5.html", ready:true },
            { id:"geren-jiating-6", n:6, title:"文章 · 进阶 SLA", url:"units/geren-jiating/6.html", ready:true },
            { id:"geren-jiating-7", n:7, title:"综合练习 · 计分", url:"units/geren-jiating/7.html", ready:true }
          ] }
      ], "听力":[], "阅读":[], "作文":[], "综合":[] },
      homework:[], exam:[], other:[
        { title:"足部", url:"units/other/foot/index.html",
          tags:["足部","汉字","词卡","拼音","读音","例句"], ready:true },
        { title:"止部", url:"units/other/stop/index.html",
          tags:["止部","汉字","词卡","拼音","读音","例句"], ready:true }
      ]
    },
    {
      id:"y11", name:"Y11",
      lecture:[
        {
          id:"y11-demo", no:"样板", title:"访问锁样板课", topic:"测试用·可删",
          sections:[
            { id:"y11-1", n:1, title:"受保护内容测试（登录后可见）", url:"units/protected/index.html?id=y11-1",
              tags:["样板","登录","受保护","水印","测试"], ready:true }
          ]
        }
      ],
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
