window.UNIT_DATA = {
  id: 7,
  title: "What Time Is It?",
  vocabulary: [
    { word: "one",       zh: "一",      zhuyin: "ㄧ",              emoji: "1️⃣" },
    { word: "two",       zh: "二",      zhuyin: "ㄦˋ",             emoji: "2️⃣" },
    { word: "three",     zh: "三",      zhuyin: "ㄙㄢ",            emoji: "3️⃣" },
    { word: "four",      zh: "四",      zhuyin: "ㄙˋ",             emoji: "4️⃣" },
    { word: "five",      zh: "五",      zhuyin: "ㄨˇ",             emoji: "5️⃣" },
    { word: "six",       zh: "六",      zhuyin: "ㄌㄧㄡˋ",         emoji: "6️⃣" },
    { word: "seven",     zh: "七",      zhuyin: "ㄑㄧ",            emoji: "7️⃣" },
    { word: "eight",     zh: "八",      zhuyin: "ㄅㄚ",            emoji: "8️⃣" },
    { word: "nine",      zh: "九",      zhuyin: "ㄐㄧㄡˇ",         emoji: "9️⃣" },
    { word: "ten",       zh: "十",      zhuyin: "ㄕˊ",             emoji: "🔟" },
    { word: "clock",     zh: "時鐘",    zhuyin: "ㄕˊ ㄓㄨㄥ",      emoji: "🕐" },
    { word: "time",      zh: "時間",    zhuyin: "ㄕˊ ㄐㄧㄢ",      emoji: "⌚" },
    { word: "morning",   zh: "早上",    zhuyin: "ㄗㄠˇ ˙ㄕㄤ",     emoji: "🌅" },
    { word: "afternoon", zh: "下午",    zhuyin: "ㄒㄧㄚˋ ˙ㄨ",     emoji: "☀️" },
    { word: "night",     zh: "晚上",    zhuyin: "ㄨㄢˇ ˙ㄕㄤ",     emoji: "🌙" },
    { word: "o'clock",   zh: "...點鐘", zhuyin: "ㄉㄧㄢˇ ㄓㄨㄥ",   emoji: "⏰" },
  ],
  patterns: [
    {
      structure: "What time is it? It's <u>___</u> o'clock.",
      zh: "現在幾點？現在___點。",
      examples: [
        { en: "It's three o'clock.", zh: "現在三點。" },
        { en: "It's seven o'clock.", zh: "現在七點。" },
      ],
      practice: {
        sentence: "It's ___ o'clock.",
        options: ["five", "cat", "red"],
        answer: 0,
      },
    },
    {
      structure: "I <u>___</u> at <u>___</u> o'clock.",
      zh: "我___點___。",
      examples: [
        { en: "I eat breakfast at seven o'clock.", zh: "我七點吃早餐。" },
        { en: "I go to school at eight o'clock.",  zh: "我八點上學。" },
      ],
      practice: {
        sentence: "I ___.",
        options: ["sleep at nine", "run at blue", "play at pencil"],
        answer: 0,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Ken", en: "Excuse me. What time is it?", zh: "打擾一下。現在幾點？", keywords: [] },
    { role: "B", name: "Sue", en: "It's three o'clock in the afternoon.", zh: "現在下午三點。", keywords: ["afternoon"] },
    { role: "A", name: "Ken", en: "Oh no! I'm late for class!", zh: "糟糕！我上課要遲到了！", keywords: [] },
    { role: "B", name: "Sue", en: "Class starts at three, right? Run!", zh: "三點上課，對嗎？快跑！", keywords: [] },
    { role: "A", name: "Ken", en: "When does class end?", zh: "課什麼時候結束？", keywords: [] },
    { role: "B", name: "Sue", en: "At five o'clock. Don't worry!", zh: "五點。別擔心！", keywords: [] },
  ],
  quiz: [
    { question: "「It's seven o'clock.」是什麼意思？", options: ["現在七點了", "我七歲了", "有七個人", "第七天"], answer: 0 },
    { question: "下午的英文是？", options: ["morning", "night", "afternoon", "evening"], answer: 2 },
    { question: "怎麼問現在幾點？", options: ["Where is the clock?", "What time is it?", "How many clocks?", "Is it time?"], answer: 1 },
    { question: "對話中課程幾點結束？", options: ["三點", "四點", "五點", "六點"], answer: 2 },
    { question: "Which word means 早上?", options: ["night", "afternoon", "o'clock", "morning"], answer: 3 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "可以準備時鐘玩具或畫時鐘練習",
        "morning / afternoon / night 對應一天的時段",
        "o'clock 拼字特別（有 ' 撇號），要練習寫",
      ],
      commonErrors: ["three 的 th 是 /θ/，不是 /s/"],
      prompts: ["現在幾點？", "你幾點起床？幾點睡覺？", "你最喜歡早上、下午、還是晚上？為什麼？"],
    },
    patterns: {
      keyPoints: [
        "It's ___ o'clock 用於整點報時",
        "I ___ at ___ o'clock 描述每天作息",
      ],
      commonErrors: ["容易少說 o'clock，例：It's three. 應為 It's three o'clock."],
      prompts: ["用 It's ___ o'clock 報出現在時間。", "用 I ___ at ___ o'clock 介紹你的一天作息。"],
    },
    dialogue: {
      keyPoints: [
        "讓學生想：他/她遲到時會怎麼說？",
        "練習禮貌用語 Excuse me",
      ],
      commonErrors: ["What time is it? 容易講成 What time?"],
      prompts: ["Ken 為什麼緊張？", "課程幾點開始、幾點結束？", "你上次遲到是什麼時候？"],
    },
    quiz: {
      keyPoints: ["第 4 題回想對話：At five o'clock"],
      prompts: ["第 4 題提示：Sue 最後說 At ___ o'clock"],
    },
  },
};
