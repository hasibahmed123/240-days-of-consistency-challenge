/********************************************
 * BASIC FUNCTION
 ********************************************/

// Function declaration (this creates the function)
function fanOffKor() {
    console.log("Bosa theke utha");
    console.log("Switch off kor");
}

// Calling (running) the function
fanOffKor();



/********************************************
 * FUNCTION WITH NO PARAMETERS
 ********************************************/

function vaatKhao() {
    console.log("Hand wash koro");
    console.log("Come here and eat");
}

vaatKhao();  // calling the function



/********************************************
 * FUNCTION WITH PARAMETERS
 ********************************************/

// 'number' is a parameter (like a variable)
function square(number) {
    console.log("Input:", number);

    const sq = number * number;
    console.log("Square:", sq);
}

square(4);   // 4 is an argument (actual value passed)



/********************************************
 * DO ARITHMETIC USING FUNCTIONS
 ********************************************/

function add(a, b) {
    return a + b;   // return means "give back the answer"
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add(5, 3));       // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(6, 5));  // 30
console.log(divide(20, 4));   // 5



/********************************************
 * ARGUMENTS vs PARAMETERS
 ********************************************/
// Parameter → variable inside the function
// Argument → value you send when calling

function greet(name) {   // name = parameter
    console.log("Hello", name);
}

greet("Hasib"); // "Hasib" = argument



/********************************************
 * FUNCTION RETURN VALUE
 ********************************************/

function getFullName(first, last) {
    return first + " " + last;  // return combined name
}

const fullName = getFullName("Hasib", "Ahmed");
console.log(fullName);



/********************************************
 * SUM OF ALL NUMBERS IN AN ARRAY
 ********************************************/

function sumArray(arr) {
    let sum = 0; // start from 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // add each number to sum
    }

    return sum;
}

console.log(sumArray([10, 20, 30, 40])); // 100



/********************************************
 * RETURN ALL EVEN NUMBERS FROM AN ARRAY
 ********************************************/

function getEvenNumbers(numbers) {
    const evens = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {  // check even
            evens.push(numbers[i]); // add to new array
        }
    }

    return evens;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]



/********************************************
 * FUNCTION SUMMARY (SHORT & SIMPLE)
 ********************************************/

function functionSummary() {
    console.log("✔ Functions help reuse code");
    console.log("✔ Parameters are placeholders");
    console.log("✔ Arguments are real values");
    console.log("✔ Functions can return values");
    console.log("✔ Functions can process arrays");
}

functionSummary();

