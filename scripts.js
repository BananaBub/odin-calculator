function checkIfNumber(num) {
    if(isNaN(parseFloat(num))) {
        return false;
    } else {
        return true;
    }
}

function checkIfOperand(key) {
    switch(key.key) {
        case "+":
            operand = "+";
            return true;
        break;
        case "-":
            operand = "-";
            return true;
        break;
        case "x":
            operand = "x";
            return true;
        break;
        case "/":
            operand = "÷";
            return true;
        break;
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
                displayText.style.fontSize = "25px";
                displayText.textContent = "Don't crash this website, idiot! The answer is undefined!";
            } else if(divide(a, b) % 1 === 0) {
                return Math.round(divide(a, b));
            } else {
                return divide(a, b).toFixed(10);
            }
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
let displayText = document.querySelector(".display-text");

buttons.forEach((button) => button.addEventListener("click", function (e) {
    displayText.style.fontSize = "40px";
    if(e.target.classList.contains("number") && phase === "initial") {
        num1 += e.target.textContent;
        displayText.textContent = num1;
    } else if(e.target.classList.contains("operand") && phase === "initial") {
        operand = e.target.textContent;
        phase = "final";
        hasDecimal = false;
    } else if(e.target.classList.contains("number") && phase === "final") {
        num2 += e.target.textContent;
        displayText.textContent = num2;
    } else if(e.target.classList.contains("operand") && phase === "final") {
        if(num2) {
            num1 = operation(num1, operand, num2);
            num2 = "";
            operand = e.target.textContent;
            displayText.textContent = num1;
            hasDecimal = false;
        } else {
            operand = e.target.textContent;
        }
    } else if(e.target.classList.contains("decimal") && hasDecimal === false) {
        if(phase === "initial") {
            (num1 === "") ? num1 = `0.` : num1 += e.target.textContent;
            displayText.textContent = num1;
        } else {
            (num2 === "") ? num2 = `0.` : num2 += e.target.textContent;
            displayText.textContent = num2;
        }
        hasDecimal = true;
    } else if(e.target.classList.contains("equal") && num1 && num2) {
        displayText.textContent = operation(num1, operand, num2);
        num1 = operation(num1, operand, num2);
        num2 = "";
        operand = "";
        phase = "initial";
        hasDecimal = false;
    } else if(e.target.classList.contains("clear")) {
        num1 = "";
        num2 = "";
        operand = "";
        phase = "initial";
        displayText.textContent = "";
        hasDecimal = false;
    } else if(e.target.classList.contains("backspace")) {
        (phase === "initial") ? (num1 = num1.slice(0, -1), displayText.textContent = num1):
        (num2 = num2.slice(0, -1), displayText.textContent = num2);
    } else if(e.target.classList.contains("smiley")) {
        displayText.style.fontSize = "25px";
        displayText.textContent = "by charles andrei galedo";
    }
}));

document.addEventListener("keydown", function (e) {
    displayText.style.fontSize = "40px";
    if(checkIfNumber(e.key)) {
        (phase === "initial") ? (num1 += e.key, displayText.textContent = num1) :
        (num2 += e.key, displayText.textContent = num2);
    } else if(checkIfOperand(e)) {
        if(phase === "initial") {
            phase = "final";
            hasDecimal = false;
        } else {
            if(num2) {
                num1 = operation(num1, operand, num2);
                num2 = "";
                operand = e.target.textContent;
                displayText.textContent = num1;
                hasDecimal = false;
            } else {
                operand = e.target.textContent;
            }
        }
    } else if(e.key === "Enter" && num1 && num2) {
        displayText.textContent = operation(num1, operand, num2);
        num1 = operation(num1, operand, num2);
        num2 = "";
        operand = "";
        phase = "initial";
        hasDecimal = false;
    }
})