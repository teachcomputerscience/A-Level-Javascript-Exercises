// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', convertToCentimeters);

function convertToCentimeters() {
    // TODO:
    // 1. Get the feet and inches values from the input fields
let feet = parsefloat(document.getElementById('feet').value)
let inch = parsefloat(document.getElementById('inches').value)

    // 2. Convert to centimeters using:
    //    - First convert feet to inches (1 foot = 12 inches)
let c1 = feet * 12

    //    - Then convert total inches to centimeters (1 inch = 2.54 cm)
let cm = c1 * 2.54 

    // 3. Display the result in the centimeters span element
document.getElementById('centimeters').innerText = cm

}