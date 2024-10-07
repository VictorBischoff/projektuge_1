// find elementer i html fil og lav variabler
// Valider brugerens input
// lav funktion til at finde et tilfældigt tal og matche det brugerens input

// get the input html element
const userNumberInput = document.querySelector('.guess');
// check button 
const userNumberButton = document.querySelector('.check');

// get the score from the html element 
let userScore = document.querySelector('.score');
// convert the score to a Number
let currentUserScore = parseInt(userScore.innerHTML);
// get highscore from html element
let highScore = document.querySelector('.highscore');
// convert the highscore to a Number
let currentHighScore = parseInt(highScore.innerHTML);
// again! button
const againButton = document.querySelector('.again');
// this element starts as a question mark, and should convert to winning number
const topNumber = document.querySelector('.number');

let randNumber = Math.floor(Math.random() * (21 - 1) + 1);
console.log(randNumber);
// validate that entered number is between 1 and 20
function validateUserInput(userInput) {
  if (userInput > 0 && userInput < 21) {
    return true;
  } else {
    return false;
  }
}
// helper function for clearing the input field
function clearInputField(element) {
  element.value = '';
}
// helper function to determine if a new highscore is to be set 
function updateHighScore(currentScore, currentHigh) {
  if (currentHigh < currentScore) {
    currentHigh = currentScore;
    highScore.innerHTML = currentHigh;
  }
}

function updateHtmlText(element, string) {
  element.innerHTML = `${string}`;
}

function checkUserNumber(userInputCheck) {
  if (validateUserInput(userInputCheck) === true) {
    if (userInputCheck != randNumber) {
      currentUserScore -= 1;
      userScore.innerHTML = currentUserScore;
      clearInputField(userNumberInput);
    } else {
      updateHighScore(currentUserScore, currentHighScore)
      updateHtmlText(topNumber, userNumberInput.value);
      clearInputField(userNumberInput);
      alert('You guessed the number!')
    }
  } else {
    alert('Number must be between 0-20!');
  }

  againButton.addEventListener('click', () => {
    randNumber = Math.floor(Math.random() * (21 - 1) + 1);
    userScore.innerHTML = 20;
    currentUserScore = 20;
    clearInputField(userNumberInput)
    console.log(randNumber);
  });
}

userNumberButton.addEventListener('click', () => {
  const userNumber = Number(userNumberInput.value);
  checkUserNumber(userNumber);
});
