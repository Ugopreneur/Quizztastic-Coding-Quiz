var scoreBoardArray;

var scoreBoard = document.querySelector("#highscores");

// declaring a variable to hold a string of all old game scores
var oldScores = localStorage.getItem("scoreBoardString");

// if there were no old scores, create a new array, but if there are, capture them into an array
if (oldScores === null) {
    scoreBoardArray = [];
} else {
    scoreBoardArray = JSON.parse(oldScores);
};

for (i = 0; i < scoreBoardArray.length; i++) {

    var scoreBoardListItem = document.createElement("li");
    scoreBoardListItem.textContent = scoreBoardArray[i].playerInitials + " - " + scoreBoardArray[i].playerScore;
    scoreBoard.appendChild(scoreBoardListItem);

}

function updateScoreBoardArray(scoreBoardEntry) {
    scoreBoardArray.push(scoreBoardEntry);
}






