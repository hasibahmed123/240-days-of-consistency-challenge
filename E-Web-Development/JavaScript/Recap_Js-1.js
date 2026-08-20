/*
===========================================================
        JAVASCRIPT ES6+ NOTES - 1
        Variables, Functions, Template Literals & Arrows
===========================================================
*/

/* =========================================================
1. let & const
========================================================= */

// const → value cannot be reassigned
const name = 'Bangladesh';
const countryName = 'BD' + name;

console.log(countryName); // BDBangladesh

// let → value can be reassigned
let price = 120;
price = 150;

console.log(price); // 150

/*
KEY POINTS:
- const → cannot be reassigned
- let → can be reassigned
- Both are block-scoped
- Prefer const by default
- Use let only when the value needs to change

Example:
const x = 10;
x = 20; // ❌ TypeError

let y = 10;
y = 20; // ✅ Allowed
*/


/* =========================================================
2. FUNCTIONS
========================================================= */

// A function is a reusable block of code.
// Parameters receive values when the function is called.

function sum(num1, num2) {
    const total = num1 + num2;
    console.log(total);
}

sum(10, 20); // 30


// FUNCTION WITH DEFAULT PARAMETERS

/*
If an argument is not provided, the default value is used.
*/

function multiply(num1 = 0, num2 = 0) {
    const result = num1 * num2;
    console.log(result);
}

multiply(10, 10); // 100
multiply(10);     // 0 → num2 becomes 0


/*
COMMON DEFAULT-VALUE THUMB RULE:

Addition/Subtraction → 0
Multiplication       → 1
String               → ''
Array                → []
Object               → {}

Example:
function add(a = 0, b = 0) {}
function multiply(a = 1, b = 1) {}
function greet(name = '') {}
function test(arr = []) {}
function user(info = {}) {}
*/


/* =========================================================
3. TEMPLATE LITERALS
========================================================= */

/*
Template literals use BACKTICKS (` `).

They allow:
1. Multi-line strings
2. String interpolation
3. Expressions inside ${}
*/

// MULTI-LINE STRING

const poem = `Amm pata jora jora
marbo chabuk chorbe ghora
ore babu ghure dara
asche amar pagla ghora`;

console.log(poem);


// STRING INTERPOLATION

function showSum(num1, num2) {
    const result = num1 + num2;

    const output =
        `sum of ${num1} and ${num2} is ${result}`;

    console.log(output);
}

showSum(10, 20);
// sum of 10 and 20 is 30


// EXPRESSIONS INSIDE TEMPLATE LITERALS

const price2 = 100;
const discountedPrice =
    `Discounted Price: ${price2 * 0.8}`;

console.log(discountedPrice);
// Discounted Price: 80


/*
OLD WAY:
const output = 'sum of ' + num1 + ' and ' + num2;

MODERN WAY:
const output = `sum of ${num1} and ${num2}`;

${} can contain expressions:

${10 + 20}
${price * 0.8}
${user.name}
${a > b}
*/


/* =========================================================
4. ARROW FUNCTIONS
========================================================= */

/*
Arrow functions provide a shorter syntax for writing functions.

NORMAL FUNCTION EXPRESSION:
*/

const addition = function(num1, num2) {
    return num1 + num2;
};

console.log(addition(10, 20)); // 30


// SAME FUNCTION USING ARROW FUNCTION:

const add2 = (num1, num2) => num1 + num2;

console.log(add2(17, 13)); // 30


/*
SINGLE-LINE ARROW FUNCTION:

const functionName = (parameters) => expression;

If there is only ONE expression,
the result is automatically returned.
*/

const multiply2 = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isFirstBig = (x, y) => x > y;

console.log(multiply2(5, 4)); // 20
console.log(sumAll(1, 2, 3, 4, 5, 6)); // 21
console.log(isFirstBig(10, 5)); // true


/* =========================================================
5. MULTI-LINE ARROW FUNCTIONS
========================================================= */

/*
When an arrow function contains multiple statements,
use curly braces {}.

For multi-line arrow functions,
you normally need an explicit return.
*/

