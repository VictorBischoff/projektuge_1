// find elementer i html fil og lav variabler 
// Valider brugerens input
// lav funktion til at finde et tilfældigt tal og matche det brugerens input

const userNumberButton = document.querySelector('#btn');
const userNumberInput = document.querySelector('#guess');

function validateUserInput(userInput){
    if (userInput < 0 && userInput > 20){
        return "The number must be between 0-20!"
    } else {
        return userInput
    }

}

function checkUserNumber(){
    
}