// use of include
const friends = ['hasib', 'mumin', 'omar'];
console.log(friends.includes('hasib')); // true - checks if array contains 'hasib'

// Conditional check using includes() - corrected syntax
if (friends.includes('hasib')) {
    console.log('Okay fine'); // This will execute since 'hasib' is in the array
} else {
    console.log('Not fine');
}
// Here include is case sensitive remember - 'hasib' vs ' hasib' (with space) would be different

// checking if it is an Array
const friendsList = ["has", "ms", "kj"]; // Changed variable name to avoid redeclaration
const nums = [];
const food = "chicken curry khaite valo";

console.log(Array.isArray(friendsList)); // true - friendsList is an array
console.log(Array.isArray(nums)); // true - nums is an empty array
console.log(Array.isArray(food)); // false - food is a string, not an array

// use of join - converts array elements into a single string
const joinedFriends = friendsList.join(' - '); // Joins with ' - ' separator
console.log('Joined friends:', joinedFriends); // Output: "has - ms - kj"

// use of concat - merges two or more arrays
const moreFriends = ['rafiq', 'sohel'];
const allFriends = friendsList.concat(moreFriends);
console.log('All friends:', allFriends); // Output: ["has", "ms", "kj", "rafiq", "sohel"]

// use of slice - returns a portion of array without modifying original
const slicedFriends = allFriends.slice(1, 4); // Elements from index 1 to 3 (4 not included)
console.log('Sliced friends:', slicedFriends); // Output: ["ms", "kj", "rafiq"]
console.log('Original array intact:', allFriends); // Original array remains unchanged

// use of splice - modifies original array by adding/removing elements
const numbers = [1, 2, 3, 4, 5];
console.log('Original numbers:', numbers); // [1, 2, 3, 4, 5]

// Remove 2 elements starting from index 1, and insert new elements
const removedElements = numbers.splice(1, 2, 'a', 'b', 'c');
console.log('Removed elements:', removedElements); // [2, 3] - elements that were removed
console.log('Modified numbers:', numbers); // [1, "a", "b", "c", 4, 5] - original array modified

/*
Key Differences Summary:
- join(): Array to string with separator
- concat(): Combine arrays (creates new array)
- slice(): Extract portion (non-destructive)
- splice(): Modify array (destructive - changes original)
*/