// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);

function calculateCommission() {
    // TODO:
    // 1. Get all invoice numbers and amounts from the input fields
    let in1 = String(document.getElementById('invoice1').value)
    let in2 = String(document.getElementById('invoice2').value)
    let in3 = String(document.getElementById('invoice3').value)
    let am1 = parseFloat(document.getElementById('amount1').value)
    let am2 = Number(document.getElementById('amount2').value)
    let am3 = Number(document.getElementById('amount3').value)

    // 2. Calculate:
    //    - Total sales amount
    let totalsales = am1 + am2 + am3
    //    - Commission (20% of total sales)
    let com = totalsales * 0.2
    // 3. Display:
    //    - Each sale's details
    document.getElementById('salesDetails').textContent = `invoice 1 ${in1} invoice 2 ${in2} invoice 3 ${in3}`
    //    - Total sales amount
    document.getElementById('totalSales').textContent = totalsales.toFixed(2)
    //    - Commission earned
    document.getElementById('commission').textContent = com.toFixed(2)
    // Note: Format all monetary values to 2 decimal places
}
