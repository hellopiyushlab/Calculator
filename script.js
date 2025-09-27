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

// CHECK OPERATOR AND CALL ARITHEMATIC FUNCTION
// function operate
function operate(firstNum, operator, secondNum) {
    if(operator === "+") {
        return add(Number(firstNum), Number(secondNum));
    } else if (operator === "-") {
        return subtract(Number(firstNum), Number(secondNum));
    } else if (operator === "*") {
        return multiply(Number(firstNum), Number(secondNum));
    } else if (operator === "/") {
        return divide(Number(firstNum), Number(secondNum));
    } else {
        alert("invalud operator!");
    }
}

let firstNum =  '';
let operator =  '';
let secondNum = '';


const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(
    (numberButton) => numberButton.addEventListener(
        "click",
        (e) =>  {
            // executes when a number is pressed
        }
    )
);

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(
    (operatorButton) => operatorButton.addEventListener(
        "click",
        (e) => {
            // executes when an operator is pressed
        }
    )
);

const equalsToButton = document.querySelector("#equalsTo");
equalsToButton.addEventListener("click", (e) => {
    // executes when = is pressed
});