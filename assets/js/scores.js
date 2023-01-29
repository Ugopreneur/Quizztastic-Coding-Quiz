

var scoreBoard = document.querySelector("#highscores");





for (i = 0; i < scoreBoardArray.length; i++) {

    var scoreBoardListItem = document.createElement("li");
    scoreBoardListItem.textContent = scoreBoardArray[i].playerInitials + " - " + scoreBoardArray[i].playerScore;
    scoreBoard.appendChild(scoreBoardListItem);

}






