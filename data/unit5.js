window.UNIT_DATA = {
  id: 5,
  title: "Animals I Like",
  vocabulary: [
    { word: "cat",      zh: "貓",     zhuyin: "ㄇㄠ",            emoji: "🐱" },
    { word: "dog",      zh: "狗",     zhuyin: "ㄍㄡˇ",           emoji: "🐶" },
    { word: "rabbit",   zh: "兔子",   zhuyin: "ㄊㄨˋ ˙ㄗ",       emoji: "🐰" },
    { word: "bird",     zh: "鳥",     zhuyin: "ㄋㄧㄠˇ",         emoji: "🐦" },
    { word: "fish",     zh: "魚",     zhuyin: "ㄩˊ",             emoji: "🐟" },
    { word: "bear",     zh: "熊",     zhuyin: "ㄒㄩㄥˊ",         emoji: "🐻" },
    { word: "tiger",    zh: "老虎",   zhuyin: "ㄌㄠˇ ㄏㄨˇ",     emoji: "🐯" },
    { word: "elephant", zh: "大象",   zhuyin: "ㄉㄚˋ ㄒㄧㄤˋ",   emoji: "🐘" },
  ],
  patterns: [
    {
      structure: "I have a <u>___</u>.",
      zh: "我有一隻___。",
      examples: [
        { en: "I have a cat.",  zh: "我有一隻貓。" },
        { en: "I have a fish.", zh: "我有一條魚。" },
      ],
      practice: {
        sentence: "I have a ___.",
        options: ["dog", "pencil", "family"],
        answer: 0,
      },
    },
    {
      structure: "I like <u>___</u>.",
      zh: "我喜歡___。",
      examples: [
        { en: "I like bears.",   zh: "我喜歡熊。" },
        { en: "I like rabbits.", zh: "我喜歡兔子。" },
      ],
      practice: {
        sentence: "I like ___.",
        options: ["tigers", "desks", "books"],
        answer: 0,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Sam", en: "Do you have any pets?", zh: "你有養寵物嗎？", keywords: [] },
    { role: "B", name: "Joy", en: "Yes! I have a cat and two fish.", zh: "有！我有一隻貓和兩條魚。", keywords: ["cat", "fish"] },
    { role: "A", name: "Sam", en: "What are their names?", zh: "牠們叫什麼名字？", keywords: [] },
    { role: "B", name: "Joy", en: "The cat is Mochi. The fish are Nemo and Dory!", zh: "貓叫麻糬。魚叫尼莫和多莉！", keywords: ["cat", "fish"] },
    { role: "A", name: "Sam", en: "So cute! I want a rabbit.", zh: "好可愛！我想養兔子。", keywords: ["rabbit"] },
    { role: "B", name: "Joy", en: "Rabbits are great! They are soft and quiet.", zh: "兔子很棒！牠們很柔軟又安靜。", keywords: ["rabbit"] },
  ],
  quiz: [
    { question: "Which word means 兔子?", options: ["rabbit", "tiger", "bear", "elephant"], answer: 0 },
    { question: "「I have a cat.」是什麼意思？", options: ["我想要一隻貓", "我有一隻貓", "我喜歡貓", "我看到一隻貓"], answer: 1 },
    { question: "對話中 Joy 養了什麼動物？", options: ["一隻兔子和一隻鳥", "一隻狗和一隻貓", "一隻貓和兩條魚", "一隻熊和一隻大象"], answer: 2 },
    { question: "對話中 Sam 想養什麼動物？", options: ["一隻貓", "一條魚", "一隻熊", "一隻兔子"], answer: 3 },
    { question: "「Rabbits are soft and quiet.」 quiet 是什麼意思？", options: ["大的", "柔軟的", "可愛的", "安靜的"], answer: 3 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "fish 單複數同形，2 條魚仍是 two fish",
        "elephant 有 ph 發 /f/ 的音",
        "可以模仿動物叫聲或動作，加深印象",
      ],
      commonErrors: ["tiger 結尾的 -er 不要捲舌"],
      prompts: ["你家有養什麼動物？", "你最喜歡的動物是什麼？為什麼？", "動物園裡你想看哪一種動物？"],
    },
    patterns: {
      keyPoints: [
        "I have a ___ 表示「擁有」",
        "I like ___ 後常用複數",
      ],
      commonErrors: ["a 後接子音開頭單字，an 接母音開頭：an elephant"],
      prompts: ["用 I have a ___ 描述你的寵物或玩偶。", "用 I like ___ 說兩種你喜歡的動物。"],
    },
    dialogue: {
      keyPoints: [
        "讓學生說自己寵物的名字，沒寵物可幫想像動物取名",
        "soft / quiet 是形容詞，可以引導擴充詞彙",
      ],
      commonErrors: ["pets 結尾 -s 容易省略"],
      prompts: ["Joy 養了幾隻動物？", "Joy 的貓叫什麼名字？", "你會幫你的寵物取什麼名字？"],
    },
    quiz: {
      keyPoints: ["第 3、4 題回想對話中的動物名單"],
      prompts: ["第 3 題提示：注意數量，Joy 說『一隻 ___ 和 兩條 ___』"],
    },
  },
};
