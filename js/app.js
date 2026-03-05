/**
 * CNA ProMaster - Exam Simulator Logic (Bilingual Edition)
 */

let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let startTime = null;
let timerInterval = null;
let currentLang = localStorage.getItem('cna_lang') || 'en'; // 'en', 'es', or 'bi'

document.addEventListener('DOMContentLoaded', () => {
    const batteryId = localStorage.getItem('selectedBattery') || 0;

    if (typeof allBatteries !== 'undefined' && allBatteries[batteryId]) {
        currentQuestions = allBatteries[batteryId].questions;
        document.getElementById('battery-name').textContent = allBatteries[batteryId].name;
    } else {
        alert('Error cargando la batería de preguntas.');
        window.location.href = 'index.html';
    }

    setupLangSelector();
    startTimer();
    renderQuestion();
});

function setupLangSelector() {
    const selector = document.createElement('div');
    selector.className = 'lang-selector';
    selector.style = 'background: rgba(255,255,255,0.1); padding: 5px; border-radius: 8px; display: flex; gap: 5px;';

    const langs = [
        { id: 'en', label: 'EN' },
        { id: 'es', label: 'ES' },
        { id: 'bi', label: 'Bi' }
    ];

    langs.forEach(l => {
        const btn = document.createElement('button');
        btn.textContent = l.label;
        btn.className = `btn btn-sm ${currentLang === l.id ? 'btn-primary' : 'btn-outline'}`;
        btn.style = 'padding: 2px 8px; font-size: 0.7rem; color: white; border-color: rgba(255,255,255,0.3);';
        if (currentLang === l.id) btn.style.background = 'var(--primary)';

        btn.onclick = () => {
            currentLang = l.id;
            localStorage.setItem('cna_lang', l.id);
            setupLangSelector(); // Re-render selector
            renderQuestion();
        };
        selector.appendChild(btn);
    });

    const nav = document.querySelector('.exam-nav');
    if (nav) {
        // Remove old selector if exists
        const old = nav.querySelector('.lang-selector');
        if (old) old.remove();
        nav.insertBefore(selector, document.getElementById('timer'));
    }
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = Date.now();
    const diff = now - startTime;
    const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    const textContainer = document.getElementById('question-text');
    const optionsList = document.getElementById('options-list');

    // Render Question Text
    if (currentLang === 'en') {
        textContainer.innerHTML = q.text_en;
    } else if (currentLang === 'es') {
        textContainer.innerHTML = q.text_es;
    } else {
        textContainer.innerHTML = `
            <div style="margin-bottom: 0.5rem;">${q.text_en}</div>
            <div style="color: var(--text-muted); font-size: 1.1rem; font-style: italic;">${q.text_es}</div>
        `;
    }

    // Render Options
    optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    const optsCount = q.options_en.length;
    for (let i = 0; i < optsCount; i++) {
        const div = document.createElement('div');
        div.className = `option-item ${userAnswers[currentIndex] === i ? 'selected' : ''}`;
        div.onclick = () => selectOption(i);

        let optContent = '';
        if (currentLang === 'en') {
            optContent = q.options_en[i];
        } else if (currentLang === 'es') {
            optContent = q.options_es[i];
        } else {
            optContent = `
                <div>${q.options_en[i]}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">${q.options_es[i]}</div>
            `;
        }

        div.innerHTML = `
            <div class="option-letter">${letters[i]}</div>
            <div class="option-content">${optContent}</div>
        `;
        optionsList.appendChild(div);
    }

    // Update progress
    const total = currentQuestions.length;
    const current = currentIndex + 1;
    const percent = Math.floor((current / total) * 100);

    document.getElementById('progress-text').textContent = currentLang === 'en' ? `Question ${current} of ${total}` : `Pregunta ${current} de ${total}`;
    document.getElementById('percentage-text').textContent = `${percent}% ${currentLang === 'en' ? 'Completed' : 'Completado'}`;
    document.getElementById('progress-bar').style.width = `${percent}%`;

    // Update buttons
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('prev-btn').textContent = currentLang === 'en' ? 'Previous' : 'Anterior';
    document.getElementById('next-btn').textContent = (currentIndex === total - 1) ? (currentLang === 'en' ? 'Finish' : 'Finalizar') : (currentLang === 'en' ? 'Next' : 'Siguiente');
}

