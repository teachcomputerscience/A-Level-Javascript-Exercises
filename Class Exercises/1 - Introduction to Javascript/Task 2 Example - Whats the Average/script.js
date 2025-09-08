// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateAverage);

//Create function
function calculateAverage() {

//Assign variables to input values
let n1 = parseFloat(document.getElementById('number1').value)
let n2 = parseFloat(document.getElementById('number2').value)
let n3 = parseFloat(document.getElementById('number3').value)

//Complete the equation
let ans = (n1 + n2 + n3)/3

    // 3. Display the result 
document.getElementById("result").innerText = ans
}
