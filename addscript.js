let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right";
let tryAgainMessage = "Please try Again!";

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumber.textContent = Math.ceil(firstRandomNumber);
    secondNumber.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userInputElement.value = "";

}

restartGame()

function checkResult() {
    let firstRandomInteger = parseInt(firstNumber.textContent);
    let secondRandomInteger = parseInt(secondNumber.textContent);
    let userEnteredSum = parseInt(userInputElement.value);

    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

    if (userEnteredSum === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}