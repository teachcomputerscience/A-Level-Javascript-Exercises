// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // Note: Use Math.PI for the value of π
let pi = Math.PI
    // 1. Get the radius value from the input field
let f =  parseFloat(document.getElementById('radius').value)

    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
let ans = 2*pi*f

    //    - Area using the formula: π * radius^2
let ans2 = pi*(f^2)

    // 3. Display both results in their respective span elements
document.getElementById("area").innerText = ans
document.getElementById("area").innerText = ans2
}
