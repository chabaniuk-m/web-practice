const scoreEl = document.getElementById("score");
const mult1El = document.getElementById("mult-1");
const mult2El = document.getElementById("mult-2");
const answerEl = document.getElementById("answer");

let correctAnswer = -1;
let score = parseInt(scoreEl.innerText);

function askQuestion() {
  answerEl.value = "";
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  correctAnswer = a * b;

  mult1El.innerText = a;
  mult2El.innerText = b;
}

function updateScore() {
  scoreEl.innerText = score;
}

function checkAnswer() {
  const usersAnswer = parseInt(answerEl.value);
  console.log(usersAnswer);
  if (usersAnswer === correctAnswer) {
    score += 1;
  } else {
    score = score == 0 ? 0 : score - 1;
  }
  updateScore();
  askQuestion();
}

askQuestion();