function selectOption(index) {
    userAnswers[currentIndex] = index;
    renderQuestion();
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        finishExam();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function finishExam() {
    clearInterval(timerInterval);

    let correct = 0;
    currentQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) {
            correct++;
        }
    });

    const total = currentQuestions.length;
    const score = Math.floor((correct / total) * 100);

    // Hide exam areas
    document.getElementById('question-container').style.display = 'none';
    document.querySelector('.exam-footer').style.display = 'none';
    document.getElementById('results-view').style.display = 'block';

    // Show results
    document.getElementById('score-value').textContent = `${score}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('total-count').textContent = total;

    const msgBox = document.getElementById('pass-fail-msg');
    const circle = document.getElementById('score-circle');

    if (score >= 80) {
        msgBox.textContent = currentLang === 'en' ? 'CONGRATULATIONS! YOU PASSED' : '¡FELICIDADES! HAS APROBADO';
        msgBox.style.color = '#10b981';
        circle.classList.add('pass');
    } else {
        msgBox.textContent = currentLang === 'en' ? 'YOU DID NOT REACH THE 80%' : 'NO HAS ALCANZADO EL 80%';
        msgBox.style.color = '#ef4444';
        circle.classList.add('fail');
    }

    // Save score to localStorage
    const batteryId = localStorage.getItem('selectedBattery') || 0;
    const savedScores = JSON.parse(localStorage.getItem('cna_scores') || '{}');
    savedScores[batteryId] = score;
    localStorage.setItem('cna_scores', JSON.stringify(savedScores));

    // Render Review if there are errors
    if (correct < total) {
        renderReview();
    }
}

function renderReview() {
    const reviewArea = document.getElementById('review-area');
    const container = document.getElementById('review-container');
    reviewArea.style.display = 'block';
    container.innerHTML = '';

    currentQuestions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        if (userAns !== q.correct) {
            const item = document.createElement('div');
            item.className = 'review-item';

            let qText = '';
            let correctText = '';
            let wrongText = userAns === undefined ? (currentLang === 'es' ? 'No contestada' : 'Not answered') : '';
            let reason = '';

            if (currentLang === 'en') {
                qText = `Question ${idx + 1}: ${q.text_en}`;
                correctText = `Correct Answer: ${q.options_en[q.correct]}`;
                if (userAns !== undefined) wrongText = `Your Answer: ${q.options_en[userAns]}`;
                reason = q.reason_en;
            } else if (currentLang === 'es') {
                qText = `Pregunta ${idx + 1}: ${q.text_es}`;
                correctText = `Respuesta Correcta: ${q.options_es[q.correct]}`;
                if (userAns !== undefined) wrongText = `Tu Respuesta: ${q.options_es[userAns]}`;
                reason = q.reason_es;
            } else {
                qText = `
                    <div style="font-weight: 800; color: var(--primary); margin-bottom: 0.3rem;"># ${idx + 1}</div>
                    <div>${q.text_en}</div>
                    <div style="font-size: 0.9rem; color: #64748b; font-style: italic;">${q.text_es}</div>
                `;
                correctText = `
                    <div>Correct: ${q.options_en[q.correct]}</div>
                    <div style="font-size: 0.85rem;">Correcta: ${q.options_es[q.correct]}</div>
                `;
                if (userAns !== undefined) {
                    wrongText = `
                        <div>You chose: ${q.options_en[userAns]}</div>
                        <div style="font-size: 0.85rem;">Elegiste: ${q.options_es[userAns]}</div>
                    `;
                }
                reason = `
                    <div>${q.reason_en}</div>
                    <div style="font-size: 0.85rem; color: #64748b;">${q.reason_es}</div>
                `;
            }

            item.innerHTML = `
                <div class="review-q-text">${qText}</div>
                <div class="review-ans wrong">${wrongText}</div>
                <div class="review-ans correct">${correctText}</div>
                <div class="review-reason">${reason}</div>
            `;
            container.appendChild(item);
        }
    });
}
