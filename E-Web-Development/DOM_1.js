/***********************************************************************
 *                JAVASCRIPT DOM MANIPULATION NOTES
 * ---------------------------------------------------------------------
 * This file contains:
 * 1. Selecting Elements
 * 2. Styling Elements Dynamically
 * 3. Getting & Setting Attributes
 * 4. Reading Content
 * 5. Navigating DOM Nodes
 * 6. Creating & Appending Elements
 * 7. Building DOM Structures
 * 8. Dynamic Styling with Button Example
 **********************************************************************/




/***********************************************************************
 * 1. SELECTING ELEMENTS
 **********************************************************************/

// ---------------------------------------------------
// Selecting an element by ID
// Returns a SINGLE element
// ---------------------------------------------------
const titleElement = document.getElementById('food-title');


// ---------------------------------------------------
// Selecting elements by Tag Name
// Returns an HTMLCollection
// ---------------------------------------------------
const allSections = document.getElementsByTagName('section');


// ---------------------------------------------------
// Selecting elements using querySelectorAll()
// Returns a NodeList
// Can use CSS selectors
// ---------------------------------------------------
const sectionList = document.querySelectorAll('section');


// ---------------------------------------------------
// Example: Accessing selected elements
// ---------------------------------------------------
console.log(titleElement);
console.log(allSections);
console.log(sectionList);





/***********************************************************************
 * 2. STYLING ELEMENTS DYNAMICALLY
 **********************************************************************/

// ---------------------------------------------------
// We can change CSS styles directly using JS
// Style property uses camelCase
// ---------------------------------------------------

titleElement.style.backgroundColor = 'lightblue';
titleElement.style.marginLeft = '20px';
titleElement.style.textAlign = 'center';
titleElement.style.borderRadius = '20px';
titleElement.style.padding = '10px';


// ---------------------------------------------------
// Explanation:
// background-color  -> backgroundColor
// margin-left       -> marginLeft
// text-align        -> textAlign
// border-radius     -> borderRadius
// ---------------------------------------------------





/***********************************************************************
 * 3. GETTING & SETTING ATTRIBUTES
 **********************************************************************/

// ---------------------------------------------------
// Getting attributes
// ---------------------------------------------------

// Get ID value
const elementId = titleElement.getAttribute('id');

// Get class value
const elementClass = titleElement.getAttribute('class');

console.log(elementId);
console.log(elementClass);


// ---------------------------------------------------
// Setting attributes
// ---------------------------------------------------

// Adds a tooltip/title attribute
titleElement.setAttribute('title', 'Tooltip added by JavaScript');


// ---------------------------------------------------
// Another example
// ---------------------------------------------------
titleElement.setAttribute('data-type', 'food-heading');





/***********************************************************************
 * 4. READING CONTENT
 **********************************************************************/

// ---------------------------------------------------
// innerHTML
// Returns HTML content inside element
// ---------------------------------------------------
console.log(titleElement.innerHTML);


// ---------------------------------------------------
// innerText
// Returns ONLY visible text
// ---------------------------------------------------
console.log(titleElement.innerText);




// **********************************************************************
// Example:
//
// <h1 id="food-title">
//    Welcome <span>Brother</span>
// </h1>
//
// innerHTML -> Welcome <span>Brother</span>
// innerText -> Welcome Brother
// **********************************************************************





/***********************************************************************
 * 5. NAVIGATING DOM NODES
 **********************************************************************/

// ---------------------------------------------------
// childNodes
// Returns ALL child nodes including text nodes
// ---------------------------------------------------

console.log(titleElement.childNodes);


// ---------------------------------------------------
// Accessing specific child node
// ---------------------------------------------------
console.log(titleElement.childNodes[1]);


// ---------------------------------------------------
// parentNode
// Moves upward in the DOM tree
// ---------------------------------------------------

const parent = titleElement.parentNode;

console.log(parent);


// ---------------------------------------------------
// Moving further upward
// ---------------------------------------------------
console.log(titleElement.parentNode.parentNode);





/***********************************************************************
 * 6. CREATING & APPENDING ELEMENTS
 **********************************************************************/

// ---------------------------------------------------
// Creating a new <li> element
// ---------------------------------------------------
const newListItem = document.createElement('li');


// ---------------------------------------------------
// Adding content to the element
// ---------------------------------------------------
newListItem.innerHTML = 'New born baby footballer';


