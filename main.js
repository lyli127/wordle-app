/* 
//Get all elements from the DOM I want to manipulate each letter from each row
- get words array from GA ✓
- get all letters ✓
- get the user input value ✓
- store attempts number which equals to valid button clicks with valid inputs ✓
- store score value = 0 ✓

//create any elements I'll need to show in the DOM

//grab random word from array with math.random math.floor ✓

// Create function to sanitise user input
- check it it's exactly 5 letters ✓
- make the letters uppercase ✓
- check if word exists in array, if not return invalid word message ✓

//Create function to check attempt number
- On attempt number 5, the 'guess word' button must be disabled
- If onButton click attempt number = 5; then alert user has lost
- If onButton click attempt number < 5; then make sure to print the word in the next row

//Check if guessedWord === randomWord 
- if guessedWord === randomWord, then user wins and score ++ and print the word in green on the board
- if guessedWord character is included in randomWord but have != indexes then print letter in yellow on the board
- if guessedWord character index === randomWord character index then print letter in green on the board

//Create function (and button) to reset game/board but not the score (clearboard function)
- get every letter element and set text.content to empty string and clean up any added classes classes.remove("guessedWord"); ✓
- remove 'disabled' button attribute

//Set event listeners

*/
//Declaring variables
const letters = document.querySelectorAll(".letter");
let guessedWord = document.getElementById("userInput").value;
let score = document.getElementById("score");
let randomWord = "";

//Score and Attempt Num
let attemptNum = 0;
let newScore = 0;

function generateRandomWord() {
  randomWord = validWords[Math.floor(Math.random() * validWords.length)];
  return randomWord;
}

//User Input Sanitisation
function sanitise(guessedWord) {
  if (guessedWord.length === 5 && validWords.includes(guessedWord)) {
    guessedWord.toUpperCase();
    attemptNum = attemptNum + 1;
    return guessedWord;
  } else {
    alert(`${guessedWord} is not a valid word. Please try again.`);
  }
}

//Testing characters - Game logic
function checkGuessedWord(guessedWord) {
  if (guessedWord === randomWord) {
    confetti();
    newScore = newScore + 1;
    //print each guessedWord character in the correct row and letter space
  } else {
    //include other scenarios where character is wrong
    //character is right and in the right position
    //character is right and in the wrong position
  }
}

//Helper function for character checks
function isRightPosition() {
  for (let index = 0; index < 5; index++) {
    if (guessedWord[i] === randomWord[i]) {
      const squareToUpdate = document.getElementsByClassName(
        `.row${attemptNum}.letter${index + 1}`
      );
      squareToUpdate[i].classList.add("rightLetter");
      squareToUpdate[i].textContent = guessedWord[i];
    } else if (randomWord.includes(guessedWord[i])) {
      const squareToUpdate = document.getElementsByClassName(
        `.row${attemptNum}.letter${index + 1}`
      );
      squareToUpdate[i].classList.add("kindaRightLetter");
      squareToUpdate[i].textContent = guessedWord[i];
    } else {
      const squareToUpdate = document.getElementsByClassName(
        `.row${attemptNum}.letter${index + 1}`
      );
      squareToUpdate[i].classList.add("wrongLetter");
      squareToUpdate[i].textContent = guessedWord[i];
    }
  }
}

//Board Reset - Game Restart
function resetBoard() {
  for (let letter of letters) {
    letter.classList.remove("rightLetter", "kindaRightLetter", "wrongLetter");
    letter.textContent = "";
  }
}

//Update Score
function updateScore() {
  score.innerText = newScore;
}
updateScore();

//Main function for the game
function onGuessWordBtnClick() {
  resetBoard();
  generateRandomWord();
  sanitise(guessedWord);
  checkGuessedWord(guessedWord);
  updateScore();
}
//Add Event Listeners
guessWordBtn.addEventListener(onclick, onGuessWordBtnClick);
resetGameBtn.addEventListener(onclick, resetBoard);
