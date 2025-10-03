// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateOrder);

function calculateOrder() {
    // TODO:
    // 1. Get the order number and quantity from the input fields
    let ordernum = parseFloat(document.getElementById('orderNumber').value)
    let quant = parseFloat(document.getElementById('quantity').value)
    // 2. Calculate the total cost (£2.45 per bag)
    let cost = quant * 2.45
    // 3. Display:
    document.getElementById('displayOrderNumber').textContent = ordernum
    document.getElementById('displayQuantity').textContent = quant
    document.getElementById('totalCost').textContent = cost.toFixed(2)
    //    - Order number
    //    - Quantity
    //    - Total cost (format to 2 decimal places)
 }
