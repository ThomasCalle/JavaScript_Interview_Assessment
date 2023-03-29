const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScores.sort((a,b)=>a-b)

const leaderBoards = document.getElementById("leaderboard_tracker");
highScores.forEach(score => {
    const listItem = document.createElement("li");
    listItem.textContent = `name: ${score.initials} score: ${score.score}`;
    leaderBoards.appendChild(listItem);
});