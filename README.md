# Wordle App

[**_You can play the game via this link_**](https://lyli127.github.io/wordle-app/)

This is the first project out 4 of for General Assembly Software Engineering Intensive Course.
<br/>
<br/>

---

## Technology used:
![HTML](https://github.com/lyli127/wordle-app/blob/main/images/html5-logo.png?sanitize=true&raw=true "HTML")
![CSS](https://github.com/lyli127/wordle-app/blob/main/images/css-logo.png?sanitize=true&raw=true "CSS")
![JavaScript](https://github.com/lyli127/wordle-app/blob/main/images/javascript-logo.png?sanitize=true&raw=true "JavaScript")

<br/>

## Requirements

The game needs to have winning and losing logic and must use Javascript for DOM manipulation.
Students could choose to change things up and create a different version of Wordle. Due to the limited time to tackle this project I decided to stick with the classic Wordle version. This meant the main Wordle, look, feel and playability were already defined and I could focus on coding as opposed to getting distracted by other problems.

## Main Approach

I chose to use forms for the buttons and inputs as they have enough attributes to cater for some of the requirements, such as minimum and maximum characters, pattern and input type.

For the CSS part of the project I chose to work with Grid as the traditional Wordle game looks is a grid like layout.

For the game logic and general functionality I have used vanilla JavaScript. To make the logic easier to debug I chose to create many helper functions. One of the main issues I encountered was the page reloading at the submition of the form, which is the default behaviour. I had to prevent default to allow the page to remain static and not reload.

Another main problem I had to tackle was targeting the correct divs to show the guessed letter which was done dynamically with loops and interpolation.
