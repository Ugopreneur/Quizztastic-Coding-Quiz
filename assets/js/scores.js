// fetch scores from local storage
var scoreBoardString = localStorage.getItem("scoreBoardString");

// convert the string of scores gotten from local storage into an array
var allScoresArray = JSON.parse(scoreBoardString);

// determine where score board will be built in user's view
var scoreBoard = document.querySelector("#highscores");

// build the scoreboard by looping through the array of scores from local storage
for (i = 0; i < allScoresArray.length; i++) {

    var scoreBoardListItem = document.createElement("li");
    scoreBoardListItem.textContent = allScoresArray[i].playerInitials + " - " + allScoresArray[i].playerScore;
    scoreBoard.appendChild(scoreBoardListItem);

};






