//Ternary Syntex:
// condition ? expressionIfTrue : expressionIfFalse;

const age = 18;
age >=15 ? console.log("Eligible for driving license") : console.log("Not eligible for driving license");

// Advanced Example
const price = 10000;
const payAmount = price > 5000 ? price - (price * 0.10) : price;
                  price > 2000 ? price - (price * 0.05) : price;
console.log("Payable Amount:", payAmount);

//explanation of previous code
// If price is greater than 5000, apply a 10% discount
// If price is greater than 2000 but less than or equal to 5000, apply a 5% discount
// If price is 2000 or less, no discount is applied
//------------------------------------------------------------

price = isLeader === true ? 0 :price + 1000 ;
console.log("Final Price:", price);
// Here means
// If isLeader is true, the price is free (0)
// If isLeader is false, the price is increased by 1000
//---------------------------------------------------------------

/* 
Difference among =, ==, ===:

`=` assigns a value, `==` compares values with type conversion, and `===` compares values without type conversion.
Always use `===` for safer and more accurate comparisons.

| Operator | Meaning         | Type Check?            | Example             |
| -------- | --------------- | ---------------------- | ------------------- |
| `=`      | Assignment      | ❌ No                   | `let x = 10;`       |
| `==`     | Loose Equality  | ❌ No (type conversion) | `5 == "5"` → true   |
| `===`    | Strict Equality | ✅ Yes                  | `5 === "5"` → false |

*/

// Nested Ternary Example
const price = 10000;
const payAmount = price > 5000 ? 
                  (console.log("10% Discount Applied"), price - (price * 0.10)) : 
                  price > 2000 ? 
                  (console.log("5% Discount Applied"), price - (price * 0.05)) : 
                  (console.log("No Discount Applied"), price);
console.log("Payable Amount:", payAmount);

// Explanation:
// If price is greater than 5000, apply a 10% discount and log the message
// If price is greater than 2000 but less than or equal to 5000, apply a 5% discount and log the message
// If price is 2000 or less, no discount is applied and log the message
// This is a more concise way to handle multiple conditions compared to nested if-else statements
//------------------------------------------------------------


