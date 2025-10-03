// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHireCharge);

function calculateHireCharge() {
    // TODO:
    // 1. Get the miles travelled from the input field
    let miles = parseFloat(document.getElementById('miles').value)
    // 2. Calculate:
    //    - Mileage charge (5p per mile = £0.05 per mile)
    let cost = miles * 0.05
    //    - Total charge (£25.00 + mileage charge)
    let totcost = cost + 25
    // 3. Display both charges formatted to 2 decimal places
    document.getElementById('mileageCharge').textContent = cost.toFixed(2)
    document.getElementById('totalCharge').textContent = totcost.toFixed(2) 
}
