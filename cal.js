// Basic Calculator function
function calculator(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operator';
    }
    return result;
}

// Example usage:
const num1 = 10;
const num2 = 5;

// Perform calculations
console.log("Addition:", calculator(num1, '+', num2));       // Output: 15
console.log("Subtraction:", calculator(num1, '-', num2));    // Output: 5
console.log("Multiplication:", calculator(num1, '*', num2)); // Output: 50
console.log("Division:", calculator(num1, '/', num2));       // Output: 2
