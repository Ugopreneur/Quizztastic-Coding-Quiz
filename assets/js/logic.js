// DECLARING VARIABLES & DOM ELEMENTS FOR USE IN THE GLOBAL SCOPE
// ===========================================================================

// establishing the starting index in the questionsAndAnswers array
var questionIndex = 0;
// declaring the total time allowed for the game
var timeLeft = 76;
// declaring game timer variable so it can be stopped by multiple funtions
var timerInterval;
var timeEl = document.querySelector("#time");
var startButton = document.querySelector(".start");
var feedbackDiv = document.querySelector("#feedback");
var possibleAnswersDiv = document.getElementById("choices");
var questionScreen = document.querySelector("#questions");
var gameOverScreen = document.querySelector("#end-screen");



//MAIN GAME LOGIC STARTS HERE
// ===========================================================================

// WHEN I click the start button, run a function to start the game
startButton.addEventListener("click", function() {

    // remove default 'start screen' content from view
    var startScreen = document.querySelector("#start-screen");
    startScreen.classList.add("hide");
    // allow questions to show in view
    questionScreen.classList.remove("hide");
    // Run a function to start the game timer
    startTimer();
    // set index of question to start game with
    questionIndex = 0;
    // reset all scores to zero??
    
    // Run a function to present next question to user
    displayNextQuestion();
    
});




// ALL FUNCTIONS DECLARED BELOW:
// ===========================================================================

// a function to start the game timer
function startTimer() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        // Stops timer at zero
        clearInterval(timerInterval);
        // Send user to game over screen 
        gameOver();
      }
    }, 1000);
}


// a function to display the next question to user
function displayNextQuestion() {

    if (questionIndex < questionsAndAnswers.length) {

        // clear out any answer buttons left from previous question
        possibleAnswersDiv.innerHTML = "";
        // populate view with next question
        var questionOnDisplay = document.querySelector("#question-title");
        questionOnDisplay.textContent = questionsAndAnswers[questionIndex].questionText;
        // populate the answer buttons with the answers associated with that question
        questionsAndAnswers[questionIndex].possibleAnswers.forEach((i) => {
            
            console.log(i); // logs in console just to check that my forEach loop works as intended
            var answerButton = document.createElement("button");
            // put a number before the text on each button
            answerButton.textContent = questionsAndAnswers[questionIndex].possibleAnswers.indexOf(i)+1 + ". " + i.answerText;
            possibleAnswersDiv.appendChild(answerButton);
            // add a data attribute of correct or incorrect (true or false) to each button
            answerButton.dataset.correct = i.correct;
            // attaching an event listener for when the user clicks an answer
            answerButton.addEventListener("click", correctnessChecker);

        }) 

    } else {
    
        gameOver();

    };
};


// a function to check if the users answer is correct and move to next question
function correctnessChecker(event) {

    var answerChosen = event.target;
    feedbackDiv.classList.remove("hide");
    // if statements to check whether answer is correct or wrong
    if (answerChosen.dataset.correct === "true") {
        // displays text "Correct! at the bottom of page if user selects the right answer"
        feedbackDiv.textContent = "Correct!"
        // plays positive chime to indicate user was right
        var correctaudio = new Audio("./assets/sfx/correct.wav");
        (function() {correctaudio.play();})();
    } else {
        // displays text "Wrong! at the bottom of page if user selects the wrong answer"
        feedbackDiv.textContent = "Wrong!"
        // plays negative chime to indicate user was wrong
        var wrongaudio = new Audio("./assets/sfx/incorrect.wav");
        (function() {wrongaudio.play();})();
        // deduct 10 seconds off the timer but dont let it go below zero
        if (timeLeft > 10) {
            timeLeft = timeLeft-10;
        } else {
            timeLeft = 0;
            // Send user to game over screen
            gameOver();
        }
    }
    // immediately display next question
    questionIndex++;
    displayNextQuestion();
    // remove the "Correct!" or "Wrong!" notification at the bottom of the page after 2 seconds
    setTimeout(() => {
        feedbackDiv.classList.add("hide");
        }, 2000);
};


// a function to end the game
function gameOver() {

    // stop the timer
    clearInterval(timerInterval);
    // remove the questions screen from view
    questionScreen.classList.add("hide");
    // display  game Over screen
    gameOverScreen.classList.remove("hide");
    // show user their final score
    var finalscore = document.querySelector("#final-score");
    finalscore.textContent = timeLeft;

    // THEN I can save my initials and score (write to local storage from this logic file)
    var submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        // create scoreboard record as an object from submission
        var playerInitials = document.querySelector("#initials")
        var leaderBoardEntry = {
            playerInitials: playerInitials.value.trim(),
            playerScore: timeLeft,
        };
        
        feedbackDiv.classList.remove("hide");
        if (leaderBoardEntry.playerInitials === "") {
            feedbackDiv.style.color = "red";
            feedbackDiv.textContent = "Initials cannot be left blank!";
        } else {
            feedbackDiv.style.color = "green";
            feedbackDiv.textContent = "Score recorded succesfully!";
        };
        setTimeout(() => {
            feedbackDiv.classList.add("hide");
            }, 2000);

    
    });

};





// Clicking on image opens a new window containing the image
// adapt this for viewing high scores page
// carousel.addEventListener("click", function() {
//     window.location.href = images[index]; // this shoudl  be a url
//   });