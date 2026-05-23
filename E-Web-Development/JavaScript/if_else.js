// if-else statement Syntax in js

/* if (condition) {
     code to be executed if condition is true
} else {    
 code to be executed if condition is false
} */

if (5 > 10) {
    console.log("5 is greater than 10");
}

else {
    console.log("5 is not greater than 10");
}

//---------------------------------------------------
var biriyaniPrice = 200;
var myMoney = 150;
if (myMoney >= biriyaniPrice) {
    console.log("I can buy biriyani");
}
else {

    console.log("I cannot buy biriyani");
}



//Multiple conditions with if-else

const salary = 40000; // cannot change value if we use const
const isBCS = true; // boolean value

if (salary > 50000 && isBCS) {
    console.log("I will buy a car");
}

else if (salary > 30000 && isBCS) {

    console.log("I will buy a motorbike");
}

else if (salary > 20000 && isBCS) {
    console.log("I will buy a bicycle");
}

else if (salary > 50000 || isBCS) {
    console.log("I will buy a phone");
}


//complex condition with if-else

if ((salary > 50000 && isBCS == true) || (isBCS == true)) {
    console.log("I will buy a car or a phone");
} else {
    console.log("I will not buy anything");
}
