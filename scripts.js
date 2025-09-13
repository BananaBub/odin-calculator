function checkIfNumber(num) {
    if(isNaN(parseFloat(num))) {
        return false;
    } else {
        return true;
    }
}

function add(a, b) {
    if(checkIfNumber(a) && checkIfNumber(b)) {
        return parseFloat(a) + parseFloat(b);
    } else {
        return "Please input a number";
    }
}

function subtract(a, b) {
    if(checkIfNumber(a) && checkIfNumber(b)) {
        return parseFloat(a) - parseFloat(b);
    } else {
        return "Please input a number";
    }
}

function multiply(a, b) {
    if(checkIfNumber(a) && checkIfNumber(b)) {
        return parseFloat(a) * parseFloat(b);
    } else {
        return "Please input a number";
    }
}

function divide(a, b) {
    if(checkIfNumber(a) && checkIfNumber(b)) {
        return parseFloat(a) / parseFloat(b);
    } else {
        return "Please input a number";
    }
}

let num1;
let num2;
let operand;

function operation(a, operation, b) {
    switch (operation) {
        case "+":
            return add(a, b);
        break;
        case "-":
            return subtract(a, b);
        break;
        case "*":
            return multiply(a, b);
        break;
        case "/":
            return divide(a, b);
        break;
        default:
            return "Input a valid operation";
        break;
    }
}

console.log(operation(1, "+", 4));

let buttonContainer = document.querySelector(".button-container");

for(let i = 1; i <= 20; i++) {
    let button = document.createElement("div");
    button.classList.add("button");

    buttonContainer.appendChild(button);
}