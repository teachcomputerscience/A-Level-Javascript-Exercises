// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateArea);

function calculateArea() {
    // TODO:
    // 1. Get the base and height values from the input fields
 let Base = parseFloat(document.getElementById('base').value);
 let High = parseFloat(document.getElementById('height').value);

    // 2. Calculate the area using the formula: area = (base * height) / 2
let w = (Base*High)/2

    // 3. Display the result in the area span element
document.getElementById("area").innerText = w;
}
