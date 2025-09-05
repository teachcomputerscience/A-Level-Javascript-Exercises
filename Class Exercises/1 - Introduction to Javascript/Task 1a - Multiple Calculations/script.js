// TODO:
// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

// 1. Get the three numbers (A, B, C) from the input fields
function calculate() {
    let A = parseFloat(document.getElementById('numberA').value);
    let B = parseFloat(document.getElementById('numberB').value);
    let C = parseFloat(document.getElementById('numberC').value);

// 2. Calculate:
    //    - (A + B + C) / 3
let x = (A + B + C)/3

    //    - A × B × C
let y = A*B*C

    //    - A + (B × C)
let z = A + (B*C)

    // 3. Display the results in the respective span elements
document.getElementById("average").innerText = x;
document.getElementById("product").innerText = y;
document.getElementById("expression").innerText = z;
}
