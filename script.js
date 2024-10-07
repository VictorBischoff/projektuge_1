// find elementer i html fil og lav variabler
// Valider brugerens input
// lav funktion til at finde et tilfældigt tal og matche det brugerens input
const userNumberInput = document.querySelector('.guess');

// check button 
const userNumberButton = document.querySelector('.check');

// get the score from the html element 
let userScore = document.querySelector('.score');
// convert the score to a Number
let currentUserScore = parseInt(userScore.innerHTML);

let highScore = document.querySelector('.highscore');
let currentHighScore = parseInt(highScore.innerHTML);
// again! button
const againButton = document.querySelector('.again');

const topNumber = document.querySelector('.number');

let randNumber = Math.floor(Math.random() * (21 - 1) + 1);
console.log(randNumber);

function validateUserInput(userInput) {
  if (userInput > 0 && userInput < 21) {
    return true;
  } else {
    return false;
  }
}

function clearInputField(element) {
  element.value = '';
}

function updateHighScore(currentScore, currentHigh) {
  if (currentHigh < currentScore) {
    currentHigh = currentScore;
    highScore.innerHTML = currentHigh;
  }
}

function checkUserNumber(userInputCheck) {
  if (validateUserInput(userInputCheck) === true) {
    if (userInputCheck != randNumber) {
      currentUserScore -= 1;
      userScore.innerHTML = currentUserScore;
      clearInputField(userNumberInput);
    } else {
      updateHighScore(currentUserScore, currentHighScore)
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
