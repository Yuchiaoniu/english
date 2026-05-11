window.UNIT_DATA = {
  id: 2,
  title: "My Family",
  vocabulary: [
    { word: "family",  zh: "家人",     zhuyin: "ㄐㄧㄚ ㄖㄣˊ",       emoji: "👨‍👩‍👧‍👦" },
    { word: "father",  zh: "爸爸",     zhuyin: "ㄅㄚˋ ˙ㄅㄚ",         emoji: "👨" },
    { word: "mother",  zh: "媽媽",     zhuyin: "ㄇㄚ ˙ㄇㄚ",          emoji: "👩" },
    { word: "brother", zh: "哥哥/弟弟", zhuyin: "ㄍㄜ ˙ㄍㄜ",          emoji: "👦" },
    { word: "sister",  zh: "姐姐/妹妹", zhuyin: "ㄐㄧㄝˇ ˙ㄐㄧㄝ",     emoji: "👧" },
    { word: "grandpa", zh: "爺爺",     zhuyin: "ㄧㄝˊ ˙ㄧㄝ",         emoji: "👴" },
    { word: "grandma", zh: "奶奶",     zhuyin: "ㄋㄞˇ ˙ㄋㄞ",         emoji: "👵" },
    { word: "baby",    zh: "嬰兒",     zhuyin: "ㄧㄥ ㄦˊ",            emoji: "👶" },
  ],
  patterns: [
    {
      structure: "This is my <u>___</u>.",
      zh: "這是我的___。",
      examples: [
        { en: "This is my father.", zh: "這是我爸爸。" },
        { en: "This is my sister.", zh: "這是我姐姐。" },
      ],
      practice: {
        sentence: "This is my ___.",
        options: ["mother", "book", "school"],
        answer: 0,
      },
    },
    {
      structure: "There are <u>___</u> people in my family.",
      zh: "我家有___個人。",
      examples: [
        { en: "There are four people in my family.", zh: "我家有四個人。" },
        { en: "There are five people in my family.", zh: "我家有五個人。" },
      ],
      practice: {
        sentence: "There are ___ people in my family.",
        options: ["four", "red", "happy"],
        answer: 0,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Lily", en: "Look! This is my family photo.", zh: "看！這是我的全家福。", keywords: ["family"] },
    { role: "B", name: "Tom",  en: "Wow! How many people are in your family?", zh: "哇！你家有幾個人？", keywords: ["family"] },
    { role: "A", name: "Lily", en: "There are five. This is my father, mother, and brother.", zh: "有五個人。這是我爸爸、媽媽和哥哥。", keywords: ["father", "mother", "brother"] },
    { role: "B", name: "Tom",  en: "Who is the baby?", zh: "那個嬰兒是誰？", keywords: ["baby"] },
    { role: "A", name: "Lily", en: "That's my little sister! She is one year old.", zh: "那是我妹妹！她一歲了。", keywords: ["sister"] },
    { role: "B", name: "Tom",  en: "Your family is so cute!", zh: "你家人好可愛！", keywords: ["family"] },
  ],
  quiz: [
    { question: "Which word means 媽媽?", options: ["father", "brother", "sister", "mother"], answer: 3 },
    { question: "「There are four people in my family.」這句話的意思是？", options: ["我家有四個人", "我有四個朋友", "我四歲了", "我家有四隻貓"], answer: 0 },
    { question: "How do you say 爺爺 in English?", options: ["grandma", "grandpa", "uncle", "father"], answer: 1 },
    { question: "「This is my ___.」哪個字填入空格表示「姐姐」？", options: ["baby", "family", "sister", "mother"], answer: 2 },
    { question: "對話中 Lily 家裡共有幾個人？", options: ["三個", "四個", "五個", "六個"], answer: 2 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "brother / sister 在中文有「哥/弟」、「姐/妹」之分，英文則統稱",
        "father / mother 是正式說法，dad / mom 是日常用法",
        "讓學生試著用 family 介紹自己的家人組成",
      ],
      commonErrors: ["grandpa / grandma 的 grand- 不是 grant"],
      prompts: ["你家裡有幾個人？", "你有哥哥還是弟弟？姐姐還是妹妹？", "誰會接你放學？"],
    },
    patterns: {
      keyPoints: [
        "This is my ___ 用來介紹家人時很實用",
        "There are ___ people 用數字回答家中人數",
      ],
      commonErrors: ["容易說成 My family have four people（中式英文）"],
      prompts: ["用 This is my ___ 介紹你的家人。", "你家有幾個人？用 There are ___ 回答。"],
    },
    dialogue: {
      keyPoints: [
        "重點是學會問與答 how many people",
        "讓學生試著畫出自己的全家福並用英文介紹",
      ],
      commonErrors: ["How many 後接複數名詞（people 本身就是複數）"],
      prompts: ["Lily 家有幾個人？", "Tom 問 Lily 什麼問題？", "Lily 的妹妹幾歲？"],
    },
    quiz: {
      keyPoints: ["注意第 5 題要回想對話細節（五個人）"],
      prompts: ["第 5 題我們在對話裡有提到答案，記得嗎？"],
    },
  },
};
