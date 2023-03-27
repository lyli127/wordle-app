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
//Get DOM Elms

const letters = document.querySelectorAll(".letter");
const userInput = document.getElementById("userInput");

//Buttons
const guessWordBtn = document.getElementById("guessWordBtn");
const resetGameBtn = document.getElementById("resetGame");
let score = document.getElementById("score");

//Declaring variables
let randomWord = "";
let attemptNum = 0;
let newScore = 0;
// console.log(randomWord);
// console.log(attemptNum);
// console.log(newScore);
// console.log(generateRandomWord());
// console.log(sanitise("tooth"));
// console.log(guessedWord);

//Functions

function generateRandomWord() {
  randomWord = validWords[Math.floor(Math.random() * validWords.length)];
  return randomWord;
}

//User Input Sanitisation
function sanitise() {
  let guessedWord = userInput.value;
  if (
    guessedWord.length === 5 &&
    validWords.includes(guessedWord.toUpperCase())
  ) {
    guessedWord = guessedWord.toUpperCase();
    attemptNum = attemptNum + 1;
    console.log(guessedWord);
    return guessedWord;
  } else {
    alert(`${guessedWord} is not a valid word. Please try again.`);
  }
}

//Testing characters - Game logic
function checkGuessedWord(guessedWord) {
  // debugger;
  guessedWord = "ABASE";
  randomWord = "ABASE";
  console.log(guessedWord);
  if (guessedWord === randomWord) {
    confetti();
    newScore = newScore + 1;
  }

  for (let index = 0; index < 5; index++) {
    // debugger;
    //character is right and in the right position
    console.log(guessedWord[index]);
    if (guessedWord[index] === randomWord[index]) {
      const squareToUpdate = document.querySelector(
        `.row${attemptNum}.letter${index + 1}`
      );
      console.log(squareToUpdate);
      squareToUpdate.classList.add("rightLetter");
      squareToUpdate.innerText = guessedWord[index];
      //character is right and in the wrong position
    } else if (randomWord.includes(guessedWord[index])) {
      const squareToUpdate = document.querySelector(
        `.row${attemptNum}.letter${index + 1}`
      );
      squareToUpdate.classList.add("kindaRightLetter");
      squareToUpdate.innerText = guessedWord[index];
      //character is wrong
    } else {
      const squareToUpdate = document.querySelector(
        `.row${attemptNum}.letter${index + 1}`
      );
      squareToUpdate.classList.add("wrongLetter");
      squareToUpdate.innerText = guessedWord[index];
    }
  }
}

//Board Reset - Game Restart
function resetBoard(event) {
  event.preventDefault();
  // debugger;
  for (let letter of letters) {
    letter.classList.remove("rightLetter", "kindaRightLetter", "wrongLetter");
    letter.textContent = "";
  }
}

//Update Score
function updateScore() {
  score.innerText = newScore;
  return newScore;
}
updateScore();

//Main function for the game
function onGuessWordBtnClick(event) {
  event.preventDefault();
  generateRandomWord();
  console.log(randomWord);
  let sanitisedGuess = sanitise();
  // console.log(guessedWord);
  checkGuessedWord(sanitisedGuess);
  updateScore();
  console.log(newScore);
}

//Add Event Listeners
guessWordBtn.addEventListener("click", onGuessWordBtnClick);
// document.querySelector("form").addEventListener("submit", onGuessWordBtnClick);
resetGameBtn.addEventListener("click", resetBoard);
