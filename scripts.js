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

function operation(a, operation, b) {
    switch (operation) {
        case "+":
            return add(a, b);
        break;
        case "-":
            return subtract(a, b);
        break;
        case "x":
            return multiply(a, b);
        break;
        case "÷":
            if(parseFloat(b) === 0) {
                return "Don't crash this website, idiot! The answer is undefined!";
            }
            return divide(a, b).toFixed(10);
        break;
        default:
            return "Input a valid operation";
        break;
    }
}

let num1 = "";
let num2 = "";
let operand = "";
let phase = "initial";
let hasDecimal = false;

let buttons = Array.from(document.querySelectorAll(".button"));
let display  = document.querySelector(".display");

buttons.forEach((button) => button.addEventListener("click", function (e) {
    if(e.target.classList.contains("number") && phase === "initial") {
        num1 += e.target.textContent;
        display.textContent = num1;
    } else if(e.target.classList.contains("operand") && phase === "initial") {
        operand = e.target.textContent;
        phase = "final";
        hasDecimal = false;
    } else if(e.target.classList.contains("number") && phase === "final") {
        num2 += e.target.textContent;
        display.textContent = num2;
    } else if(e.target.classList.contains("operand") && phase === "final") {
        num1 = operation(num1, operand, num2);
        num2 = "";
        operand = e.target.textContent;
        display.textContent = num1;
        hasDecimal = false;
    } else if(e.target.classList.contains("decimal") && hasDecimal === false) {
        if(phase === "initial") {
            (num1 === "") ? num1 = `0.` : num1 += e.target.textContent;
            display.textContent = num1;
        } else {
            (num2 === "") ? num2 = `0.` : num2 += e.target.textContent;
            display.textContent = num2;
        }
        hasDecimal = true;
    } else if(e.target.classList.contains("equal")) {
        display.textContent = operation(num1, operand, num2);
        num1 = "";
        num2 = "";
        operand = "";
        phase = "initial";
        hasDecimal = false;
    } else if(e.target.classList.contains("clear")) {
        num1 = "";
        num2 = "";
        operand = "";
        phase = "initial";
        display.textContent = "";
        hasDecimal = false;
    } else if(e.target.classList.contains("backspace")) {
        (phase === "initial") ? (num1 = num1.slice(0, -1), display.textContent = num1):
        (num2 = num2.slice(0, -1), display.textContent = num2);
    }
}));