const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;

    return result;
};

console.log(doMath(5, 10)); // 30


/*
IMPORTANT:

ONE-LINE:
const add = (a, b) => a + b;

Here "a + b" is automatically returned.


MULTI-LINE:
const add = (a, b) => {
    return a + b;
};

Here return must be written explicitly.

This would NOT work as expected:

const add = (a, b) => {
    a + b;
};

Because the function returns undefined.
*/


/* =========================================================
6. FUNCTION EXPRESSION vs ARROW FUNCTION
========================================================= */

// Function Expression
const addition2 = function(num1, num2) {
    return num1 + num2;
};

// Arrow Function
const addition3 = (num1, num2) => num1 + num2;

console.log(addition2(5, 5)); // 10
console.log(addition3(5, 5)); // 10


/*
GENERAL IDEA:

function expression:
const add = function(a, b) {
    return a + b;
};

arrow function:
const add = (a, b) => a + b;

Arrow functions are especially common with:
- map()
- filter()
- reduce()
- forEach()
- callbacks
*/


/* =========================================================
7. COMMON CHARACTER / ESCAPE CODES
========================================================= */

/*
\n  → New line
`   → Backtick
'   → Single quote
"   → Double quote
/   → Forward slash
\   → Backslash
;   → Semicolon

Example:
*/

console.log('Hello\nWorld');
// Hello
// World

/*
IMPORTANT:
A backslash (\) is also used for escape sequences.

Examples:
\n → newline
\t → tab
\\ → backslash
\' → single quote
\" → double quote
*/


/* =========================================================
8. ES6+ FEATURES SUMMARY
========================================================= */

/*
1. let & const
   → Modern variable declarations
   → Block-scoped

2. Default Parameters
   → Provide fallback values for parameters

3. Template Literals
   → Use backticks
   → Support ${expression}
   → Support multi-line strings

4. Arrow Functions
   → Shorter function syntax
   → Lexical `this`

5. Function Expressions
   → Store functions inside variables
*/


/* =========================================================
9. PRACTICAL EXAMPLE
========================================================= */

// Using const
const studentName = 'Hasib';
const marks = 85;

// Arrow function
const calculateGrade = (marks) => {
    if (marks >= 80) {
        return 'A+';
    }

    if (marks >= 70) {
        return 'A';
    }

    if (marks >= 60) {
        return 'A-';
    }

    return 'Below A-';
};

// Template literal
const result = `${studentName} got ${marks} marks. Grade: ${calculateGrade(marks)}`;

console.log(result);
// Hasib got 85 marks. Grade: A+


/* =========================================================
10. BEST PRACTICES
========================================================= */

/*
✓ Use const by default.

✓ Use let when reassignment is required.

✓ Avoid var in modern JavaScript unless you specifically
  understand why you need its function-scoped behavior.

✓ Use default parameters when undefined values are possible.

✓ Prefer template literals over string concatenation.

✓ Use arrow functions for concise callbacks and simple logic.

✓ Use {} + explicit return when an arrow function contains
  multiple statements.

✓ Keep functions small and focused on one task.
*/


/* =========================================================
11. QUICK REVISION
========================================================= */

/*
const:
const x = 10;

let:
let x = 10;
x = 20;

Default parameter:
function add(a = 0, b = 0) {}

Template literal:
`Hello ${name}`

Function expression:
const add = function(a, b) {
    return a + b;
};

Arrow function:
const add = (a, b) => a + b;

Multi-line arrow:
const add = (a, b) => {
    const result = a + b;
    return result;
};

AUTOMATIC RETURN:
(a, b) => a + b

EXPLICIT RETURN:
(a, b) => {
    return a + b;
}
*/


/*
===========================================================
FINAL TAKEAWAY

const       → cannot reassign
let         → can reassign
function    → reusable block of code
default     → fallback parameter value
`...`       → template literal
${...}      → insert/evaluate expression
=>          → arrow function
return      → sends a value back from a function

These are fundamental ES6+ JavaScript features used heavily
in modern JavaScript, React, Node.js and other JS frameworks.
===========================================================
*/