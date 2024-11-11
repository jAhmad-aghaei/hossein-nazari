// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform calculations
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error! Division by zero.";
        default:
            return "Invalid operator!";
    }
}

// Function to start the calculator
function startCalculator() {
    rl.question("Enter the first number: ", (firstInput) => {
        const num1 = parseFloat(firstInput);
        if (isNaN(num1)) {
            console.log("Invalid number!");
            return startCalculator(); // Restart if invalid input
        }

        rl.question("Enter an operator (+, -, *, /): ", (operator) => {
            if (!['+', '-', '*', '/'].includes(operator)) {
                console.log("Invalid operator!");
                return startCalculator(); // Restart if invalid input
            }

            rl.question("Enter the second number: ", (secondInput) => {
                const num2 = parseFloat(secondInput);
                if (isNaN(num2)) {
                    console.log("Invalid number!");
                    return startCalculator(); // Restart if invalid input
                }

                // Perform the calculation and display the result
                const result = calculate(num1, operator, num2);
                console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);

                // Close the interface
                rl.close();
            });
        });
    });
}

// Start the calculator
startCalculator();
