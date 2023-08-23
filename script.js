let display = document.getElementById('result');
let currentNumber = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function addNumberToDisplay(number) {
    currentNumber += number;
    display.innerText = currentNumber;
}

function setOperator(op) {
    operator = op;
    operand1 = currentNumber;
    currentNumber = '';
}

function calculate() {
    operand2 = currentNumber;
    switch(operator) {
        case '+':
            display.innerText = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            display.innerText = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            display.innerText = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            display.innerText = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    currentNumber = '';
    operator = '';
    operand1 = '';
    operand2 = '';
}

function clearEntry() {
    currentNumber = '';
    display.innerText = '0';
}

function clearAll() {
    display.innerText = '0';
    currentNumber = '';
    operator = '';
    operand1 = '';
    operand2 = '';
}

function deleteLastDigit() {
    currentNumber = currentNumber.slice(0, -1);
    display.innerText = currentNumber;
}

document.getElementById('one').addEventListener('click', function() { addNumberToDisplay('1'); });
document.getElementById('two').addEventListener('click', function() { addNumberToDisplay('2'); });
document.getElementById('three').addEventListener('click', function() { addNumberToDisplay('3'); });
document.getElementById('four').addEventListener('click', function() { addNumberToDisplay('4'); });
document.getElementById('five').addEventListener('click', function() { addNumberToDisplay('5'); });
document.getElementById('six').addEventListener('click', function() { addNumberToDisplay('6'); });
document.getElementById('seven').addEventListener('click', function() { addNumberToDisplay('7'); });
document.getElementById('eight').addEventListener('click', function() { addNumberToDisplay('8'); });
document.getElementById('nine').addEventListener('click', function() { addNumberToDisplay('9'); });
document.getElementById('zero').addEventListener('click', function() { addNumberToDisplay('0'); });

document.getElementById('sum').addEventListener('click', function() { setOperator('+'); });
document.getElementById('subtraction').addEventListener('click', function() { setOperator('-'); });
document.getElementById('mutiplication').addEventListener('click', function() { setOperator('*'); });
document.getElementById('division').addEventListener('click', function() { setOperator('/'); });

document.getElementById('calculate').addEventListener('click', calculate);
document.getElementById('ce').addEventListener('click', clearEntry);
document.getElementById('c').addEventListener('click', clearAll);
document.getElementById('del').addEventListener('click', deleteLastDigit);