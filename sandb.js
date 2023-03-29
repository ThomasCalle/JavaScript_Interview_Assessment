const questions = [
  {
    question:
      "Q1: JavaScript has a Boolean data type. It can only take the values of",
    choices: ["0 and 1", "True and False", "Yes and No", "On and Off"],
    answer: 1,
  },
  {
    question:
      "Q2: In JavaScript, these are all of the following conditional statements: “if”, “else”, “switch”?",
    choices: ["True", "False", "Depends on the use case", "None of the above"],
    answer: 0,
  },
  {
    question: "Q3: Is SOAP an API?",
    choices: ["Yes", "No", "Sometimes", "Depends on the context"],
    answer: 0,
  },
  {
    question: "Q4: JavaScript is placed into the HTML element “<script>”?",
    choices: ["True", "False", "Depends on the browser", "None of the above"],
    answer: 0,
  },
  {
    question: "Q5: JavaScript is a markup language?",
    choices: ["True", "False", "Depends on the context", "None of the above"],
    answer: 1,
  },
];

let timer = 60;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
const startQuiz = () => {
  document.querySelector(".intro-container").hidden = true;
  document.querySelector(".question-container").hidden = false;
  timer = 60;
  startTimer();
  displayQuestion();
};

const displayQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.addEventListener("click", () => handleAnswer(index));
    choicesDiv.appendChild(button);
  });
};

const handleAnswer = (index) => {
  if (index === questions[currentQuestionIndex].answer) {
    score++;
  } else {
    timer -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
};

const endQuiz = () => {
  clearInterval(timerInterval);
  document.querySelector(".question-container").hidden = true;
  document.querySelector(".final-score-container").hidden = false;
  document.getElementById("final-score").innerText = score;
};

const saveScore = () => {
  const initials = document.getElementById("initials").value;
  if (initials === '') return; // Prevent saving empty initials
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  const newScore = { initials, score };

  highScores.push(newScore);
  highScores.sort((a, b) => b.score - a.score);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/highscores.html");
};

const startTimer = () => {
  const timerDiv = document.getElementById("timer");

  const countdown = () => {
    timer--;
    timerDiv.innerText = `Time left: ${timer}`;

    if (timer <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  };

   timerInterval = setInterval(countdown, 1000);
};

document.getElementById("start-quiz").addEventListener("click", startQuiz);
document.getElementById("submit-score").addEventListener("click", saveScore);
