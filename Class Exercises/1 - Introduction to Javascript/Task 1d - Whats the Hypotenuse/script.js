// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {
    // TODO:
    // Note: Use Math.sqrt() for square root
let sR = Math.sqrt
    // 1. Get the lengths of sides A and B from the input fields
let sA = parseFloat(document.getElementById('sideA').value)
let sB = parseFloat(document.getElementById('sideB').value)

    // 2. Calculate the hypotenuse using the Pythagorean theorem: c = √(a² + b²)
let a1 = sR((sA*sA) + (sB*sB))

    // 3. Display the result in the hypotenuse span element
document.getElementById("hypotenuse").innerText = a1

}
