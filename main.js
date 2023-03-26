/* 
//Get all elements from the DOM I want to manipulate each letter from each row
- get words array from GA
- get all letters
- get the user input value
- store attempts number which equals to valid button clicks with valid inputs
- store score value = 0 

//create any elements I'll need to show in the DOM

//grab random word from array with math.random math.floor

// Create function to sanitise user input
- check it it's exactly 5 letters
- make the letters uppercase 
- check if word exists in array, if not return invalid word message

//Create function to check attempt number
- On attempt number 5, the 'guess word' button must be disabled
- If onButton click attempt number = 5; then alert user has lost
- If onButton click attempt number < 5; then make sure to print the word in the next row

//Check if guessedWord === randomWord 
- if guessedWord === randomWord, then user wins and score ++ and print the word in green on the board
- if guessedWord character is included in randomWord but have != indexes then print letter in yellow on the board
- if guessedWord character index === randomWord character index then print letter in green on the board

//Create function (and button) to reset game/board but not the score (clearboard function)
- get every letter element and set text.content to empty string and clean up any added classes classes.remove("guessedWord");
- remove 'disabled' button attribute

//Set event listeners

*/
