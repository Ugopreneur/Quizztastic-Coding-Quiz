// fetch scores from local storage
var scoreBoardString = localStorage.getItem("scoreBoardString");

// convert the string of scores gotten from local storage into an array
var allScoresArray = JSON.parse(scoreBoardString);

// determine where score board will be built in user's view
var scoreBoard = document.querySelector("#highscores");

buildScoreboard();

// give 'clear highscores' button the ability to clear local storage
var clearScoresButton = document.querySelector("#clear");
clearScoresButton.addEventListener("click", clearStorage);


// function to populate the scoreboard
function buildScoreboard() {
    // if there were no previous scores, let the user know, but if there are, build the scoreboard into view
    if (allScoresArray === null) {

        var scoreBoardListItem = document.createElement("ol");
        scoreBoardListItem.textContent = "There are no scores to display. Go play some games!";
        scoreBoard.appendChild(scoreBoardListItem);

    } else {
        // build the scoreboard by looping through the array of scores from local storage
        for (i = 0; i < allScoresArray.length; i++) {

            var scoreBoardListItem = document.createElement("li");
            scoreBoardListItem.textContent = allScoresArray[i].playerInitials + " - " + allScoresArray[i].playerScore;
            scoreBoard.appendChild(scoreBoardListItem);

        };
    };
};


// function thaty clears high scores and displays "There are no scores ..."
function clearStorage() {
    scoreBoard.innerHTML = "There are no scores to display. Go play some games!";
    localStorage.clear(scoreBoardString);
}






