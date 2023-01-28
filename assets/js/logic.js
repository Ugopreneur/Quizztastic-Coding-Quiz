// DECLARING VARIABLES FOR USE IN THE GLOBAL SCOPE

// attaching an event listener to the start button listening for a click to start the game
var startButton = document.querySelector(".start");
// establishing the starting index in the questionsAndAnswers array
var questionIndex = 0




//MAIN GAME LOGIC STARTS HERE ...

// WHEN I click the start button, run a function to start the game
startButton.addEventListener("click", function() {

    // remove default 'start screen' content from view
    var startScreen = document.querySelector("#start-screen");
    startScreen.classList.add("hide");
    // allow questions to show in view
    var questionScreen = document.querySelector("#questions");
    questionScreen.classList.remove("hide");
    // start a timer
    // set index of question to start game with
    questionIndex = 0
    // reset all scores to zero
    
    // Run a function to present next question to user
    displayNextQuestion();
    
});

    // WHEN I answer a question
    // display right or wrong at bottom
    // sound plays if right or wrong
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




// ALL FUNCTIONS DECLARED BELOW:

//a function to display the next question to user
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
        console.log(answerButton.dataset.correct);
        // attaching an event listener for when the user clicks an answer
        // answerButton.addEventListener("click", )
    
    });
}