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
    } else if (operator === "x") {
        return multiply(Number(firstNum), Number(secondNum));
    } else if (operator === "/") {
        return divide(Number(firstNum), Number(secondNum));
    } else {
        alert("invalud operator!");
    }
}

// initial values
let firstNum =  '';
let operator =  '';
let secondNum = '';

// displays
let firstNumDisplay = document.querySelector("#firstNum");
let secondNumDisplay = document.querySelector("#secondNum");
let operatorDisplay = document.querySelector("#operator");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(
    (numberButton) => numberButton.addEventListener(
        "click",
        (e) =>  {
            // executes when a number is pressed
            if (operator==='') {
                // meaning: we are on first number
                // so, add the string number to first number
                firstNum = firstNum + e.target.textContent;
                // show it on display
                firstNumDisplay.textContent = firstNum;
                console.log(firstNum); // for debugging
            } else {
                // meaning: there is an operator
                // so, we add the string number to second number
                secondNum = secondNum + e.target.textContent;
                // show it on display
                secondNumDisplay.textContent = secondNum;
                console.log(secondNum); // for debugging
            }
        }
    )
);

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(
    (operatorButton) => operatorButton.addEventListener(
        "click",
        (e) => {
            // executes when an operator is pressed
            operator = e.target.textContent; // change the operator accordingly
            operatorDisplay.textContent = operator; // display it
        }
    )
);

const equalsToButton = document.querySelector("#equalsTo");
equalsToButton.addEventListener("click", (e) => {
    // executes when = is pressed
    let result = operate(firstNum, operator, secondNum); // calculate result
    firstNum = result; // store the result in firstNum

    // change the second number and operator, and show them
    secondNum = '';
    operator = '';
    firstNumDisplay.textContent = firstNum;
    secondNumDisplay.textContent = secondNum;
    operatorDisplay.textContent = operator;
});