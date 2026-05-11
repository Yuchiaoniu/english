window.UNIT_DATA = {
  id: 6,
  title: "Dress Up!",
  vocabulary: [
    { word: "red",    zh: "紅色",   zhuyin: "ㄏㄨㄥˊ ㄙㄜˋ",    emoji: "🔴" },
    { word: "blue",   zh: "藍色",   zhuyin: "ㄌㄢˊ ㄙㄜˋ",      emoji: "🔵" },
    { word: "yellow", zh: "黃色",   zhuyin: "ㄏㄨㄤˊ ㄙㄜˋ",    emoji: "🟡" },
    { word: "shirt",  zh: "上衣",   zhuyin: "ㄕㄤˋ ㄧ",          emoji: "👕" },
    { word: "pants",  zh: "褲子",   zhuyin: "ㄎㄨˋ ˙ㄗ",        emoji: "👖" },
    { word: "dress",  zh: "洋裝",   zhuyin: "ㄧㄤˊ ㄓㄨㄤ",     emoji: "👗" },
    { word: "shoes",  zh: "鞋子",   zhuyin: "ㄒㄧㄝˊ ˙ㄗ",      emoji: "👟" },
    { word: "hat",    zh: "帽子",   zhuyin: "ㄇㄠˋ ˙ㄗ",        emoji: "🎩" },
  ],
  patterns: [
    {
      structure: "I am wearing a <u>___</u>.",
      zh: "我穿著一件___。",
      examples: [
        { en: "I am wearing a red shirt.", zh: "我穿著一件紅色上衣。" },
        { en: "I am wearing a blue dress.", zh: "我穿著一件藍色洋裝。" },
      ],
      practice: {
        sentence: "I am wearing a ___.",
        options: ["yellow hat", "happy fish", "big school"],
        answer: 0,
      },
    },
    {
      structure: "What color is your <u>___</u>?",
      zh: "你的___是什麼顏色？",
      examples: [
        { en: "What color is your shirt? It's blue.", zh: "你的上衣是什麼顏色？是藍色。" },
        { en: "What color is your hat? It's red.", zh: "你的帽子是什麼顏色？是紅色。" },
      ],
      practice: {
        sentence: "What color is your ___?",
        options: ["shoes", "milk", "teacher"],
        answer: 0,
      },
    },
  ],
  dialogue: [
    { role: "A", name: "Coco", en: "Wow, nice dress! What color is it?", zh: "哇，好漂亮的洋裝！是什麼顏色？", keywords: ["dress"] },
    { role: "B", name: "Amy",  en: "It's yellow! And I have new shoes, too.", zh: "是黃色的！我還有新鞋子。", keywords: ["yellow", "shoes"] },
    { role: "A", name: "Coco", en: "What color are the shoes?", zh: "鞋子是什麼顏色？", keywords: ["shoes"] },
    { role: "B", name: "Amy",  en: "They're blue and white. I love them!", zh: "是藍色和白色的。我很喜歡！", keywords: ["blue"] },
    { role: "A", name: "Coco", en: "I like your hat, too. It's so cute!", zh: "我也喜歡你的帽子。好可愛！", keywords: ["hat"] },
    { role: "B", name: "Amy",  en: "Thank you! Let's take a photo!", zh: "謝謝！我們來拍照吧！", keywords: [] },
  ],
  quiz: [
    { question: "🔴 是什麼顏色？", options: ["blue", "yellow", "red", "green"], answer: 2 },
    { question: "「I am wearing a blue shirt.」是什麼意思？", options: ["我有一件藍色上衣", "我穿著一件藍色上衣", "我想要藍色上衣", "我看到藍色上衣"], answer: 1 },
    { question: "Which word means 帽子?", options: ["shoes", "dress", "pants", "hat"], answer: 3 },
    { question: "對話中 Amy 的洋裝是什麼顏色？", options: ["紅色", "藍色", "黃色", "白色"], answer: 2 },
    { question: "如果你的上衣是紅色，「What color is your shirt?」怎麼回答？", options: ["It's red.", "I like red.", "Red is nice.", "My shirt."], answer: 0 },
  ],
  tutor: {
    vocab: {
      keyPoints: [
        "pants / shoes 是複數，總是加 s",
        "顏色可以指衣服練習：紅紅黃黃藍藍",
        "shirt 結尾 t 容易吞音",
      ],
      commonErrors: ["pant（單數）是錯的，要說 pants"],
      prompts: ["你今天穿什麼顏色的衣服？", "你最喜歡什麼顏色？", "你的書包是什麼顏色？"],
    },
    patterns: {
      keyPoints: [
        "顏色形容詞放在名詞前面：red shirt",
        "What color is ___? 回答 It's ___",
      ],
      commonErrors: ["回答時容易說 Red. → 完整句 It's red."],
      prompts: ["用 I am wearing a ___ ___ 描述你今天的穿著。", "問我：What color is your ___?"],
    },
    dialogue: {
      keyPoints: [
        "可以指著彼此或網路圖片練習問顏色",
        "讓學生形容自己今天的衣服顏色",
      ],
      commonErrors: ["What color are the shoes? 注意 shoes 是複數用 are"],
      prompts: ["Amy 的洋裝是什麼顏色？", "Amy 的鞋子是什麼顏色？", "你今天穿的衣服是什麼顏色？"],
    },
    quiz: {
      keyPoints: ["第 4 題回想對話：Amy 穿黃色洋裝"],
      prompts: ["第 4 題提示：第一輪 Amy 說 It's ___"],
    },
  },
};
