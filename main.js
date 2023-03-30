//Get DOM Elms

const letters = document.querySelectorAll(".letter");
const userInput = document.getElementById("userInput");

//Buttons
const guessWordBtn = document.getElementById("guessWordBtn");
const startNewGameBtn = document.getElementById("startNewGame");
let score = document.getElementById("score");

//Declaring variables
let randomWord = "";
let attemptNum = 0;
let newScore = 0;

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
    return guessedWord;
  } else {
    alert(`${guessedWord} is not a valid word. Please try again.`);
  }
}

//Testing characters - Game logic
function checkGuessedWord(guessedWord) {
  userInput.value = "";

  if (guessedWord === randomWord) {
    document.getElementById("guessWordBtn").disabled = true;
    //Confetti sourced from https://www.kirilv.com/canvas-confetti/
    // confetti();
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    newScore = newScore + 1;
  }

  for (let index = 0; index < 5; index++) {
    //character is right and in the right position
    if (guessedWord[index] === randomWord[index]) {
      const squareToUpdate = document.querySelector(
        `.row${attemptNum}.letter${index + 1}`
      );
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
function initialiseBoard(event) {
  document.getElementById("guessWordBtn").disabled = false;
  userInput.value = "";
  if (!event) {
    //initialise board for the first time
    generateRandomWord();
    console.log(randomWord);
  } else {
    //response to the click event
    event.preventDefault();
    attemptNum = 0;
    generateRandomWord();
    console.log(randomWord);
    for (let letter of letters) {
      letter.classList.remove("rightLetter", "kindaRightLetter", "wrongLetter");
      letter.textContent = "";
    }
  }
}

//Update Score
function updateScore() {
  score.innerText = newScore;
  return newScore;
}

//Attempt Number
function attemptTracker(guessedWord) {
  if (attemptNum === 5 && randomWord !== guessedWord) {
    document.getElementById("guessWordBtn").disabled = true;
    alert("You lost");
  } else if (attemptNum === 5) {
    document.getElementById("guessWordBtn").disabled = true;
  }
}

//Main function for the game
function onGuessWordBtnClick(event) {
  event.preventDefault();
  let sanitisedGuess = sanitise();
  checkGuessedWord(sanitisedGuess);
  updateScore();
  attemptTracker(sanitisedGuess);
}

//Add Event Listeners
// document.querySelector("form").addEventListener("submit", onGuessWordBtnClick);
guessWordBtn.addEventListener("click", onGuessWordBtnClick);
startNewGameBtn.addEventListener("click", initialiseBoard);

//Calling funtions
updateScore();
initialiseBoard();
