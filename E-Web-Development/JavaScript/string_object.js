// String Operations
const country = 'Bangladesh'; // Declaring string primitive
const thana = new String('Dhaka'); // Creating String object

console.log(thana); // [String: 'Dhaka'] - String object
console.log(country.length); // 10 - length will be counted with white-space
console.log(country[1]); // 'a' - 2nd element of string (zero-indexed)

// String is case sensitive
console.log('Case sensitive check:', 'Hello' === 'hello'); // false

// Converting uppercase string to lowercase and vice-versa
const upperCase = country.toUpperCase();
const lowerCase = country.toLowerCase();
console.log('Uppercase:', upperCase); // 'BANGLADESH'
console.log('Lowercase:', lowerCase); // 'bangladesh'

// Comparing with condition with cases
const input = 'Bangladesh';
if (input.toLowerCase() === country.toLowerCase()) {
    console.log('Country matches!'); // This will execute
} else {
    console.log('Country does not match');
}

// Slice the string
const sliced = country.slice(0, 6); // From index 0 to 5 (6 not included)
console.log('Sliced:', sliced); // 'Bangla'

// Split - convert string to array
const words = country.split(''); // Split by each character
const wordsBySpace = 'Hello World'.split(' '); // Split by space
console.log('Split by character:', words);
console.log('Split by space:', wordsBySpace);

// Join - convert array to string
const joined = words.join('-'); // Join with hyphen
console.log('Joined with hyphen:', joined); // 'B-a-n-g-l-a-d-e-s-h'

// Concat - combine strings
const fullAddress = country.concat(', ', thana);
console.log('Concatenated:', fullAddress); // 'Bangladesh, Dhaka'

// Include - check if string contains substring
console.log('Includes "desh":', country.includes('desh')); // true
console.log('Includes "india":', country.includes('india')); // false

// Reverse a string - Method 1: Using for loop
let sentence = 'hours';
let reverse = '';
for (let i = sentence.length - 1; i >= 0; i--) {
    reverse += sentence[i];
}
console.log('Reversed (for loop):', reverse); // 'sruoh'

// Reverse a string - Method 2: Easy way using split, reverse, join
const easyReverse = sentence.split('').reverse().join('');
console.log('Reversed (easy way):', easyReverse); // 'sruoh'

// Reverse a string - Method 3: Using for...of loop (corrected)
let reverse2 = '';
for (const letter of sentence) {
    reverse2 = letter + reverse2; // Add each letter to the front
}
console.log('Reversed (for...of):', reverse2); // 'sruoh'

// Object properties and values
const bottle = {
    brand: "apple",
    price: 45,
    color: "white",
    isClean: true,
}; // Must use curly braces

// Get and set object properties
const person = {
    name: "tarek",
    age: 67, // Changed from string to number
    profession: 'teacher',
    salary: 566666,
    married: true,
};

// Dot notation
console.log(person.profession); // 'teacher' - single property access
console.log(person.salary); // 566666
const income = person.salary; // Storing property value in variable
console.log('Income:', income);

// Bracket notation
console.log(person["age"]); // 67 - useful for dynamic property names
const propertyName = 'name';
console.log(person[propertyName]); // 'tarek' - using variable as property name

// Keys, values, nested object, delete
const computer = {
    brand: 'lenovo',
    price: 122000, // Fixed: removed 'k', use numbers for prices
    processor: 'Intel',
    GPU: "nvida RTX 3050 Ti"
};

// Get all keys and values
const keys = Object.keys(computer);
const values = Object.values(computer);
console.log('Computer keys:', keys); // ['brand', 'price', 'processor', 'GPU']
console.log('Computer values:', values); // ['lenovo', 122000, 'Intel', 'nvida RTX 3050 Ti']

// Nested Object
const college = {
    name: "VNC",
    class: ['11', '12'], // Fixed array values
    events: ['science fair', 'sports day'], // Fixed array values and syntax
    address: {
        street: "123 College Road",
        city: "Dhaka",
        country: "Bangladesh"
    },
    principal: {
        name: "Dr. Rahman",
        age: 55,
        experience: "20 years"
    }
};

// Access nested object properties
console.log('College city:', college.address.city); // 'Dhaka'
console.log('Principal name:', college.principal.name); // 'Dr. Rahman'

// Delete property from object
delete computer.GPU;
console.log('After deleting GPU:', computer);

// Loop an object - different ways
console.log('\n--- Looping through computer object ---');

// Method 1: for...in loop
for (const key in computer) {
    console.log(`${key}: ${computer[key]}`);
}

// Method 2: Object.keys() with forEach
Object.keys(computer).forEach(key => {
    console.log(`${key} -> ${computer[key]}`);
});

// Method 3: Object.entries() - gets both key and value
Object.entries(computer).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

// Ways to declare object
console.log('\n--- Different ways to create objects ---');

// 1. Object literal (most common)
const obj1 = { name: "John", age: 30 };

// 2. Object constructor
// It is more like Java
const obj2 = new Object();
obj2.name = "Jane";
obj2.age = 25;

// 3. Object.create() - with prototype
const obj3 = Object.create(null);
obj3.name = "Bob";

// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const obj4 = new Person("Alice", 28);

// 5. Class syntax (ES6)
// Just like Java
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
const obj5 = new Student("Tom", "A");

console.log('All objects created successfully!');

/*
Object Operations Summary:
- Dot notation: object.property (static property names)
- Bracket notation: object["property"] (dynamic property names)
- Object.keys(): Get all property names
- Object.values(): Get all property values  
- Object.entries(): Get key-value pairs
- delete: Remove properties
- Nested objects: Access with dot chain
- Looping: for...in, Object.keys().forEach(), Object.entries()
*/