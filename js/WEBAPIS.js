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

var questions = [
  {
    question: "API stands for Application Programming Interface? (yes/no)",
    answer: "yes"

  },

  {
    question: "Web API's were originally made as a mistake so the german creater could go walk his do? (yes/no)",
    answer: "no"

  },

  {
    question: "Is SOAP an API? (yes/no)",
    answer: "yes"

  },

  {
    question: "XML stands for the following: eXtensible Markup Language (yes/no)",
    answer: "yes"

  },

  {
    question: "API's connect with assets/databases to access required informtaion/data and send to the app? (yes/no)",
    answer: "yes"

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
      html_leaderboard += "<br>" + (i+1) + ") " + leaderboard[i]["Username"] + " = " + leaderboard[i]["Score"];
    }
    alert("Updating new leaderboard:\n" + html_leaderboard);
    document.getElementById('leaderboard').innerHTML = html_leaderboard;
  }
}, 100);