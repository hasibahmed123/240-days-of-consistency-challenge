//Suppose we will handle some events from the given HTML code
// This my note on Basic Event Handling in JS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling</title>
</head>
<body>

    <h2>1. Basic Click Event</h2>
    <button id="btn1">Click Me</button>


    <h2>2. Update Text using Event</h2>
    <p id="text">Original Text</p>
    <button id="btn2">Change Text</button>


    <h2>3. Comment Box</h2>
    <textarea id="comment" placeholder="Write comment..."></textarea><br>
    <button id="submit">Add Comment</button>
    <div id="output"></div>


    <h2>4. Delete Confirmation</h2>
    <button id="delete">Delete Something</button>


    <h2>5. Event Bubbling</h2>
    <div id="parent" style="padding:20px; background:lightblue;">
        Parent Div
        <button id="child">Child Button</button>
    </div>


    <h2>6. Event Delegation</h2>
    <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <button id="addItem">Add Item</button>


<script>


// =======================
// 1. BASIC EVENT
// =======================
document.getElementById("btn1").addEventListener("click", function() {
    console.log("Button clicked!");
});


// =======================
// 2. UPDATE TEXT
// =======================
document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("text").innerText = "Text Changed!";
});


// =======================
// 3. COMMENT BOX
// =======================
document.getElementById("submit").addEventListener("click", function() {
    const value = document.getElementById("comment").value;

    const p = document.createElement("p");
    p.innerText = value;

    document.getElementById("output").appendChild(p);

    document.getElementById("comment").value = ""; // clear input
});


// =======================
// 4. DELETE CONFIRMATION
// =======================
document.getElementById("delete").addEventListener("click", function() {
    const confirmDelete = confirm("Are you sure you want to delete?");

    if (confirmDelete) {
        alert("Deleted!");
    } else {
        alert("Cancelled!");
    }
});


// =======================
// 5. EVENT BUBBLING
// =======================
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function(e) {
    console.log("Child clicked");

    // Stop bubbling
    e.stopPropagation();
});


// =======================
// 6. EVENT DELEGATION
// =======================
const list = document.getElementById("list");

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        alert("You clicked " + e.target.innerText);

        // remove item when clicked
        e.target.remove();
    }
});

// Add new item dynamically
document.getElementById("addItem").addEventListener("click", function() {
    const li = document.createElement("li");
    li.innerText = "New Item";
    list.appendChild(li);
});


</script>

</body>
</html>

