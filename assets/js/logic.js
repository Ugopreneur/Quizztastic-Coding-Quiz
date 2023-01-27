// attach an event listener to the start button listening for a click to start the game
var startButton = document.querySelector(".start");

// WHEN I click the start button, run a function to start the game
startButton.addEventListener("click", function() {

    // remove default page content
    var startScreen = document.querySelector("#start-screen");
    startScreen.classList.add("hide");
    // start a timer
    // set index of question to start game with
    // reset all scores to zero
    
    // Run a function to present next question to user
    

    
    // display question index[i]
    // WHEN I answer a question
    // display right or wrong at bottom
    // sound plays if right or wrong
    // remove current question
    // THEN I am presented with another question
})




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

//a function to present next question to user

// populate view with next question
// pupolate the answer buttons with the answers associated with that question
// quizQuestions[currentQuestionIndex].answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;
//     button.setAttribute("class", "btn btn-outline-info");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     // attaching an event listener for when the user clicks an answer
//     button.addEventListener("click", selectAnswer);
//     answerButtonsDiv.appendChild(button);
//   });