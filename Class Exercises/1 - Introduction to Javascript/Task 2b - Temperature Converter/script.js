// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
    // TODO:
    // 1. Get the Celsius temperature from the input field
let temp = parseFloat(document.getElementById('celsius').value)

    // 2. Convert to Fahrenheit using the formula: F = 1.8 * C + 32
let realtemp = (temp *1.8) +32

    // 3. Display the result in the fahrenheit span element
document.getElementById('fahrenheit').innerText = realtemp


}
