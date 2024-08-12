function add(num1, num2) {
    return num1 + num2;
}


function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(number1, operator, number2) {
    if (operator === '+') {
        add(number1, number2);
    } else if (operator === '-') {
        subtract(number1, number2);
    } else if (operator === '*') {
        multiply(number1, number2);
    } else if (operator === '/') {
        divide(number1, number2);
    }
}

let firstNumber, operator, secondNumber;

let inputNumbers = document.querySelector('inputNumbers');