// ---------------------------------------------------
// Selecting parent UL
// ---------------------------------------------------
const playerList = document.getElementById('player-list');


// ---------------------------------------------------
// Appending new LI inside UL
// ---------------------------------------------------
playerList.appendChild(newListItem);





/***********************************************************************
 * 7. BUILDING DOM STRUCTURES
 **********************************************************************/

/***********************************************************************
 * METHOD 1 -> STEP BY STEP
 **********************************************************************/

// ---------------------------------------------------
// Create a new section
// ---------------------------------------------------
const travelSection = document.createElement('section');


// ---------------------------------------------------
// Create heading
// ---------------------------------------------------
const travelHeading = document.createElement('h1');


// ---------------------------------------------------
// Add text to heading
// ---------------------------------------------------
travelHeading.innerHTML = 'Places I Want To Visit';


// ---------------------------------------------------
// Append heading inside section
// ---------------------------------------------------
travelSection.appendChild(travelHeading);


// ---------------------------------------------------
// Create UL
// ---------------------------------------------------
const travelList = document.createElement('ul');


// ---------------------------------------------------
// Create LI
// ---------------------------------------------------
const placeItem = document.createElement('li');


// ---------------------------------------------------
// Add text to LI
// ---------------------------------------------------
placeItem.innerHTML = 'Bandorbon';


// ---------------------------------------------------
// Append LI into UL
// ---------------------------------------------------
travelList.appendChild(placeItem);


// ---------------------------------------------------
// Append UL into section
// ---------------------------------------------------
travelSection.appendChild(travelList);


// ---------------------------------------------------
// Finally append section into body
// ---------------------------------------------------
document.body.appendChild(travelSection);





/***********************************************************************
 * METHOD 2 -> USING innerHTML
 **********************************************************************/

// ---------------------------------------------------
// Create section
// ---------------------------------------------------
const booksSection = document.createElement('section');


// ---------------------------------------------------
// Add full HTML structure quickly
// ---------------------------------------------------
booksSection.innerHTML = `
    <h1>Books I Need To Read</h1>

    <ul>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Mathematics</li>
    </ul>
`;


// ---------------------------------------------------
// Append into body
// ---------------------------------------------------
document.body.appendChild(booksSection);





/***********************************************************************
 * 8. DYNAMIC STYLING WITH BUTTON
 **********************************************************************/

/***********************************************************************
 * HTML EXAMPLE:
 *
 * <div id="box">Hello</div>
 * <button onclick="changeStyle()">Change Style</button>
 *
 **********************************************************************/


// ---------------------------------------------------
// Function to change styles dynamically
// ---------------------------------------------------
function changeStyle() {

    // Select box element
    let box = document.getElementById("box");

    // Change background color
    box.style.backgroundColor = "tomato";

    // Change text color
    box.style.color = "white";

    // Add rounded corners
    box.style.borderRadius = "20px";

    // Add padding
    box.style.padding = "20px";

    // Center text
    box.style.textAlign = "center";
}





/***********************************************************************
 * EXTRA EXAMPLES
 **********************************************************************/

// ---------------------------------------------------
// Loop through multiple sections
// ---------------------------------------------------
const sections = document.querySelectorAll('section');

sections.forEach(function(section) {

    // Add border to every section
    section.style.border = '2px solid black';

    // Add spacing
    section.style.margin = '20px';

    // Add padding
    section.style.padding = '15px';
});




// ---------------------------------------------------
// Adding event listener
// Better practice than inline onclick
// ---------------------------------------------------

const button = document.getElementById('style-btn');

if (button) {

    button.addEventListener('click', function () {

        document.body.style.backgroundColor = 'lightyellow';

        console.log('Button clicked!');
    });
}





/***********************************************************************
 * KEY TAKEAWAYS
 **********************************************************************/

/*

1. getElementById()
   -> Best for selecting single element by ID

2. querySelectorAll()
   -> Flexible selection using CSS selectors

3. element.style.property
   -> Used to dynamically change CSS

4. createElement()
   -> Creates new HTML elements

5. appendChild()
   -> Inserts element into DOM

6. innerHTML
   -> Inserts HTML quickly
   -> Be careful with user input (XSS risk)

7. childNodes / parentNode
   -> Used for DOM navigation

8. addEventListener()
   -> Modern way to handle events

*/