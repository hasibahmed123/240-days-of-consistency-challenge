// declaring Array
const numbers = [1, 2, 3, 4, 5, 6, 7]; 
// Not like C++ array Syntax - JavaScript arrays are dynamic and can hold mixed types

// Array Length
console.log(numbers.length); // 7 - shows total number of elements in array
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7] - prints entire array
console.log(numbers[1]); // 2 - prints element at 1st index (arrays are zero-indexed)

// set or update element value by index
let abc = 5;
abc = 76; // Variable value updated from 5 to 76
console.log(abc); // 76

// set/update array element by index
numbers[0] = 44; // Changes first element from 1 to 44
console.log(numbers[0]); // 44 - first element is now updated

// add/remove array using Push-pop
const ages = []; // Empty array for ages
const numbersArray = [3, 4, 5, 6]; // Renamed to avoid redeclaration, removed trailing comma

// PUSH - add elements to the END of array
numbersArray.push(44); // Adds 44 to the end
numbersArray.push(47); // Adds 47 to the end
numbersArray.push(43, 5, 6); // Adds multiple elements at once
console.log('After push operations:', numbersArray);

// PUSH with strings - arrays can hold mixed data types
numbersArray.push('harun', 'musa', 'isa'); // Adds string elements to the end
console.log('After adding strings:', numbersArray);

// POP - remove LAST element from array (no arguments needed)
const removedElement = numbersArray.pop(); // Removes and returns the last element 'isa'
console.log('Removed element:', removedElement); // 'isa'
console.log('After pop:', numbersArray); // Last element 'isa' is removed

// SHIFT - remove FIRST element from array
const firstRemoved = numbersArray.shift(); // Removes and returns first element (3)
console.log('First removed element:', firstRemoved); // 3
console.log('After shift:', numbersArray); // First element 3 is removed

// UNSHIFT - insert elements at the BEGINNING of array
numbersArray.unshift(47); // Adds 47 to the beginning
numbersArray.unshift(100, 200); // Adds multiple elements to the beginning
console.log('After unshift:', numbersArray); // 100, 200, 47 added to front

/*
Array Methods Summary:
- push(): Add to end (one or multiple elements)
- pop(): Remove from end (no arguments)
- shift(): Remove from beginning 
- unshift(): Add to beginning (one or multiple elements)

Important Notes:
- Arrays are zero-indexed (first element at index 0)
- JavaScript arrays are dynamic and can hold mixed data types
- push/pop operate on the end (faster)
- shift/unshift operate on the beginning (slower as it reindexes)
*/