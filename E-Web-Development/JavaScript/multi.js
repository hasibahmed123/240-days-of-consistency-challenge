// Multi-Level If-Else Statement Example

const price = 10000;

function calculatePayAmount(price) {
    let payAmount;
    
    if (price > 5000) {
        // 10% discount
        const discount = price * 0.10;
        payAmount = price - discount;
        console.log("10% Discount Applied");
    } else if (price > 2000) {
        // 5% discount
        const discount = price * 0.05;
        payAmount = price - discount;
        console.log("5% Discount Applied");
    } else {
        // No discount
        payAmount = price;
        console.log("No Discount Applied");
    }

    console.log("Payable Amount:", payAmount);
}

calculatePayAmount(price); //calling the function




