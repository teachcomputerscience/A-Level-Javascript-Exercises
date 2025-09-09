// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);

function calculateCommission() {
    // TODO:
    // 1. Get all invoice numbers and amounts from the input fields
    let in1 = String(document.getElementById('invoice1').value)
    let in2 = String(document.getElementById('invoice2').value)
    let in3 = String(document.getElementById('invoice3').value)
    let am1 = parseFloat(document.getElementById('amount1').value)
    let am2 = parsefloat(document.getElementById('amount2').value)
    let am3 = parsefloat(document.getElementById('amount3').value)

    // 2. Calculate:
    //    - Total sales amount
    let total = am1 + am2 + am3
    //    - Commission (20% of total sales)
    let com = total * 0.2
    // 3. Display:
    //    - Each sale's details
    document.getElementById('salesDetails').textContent = in1 ` ` in2 ` ` in3
    //    - Total sales amount
    //    - Commission earned
    // Note: Format all monetary values to 2 decimal places
}
