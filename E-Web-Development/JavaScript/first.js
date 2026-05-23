// variables 

var weight = 70; // var keyword
var price = 100.50; // var keyword
var year = 2023; // var keyword
var balance = 1000; // var keyword
var name = "John"; // var keyword
var string = "Hello, World!"; // var keyword

// boolean variables
var isRaining = true; // var keyword
var isSunny = false; // var keyword


// changing variable value
weight = 75; // changing value

// undefined variable
var name; // var keyword

console.log(weight); // 70
console.log(price); // 100.50
console.log(year); // 2023
console.log(balance); // 1000
console.log(name); // John
console.log(string); // Hello, World!
console.log(isRaining); // true
console.log(isSunny); // false

// printing variable in terminal
// type node first.js in terminal

// Rules of declaring variables
// 1. Variable names can contain letters, numbers, underscores, and dollar signs.
// 2. Variable names must start with a letter, underscore, or dollar sign.
// 3. Variable names cannot start with a number.
// 4. Variable names are case-sensitive (e.g., `myVar` and `myvar` are different).
// 5. Variable names cannot be a reserved keyword (e.g., `var`, `let`, `const`, `if`, `else`, etc.).
// 6. Variable names should be descriptive and meaningful to improve code readability.
// 7. Avoid using special characters (e.g., `@`, `#`, `%`, etc.) in variable names.
// 8. Use camelCase for multi-word variable names (e.g., `myVariableName`).
// 9. Keep variable names concise but clear to understand their purpose.


// How to write long variable names

var thisIsAVeryLongVariableNameThatIsUsedToDemonstrateHowToWriteLongVariableNames = "This is a long variable name"; // var keyword
console.log(thisIsAVeryLongVariableNameThatIsUsedToDemonstrateHowToWriteLongVariableNames); // This is a long variable name

// variable Naming Conventions
// 1. Use camelCase for variable names (e.g., `myVariableName`).
// 2. snake_case is also acceptable (e.g., `my_variable_name`).
// 3. pascalCase is typically used for class names (e.g., `MyClassName`).


// In Brief Variable Types in JavaScript
var integerNumber = 42; // Integer
var floatNumber = 3.14; // Float
var negativeNumber = -10; // Negative number
var largeNumber = 1e6; // Scientific notation (1 million)
// String variables
var singleQuoteString = 'This is a string in single quotes'; // Single quotes
var doubleQuoteString = "This is a string in double quotes"; // Double quotes
// Template literals (ES6)
var templateLiteralString = `This is a string using template literals with variable: ${name}`; // Template literals
// Boolean variables
var isTrue = true; // Boolean true
var isFalse = false; // Boolean false
// Null variable
var nullVariable = null; // Null value
// Undefined variable
var undefinedVariable; // Undefined value (not assigned yet)


// Sum 
var num1 = 10; // First number
var num2 = 20; // Second number
var sum = num1 + num2; // Sum of the two numbers
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum); // Output the sum
// Output: The sum of 10 and 20 is: 30


// use of typeof operator
console.log(typeof weight); // Output: number
console.log(typeof price); // Output: number
console.log(typeof year); // Output: number
console.log(typeof balance); // Output: number
console.log(typeof name); // Output: string


// converting string to number with parseInt and parseFloat
var stringNumber = "123"; // String representation of a number
var floatNumber = "1.23";
var parsedInt = parseInt(stringNumber); // Convert to integer
var parsedFloat = parseFloat(floatNumber); // Convert to float

console.log(parsedInt); // Output: 123
console.log(parsedFloat); // Output: 123


// use of .toFixed() method
var first = 0.1; // A number with many decimal places
var second = 0.2; // Another number with many decimal places
var sumFixed = (first + second).toFixed(2); // Sum with 2 decimal places

