// Get html elements 
const userNumberInput = document.querySelector('.guess');
const userNumberButton = document.querySelector('.check');
const userScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const againButton = document.querySelector('.again');
const topNumber = document.querySelector('.number');
const guessMessage = document.querySelector(".message");

// Global variables
let currentUserScore = parseInt(userScore.innerHTML);
let currentHighScore = parseInt(highScore.innerHTML);
let guessedNumbers = [];
let randNumber = generateRandomNumber();

// Utility function to generate a random number between 1 and 20
function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

// Validate that entered number is between 1 and 20
function validateUserInput(userInput) {
  return userInput > 0 && userInput <= 20;
}

// Utility function to clear input field
function clearInputField(element) {
  element.value = '';
}

// Update scores 
function updateScore() {
  userScore.innerHTML = currentUserScore;
}

function updateHighScore() {
  if (currentUserScore > currentHighScore) {
    currentHighScore = currentUserScore;
    highScore.innerHTML = currentHighScore;
  }
}

// Update HTML text content
function updateHtmlText(element, string) {
  element.innerHTML = string;
}

// Display guessed numbers
function displayGuesses(guessesList) {
  guessMessage.innerHTML = guessesList.join(' ');
}

// Reset the game
function resetGame() {
  randNumber = generateRandomNumber();
  currentUserScore = 20;
  updateScore();
  updateHtmlText(topNumber, "?");
  guessedNumbers = [];
  updateHtmlText(guessMessage, "Start guessing...");
  clearInputField(userNumberInput);
}

// Main logic 
function checkUserNumber(userInputCheck) {
  if (!validateUserInput(userInputCheck)) {
    alert('Number must be between 1 and 20!');
    return;
  }

  if (userInputCheck !== randNumber) {
    currentUserScore--;
    updateScore();
  } else {
    updateHighScore();
    updateHtmlText(topNumber, userInputCheck);
    alert('You guessed the number!');
  }

  clearInputField(userNumberInput);
}

// Event Listeners
userNumberButton.addEventListener('click', () => {
  const userNumber = Number(userNumberInput.value);
  if (validateUserInput(userNumber)) {
    guessedNumbers.push(userNumber);
  };
  displayGuesses(guessedNumbers);
  checkUserNumber(userNumber);
});

againButton.addEventListener('click', resetGame);
