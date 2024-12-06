
let questionContainer = document.querySelector('#question-container');
let score = document.getElementById('score');
let correctValue = document.getElementById('correct');
let maxguess = document.getElementById('maxscore');
let reset = document.getElementById('reset');
let restartvalue = document.getElementById('restart');
let finishLine = document.querySelectorAll('#popup');
let finalval = document.querySelector('#finalscore');

let questions = []; // Placeholder for dynamically loaded questions
let flag = 0;
let count = 0;
let maxScore = localStorage.getItem('maxvalue') || 0;

async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questions = await response.json();
        site(); // Initialize the quiz after questions are loaded
    } catch (error) {
        console.error('Error loading questions:', error);
    }
}

function site() {
    maxguess.innerHTML = "HighScore: " + maxScore;
    renderQuestion();
    clickEvent();
}

function renderQuestion() {
    if (questions.length > 0 && questions[flag]) {
        questionContainer.innerHTML = `
            <p >${flag+1})</p>
            <h3> ${questions[flag].question}</h3>
            <h2 class="difficulty" id="difficulty-level">Difficulty: ${questions[flag].difficulty}</h2>
            <ul>
                ${questions[flag].options.map((option, index) => `<li data-index="${index}">${option}</li>`).join('')}
            </ul>
        `;
        // Apply difficulty-specific styles
        const difficultyElement = document.getElementById('difficulty-level');
        if (questions[flag].difficulty === "Hard") {
            difficultyElement.style.color = "red";
        } else if (questions[flag].difficulty === "Medium") {
            difficultyElement.style.color = "orange";
        } else {
            difficultyElement.style.color = "green";
        }
    } else {
        questionContainer.innerHTML = `<p>No questions available.</p>`;
    }
}

function autonext() {
    flag++;
    if (flag < questions.length) {
        site();
    } else {
        // End of the quiz; reset or show summary
        finalval.innerHTML = "Your score:" + count;
        finishLine[0].classList.toggle('visible');

        flag = 0; // Optionally restart
    }
}

function clickEvent() {
    const options = document.querySelectorAll('#question-container li');
    options.forEach(option => {
        option.onclick = () => {
            const selected = option.textContent;
            if (selected === questions[flag].answer) { // Check against correct answer
                console.log("Correct");
                count++;
                if (count > maxScore) {
                    maxScore = count;
                    localStorage.setItem('maxvalue', maxScore);
                    maxguess.innerHTML = `HighScore: ${maxScore}`;
                }
                score.innerHTML = "score: " + count;
                correctValue.innerHTML = `You aced the previous question! The answer is ${questions[flag].answer}.`;
                autonext();
            } else {
                console.log("Incorrect");
                correctValue.innerHTML = `Correct answer for the previous question is ${questions[flag].answer}.`;
                autonext();
            }
        };
    });
}

reset.onclick = () => {
    localStorage.clear();
    maxScore = 0;
    maxguess.innerHTML = "HighScore: " + maxScore;
    restart();
};

restartvalue.onclick = () => {
    restart();
};

function restart() {
    flag = 0;
    count = 0;
    correctValue.innerHTML = "";
    score.innerHTML = "score: " + count;
    site();
}

// Load questions from JSON and initialize
loadQuestions();

