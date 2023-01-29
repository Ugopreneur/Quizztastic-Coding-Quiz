// DECLARING VARIABLES & DOM ELEMENTS FOR USE IN THE GLOBAL SCOPE

// establishing the starting index in the questionsAndAnswers array
var questionIndex = 0;
// declaring the total time allowed for the game
var timeLeft = 75;
var timeEl = document.querySelector("#time");
var startButton = document.querySelector(".start");



//MAIN GAME LOGIC STARTS HERE ...

// WHEN I click the start button, run a function to start the game
startButton.addEventListener("click", function() {

    // remove default 'start screen' content from view
    var startScreen = document.querySelector("#start-screen");
    startScreen.classList.add("hide");
    // allow questions to show in view
    var questionScreen = document.querySelector("#questions");
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

// a function to start the game timer
function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        // Stops timer at zero
        clearInterval(timerInterval);
        // Send user to game over screen
        
      }
  
    }, 1000);
  }


// a function to display the next question to user
function displayNextQuestion() {

    // populate view with next question
    var questionOnDisplay = document.querySelector("#question-title");
    questionOnDisplay.textContent = questionsAndAnswers[questionIndex].questionText;
    // populate the answer buttons with the answers associated with that question
    questionsAndAnswers[questionIndex].possibleAnswers.forEach((i) => {
        
        console.log(i); // logs in console just to check that my forEach loop works as intended
        var answerButton = document.createElement("button");
        // put a number before the text on each button
        answerButton.textContent = questionsAndAnswers[questionIndex].possibleAnswers.indexOf(i)+1 + ". " + i.answerText;
        possibleAnswersDiv = document.getElementById("choices");
        possibleAnswersDiv.appendChild(answerButton);
        // add a data attribute of correct or incorrect (true or false) to each button
        answerButton.dataset.correct = i.correct;
        // attaching an event listener for when the user clicks an answer
        answerButton.addEventListener("click", correctnessChecker);
    
    });
}

function correctnessChecker(event) {

    var answerChosen = event.target;
    // if statements to check whether answer is correct or wrong
    if (answerChosen.dataset.correct === "true") {
        console.log("Answer is correct! Your code works");
    } else {
        console.log("Something's not working right");
    }
    // if answer is correct, play correct sound, display "correct!"" at bottom (inside feedback div)
    // if answer is wrong, play wrong sound, display display "wrong!"" at bottom (inside feedback div), and then deduct 15 seconds from time
    // ensure timer cant go below zero
    // immediately display next question
    questionIndex++;
    displayNextQuestion();

}

    
    // remove current question
    // THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and score (write to local storage from this logic file)

// Clicking on image opens a new window containing the image
// adapt this for viewing high scores page
// carousel.addEventListener("click", function() {
//     window.location.href = images[index]; // this shoudl  be a url
//   });

//Look at the buttons in the css file to get a good idea of how to add things to your page