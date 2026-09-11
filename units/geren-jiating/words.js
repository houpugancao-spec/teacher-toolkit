/* ============================================================
   Unit 1 个人情况 ·（四）介绍家庭 — 重点词词库（划线词弹卡数据源）
   每条：拼音 py / 中文释义 zh / 英文 en /（可选）读音 audio
   · 课文里凡出现这些词，引擎自动加下划线、可点弹卡
   · manual:true = 不自动划线，只给词卡用（词表里有、课文里没有的词）
   · audio 指向 audio/words/<词>.mp3；缺文件时弹卡不播放、不报错
   · 来源：口语-介绍自己 课件 PDF P40-44（Q4.请你介绍你的家庭）
   · 审稿母版：备课台 04_Output/VCE准备/课件/介绍家庭/介绍家庭_课文与词表_待审核.md
   ============================================================ */
window.WORDS = {

  /* ========== 一、SL 课文一出现的词（自动划线） ========== */

  // — 家庭成员 —
  "家庭":     { py:"jiātíng",          zh:"一家人组成的整体",          en:"family (as a unit)" },
  "四口人":   { py:"sì kǒu rén",       zh:"家里一共四个人",            en:"four people (in a family)",
              note:'数家里的人，量词用 <b>口</b>：一共四口人。<br><small>Use the measure word <b>口</b> to count family members &mdash; not 个.</small>' },

  // — 工作与学业 —
  "一名":     { py:"yì míng",          zh:"量词，说职业、身份",         en:"measure word for people (by profession)",
              note:'⚠️「一」在第二声前读 <b>yì</b>：yì míng。<br><small>一 is read <b>yì</b> before a 2nd-tone syllable.</small>' },
  "一位":     { py:"yí wèi",           zh:"量词，带尊敬的语气",         en:"polite measure word for people",
              note:'⚠️「一」在第四声前读 <b>yí</b>：yí wèi。说老师、长辈用「位」更有礼貌。<br><small>一 is read <b>yí</b> before a 4th tone. 位 is more respectful than 个.</small>' },
  "工程师":   { py:"gōngchéngshī",     zh:"设计、建造东西的专业人员",    en:"engineer" },
  "抽出时间": { py:"chōuchū shíjiān",  zh:"很忙的时候也留出时间",       en:"to make time (for sth.)" },
  "十二年级": { py:"shí'èr niánjí",    zh:"高中最后一年",              en:"Year 12" },
  "紧张":     { py:"jǐnzhāng",         zh:"（学习）功课多、时间紧",      en:"intense; busy (of studies)",
              note:'⚠️ 这里<b>不是</b> nervous。「学习很紧张」= 功课多、压力大。<br><small>Here it does <b>not</b> mean nervous &mdash; it means studies are intense and busy.</small>' },

  // — 家人与互动 —
  "关心":     { py:"guānxīn",          zh:"放在心上、照顾",            en:"to care about" },
  "性格不一样":{ py:"xìnggé bù yíyàng", zh:"两个人脾气不同",            en:"to have different personalities" },
  "相同的爱好":{ py:"xiāngtóng de àihào",zh:"一样的兴趣",              en:"shared interests",
              note:'⚠️ <b>爱好</b>读 <b>àihào</b>（不读 ài hǎo）。<br><small>好 is read <b>hào</b> here = to be fond of.</small>' },
  "陪伴":     { py:"péibàn",           zh:"在身边陪着",                en:"to keep sb. company" },
  "每逢":     { py:"měiféng",          zh:"每次到了……的时候",           en:"whenever; every time (a day comes)" },
  "节假日":   { py:"jiéjiàrì",         zh:"过节和放假的日子",           en:"public holidays" },
  "郊外":     { py:"jiāowài",          zh:"城市外面的地方",            en:"the countryside (outside the city)" },
  "旅游":     { py:"lǚyóu",            zh:"去别的地方玩",              en:"to travel" },
  "享受":     { py:"xiǎngshòu",        zh:"感到快乐、满足",            en:"to enjoy" },
  "幸福时光": { py:"xìngfú shíguāng",  zh:"快乐美好的日子",            en:"happy times" },
  "忙忙碌碌": { py:"mángmáng lùlù",    zh:"一直很忙",                  en:"always busy",
              note:'⚠️ <b>碌</b>读 <b>lù</b>（不读 lǜ）。<br><small>碌 is read <b>lù</b>.</small>' },

  // — 对家的感受 —
  "温暖":     { py:"wēnnuǎn",          zh:"让人心里暖和",              en:"warm" },
  "幸福":     { py:"xìngfú",           zh:"生活美满、快乐",            en:"happy; blessed" },
  "港湾":     { py:"gǎngwān",          zh:"船停靠的地方（比喻安全的地方）", en:"harbour; (fig.) a safe haven",
              note:'「家就像一个温暖的港湾」是<b>比喻</b>：船在港湾里不怕风浪，人回到家就安心。<br><small>A metaphor: a ship is safe from storms in a harbour, just as we feel safe at home.</small>' },
  "风雨":     { py:"fēngyǔ",           zh:"风和雨（比喻困难）",         en:"wind and rain; (fig.) hardships" },
  "安心":     { py:"ānxīn",            zh:"心里踏实、不担心",           en:"at ease; reassured" },
  "珍惜":     { py:"zhēnxī",           zh:"很看重，不浪费",            en:"to cherish" },
  "家人":     { py:"jiārén",           zh:"家里的人",                  en:"family members" },


  /* ========== 二、SLA 课文二、课文三出现的词（自动划线） ========== */

  // — 家庭背景与氛围 —
  "家庭背景": { py:"jiātíng bèijǐng",  zh:"家庭的情况和来历",           en:"family background" },
  "典型":     { py:"diǎnxíng",         zh:"最有代表性的",              en:"typical" },
  "华裔家庭": { py:"huáyì jiātíng",    zh:"有中国血统的海外家庭",       en:"a family of Chinese descent" },
  "氛围":     { py:"fēnwéi",           zh:"周围的气氛",                en:"atmosphere",
              note:'⚠️ <b>氛</b>读 <b>fēn</b>（第一声，不读 fèn）。<br><small>氛 is read <b>fēn</b> (1st tone).</small>' },
  "中西合璧": { py:"zhōngxī hébì",     zh:"中国和西方的优点结合在一起",  en:"a blend of Chinese and Western" },
  "并存":     { py:"bìngcún",          zh:"同时存在",                  en:"to coexist" },
  "民主":     { py:"mínzhǔ",           zh:"大家平等、一起商量",         en:"democratic" },
  "包容":     { py:"bāoróng",          zh:"能接受不同的想法",           en:"tolerant; accepting" },

  // — 价值观 —
  "传统价值观":{ py:"chuántǒng jiàzhíguān", zh:"传下来的做人原则",      en:"traditional values" },
  "现代思维": { py:"xiàndài sīwéi",    zh:"现在的新想法",              en:"modern thinking" },
  "讲究":     { py:"jiǎngjiu",         zh:"很重视、很在意",            en:"to value; to set great store by" },
  "百善孝为先":{ py:"bǎi shàn xiào wéi xiān", zh:"所有好品德里，孝顺父母排第一", en:"filial piety comes first among all virtues",
              note:'⚠️ <b>为</b>读 <b>wéi</b>（= 是、作为），不读 wèi。<br><small>为 is read <b>wéi</b> here (= to be).</small>' },
  "孝道":     { py:"xiàodào",          zh:"孝顺父母的道理",            en:"filial piety" },
  "盲目顺从": { py:"mángmù shùncóng",  zh:"不想就听话",                en:"blind obedience" },
  "独立思考": { py:"dúlì sīkǎo",       zh:"自己动脑想问题",            en:"to think independently" },
  "平等的交流":{ py:"píngděng de jiāoliú", zh:"大家地位一样地说话",      en:"communication as equals" },
  "看重":     { py:"kànzhòng",         zh:"认为很重要",                en:"to value highly" },
  "见解":     { py:"jiànjiě",          zh:"自己的看法",                en:"view; opinion" },
  "凡事":     { py:"fánshì",           zh:"所有的事",                  en:"in everything" },
  "沟通":     { py:"gōutōng",          zh:"互相说明想法",              en:"to communicate" },

  // — 家庭生活（高级） —
  "动静结合": { py:"dòngjìng jiéhé",   zh:"又有运动的，又有安静的",     en:"a balance of active and quiet" },
  "注重":     { py:"zhùzhòng",         zh:"特别重视",                  en:"to place emphasis on" },
  "切磋球技": { py:"qiēcuō qiújì",     zh:"一起打球、互相提高",         en:"to play and sharpen skills together",
              note:'⚠️ <b>切</b>读 <b>qiē</b>（不读 qiè）。<br><small>切 is read <b>qiē</b> here.</small>' },
  "天南地北": { py:"tiānnán dìběi",    zh:"什么话题都聊",              en:"about anything and everything" },
  "围坐":     { py:"wéizuò",           zh:"围成一圈坐着",              en:"to sit around (together)" },
  "感悟":     { py:"gǎnwù",            zh:"从经历中得到的体会",         en:"reflections; insights" },

  // — 俗语与收尾 —
  "家和万事兴":{ py:"jiā hé wànshì xīng", zh:"家里和睦，什么事都顺利",   en:"a harmonious family prospers in everything",
              note:'⚠️ <b>和</b>读 <b>hé</b>；<b>兴</b>读 <b>xīng</b>（兴旺），不读 xìng（兴趣）。<br><small>兴 is read <b>xīng</b> here (= to prosper), not xìng as in 兴趣.</small>' },
  "老话说":   { py:"lǎohuà shuō",      zh:"老人们常说",                en:"as the old saying goes" },
  "家人的支持":{ py:"jiārén de zhīchí", zh:"家里人的帮助和鼓励",         en:"the support of one's family" },
  "迎接":     { py:"yíngjiē",          zh:"准备好去面对",              en:"to meet; to face (a challenge)" },
  "高考":     { py:"gāokǎo",           zh:"中国的大学入学考试（这里借指 VCE 这样的升学大考）",
              en:"university entrance exam (here: the big final exams, like VCE)" },

  // — 口语语气词 —
  "其实吧":   { py:"qíshí ba",         zh:"口语开头，引出真实想法",      en:"“Well, actually…”",
              note:'⚠️ 一篇稿子用 2–3 个语气词就够，用多了反而像在装。<br><small>2–3 fillers per script is plenty &mdash; overuse sounds fake.</small>' },
  "怎么说呢": { py:"zěnme shuō ne",    zh:"边想边说，让语气自然",        en:"“How should I put it…”",
              note:'⚠️ 一篇稿子用 2–3 个语气词就够，用多了反而像在装。<br><small>2–3 fillers per script is plenty &mdash; overuse sounds fake.</small>' },
  "说白了":   { py:"shuōbái le",       zh:"简单直接地说",              en:"“To put it simply…”",
              note:'⚠️ 一篇稿子用 2–3 个语气词就够，用多了反而像在装。<br><small>2–3 fillers per script is plenty &mdash; overuse sounds fake.</small>' },
  "挺有意思的":{ py:"tǐng yǒu yìsi de", zh:"很有趣（口语）",             en:"pretty interesting",
              note:'⚠️ 一篇稿子用 2–3 个语气词就够，用多了反而像在装。<br><small>2–3 fillers per script is plenty &mdash; overuse sounds fake.</small>' },
  "嘛":       { py:"ma",               zh:"句尾语气词，表示“道理很明显”", en:"sentence-final particle: “…you know”",
              note:'⚠️ 一篇稿子用 2–3 个语气词就够，用多了反而像在装。<br><small>2–3 fillers per script is plenty &mdash; overuse sounds fake.</small>' },


  /* ========== 三、词表补充词（manual：不自动划线，只做词卡） ========== */

  // — 家庭成员 —
  "四口之家": { py:"sì kǒu zhī jiā",   zh:"四个人的家庭",              en:"a family of four", manual:true },
  "家庭成员": { py:"jiātíng chéngyuán",zh:"家里的每一个人",            en:"family members", manual:true },
  "父母":     { py:"fùmǔ",             zh:"爸爸和妈妈",                en:"parents", manual:true },
  "兄弟姐妹": { py:"xiōngdì jiěmèi",   zh:"哥哥、弟弟、姐姐、妹妹",     en:"siblings", manual:true },
  "独生子女": { py:"dúshēng zǐnǚ",     zh:"家里只有一个孩子",           en:"only child", manual:true },
  "爷爷奶奶": { py:"yéye nǎinai",      zh:"爸爸的父母",                en:"(paternal) grandparents", manual:true },
  "外公外婆": { py:"wàigōng wàipó",    zh:"妈妈的父母",                en:"(maternal) grandparents", manual:true },
  "亲戚":     { py:"qīnqi",            zh:"家族里的其他人",            en:"relatives", manual:true },
  "宠物":     { py:"chǒngwù",          zh:"家里养的小动物",            en:"pet", manual:true },
  "一只猫":   { py:"yì zhī māo",       zh:"猫的量词用「只」",           en:"a cat (measure word 只)", manual:true,
              note:'⚠️ 不说「一个猫」。<b>只</b>在这里读 <b>zhī</b>（不读 zhǐ）。<br><small>Not 一个猫. 只 is read <b>zhī</b> as a measure word.</small>' },

  // — 工作与学业 —
  "医生":     { py:"yīshēng",          zh:"给人看病的人",              en:"doctor", manual:true },
  "护士":     { py:"hùshi",            zh:"照顾病人的人",              en:"nurse", manual:true },
  "会计":     { py:"kuàijì",           zh:"管账目的人",                en:"accountant", manual:true,
              note:'⚠️ <b>会</b>在这里读 <b>kuài</b>（不读 huì）。<br><small>会 is read <b>kuài</b> in 会计.</small>' },
  "公司职员": { py:"gōngsī zhíyuán",   zh:"在公司上班的人",            en:"office worker", manual:true },
  "做生意":   { py:"zuò shēngyi",      zh:"买卖东西、开店",            en:"to run a business", manual:true },
  "上班":     { py:"shàngbān",         zh:"去工作",                    en:"to go to work", manual:true },
  "加班":     { py:"jiābān",           zh:"下班以后继续工作",           en:"to work overtime", manual:true },
  "退休":     { py:"tuìxiū",           zh:"年纪大了不再工作",           en:"to retire", manual:true },

  // — 家人的性格 —
  "温柔":     { py:"wēnróu",           zh:"说话做事很柔和",            en:"gentle; soft-spoken", manual:true },
  "严格":     { py:"yángé",            zh:"要求很高",                  en:"strict", manual:true },
  "慈祥":     { py:"cíxiáng",          zh:"（老人）和善、亲切",         en:"kind; benevolent (of elders)", manual:true },
  "唠叨":     { py:"láodao",           zh:"一件事说很多遍",            en:"to nag", manual:true },
  "幽默":     { py:"yōumò",            zh:"说话有趣",                  en:"humorous", manual:true },
  "很会做菜": { py:"hěn huì zuò cài",  zh:"做饭做得好",                en:"to be a good cook", manual:true },

  // — 一起做的事 —
  "聊天":     { py:"liáotiān",         zh:"随便说说话",                en:"to chat", manual:true },
  "做家务":   { py:"zuò jiāwù",        zh:"打扫、洗碗等家里的事",       en:"to do housework", manual:true },
  "聚餐":     { py:"jùcān",            zh:"很多人一起吃饭",            en:"to have a meal together", manual:true },
  "过节":     { py:"guòjié",           zh:"庆祝节日",                  en:"to celebrate a festival", manual:true },

  // — 对家的感受 —
  "感恩":     { py:"gǎn'ēn",           zh:"记着别人的好",              en:"to be grateful", manual:true },
  "支持":     { py:"zhīchí",           zh:"帮助、鼓励",                en:"to support", manual:true },
  "亲密":     { py:"qīnmì",            zh:"关系很近、很好",            en:"close; intimate", manual:true },

  // — SLA 补充 —
  "孝顺":     { py:"xiàoshùn",         zh:"尊敬、照顾父母",            en:"to be devoted to one's parents", manual:true },
  "代沟":     { py:"dàigōu",           zh:"两代人之间想法的差距",       en:"generation gap", manual:true },
  "和睦":     { py:"hémù",             zh:"相处得很好、不吵架",         en:"harmonious", manual:true,
              note:'⚠️ <b>和</b>读 <b>hé</b>。<br><small>和 is read <b>hé</b>.</small>' },


  /* ========== 四、教学用语（manual：说明文字里划线用，学生看不懂的“老师的话”） ========== */

  "跑题":     { py:"pǎotí",        zh:"没有回答问题本身",      en:"to go off topic", manual:true },
  "整体":     { py:"zhěngtǐ",      zh:"全部合在一起",          en:"the whole; as a whole", manual:true },
  "语序":     { py:"yǔxù",         zh:"词在句子里的先后顺序",   en:"word order", manual:true },
  "量词":     { py:"liàngcí",      zh:"数东西用的词，如个、只、口", en:"measure word (classifier)", manual:true },
  "称呼":     { py:"chēnghu",      zh:"叫人用的名称，如爸爸、奶奶", en:"form of address (e.g. Mum, Grandma)", manual:true },
  "互动":     { py:"hùdòng",       zh:"一起做事、互相交流",     en:"interaction; doing things together", manual:true },
  "氛围感":   { py:"fēnwéigǎn",    zh:"让人感觉到的气氛",       en:"a sense of atmosphere", manual:true },
  "价值观":   { py:"jiàzhíguān",   zh:"觉得什么重要、什么对",   en:"values", manual:true },
  "个人见解": { py:"gèrén jiànjiě",zh:"自己独到的想法",         en:"personal insight", manual:true },
  "语气词":   { py:"yǔqìcí",       zh:"表示说话语气的词，如吧、呢、嘛", en:"modal particle; spoken filler", manual:true },
  "背诵腔":   { py:"bèisòngqiāng", zh:"像在背书一样的说话腔调", en:"sounding memorised; a recited tone", manual:true },
  "关联词":   { py:"guānliáncí",   zh:"连接句子的词，如虽然、不仅", en:"connective; linking word", manual:true },
  "句型":     { py:"jùxíng",       zh:"句子的固定格式",         en:"sentence pattern", manual:true },
  "仿写":     { py:"fǎngxiě",      zh:"照着例句写一个自己的",    en:"to imitate a model sentence and write your own", manual:true },
  "中式中文": { py:"zhōngshì zhōngwén",zh:"用英文思路说出来的中文", en:"Chinglish", manual:true },
  "比喻":     { py:"bǐyù",         zh:"用熟悉的东西说明另一样东西", en:"metaphor; simile", manual:true },
  "结构":     { py:"jiégòu",       zh:"文章是怎么搭起来的",     en:"structure", manual:true },
  "具体":     { py:"jùtǐ",         zh:"说得清楚、有细节",       en:"specific; concrete", manual:true },
  "考官":     { py:"kǎoguān",      zh:"考试的老师",            en:"the examiner", manual:true },
  "升级":     { py:"shēngjí",      zh:"换成更高级的说法",       en:"to upgrade (to a higher-level expression)", manual:true },
  "成语":     { py:"chéngyǔ",      zh:"四个字的固定说法",       en:"a Chinese idiom (usually 4 characters)", manual:true },
  "俗语":     { py:"súyǔ",         zh:"老百姓常说的话",         en:"a common saying; proverb", manual:true },
  "堆砌":     { py:"duīqì",        zh:"生硬地塞进很多词",       en:"to pile up words unnaturally", manual:true },
  "自然":     { py:"zìrán",        zh:"不生硬，像平常说话",     en:"natural; not forced", manual:true },
  "评分标准": { py:"píngfēn biāozhǔn",zh:"打分的依据",         en:"marking criteria", manual:true },
  "词汇广度": { py:"cíhuì guǎngdù",zh:"会用的词多不多",        en:"range of vocabulary (a VCAA marking criterion)", manual:true },
  "画面感":   { py:"huàmiàngǎn",   zh:"让人能想象出画面",       en:"vividness; a sense of imagery", manual:true },
  "情境":     { py:"qíngjìng",     zh:"说话的场合",            en:"situation; context", manual:true },
  "流水账":   { py:"liúshuǐzhàng", zh:"一件件平铺直叙，没有重点", en:"a dull running account; listing without focus", manual:true },
  "自查":     { py:"zìchá",        zh:"自己检查一遍",          en:"to check your own work", manual:true }
};

/* 每条补一个 audio 路径（读音文件生成后自动可用） */
Object.keys(window.WORDS).forEach(function(w){ window.WORDS[w].audio = "audio/words/"+w+".mp3"; });
