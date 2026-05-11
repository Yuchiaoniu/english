// State
let currentTab = "vocab";
let vocabIndex = 0;
let quizState = null; // { current, answers: [], submitted }

function initUnit() {
  const d = window.UNIT_DATA;
  const meta = UNITS.find(u => u.id === d.id);
  document.title = `Unit ${d.id} ${d.title} | 四年級英語陪讀`;
  document.getElementById("unit-subtitle").textContent = `Unit ${d.id}・${meta.titleZh}`;
  document.getElementById("u-emoji").textContent = meta.emoji;
  document.getElementById("u-title").textContent = `Unit ${d.id}: ${d.title}`;
  document.getElementById("u-title-zh").textContent = meta.titleZh;

  renderVocab(d);
  renderPatterns(d);
  renderDialogue(d);
  renderQuiz(d);
  setupTabs();
  setupTutor(d);
}

// === Tabs ===
function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      currentTab = tab;
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.toggle("active", c.id === tab));
      updateTutorContent();
    });
  });
}

// === Vocabulary ===
function renderVocab(d) {
  const root = document.getElementById("vocab");
  root.innerHTML = `
    <div class="card">
      <div class="vocab-card">
        <div class="emoji" id="vc-emoji"></div>
        <div class="word" id="vc-word"></div>
        <div class="zh" id="vc-zh"></div>
        <div class="zhuyin" id="vc-zhuyin"></div>
      </div>
      <div class="vocab-nav">
        <button class="nav-btn" id="vc-prev">← 上一張</button>
        <span class="progress-label" id="vc-progress"></span>
        <button class="nav-btn" id="vc-next">下一張 →</button>
      </div>
    </div>
    <details class="vocab-list">
      <summary>查看全部單字</summary>
      <div id="vocab-list-body" style="margin-top:12px;"></div>
    </details>
  `;
  const body = document.getElementById("vocab-list-body");
  d.vocabulary.forEach(v => {
    body.innerHTML += `
      <div class="vocab-row">
        <div class="e">${v.emoji}</div>
        <div class="w">${v.word}</div>
        <div>${v.zh}</div>
        <div class="zhuyin">${v.zhuyin}</div>
      </div>
    `;
  });
  vocabIndex = 0;
  showVocabCard(d);
  document.getElementById("vc-prev").addEventListener("click", () => {
    if (vocabIndex > 0) { vocabIndex--; showVocabCard(d); }
  });
  document.getElementById("vc-next").addEventListener("click", () => {
    if (vocabIndex < d.vocabulary.length - 1) { vocabIndex++; }
    else { vocabIndex = 0; }
    showVocabCard(d);
  });
}

function showVocabCard(d) {
  const v = d.vocabulary[vocabIndex];
  document.getElementById("vc-emoji").textContent = v.emoji;
  document.getElementById("vc-word").textContent = v.word;
  document.getElementById("vc-zh").textContent = v.zh;
  document.getElementById("vc-zhuyin").textContent = v.zhuyin;
  document.getElementById("vc-progress").textContent = `第 ${vocabIndex + 1} / 共 ${d.vocabulary.length} 張`;
  document.getElementById("vc-prev").disabled = vocabIndex === 0;
  document.getElementById("vc-next").textContent = vocabIndex === d.vocabulary.length - 1 ? "重新開始 ⟲" : "下一張 →";
}

// === Sentence Patterns ===
function renderPatterns(d) {
  const root = document.getElementById("patterns");
  root.innerHTML = "";
  d.patterns.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "pattern-card";
    card.innerHTML = `
      <div class="structure">${p.structure}</div>
      <div class="zh">${p.zh}</div>
      <details>
        <summary>查看例句</summary>
        <div style="margin-top:8px;">
          ${p.examples.map(e => `
            <div class="example">
              <div class="en">${e.en}</div>
              <div class="zh-line">${e.zh}</div>
            </div>
          `).join("")}
        </div>
      </details>
      <button class="practice-btn" data-i="${i}">練習看看 ✏️</button>
      <div class="practice-box" id="prac-${i}" style="display:none;"></div>
    `;
    root.appendChild(card);
  });
  root.querySelectorAll(".practice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = parseInt(btn.dataset.i);
      togglePractice(d, i);
    });
  });
}

