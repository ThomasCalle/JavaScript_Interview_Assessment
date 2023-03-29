// Retrieve high scores from local storage and parse them; if none exist, use an empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Sort the high scores in ascending order
highScores.sort((a, b) => a - b);

// Get the leaderboard_tracker element from the HTML
const leaderBoards = document.getElementById("leaderboard_tracker");

// Loop through each high score in the sorted array
highScores.forEach(score => {
    // Create a new list item element for the current score
    const listItem = document.createElement("li");

    // Set the content of the list item to display the name and score
    listItem.textContent = `name: ${score.initials} score: ${score.score}`;

    // Append the list item to the leaderboard_tracker element
    leaderBoards.appendChild(listItem);
});