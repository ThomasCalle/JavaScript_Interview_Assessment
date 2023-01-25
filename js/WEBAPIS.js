// // Java Script timer
// timer = 60;
// time_reduction = 0;

// runTimer = false;

// document.getElementById('start_button').onclick = function() {

//   runTimer = true;

// }

// document.getElementById('wrong_answer_button').onclick = function() {

//  time_reduction = 5;

// }
// // ensure to change buttons and adjust other appropriate fields
// setInterval (function() {

//   document.getElementById("timer_box").innerHTML = timer;

//   if (timer > 0 && runTimer == true) {

//     timer--;

//   }

// }, 1000);

// setInterval (function() {

//  timer = timer - time_reduction;

//   time_reduction = 0;

// }, 1);


// var questions = [
//   {
//       question: "API stands for Application Programming Interface?",
//       answer: true
//   },
//   {
//       question: "Web API's were originally made as a mistake so the german creater could go walk his do?",
//       answer: false
//   },
//   {
//       question: "Is SOAP an API?",
//       answer: true
//   },
//   {
//     question: "XML stands for the following: eXtensible Markup Language",
//     answer: true
//   },
//   {
//     question: "API's connect with assets/databases to access required informtaion/data and send to the app?",
//     answer: true
//   }
// ];

// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//   var userAnswer = prompt(questions[i].question);
//   if (userAnswer == questions[i].answer) {
//       score++;
//       alert("Correct!");
//   } else {
//       alert("Incorrect. The correct answer is " + questions[i].answer);
//   }
// }

// alert("You got " + score + " out of " + questions.length + " questions correct.");




// NEW SECTIOON //////////


// Java Script timer
timer = 60;
time_reduction = 0;

runTimer = false;

document.getElementById('start_button').onclick = function() {

  runTimer = true;

}

document.getElementById('wrong_answer_button').onclick = function() {

 time_reduction = 5;

}
// Ensure to change buttons and adjust other appropriate fields  - Thomas Calle note
setInterval (function() {

  document.getElementById("timer_box").innerHTML = timer;

  if (timer > 0 && runTimer == true) {

    timer--;

  }

}, 1000);

setInterval (function() {

 timer = timer - time_reduction;

  time_reduction = 0;

}, 1);

var questions = [
  {
      question: "API stands for Application Programming Interface?",
      answer: true
  },
  {
      question: "Web API's were originally made as a mistake so the german creater could go walk his do?",
      answer: false
  },
  {
      question: "Is SOAP an API?",
      answer: true
  },
  {
    question: "XML stands for the following: eXtensible Markup Language",
    answer: true
  },
  {
    question: "API's connect with assets/databases to access required informtaion/data and send to the app?",
    answer: true
  }
];

var score = 0;

for (var i = 0; i < questions.length; i++) {
  if (timer > 0) { // check if timer is still running 
    var userAnswer = prompt(questions[i].question);
    if (userAnswer == questions[i].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is " + questions[i].answer);
    }
  } else {
    alert("Time's up! Your final score is " + score + " out of " + questions.length + " questions correct.");
    break; // exit the loop if the time is up 
  }
}

if (timer > 0) { // If the loop has been completed before time is up
  alert("You got " + score + " out of " + questions.length + " questions correct.");
}