function togglePractice(d, i) {
  const box = document.getElementById(`prac-${i}`);
  if (box.style.display === "block") { box.style.display = "none"; return; }
  const p = d.patterns[i].practice;
  box.style.display = "block";
  box.innerHTML = `
    <div class="practice-sentence">${p.sentence.replace("___", '<span class="blank" id="blank-' + i + '">＿＿＿</span>')}</div>
    <div class="practice-options">
      ${p.options.map((o, oi) => `<button class="option-btn" data-i="${i}" data-oi="${oi}">${o}</button>`).join("")}
    </div>
    <div class="feedback" id="feedback-${i}"></div>
  `;
  box.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const oi = parseInt(btn.dataset.oi);
      const correct = oi === p.answer;
      const fb = document.getElementById(`feedback-${i}`);
      if (correct) {
        btn.classList.add("correct");
        document.getElementById(`blank-${i}`).textContent = p.options[oi];
        document.getElementById(`blank-${i}`).classList.add("filled");
        fb.textContent = "✓ 答對了！";
        fb.className = "feedback ok";
        box.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
      } else {
        btn.classList.add("wrong");
        btn.disabled = true;
        fb.textContent = "✗ 再試試看！";
        fb.className = "feedback err";
      }
    });
  });
}

// === Dialogue ===
let dialogueMode = "view"; // view | reading
let dialogueRole = null;   // A | B (user's role)
let dialogueIndex = 0;

function renderDialogue(d) {
  const root = document.getElementById("dialogue");
  root.innerHTML = `
    <div class="dialogue-controls">
      <button class="nav-btn" id="dlg-read">🎭 角色朗讀</button>
      <button class="nav-btn" id="dlg-reset" style="display:none;">重置</button>
      <span class="progress-label" id="dlg-progress"></span>
    </div>
    <div class="card" id="dialogue-body"></div>
  `;
  drawDialogue(d);
  document.getElementById("dlg-read").addEventListener("click", () => startReading(d));
  document.getElementById("dlg-reset").addEventListener("click", () => resetDialogue(d));
  document.addEventListener("keydown", e => {
    if (currentTab === "dialogue" && dialogueMode === "reading" && e.key === " ") {
      e.preventDefault();
      advanceDialogue(d);
    }
  });
}

function drawDialogue(d) {
  const body = document.getElementById("dialogue-body");
  body.innerHTML = d.dialogue.map((line, i) => {
    const cls = line.role === "A" ? "role-a" : "role-b";
    let en = line.en;
    (line.keywords || []).forEach(kw => {
      const v = d.vocabulary.find(x => x.word.toLowerCase() === kw.toLowerCase());
      if (v) {
        en = en.replace(new RegExp(`\\b${kw}\\b`, "i"), `<span class="keyword" data-zh="${v.zh}">${kw}</span>`);
      }
    });
    return `
      <div class="dialogue-line ${cls}" data-idx="${i}">
        <div class="bubble">
          <div class="speaker">${line.role}: ${line.name}</div>
          <div class="en">${en}</div>
          <div class="zh-line">${line.zh}</div>
        </div>
      </div>
    `;
  }).join("");
}

function startReading(d) {
  const choice = prompt("選擇你的角色：輸入 A 或 B");
  if (!choice || !["A", "B", "a", "b"].includes(choice)) return;
  dialogueRole = choice.toUpperCase();
  dialogueMode = "reading";
  dialogueIndex = 0;
  document.getElementById("dlg-read").style.display = "none";
  document.getElementById("dlg-reset").style.display = "inline-block";
  updateDialogueHighlight(d);
}

