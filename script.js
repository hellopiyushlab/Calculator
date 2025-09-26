// ARITHMETIC FUNCTIONS

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

var firstNum =      2.333222323222;
var secondNum =     3.4442234;
var operator =      "+";

const firstNumDisplay =     document.querySelector("#firstNum");
const operatorDisplay =     document.querySelector("#operator");
const secondNumDisplay =    document.querySelector("#secondNum");

firstNumDisplay.textContent =   `${firstNum}`;
operatorDisplay.textContent =   `${operator}`;
secondNumDisplay.textContent =  `${secondNum}`;
