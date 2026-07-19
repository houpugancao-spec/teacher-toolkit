/* ============================================================
   诸葛亮课 · 重点词词库（划线词弹卡数据源）
   每条：拼音 py / 中文释义 zh / 英文 en / 读音音频 audio
   · 课文与文字稿里凡出现这些词，引擎自动加下划线、可点弹卡
   · audio 指向 audio/words/<词>.mp3（读音批量生成后到位；缺文件时弹卡不播放、不报错）
   · 注释内容待老师审核后可直接改这里
   ============================================================ */
window.WORDS = {
  "智慧":     { py:"zhìhuì",          zh:"聪明、有智慧",              en:"wisdom; intelligence" },
  "诸葛亮":   { py:"Zhūgě Liàng",     zh:"三国时著名的军师",          en:"Zhuge Liang (famous strategist)",
              img:"img/portrait-card.png",
              note:'<b>为什么“羽扇纶巾”？</b> 他是靠智慧打仗的<b>军师</b>，不是靠武力的武将；羽扇纶巾是文人儒将的打扮，显得沉着冷静、儒雅从容——正呼应他“不慌不忙、足智多谋”。<br><small>Why the fan &amp; scarf? He won with wisdom, not force — the scholar-general look shows his calm, clever style.</small>' },
  "孔明":     { py:"Kǒngmíng",        zh:"诸葛亮的字",                en:"Kongming (his courtesy name)" },
  "卧龙":     { py:"Wòlóng",          zh:"诸葛亮的外号，“躺着的龙”",   en:"“Crouching Dragon” (his nickname)" },
  "刘备":     { py:"Liú Bèi",         zh:"三国英雄，请诸葛亮出山",     en:"Liu Bei (the hero who recruited him)" },
  "才华":     { py:"cáihuá",          zh:"才能、本领",                en:"talent; ability" },
  "三顾茅庐": { py:"sān gù máolú",    zh:"诚心多次邀请人才",          en:"to sincerely invite sb. again and again" },
  "诚意":     { py:"chéngyì",         zh:"真心实意",                  en:"sincerity" },
  "尽心尽力": { py:"jìn xīn jìn lì",  zh:"用全部的心和力气去做",       en:"to do one's utmost" },
  "足智多谋": { py:"zú zhì duō móu",  zh:"智慧多、计谋多",            en:"resourceful; full of clever plans" },
  "传奇":     { py:"chuánqí",         zh:"神奇的故事",                en:"legend; legendary story" },
  "缺箭":     { py:"quē jiàn",        zh:"箭不够用",                  en:"to be short of arrows" },
  "不慌不忙": { py:"bù huāng bù máng",zh:"一点也不着急，很镇定",       en:"calm and unhurried" },
  "扎满":     { py:"zhā mǎn",         zh:"插得满满的",                en:"to be packed / stuck full of" },
  "漫天":     { py:"màntiān",         zh:"布满天空",                  en:"filling the whole sky" },
  "大雾":     { py:"dà wù",           zh:"很浓的雾",                  en:"heavy fog" },
  "应战":     { py:"yìngzhàn",        zh:"出来迎接战斗",              en:"to meet a challenge; to engage in battle" },
  "拼命":     { py:"pīnmìng",         zh:"用尽全力",                  en:"with all one's might; desperately" },
  "家喻户晓": { py:"jiā yù hù xiǎo",  zh:"每家每户都知道",            en:"known to every household" },
  "草船借箭": { py:"cǎo chuán jiè jiàn",zh:"用草船向敌人“借”箭的计谋", en:"“borrowing arrows with straw boats”" },
  "忠心报国": { py:"zhōngxīn bào guó",zh:"忠诚地为国家出力",          en:"to serve one's country loyally" },
  "臭皮匠":   { py:"chòu píjiàng",    zh:"地位低的手艺人；普通人",     en:"a humble cobbler; (fig.) an ordinary person" },
  "顶":       { py:"dǐng",            zh:"抵得上、相当于",            en:"to equal; to be worth" },
  "动脑筋":   { py:"dòng nǎojīn",     zh:"开动脑子想办法",            en:"to use one's brains; to think hard" },
  "厉害":     { py:"lìhai",           zh:"很强、很棒",                en:"impressive; formidable" },
  "富贵":     { py:"fùguì",           zh:"有钱又有地位",              en:"wealthy and noble" },
  "老板":     { py:"lǎobǎn",          zh:"做生意/管人的人",           en:"boss" },
  "员工上班": { py:"yuángōng shàngbān",zh:"职员去工作",               en:"employees going to work" },
  "太有面儿了": { py:"tài yǒu miànr le",zh:"非常有面子、很光彩（口语）",en:"so prestigious; what an honour (colloquial)" },
  "辅佐":     { py:"fǔzuǒ",           zh:"帮助（君主）",              en:"to assist (a ruler)" },
  "危险":     { py:"wēixiǎn",         zh:"不安全",                    en:"dangerous; danger" },
  "靠近":     { py:"kàojìn",          zh:"走近、接近",                en:"to approach; to draw near" },
  "虚实":     { py:"xūshí",           zh:"真假情况、实际情形",         en:"the real situation; sb.'s true strength" },
  "轻轻松松": { py:"qīngqīng sōngsōng",zh:"很容易、不费力",           en:"easily; effortlessly" },
  "忠诚":     { py:"zhōngchéng",      zh:"忠心、可靠",                en:"loyal; faithful" },
  "操劳":     { py:"cāoláo",          zh:"辛苦地工作",                en:"to toil; to work hard" },
  "尊敬":     { py:"zūnjìng",         zh:"敬重",                      en:"to respect" },
  "象征":     { py:"xiàngzhēng",      zh:"代表某种意义的标志",         en:"symbol; to symbolize" },

  // —— 第十一节·诸葛亮装扮（带图弹卡：点词看图+讲解）——
  "纶巾":     { py:"guān jīn",        zh:"青色丝带做的软头巾（文人戴）", en:"a scholar's soft silk headscarf",
              img:"img/portrait-card.png",
              note:'图中诸葛亮<b>头上戴的</b>就是纶巾——青色丝带做的<b>软头巾</b>，古代读书人戴，不是硬官帽，显得斯文儒雅。因诸葛亮常戴，又叫“<b>诸葛巾</b>”。<br><small>The soft blue silk scholar’s scarf on his head — not a rigid official hat.</small><br>⚠️ 读音 <b>guān jīn</b>（不读 lún）。' },
  "羽扇":     { py:"yǔ shàn",         zh:"用鸟羽毛做的扇子",           en:"a feather fan",
              img:"img/portrait-card.png",
              note:'图中诸葛亮<b>手里拿的</b>就是羽扇——用鸟的羽毛（多是鹅毛）做的扇子。轻轻一摇，显得<b>从容不迫、胸有成竹</b>。<br><small>The goose-feather fan in his hand — waving it looks calm and in control.</small>' },

  // —— 第八节·词汇练习新增描写词（manual:不自动划线，只供词卡）——
  "机智":     { py:"jīzhì",           zh:"脑子快、有急智",            en:"quick-witted; resourceful", manual:true },
  "沉着":     { py:"chénzhuó",        zh:"遇事镇定、不慌张",          en:"calm; composed",            manual:true },
  "谦虚":     { py:"qiānxū",          zh:"不自满、不骄傲",            en:"modest; humble",            manual:true },

  // —— 第九节·名言关键字（manual）——
  "淡泊":     { py:"dànbó",           zh:"不追求名利",                en:"indifferent to fame & gain", manual:true },
  "宁静":     { py:"níngjìng",        zh:"内心平静",                  en:"calm; tranquil",             manual:true },
  "致远":     { py:"zhìyuǎn",         zh:"达到远大的目标",            en:"to reach far; achieve great goals", manual:true },
  "鞠躬":     { py:"jūgōng",          zh:"弯下身子表示恭敬",          en:"to bow respectfully",        manual:true },
  "尽瘁":     { py:"jìncuì",          zh:"用尽全部心力",              en:"to exhaust one's energies",  manual:true }
};
/* 每条补一个 audio 路径（读音文件生成后自动可用） */
Object.keys(window.WORDS).forEach(function(w){ window.WORDS[w].audio = "audio/words/"+w+".mp3"; });