function advanceDialogue(d) {
  if (dialogueIndex < d.dialogue.length - 1) {
    dialogueIndex++;
    updateDialogueHighlight(d);
  } else {
    document.getElementById("dlg-progress").textContent = "🎉 朗讀完成！";
    document.querySelectorAll(".dialogue-line").forEach(l => l.classList.remove("active"));
  }
}

function updateDialogueHighlight(d) {
  document.querySelectorAll(".dialogue-line").forEach(l => {
    l.classList.toggle("active", parseInt(l.dataset.idx) === dialogueIndex);
  });
  const line = d.dialogue[dialogueIndex];
  const whose = line.role === dialogueRole ? "你" : "對方";
  document.getElementById("dlg-progress").textContent = `輪到 ${whose}（${line.role}: ${line.name}）・按空白鍵或點按鈕推進 (${dialogueIndex + 1}/${d.dialogue.length})`;
  // click to advance too
  document.querySelectorAll(".dialogue-line").forEach(l => {
    l.onclick = () => advanceDialogue(d);
  });
}

function resetDialogue(d) {
  dialogueMode = "view";
  dialogueRole = null;
  dialogueIndex = 0;
  document.getElementById("dlg-read").style.display = "inline-block";
  document.getElementById("dlg-reset").style.display = "none";
  document.getElementById("dlg-progress").textContent = "";
  document.querySelectorAll(".dialogue-line").forEach(l => {
    l.classList.remove("active");
    l.onclick = null;
  });
}

// === Quiz ===
function renderQuiz(d) {
  const root = document.getElementById("quiz");
  root.innerHTML = `<div class="card" id="quiz-body"></div>`;
  showQuizStart(d);
}

function showQuizStart(d) {
  document.getElementById("quiz-body").innerHTML = `
    <h3 style="margin-bottom:12px;">📝 單元小測驗</h3>
    <p style="color:var(--text-light); margin-bottom:16px;">共 ${d.quiz.length} 題選擇題。練習了單字、句型和對話之後，來試試看吧！</p>
    <button class="nav-btn" id="quiz-start">開始測驗</button>
  `;
  document.getElementById("quiz-start").addEventListener("click", () => {
    quizState = {
      current: 0,
      answers: new Array(d.quiz.length).fill(null),
      submitted: false,
      shuffleMap: d.quiz.map(q => shuffleIndices(q.options.length))
    };
    showQuizQuestion(d);
  });
}

function shuffleIndices(n) {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showQuizQuestion(d) {
  const i = quizState.current;
  const q = d.quiz[i];
  const map = quizState.shuffleMap[i];
  const body = document.getElementById("quiz-body");
  body.innerHTML = `
    <div class="quiz-progress">第 ${i + 1} / ${d.quiz.length} 題</div>
    <div class="quiz-question">${q.question}</div>
    <div class="quiz-options">
      ${map.map((origIdx, displayIdx) => `
        <button class="quiz-option ${quizState.answers[i] === origIdx ? "selected" : ""}" data-orig="${origIdx}">
          ${String.fromCharCode(65 + displayIdx)}. ${q.options[origIdx]}
        </button>
      `).join("")}
    </div>
    <div class="vocab-nav" style="margin-top:20px;">
      <button class="nav-btn" id="q-prev" ${i === 0 ? "disabled" : ""}>← 上一題</button>
      <button class="nav-btn" id="q-next" ${quizState.answers[i] === null ? "disabled" : ""}>
        ${i === d.quiz.length - 1 ? "交卷 ✓" : "下一題 →"}
      </button>
    </div>
  `;
  body.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => {
      quizState.answers[i] = parseInt(btn.dataset.orig);
      showQuizQuestion(d);
    });
  });
  document.getElementById("q-prev").addEventListener("click", () => {
    if (i > 0) { quizState.current--; showQuizQuestion(d); }
  });
  document.getElementById("q-next").addEventListener("click", () => {
    if (quizState.answers[i] === null) return;
    if (i === d.quiz.length - 1) showQuizResult(d);
    else { quizState.current++; showQuizQuestion(d); }
  });
}

