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

const firstNum = '';
const operator = '';
const secondNum = '';
