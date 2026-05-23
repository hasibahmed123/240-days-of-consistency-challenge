//------------------------------------------------------------
// Nested If-Else Example

const price = 10000;

 if (price > 5000) {
console.log("Price is greater than 5000");
    if (price > 10000) {
        console.log("Price is greater than 10000");
    }
}

else if (price > 2000) {
    console.log("Price is greater than 2000 but less than or equal to 5000");
}

else {
    console.log("Price is 2000 or less");
}


console.log("Final Price:", price);
//------------------------------------------------------------