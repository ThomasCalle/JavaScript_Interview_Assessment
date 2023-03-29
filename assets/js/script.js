// Welcome to my JavaScript - Thomas Calle
// Java Script timer
max_time = 60;
time_remaining = max_time
time_reduction = 5;
score = 0;

quiz_start = false;
quiz_complete = false;
// When user clicks start button intialize quiz variables
document.getElementById('start_button').onclick = function() {
  quiz_start = true;
  quiz_complete = false;
  score = 0;
  time_remaining = max_time;
}
var questions = [//Assesment Q & A  🥸
  {
    question: "Q1: JavaScript has a Boolean data type. It can only take the values of: true or false? … is this (true or false)",
    answer: "true"
  },
  {
    question: "Q2: In JavaScript these are all of following conditional statements:“if”, “else”, “switch”? (true or false)",
    answer: "false"
  },
  {
    question: "Q3: Is SOAP an API? (true or false)",
    answer: "true"
  },
  {
    question: "Q4: JavaScript is placed into the HTML element “<script>”? (true or false)",
    answer: "true"
  },
  {
    question: "Q5: JavaScript is a markup language? (true or false)",
    answer: "false"
  }
];
leaderboard = [];
// This presents user with question prompts for quiz and keeps track of score//
setInterval (function() { 
  if (quiz_start == true) { //Only run when the user has clicked the start button//
    quiz_start = false;
    start_time = new Date();
    for (var i = 0; i < questions.length; i++) {
      // time tracker estimates the remaining time
      curr_time = new Date();
      time_diff = curr_time - start_time;
      time_remaining = max_time - Math.round(time_diff / 1000) // ms to seconds
      if (time_remaining < 0) {
        time_remaining = 0;
      }
      if (time_remaining > 0) { // check if timer is still running 
        var userAnswer = prompt("Time remaining = " + time_remaining + " seconds\n\n" + questions[i].question);
        curr_time = new Date();
        time_diff = curr_time - start_time;
        time_remaining = max_time - Math.round(time_diff / 1000); // ms to seconds
        if (time_remaining < 0) {
          time_remaining = 0;
        }
        if (time_remaining == 0) {
          alert("Time's up!");
          break; // exit the loop if the time is up //
       }
        if (userAnswer == questions[i].answer) {
          // Correct answer section//
          score += 1; 
          alert("Correct!");
        } else {
          // Incorrect answer section
          time_remaining -= 5;
          if (time_remaining < 0) {
            time_remaining = 0;
          }
          alert("Incorrect. The correct answer is " + questions[i].answer);
        }
      }
    }
    // Reset variables when the quiz ends
    quiz_start = false;
    quiz_complete = true;
    time_remaining = 60;
    alert("You got " + score + " out of " + questions.length + " questions correct.");
    // Prompts user to asign their name to their given score into the leaderboard array
    user = prompt("Enter a leaderboard username:")
    leaderboard.push({Username: user, Score: score});
  }
}, 100);
//Sort and update leaderboard
setInterval (function() {
//Only run if the quiz has been completed once
 if (leaderboard.length > 0 && quiz_complete == true) {
    quiz_complete = false;
    //Make sure leader board is sorted by score
    is_sorted = false;
    while (is_sorted == false) {
     is_sorted = true;
      for (var i = 0; i < leaderboard.length - 1; i++) {
       first = leaderboard[i]
        second = leaderboard[i+1];
        if (second["Score"] > first["Score"]) {
          is_sorted = false;
          leaderboard[i] = second;
          leaderboard[i+1] = first;
        }
      }
    }
    //Format leaderboard HTML
    html_leaderboard = "1) " + leaderboard[0]["Username"] + " = " + leaderboard[0]["Score"];
    for (var i = 1; i < leaderboard.length; i++) {
      html_leaderboard += "<br>" + (i+1) + ") " + leaderboard[i]["Username"] + "=" + leaderboard[i]["Score"];
    }
    alert("Updating new leaderboard:\n" + html_leaderboard);
    document.getElementById('leaderboard').innerHTML = html_leaderboard;
  }
}, 100);








function startTimer() {
    
    secondsLeft = timer;    
        gameTime = setInterval(function() {
        timeDisplay.textContent = "TIME LEFT: " + secondsLeft;
        secondsLeft--;          
        if (secondsLeft <= 0) {
            clearInterval(gameTime);
            mainTitle.hidden = false;
            questionContent.hidden = true;
            rightWrong.hidden = true;
            mainTitle.textContent = "You ran out of time!";
            answerOptions.hidden = true;
            startButton.hidden = false;
        };
    }, 1000);
    startButton.hidden = true;
    mainTitle.hidden = true;
    questionContent.hidden = false;  
    answerOptions.hidden = false;
    rightWrong.hidden = false;
};