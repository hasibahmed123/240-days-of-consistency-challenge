/*******************************************
 * BASIC ARRAY LOOP
 *******************************************/
const fruits = ['apple', 'banana', 'anar'];

// Loop through each fruit
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i]; // get fruit at index i
    console.log(fruit);      // print it
}



/*******************************************
 * REVERSE AN ARRAY
 *******************************************/
const numbers = [3, 5, 6, 7, 87];
const reversed = [];   // empty array to store reversed numbers

// Method 1: Using unshift()
// unshift() adds items to the BEGINNING of an array
for (let i = 0; i < numbers.length; i++) {
    reversed.unshift(numbers[i]); 
}

console.log("Reversed using unshift():", reversed);


// Method 2: Using a loop backwards and push()
// push() adds items to the END
const reversed2 = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversed2.push(numbers[i]);
}

console.log("Reversed using backward loop + push():", reversed2);



/*******************************************
 * SORTING AN ARRAY (Correct Way)
 *******************************************/
const nums = [4, 6, 7, 8];
console.log("Original:", nums);

nums.sort();  
console.log("Sorted (wrong for numbers):", nums);
// ❗ JS sorts numbers as strings. (e.g. 100 will come before 2)



// Correct way to sort numbers
const ages = [10, 40, 2, 5, 100, 25];

const sortedAges = ages.sort(function(a, b) {
    return a - b;   // ascending order
});

console.log("Sorted Ages (ascending):", sortedAges);



// Descending order
const descAges = ages.sort(function(a, b) {
    return b - a;   // descending order
});

console.log("Sorted Ages (descending):", descAges);



/*******************************************
 * ARRAY OF OBJECTS
 *******************************************/
const students = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 22 },
    { name: "John", age: 19 }
];

// Access each object inside array
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name, students[i].age);
}



/*******************************************
 * COPY ARRAY ELEMENTS TO ANOTHER ARRAY
 *******************************************/
const originalArray = [10, 20, 30, 40];
const copiedArray = [];

// Copy one-by-one using a loop
for (let i = 0; i < originalArray.length; i++) {
    copiedArray.push(originalArray[i]);
}

console.log("Copied Array:", copiedArray);

// Shortcut (modern JS)
// const copiedArray = [...originalArray];