function showQuizResult(d) {
  quizState.submitted = true;
  const correct = d.quiz.reduce((sum, q, i) => sum + (quizState.answers[i] === q.answer ? 1 : 0), 0);
  const body = document.getElementById("quiz-body");
  body.innerHTML = `
    <div class="quiz-result">
      <div class="score">${correct} / ${d.quiz.length}</div>
      <div class="score-label">答對了 ${correct} 題！</div>
      <button class="nav-btn" id="q-retry" style="margin-top:16px;">再試一次 ⟲</button>
    </div>
    <h3 style="margin:20px 0 12px;">📋 答案解析</h3>
    ${d.quiz.map((q, i) => {
      const user = quizState.answers[i];
      const ok = user === q.answer;
      return `
        <div class="review-item">
          <div class="review-q">第 ${i + 1} 題：${q.question}</div>
          <div>你的答案：<span class="${ok ? "review-correct" : "review-wrong"}">${q.options[user]} ${ok ? "✓" : "✗"}</span></div>
          ${!ok ? `<div>正確答案：<span class="review-correct">${q.options[q.answer]}</span></div>` : ""}
        </div>
      `;
    }).join("")}
  `;
  document.getElementById("q-retry").addEventListener("click", () => showQuizStart(d));
}

// === Tutor Panel ===
function setupTutor(d) {
  const panel = document.getElementById("tutor-panel");
  const toggle = document.getElementById("tutor-toggle");
  toggle.addEventListener("click", () => {
    panel.classList.toggle("open");
    toggle.classList.toggle("active");
    updateTutorContent();
  });
  document.getElementById("tutor-close").addEventListener("click", () => {
    panel.classList.remove("open");
    toggle.classList.remove("active");
  });
}

function updateTutorContent() {
  const d = window.UNIT_DATA;
  if (!d) return;
  const t = d.tutor[currentTab];
  const root = document.getElementById("tutor-content");
  if (!t) { root.innerHTML = "<p>沒有提示。</p>"; return; }

  let html = `<p style="color:var(--text-light); margin-bottom:16px;">目前分頁：<strong>${tabLabel(currentTab)}</strong></p>`;

  if (t.keyPoints) {
    html += `<div class="tutor-section">
      <h4>🎯 教學重點</h4>
      <ul>${t.keyPoints.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>`;
  }
  if (t.commonErrors) {
    html += `<div class="tutor-section">
      <h4>⚠️ 常見錯誤提醒</h4>
      <ul>${t.commonErrors.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>`;
  }
  if (t.prompts) {
    html += `<div class="tutor-section prompts">
      <h4>💡 互動引導語範例</h4>
      <ul>${t.prompts.map(p => `<li>${p}</li>`).join("")}</ul>
    </div>`;
  }
  if (currentTab === "quiz") {
    html += `<div class="tutor-section">
      <h4>🔑 全部答案</h4>
      <button class="show-answers-btn" id="show-answers">顯示所有答案</button>
      <ul class="answers-list" id="answers-list" style="display:none;">
        ${d.quiz.map((q, i) => `<li>第 ${i + 1} 題：<strong>${q.options[q.answer]}</strong></li>`).join("")}
      </ul>
    </div>`;
  }
  root.innerHTML = html;
  const sa = document.getElementById("show-answers");
  if (sa) sa.addEventListener("click", () => {
    document.getElementById("answers-list").style.display = "block";
    sa.style.display = "none";
  });
}

function tabLabel(t) {
  return { vocab: "單字", patterns: "句型", dialogue: "對話", quiz: "測驗" }[t] || t;
}
