window.UNIT_DATA = {
  id: 1,
  title: "Hello, Friends!",
  vocabulary: [
    { word: "hello",   zh: "你好",   zhuyin: "ㄋㄧˇ ㄏㄠˇ",       emoji: "👋" },
    { word: "friend",  zh: "朋友",   zhuyin: "ㄆㄥˊ ㄧㄡˇ",       emoji: "👫" },
    { word: "name",    zh: "名字",   zhuyin: "ㄇㄧㄥˊ ˙ㄗ",         emoji: "🏷️" },
    { word: "class",   zh: "班級",   zhuyin: "ㄅㄢ ㄐㄧˊ",          emoji: "🎒" },
    { word: "teacher", zh: "老師",   zhuyin: "ㄌㄠˇ ㄕ",            emoji: "👩‍🏫" },
    { word: "student", zh: "學生",   zhuyin: "ㄒㄩㄝˊ ㄕㄥ",         emoji: "🧒" },
    { word: "boy",     zh: "男生",   zhuyin: "ㄋㄢˊ ㄕㄥ",          emoji: "👦" },
    { word: "girl",    zh: "女生",   zhuyin: "ㄋㄩˇ ㄕㄥ",          emoji: "👧" },
  ],
  patterns: [
    {
      structure: "My name is <u>___</u>.",
      zh: "我叫___。",
      examples: [
        { en: "My name is Amy.", zh: "我叫艾米。" },
        { en: "My name is Ben.", zh: "我叫班。" },
      ],
      practice: {
        sentence: "My name is ___.",
        options: ["Amy", "Dog", "Apple"],
        answer: 0,
      },
    },
    {
      structure: "Are you <u>___</u>?",
      zh: "你是___嗎？",
      examples: [
        { en: "Are you a student?", zh: "你是學生嗎？" },
        { en: "Are you in Class 4A?", zh: "你在四年甲班嗎？" },
      ],
      practice: {
        sentence: "Are you ___?",
        options: ["a student", "a cat", "a book"],
        answer: 0,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Amy", en: "Hi! I'm Amy. What's your name?", zh: "嗨！我是艾米。你叫什麼名字？", keywords: ["name"] },
    { role: "B", name: "Ben", en: "Hello! My name is Ben.",         zh: "你好！我叫班。",                 keywords: ["hello", "name"] },
    { role: "A", name: "Amy", en: "Nice to meet you, Ben!",         zh: "很高興認識你，班！",             keywords: [] },
    { role: "B", name: "Ben", en: "Nice to meet you, too!",         zh: "我也很高興認識你！",             keywords: [] },
    { role: "A", name: "Amy", en: "Are you in Class 4A?",           zh: "你在四年甲班嗎？",               keywords: ["class"] },
    { role: "B", name: "Ben", en: "Yes, I am. Let's be friends!",   zh: "是的！我們做朋友吧！",           keywords: ["friend"] },
  ],
  quiz: [
    { question: "What do you say when you meet someone?", options: ["Hello!", "Goodbye!", "Thank you!", "Sorry!"], answer: 0 },
    { question: "「My name is Amy.」這句話是 Amy 告訴你什麼？", options: ["她的年齡", "她的名字", "她的班級", "她的老師"], answer: 1 },
    { question: "Which word means 老師?", options: ["student", "friend", "teacher", "class"], answer: 2 },
    { question: "How do you ask someone's name?", options: ["How are you?", "Where are you?", "Who is she?", "What's your name?"], answer: 3 },
    { question: "「Nice to meet you!」這句話的意思是什麼？", options: ["很高興認識你", "再見", "謝謝你", "對不起"], answer: 0 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "帶學生大聲念出每個單字，重複 2-3 次",
        "特別注意 friend 的 /fr/ 音和結尾 d，常被吞掉",
        "請學生用 boy / girl 介紹班上同學",
      ],
      commonErrors: ["teacher 結尾的 -er 是輕音，不要捲舌"],
      prompts: ["你的名字是什麼？", "你的班級是幾年幾班？", "你的老師叫什麼名字？", "你最好的朋友是誰？"],
    },
    patterns: {
      keyPoints: [
        "請學生用 My name is ___ 自我介紹",
        "Are you...? 回答用 Yes, I am. / No, I'm not.",
      ],
      commonErrors: ["回答 Are you...? 容易只說 Yes 而忘了 I am"],
      prompts: ["用 My name is ___ 介紹你自己。", "我問：Are you in Class 4A? 你怎麼回答？", "試著問我一個 Are you ___? 的問題。"],
    },
    dialogue: {
      keyPoints: [
        "讓學生選 Amy 或 Ben，輪流朗讀",
        "讀完問學生：他們在哪一班？",
        "鼓勵學生用自己的名字改寫對話",
      ],
      commonErrors: ["Nice to meet you, too! 容易漏掉 too"],
      prompts: ["Amy 在哪一班？", "Ben 怎麼回應 Nice to meet you？", "你會怎麼跟新朋友打招呼？"],
    },
    quiz: {
      keyPoints: ["測驗前可快速複習單字卡", "答錯時引導學生回想對話內容"],
      prompts: ["這一題我們在哪裡學過？", "再想想看，這個單字的意思是什麼？"],
    },
  },
};
