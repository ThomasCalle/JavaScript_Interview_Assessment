
const questions = [
    {
      question: 'What is the primary purpose of a Web API?',
      choices: [
        'A. To design web pages',
        'B. To facilitate communication between client and server',
        'C. To optimize search engine results',
        'D. To secure websites from hackers',
      ],
      answer: 'B',
    },
    {
      question: 'Which protocol is commonly used for Web APIs?',
      choices: [
        'A. FTP',
        'B. SMTP',
        'C. HTTP',
        'D. IMAP',
      ],
      answer: 'C',
    },
    {
      question: 'What does REST stand for in the context of Web APIs?',
      choices: [
        'A. Reliable Event Sourcing Technology',
        'B. Request-Event-Source-Transfer',
        'C. Representational State Transfer',
        'D. Recursive Standard Transmission',
      ],
      answer: 'C',
    },
    {
      question: 'Which of the following HTTP methods is typically used to update a resource in a RESTful API?',
      choices: [
        'A. GET',
        'B. POST',
        'C. PUT',
        'D. DELETE',
      ],
      answer: 'C',
    },
    {
      question: 'What data format is most commonly used for exchanging data in Web APIs?',
      choices: [
        'A. CSV',
        'B. JSON',
        'C. XML',
        'D. HTML',
      ],
      answer: 'B',
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
