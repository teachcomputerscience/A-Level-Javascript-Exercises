// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    let rad = parseFloat(document.getElementById('radius').value);
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    let cir = rad * 2 * Math.PI
    //    - Area using the formula: π * radius^2
    let area = (rad**2) * Math.PI
    // 3. Display both results in their respective span elements
    document.getElementById('circumference').textContent = `The circumference is  ${cir}`
    document.getElementById('area').textContent = `the area is  ${area}`
    // Note: Use Math.PI for the value of π
}
