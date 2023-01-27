// WHEN I click the start button
// attach an event listener to the start button listening for a click to start the game
var startButton = document.querySelector(".start");

startButton.addEventListener("click", function() {
    
    // The click runs a function to start a timer and presente a question to user
for (var i = 0; i < questionsAndAnswers.length; i++) {
    console.log(questionsAndAnswers[i].question);
}
})


// WHEN I answer a question
// display right or wrong
//sound plays if right or wrong
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