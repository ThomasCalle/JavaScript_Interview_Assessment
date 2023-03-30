// Define quiz questions, choices, and answers
const questions = [
  {
    question: "What is the primary purpose of a Web API?",
    choices: [
      "A. To design web pages",
      "B. To facilitate communication between client and server",
      "C. To optimize search engine results",
      "D. To secure websites from hackers",
    ],
    answer: "B",
  },
  {
    question: "Which protocol is commonly used for Web APIs?",
    choices: ["A. FTP", "B. SMTP", "C. HTTP", "D. IMAP"],
    answer: "C",
  },
  {
    question: "What does REST stand for in the context of Web APIs?",
    choices: [
      "A. Reliable Event Sourcing Technology",
      "B. Request-Event-Source-Transfer",
      "C. Representational State Transfer",
      "D. Recursive Standard Transmission",
    ],
    answer: "C",
  },
  {
    question:
      "Which of the following HTTP methods is typically used to update a resource in a RESTful API?",
    choices: ["A. GET", "B. POST", "C. PUT", "D. DELETE"],
    answer: "C",
  },
  {
    question:
      "What data format is most commonly used for exchanging data in Web APIs?",
    choices: ["A. CSV", "B. JSON", "C. XML", "D. HTML"],
    answer: "B",
  },
];
// This code initializes the variables for the timer, the current question index, and the score.
let timer = 60;
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
// This function starts the quiz by hiding the intro container and displaying the question container.
// It also resets the timer and displays the first question.
const startQuiz = () => {
  document.querySelector(".intro-container").hidden = true;
  document.querySelector(".question-container").hidden = false;
  timer = 60;
  startTimer();
  displayQuestion();
};
// This function displays the current question and its answer choices.
// It also adds a click event listener to each answer choice button.
const displayQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  // loop through each answer choice in the current question object and create a button element for each one
  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.addEventListener("click", () => handleAnswer(index));
    choicesDiv.appendChild(button);
  });
};

// This function handles the user's answer to the current question.
// It updates the score and timer variables based on the answer, and displays the next question or ends the quiz if there are no more questions.
const handleAnswer = (index) => {
  if (questions[currentQuestionIndex].choices[index][0] === questions[currentQuestionIndex].answer) {
    score++;
  } else {
    timer -= 10;
  }
  // move on to the next question
  currentQuestionIndex++;

  // This function ends the quiz by stopping the timer, hiding the question container, and displaying the final score container.
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
};
// This function ends the quiz by stopping the timer, hiding the question container, and displaying the final score container.
const endQuiz = () => {
  clearInterval(timerInterval);
  document.querySelector(".question-container").hidden = true;
  document.querySelector(".final-score-container").hidden = false;
  document.getElementById("final-score").innerText = score;
};
// This function saves the user's score and initials to local storage.
const saveScore = () => {
  const initials = document.getElementById("initials").value;
  if (initials === "") return; // Prevent saving empty initials
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  const newScore = { initials, score };

  highScores.push(newScore);
  highScores.sort((a, b) => b.score - a.score);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("./highscores.html");
};
// Function to start the timer countdown
const startTimer = () => {
  const timerDiv = document.getElementById("timer");

  const countdown = () => {
    timer--; // decrement the timer by 1 second
    timerDiv.innerText = `Time left: ${timer}`;
    // if the timer reaches 0 or less
    if (timer <= 0) {
      // stop the timer countdown
      clearInterval(timerInterval);
      // end the quiz
      endQuiz();
    }
  };

  timerInterval = setInterval(countdown, 1000);
};
// Event listeners for starting the quiz and submitting the score
document.getElementById("start-quiz").addEventListener("click", startQuiz);
document.getElementById("submit-score").addEventListener("click", saveScore);
