/* ============================================================
   Unit 1 个人情况 ·（一）介绍自己 — 重点词词库（划线词弹卡数据源）
   每条：拼音 py / 中文释义 zh / 英文 en /（可选）读音 audio
   · 课文里凡出现这些词，引擎自动加下划线、可点弹卡
   · manual:true = 不自动划线，只给词卡用（词表里有、课文里没有的词）
   · audio 指向 audio/words/<词>.mp3；缺文件时弹卡不播放、不报错
   · 来源：T3 wk7-9 课堂练习 + 口语-介绍自己 课件 PDF
   ============================================================ */
window.WORDS = {

  /* ========== 一、SL 课文 Text 1 出现的词（自动划线） ========== */

  // — 基本信息 —
  "墨尔本":   { py:"Mò'ěrběn",       zh:"澳大利亚的城市",            en:"Melbourne" },
  "中学":     { py:"zhōngxué",        zh:"中学（高中/初中）",          en:"secondary school" },
  "出生":     { py:"chūshēng",        zh:"生下来；诞生",              en:"to be born" },
  "随父母":   { py:"suí fùmǔ",        zh:"跟着父母",                  en:"together with one's parents" },
  "华裔":     { py:"huáyì",           zh:"有中国血统的外国人",         en:"person of Chinese descent" },
  "澳大利亚": { py:"Àodàlìyà",        zh:"澳洲",                      en:"Australia" },

  // — 性格 —
  "熟悉":     { py:"shúxī",           zh:"很了解、很常见面",           en:"to know well; familiar" },
  "性格":     { py:"xìnggé",          zh:"一个人的脾气和为人",         en:"personality; character" },
  "开朗":     { py:"kāilǎng",         zh:"性格好、爱说爱笑",           en:"cheerful; outgoing" },
  "幽默":     { py:"yōumò",           zh:"说话有趣、让人发笑",         en:"humorous" },
  "哈哈大笑": { py:"hāhā dàxiào",     zh:"大声地笑",                  en:"to laugh out loud" },

  // — 兴趣爱好 —
  "兴趣爱好": { py:"xìngqù àihào",    zh:"喜欢做的事",                en:"interests and hobbies",
              note:'⚠️ <b>爱好</b>读 <b>àihào</b>（不读 ài hǎo）。<br><small>The character 好 is read <b>hào</b> here = to be fond of.</small>' },
  "体育迷":   { py:"tǐyùmí",          zh:"非常喜欢体育的人",           en:"a sports fan" },
  "尤其":     { py:"yóuqí",           zh:"特别是",                    en:"especially" },
  "热爱":     { py:"rè'ài",           zh:"非常喜欢",                  en:"to love (an activity)" },
  "体育馆":   { py:"tǐyùguǎn",        zh:"运动的场馆",                en:"sports centre; gymnasium" },
  "锻炼身体": { py:"duànliàn shēntǐ", zh:"运动让身体更好",             en:"to exercise; to work out" },
  "放松心情": { py:"fàngsōng xīnqíng",zh:"让心里轻松下来",             en:"to relax; to unwind" },
  "感兴趣":   { py:"gǎn xìngqù",      zh:"对某事有兴趣",              en:"to be interested in" },
  "弹吉他":   { py:"tán jítā",        zh:"演奏吉他",                  en:"to play the guitar" },
  "尝试":     { py:"chángshì",        zh:"试着做",                    en:"to try; to attempt" },

  // — 缺点 —
  "人无完人": { py:"rén wú wán rén",  zh:"没有人是完美的",             en:"nobody is perfect" },
  "弱点":     { py:"ruòdiǎn",         zh:"不够好的地方",              en:"weakness" },
  "马虎":     { py:"mǎhu",            zh:"做事不细心",                en:"careless; sloppy" },
  "自律":     { py:"zìlǜ",            zh:"能管住自己",                en:"self-discipline" },
  "冲动":     { py:"chōngdòng",       zh:"没想清楚就做",              en:"impulsive" },
  "改正":     { py:"gǎizhèng",        zh:"把错的改过来",              en:"to correct; to amend" },
  "缺点":     { py:"quēdiǎn",         zh:"不好的地方",                en:"shortcoming; flaw" },

  // — 理想 —
  "理想":     { py:"lǐxiǎng",         zh:"希望达到的目标",            en:"aspiration; ideal" },
  "考上":     { py:"kǎoshàng",        zh:"考试通过被录取",            en:"to pass the exam and get in" },
  "人工智能": { py:"réngōng zhìnéng", zh:"AI",                        en:"artificial intelligence (AI)" },
  "专业":     { py:"zhuānyè",         zh:"大学学的科目方向",           en:"(university) major" },
  "科技":     { py:"kējì",            zh:"科学技术",                  en:"technology" },
  "阳光自信": { py:"yángguāng zìxìn", zh:"开朗又有自信",              en:"sunny and self-confident" },


  /* ========== 二、SLA 课文 Text 2 出现的词（自动划线） ========== */

  // — 身份认同 —
  "移民":     { py:"yímín",           zh:"搬到别的国家住",            en:"to immigrate; immigrant" },
  "独特":     { py:"dútè",            zh:"与众不同",                  en:"unique; distinctive" },
  "成长经历": { py:"chéngzhǎng jīnglì",zh:"长大过程中的经历",          en:"one's upbringing",
              note:'⚠️ <b>成长</b>读 <b>chéngzhǎng</b>（长 = zhǎng, to grow）；<br>对比本课的 <b>擅长 shàncháng</b>（长 = cháng, good at）。' },
  "典型":     { py:"diǎnxíng",        zh:"最有代表性的",              en:"typical; representative" },
  "中西合璧": { py:"zhōngxī hébì",    zh:"中国和西方的优点结合在一起",  en:"a blend of Chinese and Western" },
  "熏陶":     { py:"xūntáo",          zh:"长期影响，慢慢养成",         en:"to nurture; to influence gradually" },
  "传统文化": { py:"chuántǒng wénhuà",zh:"祖祖辈辈传下来的文化",       en:"traditional culture" },
  "随和":     { py:"suíhé",           zh:"好相处、不计较",            en:"easygoing; agreeable" },
  "特质":     { py:"tèzhì",           zh:"特有的品质",                en:"trait; characteristic" },

  // — 性格（高级） —
  "乐观豁达": { py:"lèguān huòdá",    zh:"心态好、想得开",            en:"optimistic and open-minded" },
  "乐天派":   { py:"lètiānpài",       zh:"总是乐观的人",              en:"an optimist" },
  "未见其人，先闻其声": { py:"wèi jiàn qí rén, xiān wén qí shēng",
              zh:"人还没到，声音先到（形容热闹爱说话）", en:"you hear them before you see them" },
  "幽默风趣": { py:"yōumò fēngqù",    zh:"又幽默又有意思",            en:"humorous and witty" },
  "开心果":   { py:"kāixīnguǒ",       zh:"给大家带来快乐的人",         en:"the &ldquo;fun one&rdquo;; a cheerful person",
              note:'字面是“开心果 pistachio”，<b>比喻</b>能逗大家开心的人。<br><small>Literally a pistachio &mdash; figuratively, the one who makes everyone laugh.</small>' },

  // — 缺点（高级） —
  "俗话说":   { py:"súhuà shuō",      zh:"老百姓常说",                en:"as the saying goes" },
  "金无足赤，人无完人": { py:"jīn wú zú chì, rén wú wán rén",
              zh:"没有纯金，也没有完美的人", en:"no gold is pure; no one is perfect" },
  "短处":     { py:"duǎnchù",         zh:"缺点、不足",                en:"weakness; shortcoming" },
  "粗心大意": { py:"cūxīn dàyì",      zh:"很不细心",                  en:"careless; inattentive" },
  "耐心":     { py:"nàixīn",          zh:"能慢慢等、不着急",           en:"patience" },
  "缺乏":     { py:"quēfá",           zh:"不够、没有",                en:"to lack" },
  "偶尔":     { py:"ǒu'ěr",           zh:"有时候",                    en:"occasionally" },
  "干扰":     { py:"gānrǎo",          zh:"打扰、影响",                en:"to interfere; distraction" },
  "克服":     { py:"kèfú",            zh:"战胜困难",                  en:"to overcome" },

  // — 兴趣（高级） —
  "动静结合": { py:"dòngjìng jiéhé",  zh:"又有运动又有安静的爱好",     en:"a balance of activity and calm" },
  "不折不扣": { py:"bùzhé bùkòu",     zh:"完完全全、地地道道",         en:"out-and-out; genuine" },
  "酷爱":     { py:"kù'ài",           zh:"非常热爱",                  en:"to love passionately" },
  "每逢":     { py:"měiféng",         zh:"每次到了……的时候",           en:"whenever; every time" },
  "三五好友": { py:"sānwǔ hǎoyǒu",    zh:"几个好朋友",                en:"a few close friends" },
  "切磋":     { py:"qiēcuō",          zh:"互相练习、互相学习",         en:"to practise together; to compare notes",
              note:'⚠️ 读 <b>qiē cuō</b>（不读 qiè）。原指打磨玉石，引申为<b>互相研究、共同提高</b>。<br><small>Note the reading: <b>qiē</b>, not qiè.</small>' },
  "球技":     { py:"qiújì",           zh:"打球的技术",                en:"ball skills" },
  "强健":     { py:"qiángjiàn",       zh:"使身体变强壮",              en:"to strengthen (the body)" },
  "体魄":     { py:"tǐpò",            zh:"身体和精力",                en:"physique; build" },
  "之余":     { py:"zhīyú",           zh:"……以外的时间",              en:"in one's spare time from…" },
  "挥洒汗水": { py:"huīsǎ hànshuǐ",   zh:"流很多汗地努力",            en:"to sweat it out" },
  "沉浸":     { py:"chénjìn",         zh:"完全投入进去",              en:"to immerse oneself" },
  "擅长":     { py:"shàncháng",       zh:"特别会做某件事",            en:"to be good at",
              note:'⚠️ <b>擅长</b>读 <b>shàn cháng</b>（长 = cháng）；<br>对比 <b>成长 chéngzhǎng</b>（长 = zhǎng）。' },
  "兴致":     { py:"xìngzhì",         zh:"做事的兴头、情绪",           en:"interest; enthusiasm" },
  "创作":     { py:"chuàngzuò",       zh:"自己写、自己作",            en:"to create (music, writing)" },
  "陶冶情操": { py:"táoyě qíngcāo",   zh:"让人品味和心境变好",         en:"to cultivate one's character" },

  // — 理想（高级） —
  "立志":     { py:"lìzhì",           zh:"下决心要做到",              en:"to be determined to" },
  "顶尖":     { py:"dǐngjiān",        zh:"最好的那一批",              en:"top-level; elite" },
  "攻读":     { py:"gōngdú",          zh:"专门学习（某专业）",         en:"to major in; to study for a degree" },
  "深信":     { py:"shēnxìn",         zh:"非常相信",                  en:"to firmly believe" },
  "让梦想照进现实": { py:"ràng mèngxiǎng zhàojìn xiànshí",
              zh:"把梦想变成真的",     en:"to turn dreams into reality" },
  "完善自我": { py:"wánshàn zìwǒ",    zh:"不断让自己变得更好",         en:"self-improvement" },
  "取长补短": { py:"qǔcháng bǔduǎn",  zh:"学别人的长处，补自己的短处",  en:"learn from each other's strengths" },
  "携手共进": { py:"xiéshǒu gòngjìn", zh:"手拉手一起进步",            en:"to move forward hand in hand" },


  /* ========== 三、词表补充词（manual：不自动划线，只做词卡） ========== */

  // — 性格词汇 Personality —
  "活泼":     { py:"huópō",     zh:"有活力、爱动",        en:"lively", manual:true },
  "内向":     { py:"nèixiàng",  zh:"不爱说话、喜欢独处",   en:"introverted", manual:true },
  "外向":     { py:"wàixiàng",  zh:"爱说话、爱交朋友",     en:"extroverted", manual:true },
  "安静":     { py:"ānjìng",    zh:"不吵闹",              en:"quiet", manual:true },
  "勇敢":     { py:"yǒnggǎn",   zh:"不怕困难",            en:"brave", manual:true },
  "胆小":     { py:"dǎnxiǎo",   zh:"容易害怕",            en:"timid", manual:true },
  "忧郁":     { py:"yōuyù",     zh:"心情低、不开朗",       en:"moody; melancholy", manual:true },
  "严厉":     { py:"yánlì",     zh:"要求很高、不客气",     en:"strict; stern", manual:true },
  "情绪化":   { py:"qíngxùhuà", zh:"心情变化大",          en:"emotional", manual:true },
  "冷静":     { py:"lěngjìng",  zh:"遇事不慌",            en:"calm", manual:true },
  "乐于助人": { py:"lèyú zhùrén",zh:"喜欢帮别人",         en:"helpful; ready to help", manual:true },
  "谨慎":     { py:"jǐnshèn",   zh:"做事很小心",          en:"cautious", manual:true },
  "大大咧咧": { py:"dàdà liēliē",zh:"不拘小节、马大哈",    en:"carefree; happy-go-lucky", manual:true },
  "善于交往": { py:"shànyú jiāowǎng",zh:"很会跟人相处",   en:"sociable; good with people", manual:true },
  "性格孤僻": { py:"xìnggé gūpì",zh:"不合群、爱独来独往",  en:"reclusive; anti-social", manual:true },

  // — 优点 Strengths —
  "自信":     { py:"zìxìn",     zh:"相信自己",            en:"confident", manual:true },
  "独立":     { py:"dúlì",      zh:"自己的事自己做",       en:"independent", manual:true },
  "自觉":     { py:"zìjué",     zh:"不用人催就去做",       en:"self-motivated", manual:true },
  "有毅力":   { py:"yǒu yìlì",  zh:"能坚持不放弃",         en:"perseverant", manual:true },
  "有条理":   { py:"yǒu tiáolǐ",zh:"做事有次序",          en:"well-organised", manual:true },
  "主动":     { py:"zhǔdòng",   zh:"自己先去做",          en:"proactive", manual:true },
  "合作能力强":{ py:"hézuò nénglì qiáng",zh:"很会跟人合作", en:"good at teamwork", manual:true },
  "坚持有毅力":{ py:"jiānchí yǒu yìlì",zh:"认准了就不放弃", en:"persistent; full of perseverance", manual:true },
  "爱好广泛": { py:"àihào guǎngfàn",zh:"兴趣很多",        en:"having a wide range of interests", manual:true },
  "喜欢挑战": { py:"xǐhuān tiǎozhàn",zh:"敢接难的事",     en:"enjoys challenges", manual:true },
  "多才多艺": { py:"duōcái duōyì",zh:"会的东西很多",      en:"versatile; multi-talented", manual:true },
  "脚踏实地": { py:"jiǎotà shídì",zh:"实实在在地做事",     en:"down-to-earth; steady", manual:true },
  "个性鲜明": { py:"gèxìng xiānmíng",zh:"个性很突出",     en:"having a distinct personality", manual:true },

  // — 缺点 Weaknesses —
  "懒惰":     { py:"lǎnduò",    zh:"不爱动、不想做",       en:"lazy", manual:true },
  "拖延":     { py:"tuōyán",    zh:"一直往后拖",          en:"to procrastinate", manual:true },
  "紧张":     { py:"jǐnzhāng",  zh:"心里害怕、不放松",     en:"nervous", manual:true },
  "不够专心": { py:"bùgòu zhuānxīn",zh:"注意力不集中",    en:"not focused", manual:true },
  "容易放弃": { py:"róngyì fàngqì",zh:"遇难就不做了",     en:"gives up easily", manual:true },
  "马虎大意": { py:"mǎhu dàyì", zh:"做事很不细心",        en:"careless; negligent", manual:true },
  "半途而废": { py:"bàntú'érfèi",zh:"做到一半就放弃",     en:"to give up halfway", manual:true },
  "丢三落四": { py:"diūsān làsì",zh:"老是忘东西",         en:"forgetful; scatterbrained", manual:true,
              note:'⚠️ <b>落</b>在这里读 <b>là</b>（不读 luò）。<br><small>落 is read <b>là</b> here = to leave behind.</small>' },
  "缺乏自信": { py:"quēfá zìxìn",zh:"不相信自己",         en:"lacking confidence", manual:true },

  // — 高阶成语俗语 High-level phrases —
  "小巫见大巫": { py:"xiǎowū jiàn dàwū",zh:"比起来差得远",  en:"to pale in comparison", manual:true },
  "雷打不动": { py:"léidǎ bùdòng",zh:"雷都打不动，绝不改变", en:"unshakeable; never changes", manual:true },
  "垂头丧气": { py:"chuítóu sàngqì",zh:"低着头、没精神",   en:"dejected; crestfallen", manual:true },
  "不可或缺": { py:"bùkě huòquē",zh:"少了它不行",         en:"indispensable", manual:true },
  "开阔眼界": { py:"kāikuò yǎnjiè",zh:"见的世面更广",     en:"to broaden one's horizons", manual:true },
  "侃侃而谈": { py:"kǎnkǎn ér tán",zh:"从容不迫地说个不停", en:"to talk with ease and confidence", manual:true },
  "眉飞色舞": { py:"méifēi sèwǔ",zh:"说得很兴奋、很得意",  en:"beaming with delight", manual:true },
  "心不在焉": { py:"xīn bù zài yān",zh:"心思不在这儿",    en:"absent-minded", manual:true },
  "一丝不苟": { py:"yīsī bùgǒu",zh:"一点也不马虎",        en:"meticulous", manual:true },
  "聚精会神": { py:"jùjīng huìshén",zh:"非常专心",        en:"fully focused", manual:true },

  // — 身份 Identity —
  "长大":     { py:"zhǎngdà",   zh:"从小变大",            en:"to grow up", manual:true },
  "背景":     { py:"bèijǐng",   zh:"家庭、成长的情况",     en:"background", manual:true },
  "适应":     { py:"shìyìng",   zh:"慢慢习惯",            en:"to adapt", manual:true },
  "认同":     { py:"rèntóng",   zh:"觉得自己属于……",       en:"to identify with; identity", manual:true },
  "语言障碍": { py:"yǔyán zhàng'ài",zh:"语言不通的困难",  en:"language barrier", manual:true },
  "文化冲击": { py:"wénhuà chōngjī",zh:"到新文化里的不适应",en:"culture shock", manual:true },

  // — 理想职业 Aspirations —
  "建筑师":   { py:"jiànzhùshī",zh:"设计房子的人",        en:"architect", manual:true },
  "心理学家": { py:"xīnlǐxuéjiā",zh:"研究心理的专家",     en:"psychologist", manual:true },
  "教师":     { py:"jiàoshī",   zh:"老师",                en:"teacher", manual:true },
  "医生":     { py:"yīshēng",   zh:"看病的人",            en:"doctor", manual:true },
  "软件工程师":{ py:"ruǎnjiàn gōngchéngshī",zh:"做软件的工程师",en:"software engineer", manual:true },
  "数据分析师":{ py:"shùjù fēnxīshī",zh:"分析数据的人",   en:"data analyst", manual:true },
  "商科":     { py:"shāngkē",   zh:"商业类专业",          en:"commerce; business studies", manual:true },
  "金融":     { py:"jīnróng",   zh:"钱和投资的行业",       en:"finance", manual:true },
  "会计":     { py:"kuàijì",    zh:"管账目的人／会计学",   en:"accountant; accounting", manual:true,
              note:'⚠️ <b>会</b>在这里读 <b>kuài</b>（不读 huì）。<br><small>会 is read <b>kuài</b> in 会计.</small>' },
  "设计师":   { py:"shèjìshī",  zh:"做设计的人",          en:"designer", manual:true },
  "媒体工作者":{ py:"méitǐ gōngzuòzhě",zh:"做媒体的人",   en:"media professional", manual:true },
  "环境科学": { py:"huánjìng kēxué",zh:"研究环境的学科",  en:"environmental science", manual:true },
  "工程学":   { py:"gōngchéngxué",zh:"工程方面的学科",    en:"engineering", manual:true },
  "护士":     { py:"hùshì",     zh:"照顾病人的人",         en:"nurse", manual:true },

  /* ========== 四、教学用语（manual：说明文字里划线用，学生看不懂的“老师的话”） ========== */

  "词汇广度": { py:"cíhuì guǎngdù",zh:"会用的词多不多",      en:"range of vocabulary (a VCAA marking criterion)", manual:true },
  "堆砌":     { py:"duīqì",       zh:"生硬地塞进很多词",      en:"to pile up words unnaturally", manual:true },
  "嵌入":     { py:"qiànrù",      zh:"自然地放进句子里",      en:"to embed (naturally into a sentence)", manual:true },
  "关联词":   { py:"guānliáncí",  zh:"连接句子的词，如因为、不仅", en:"connective; linking word", manual:true },
  "句型":     { py:"jùxíng",      zh:"句子的固定格式",        en:"sentence pattern", manual:true },
  "仿写":     { py:"fǎngxiě",     zh:"照着例句写一个自己的",   en:"to imitate a model sentence and write your own", manual:true },
  "语序":     { py:"yǔxù",        zh:"词在句子里的先后顺序",   en:"word order", manual:true },
  "中式中文": { py:"zhōngshì zhōngwén",zh:"用英文思路说出来的中文", en:"Chinglish", manual:true },
  "画面感":   { py:"huàmiàngǎn",  zh:"让人能想象出画面",      en:"vividness; a sense of imagery", manual:true },
  "个人见解": { py:"gèrén jiànjiě",zh:"自己独到的想法",       en:"personal insight", manual:true },
  "谦虚":     { py:"qiānxū",      zh:"不自夸、不骄傲",        en:"modest; humble", manual:true },
  "转折":     { py:"zhuǎnzhé",    zh:"话锋一转（不过、虽然）", en:"a turn in meaning (“but…”)", manual:true },
  "举例":     { py:"jǔlì",        zh:"给一个例子",           en:"to give an example", manual:true },
  "标签":     { py:"biāoqiān",    zh:"一个词概括的说法",      en:"a label (a one-word summary)", manual:true },
  "流水账":   { py:"liúshuǐzhàng",zh:"一件件平铺直叙，没有重点", en:"a dull running account; listing without focus", manual:true },
  "成语":     { py:"chéngyǔ",     zh:"四个字的固定说法",      en:"a Chinese idiom (usually 4 characters)", manual:true },
  "俗语":     { py:"súyǔ",        zh:"老百姓常说的话",        en:"a common saying; proverb", manual:true },
  "演讲稿":   { py:"yǎnjiǎnggǎo", zh:"演讲用的文稿",         en:"a speech script", manual:true },
  "情境":     { py:"qíngjìng",    zh:"说话的场合",           en:"situation; context", manual:true },
  "跑题":     { py:"pǎotí",       zh:"没有回答问题本身",      en:"to go off topic", manual:true },
  "结构":     { py:"jiégòu",      zh:"文章是怎么搭起来的",    en:"structure", manual:true },
  "概括":     { py:"gàikuò",      zh:"用一句话总结",         en:"to sum up in one sentence", manual:true },
  "具体":     { py:"jùtǐ",        zh:"说得清楚、有细节",      en:"specific; concrete", manual:true },
  "自然":     { py:"zìrán",       zh:"不生硬，像平常说话",    en:"natural; not forced", manual:true },
  "评分标准": { py:"píngfēn biāozhǔn",zh:"打分的依据",       en:"marking criteria", manual:true },
  "考官":     { py:"kǎoguān",     zh:"考试的老师",           en:"the examiner", manual:true },
  "升级":     { py:"shēngjí",     zh:"换成更高级的说法",      en:"to upgrade (to a higher-level expression)", manual:true },
  "自查":     { py:"zìchá",       zh:"自己检查一遍",         en:"to check your own work", manual:true }
};

/* 每条补一个 audio 路径（读音文件生成后自动可用） */
Object.keys(window.WORDS).forEach(function(w){ window.WORDS[w].audio = "audio/words/"+w+".mp3"; });
