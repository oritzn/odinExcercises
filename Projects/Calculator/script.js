let number1;
let number2;
let operator;


function operator(number1, number2, operator) {
    if(operator === "+") {
        add(number1, number2);
    }else if(operator === "-") {
        subtract(number1, number2);
    }else if(operator === "*") {
        multiply(number1, number2);
    }else if(operator === "/") {
        devide(number1, number2);
    }else {
        console.log("Invalid operator");
    }
} 


function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function devide(n1, n2) {
    return n1 / n2;
}