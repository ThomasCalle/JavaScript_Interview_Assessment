timer = 60;
time_reduction = 0;

runTimer = false;

document.getElementById('start_button').onclick = function() {

  runTimer = true;

}

document.getElementById('wrong_answer_button').onclick = function() {

 time_reduction = 5;

}
// ensure to change buttons and adjust other appropriate fields
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