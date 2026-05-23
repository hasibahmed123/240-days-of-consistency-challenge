// Not operator in if-else statement

const price = 100;
if (!(price > 50)) {
    console.log("Price is not greater than 50");
    }
else {
    console.log("Price is greater than 50");
}

// here we didn't use another if statement
// to check if the price is less than or equal to 50
// instead we used the not operator to negate the condition
//---------------------------------------------------------------------------------


//Super short cut code using Nested-Ternary and Not operator:
const price2 = 100;
const result = price2 > 50 ? "Price is greater than 50" : !(price2 <= 50) ? "Price is not less than or equal to 50" : "Price is less than or equal to 50";
console.log(result);

