// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentNumber = '';
    let previousNumber = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;

            if (value === 'C') {
                currentNumber = '';
                previousNumber = '';
                operator = '';
                display.value = '';
            } else if (value === '=') {
                calculateResult();
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                previousNumber = currentNumber;
                currentNumber = '';
            } else if (value === '.') {
                if (!currentNumber.includes('.')) {
                    currentNumber += '.';
                }
            } else {
                currentNumber += value;
            }

            if (value !== '=') {
                display.value = currentNumber;
            }
        });
    });

    function calculateResult() {
        const num1 = parseFloat(previousNumber);
        const num2 = parseFloat(currentNumber);

        switch (operator) {
            case '+':
                display.value = num1 + num2;
                break;
            case '-':
                display.value = num1 - num2;
                break;
            case '*':
                display.value = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    display.value = num1 / num2;
                } else {
                    display.value = 'Error';
                }
                break;
            default:
                display.value = '';
        }

        currentNumber = display.value;
        previousNumber = '';
        operator = '';
    }
});