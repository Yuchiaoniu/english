window.UNIT_DATA = {
  id: 3,
  title: "At School",
  vocabulary: [
    { word: "school",    zh: "學校",   zhuyin: "ㄒㄩㄝˊ ㄒㄧㄠˋ",  emoji: "🏫" },
    { word: "classroom", zh: "教室",   zhuyin: "ㄐㄧㄠˋ ㄕˋ",       emoji: "🚪" },
    { word: "desk",      zh: "桌子",   zhuyin: "ㄓㄨㄛ ˙ㄗ",        emoji: "🪑" },
    { word: "chair",     zh: "椅子",   zhuyin: "ㄧˇ ˙ㄗ",          emoji: "💺" },
    { word: "book",      zh: "書",     zhuyin: "ㄕㄨ",              emoji: "📚" },
    { word: "pencil",    zh: "鉛筆",   zhuyin: "ㄑㄧㄢ ㄅㄧˇ",      emoji: "✏️" },
    { word: "ruler",     zh: "尺",     zhuyin: "ㄔˇ",               emoji: "📏" },
    { word: "bag",       zh: "書包",   zhuyin: "ㄕㄨ ㄅㄠ",         emoji: "🎒" },
  ],
  patterns: [
    {
      structure: "Where is my <u>___</u>?",
      zh: "我的___在哪裡？",
      examples: [
        { en: "Where is my pencil?", zh: "我的鉛筆在哪裡？" },
        { en: "Where is my book?",   zh: "我的書在哪裡？" },
      ],
      practice: {
        sentence: "Where is my ___?",
        options: ["ruler", "happy", "play"],
        answer: 0,
      },
    },
    {
      structure: "This is a <u>___</u>.",
      zh: "這是一個___。",
      examples: [
        { en: "This is a desk.", zh: "這是一張桌子。" },
        { en: "This is a bag.",  zh: "這是一個書包。" },
      ],
      practice: {
        sentence: "This is a ___.",
        options: ["happy", "book", "run"],
        answer: 1,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Ms. Chen", en: "Class, please open your books.", zh: "同學們，請打開你們的書。", keywords: ["book"] },
    { role: "B", name: "Danny",    en: "Excuse me. I can't find my book.", zh: "對不起。我找不到我的書。", keywords: ["book"] },
    { role: "A", name: "Ms. Chen", en: "Where is your bag?", zh: "你的書包在哪裡？", keywords: ["bag"] },
    { role: "B", name: "Danny",    en: "My bag is under my desk.", zh: "我的書包在桌子下面。", keywords: ["bag", "desk"] },
    { role: "A", name: "Ms. Chen", en: "Look in your bag again.", zh: "再找找看書包裡面。", keywords: ["bag"] },
    { role: "B", name: "Danny",    en: "Oh! Here it is! Sorry, Ms. Chen.", zh: "喔！在這裡！對不起，陳老師。", keywords: [] },
  ],
  quiz: [
    { question: "Which word means 鉛筆?", options: ["ruler", "pencil", "book", "bag"], answer: 1 },
    { question: "「Where is my ruler?」這句話的意思是？", options: ["這是我的尺", "我有一把尺", "我的尺在哪裡？", "我沒有尺"], answer: 2 },
    { question: "上學的時候，把書放在哪裡？", options: ["desk", "chair", "classroom", "bag"], answer: 3 },
    { question: "「Open your book」是什麼意思？", options: ["打開你的書", "拿起你的書", "放下你的書", "找你的書"], answer: 0 },
    { question: "對話中 Danny 的書包在哪裡？", options: ["桌子上面", "教室外面", "桌子下面", "椅子上面"], answer: 2 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "desk 和 chair 容易搞混，可以指實物練習",
        "pencil 結尾 -cil 是輕音節",
        "讓學生指出教室裡每個物品的英文名稱",
      ],
      commonErrors: ["school 的 sch- 發 /sk/ 不是 /ʃ/"],
      prompts: ["你的書包裡有什麼？", "你的桌子上有什麼？", "你最喜歡學校的哪一個地方？"],
    },
    patterns: {
      keyPoints: [
        "Where is my ___? 是找東西時最常用句型",
        "This is a ___ 用於介紹物品",
      ],
      commonErrors: ["a / an 區分：a book / an apple"],
      prompts: ["用 Where is my ___ 問我你找不到的東西。", "用 This is a ___ 介紹桌上一樣東西。"],
    },
    dialogue: {
      keyPoints: [
        "讓學生扮演 Danny，練習說 Excuse me 和 Sorry",
        "可以引導學生想：找不到東西時應該怎麼辦",
      ],
      commonErrors: ["under / on / in 介系詞容易混淆"],
      prompts: ["Danny 找不到什麼？", "他的書包在哪裡？", "你曾經找不到東西嗎？"],
    },
    quiz: {
      keyPoints: ["第 5 題回想對話：under my desk"],
      prompts: ["第 5 題提示：對話裡 Danny 說 My bag is ___ my desk"],
    },
  },
};
