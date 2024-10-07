// find elementer i html fil og lav variabler
// Valider brugerens input
// lav funktion til at finde et tilfældigt tal og matche det brugerens input

const userNumberButton = document.querySelector(".check");

let userScore = document.querySelector(".score");
let currentUserScore = parseInt(userScore.innerHTML);

const againButton = document.querySelector(".again");

let randNumber = Math.floor(Math.random() * 21);
console.log(randNumber);

function validateUserInput(userInput) {
  if (userInput > 0 && userInput < 21) {
    return true;
  } else {
    return false;
  }
}

function checkUserNumber(userInputCheck) {
  if (validateUserInput(userInputCheck) === true) {
    if (userInputCheck != randNumber) {
      alert("incorrect");
      currentUserScore -= 1;
      userScore.innerHTML = currentUserScore;
    } else {
      alert("correct");
    }
  } else {
    alert("Number must be between 0-20!");
  }

  againButton.addEventListener("click", () => {
    randNumber = Math.floor(Math.random() * 21);
    userScore.innerHTML = 0;
    currentUserScore = 0;
    console.log(randNumber);
  });
}

userNumberButton.addEventListener("click", () => {
  const userNumberInput = document.querySelector(".guess");
  const userNumber = Number(userNumberInput.value);
  checkUserNumber(userNumber);
});
