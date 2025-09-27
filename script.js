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
    if (secondNum === 0) {
        alert("💀 bro is an idiot");
    } else {
        return firstNum / secondNum;
    }
}

// CHECK OPERATOR AND CALL ARITHEMATIC FUNCTION
// function operate
function operate(firstNum, operator, secondNum) {
    if(operator === "+") {
        return add(Number(firstNum), parseNumber(secondNum));
    } else if (operator === "-") {
        return subtract(Number(firstNum), parseNumber(secondNum));
    } else if (operator === "x") {
        return multiply(Number(firstNum), parseNumber(secondNum));
    } else if (operator === "/") {
        return divide(Number(firstNum), parseNumber(secondNum));
    } else {
        alert("invalud operator!");
    }
}

// initial values
let firstNum =  '';
let operator =  '';
let secondNum = '';

let oldOperator = '';

// displays
let firstNumDisplay = document.querySelector("#firstNum");
let secondNumDisplay = document.querySelector("#secondNum");
let operatorDisplay = document.querySelector("#operator");

// to hide the classes in the beginning
operatorDisplay.classList.add("hidden");
secondNumDisplay.classList.add("hidden");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(
    (numberButton) => numberButton.addEventListener(
        "click",
        (e) =>  {
            // executes when a number is pressed
            if (operator==='') {
                secondNumDisplay.classList.remove("hidden");
                // meaning: we are on first number
                // so, add the string number to first number
                firstNum = firstNum + e.target.textContent;
                // show it on display
                firstNumDisplay.textContent = firstNum;
                console.log(firstNum); // for debugging
            } else {
                secondNumDisplay.classList.remove("hidden");
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

            // only change the operator when secondNum is empty
            if (secondNum != '') {
                // when second number is not empty
                resultFuncTwo(oldOperator, e.target.textContent);
            } else {
                operatorDisplay.classList.remove("hidden");
                operator = e.target.textContent; // change the operator accordingly
                operatorDisplay.textContent = operator; // display it
                oldOperator = operator;
            }
        }
    )
);

// equals to button
const equalsToButton = document.querySelector("#equalsTo");
equalsToButton.addEventListener("click", resultFunc);

// delete button
const del = document.querySelector("#backspace");
del.addEventListener("click", () => {
    // when backspace is pressed
    if (secondNum === '' && operator === '') {
        firstNum = firstNum.slice(0,-1);
        firstNumDisplay.textContent = firstNum;
    } else if (secondNum === '') {
        operator = '';
        operatorDisplay.textContent = operator;
        operatorDisplay.classList.add("hidden");
    } else if (secondNum != '') {
        secondNum = secondNum.slice(0,-1);
        secondNumDisplay.textContent = secondNum;
    } else {
        alert("something went wrong!");
    }
});

// AC button
const clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("click", () => {
    firstNum =  '';
    secondNum = '';
    operator =  '';
    firstNumDisplay.textContent =   firstNum;
    secondNumDisplay.textContent =  secondNum;
    operatorDisplay.textContent =   operator;
    operatorDisplay.classList.add("hidden");
    secondNumDisplay.classList.add("hidden");
});

// result function for when = is pressed
function resultFunc() {
    // executes when = is pressed
    let result =    operate(firstNum, operator, secondNum); // calculate result
    firstNum =      result; // store the result in firstNum

    // change the second number and operator, and show everything
    secondNum =     '';
    operator =      '';
    firstNumDisplay.textContent =   firstNum;
    secondNumDisplay.textContent =  secondNum;
    operatorDisplay.textContent =   operator;

    secondNumDisplay.classList.add("hidden");
    operatorDisplay.classList.add("hidden");
}

// result function for when any operator is pressed 2nd time
function resultFuncTwo(oldOperator, newOperator) {

    secondNumDisplay.classList.remove("hidden");

    let oldOp =     oldOperator;
    let result =    operate(firstNum, oldOp, secondNum);
    firstNum =      result;
    
    // change the second number and operator, and show everything
    secondNum = '';
    operator = newOperator;
    firstNumDisplay.textContent =   firstNum;
    secondNumDisplay.textContent =  secondNum;
    operatorDisplay.textContent =   operator;
}


// to handle % 
function parseNumber(str) {
    if (str.endsWith("%")) {
        let a = Number(str.slice(0, -1)) / 100;
        return a * Number(firstNum);
    } else {
        return Number(str);
    }
}