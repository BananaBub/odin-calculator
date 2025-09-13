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