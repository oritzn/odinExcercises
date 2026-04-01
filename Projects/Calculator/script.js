let number1 = null;
let number2 = null;
let operator = null;
let result = null;

const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let inputField = document.getElementById("numberInput");

number.forEach(function(num) {
    num.addEventListener("click", function() {
        if(result !== null) {
            number1 = null;
            number2 = null;
            operator = null;
            inputField.value = "";
            result = null;
        }

        handleNumberKlick(this.textContent);
        appendNumber(this.textContent);
    });
});

operators.forEach(function(op) {
    op.addEventListener("click", function() {
        if(operator !== null && number1 !== null && number2 !== null) {
            calculate();
        }
        if(result !== null) {
            result = null;
        }
        appendNumber(this.textContent);
        operator = this.textContent;        
    });
});


function handleNumberKlick(num) { 
    num = Number(num);

    if (number1 !== null && operator !== null && number2 !== null) {
        let number2AsString = String(number2) + String(num);
        number2 = Number(number2AsString);

    } else if (number1 !== null && operator !== null) {
        number2 = num;

    } else if (number1 !== null) {
        let numberAsString = String(number1) + String(num);
        number1 = Number(numberAsString);

    } else {
        number1 = num;
    }
}

function appendNumber(element) {
    if(number1 !== null && operator === null) {
        inputField.value += element;
    
    }else if(operator !== null && number2 !== null) {
        inputField.value += element;
    }else if(operator !== null && number2 === null) {
        inputField.value = inputField.value.slice(0, -1) + element;
    }
}

function selectOperator(number1, number2, operator) {
    if(operator === "+") {
        return add(number1, number2);
    } else if(operator === "-") {
        return subtract(number1, number2);
    } else if(operator === "*") {
        return multiply(number1, number2);
    } else if(operator === "/") {
        if(number2 === 0) {
            alert("You can't divide by zero!");
            return 0;
        }
        return divide(number1, number2);
    } else {
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

function divide(n1, n2) {
    return n1 / n2;
}

document.getElementById("clear").addEventListener("click", function() {
    number1 = null;
    number2 = null;
    operator = null;
    inputField.value = "";
    result = null;
});

function calculate() {
    if (number1 !== null && number2 !== null && operator !== null) {
        let resultSemiFinal = selectOperator(number1, number2, operator);
        const resultFinal = Math.round(resultSemiFinal * 100) / 100;
        inputField.value = resultFinal;
        number1 = resultFinal;
        number2 = null;
        operator = null;
        result = resultFinal;
    }else {
        alert("Please enter a valid expression");
    }
}

document.getElementById("equals").addEventListener("click", function() {
    calculate();
});


