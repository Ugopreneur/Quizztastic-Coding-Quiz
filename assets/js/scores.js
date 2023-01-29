// Read initials and scores from local storage from this scores js file
    var scoreBoardEntry = JSON.parse(localStorage.getItem("scoreBoardEntry"));
    
    var scoreBoard = document.querySelector("#highscores");

    var scoreBoardListItem = document.createElement("li");

    scoreBoardListItem.textContent = scoreBoardEntry.playerInitials + " - " + scoreBoardEntry.playerScore;
    scoreBoard.appendChild(scoreBoardListItem);
