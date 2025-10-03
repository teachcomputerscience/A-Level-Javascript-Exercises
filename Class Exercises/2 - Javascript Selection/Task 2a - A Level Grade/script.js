// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let comp1 = parseFloat(document.getElementById('comp1').value)
    let comp2 = parseFloat(document.getElementById('comp2').value)
    let comp3 = parseFloat(document.getElementById('comp3').value)
    let comp4 = parseFloat(document.getElementById('comp4').value)
    // TODO: Calculate the total marks
    let total = comp1 + comp2 + comp3 + comp4
    // TODO: Calculate the percentage (total possible marks is 400)
    let percent = total / 4
    let grade = " "
    // TODO: Determine the grade based on the percentage
    // A: 80% or greater
    // B: 70% or greater
    // C: 60% or greater
    // D: 50% or greater
    // E: 40% or greater
    // U: Less than 40%
    if (percent > 80 && ((comp3 + comp4) / 2) > 90) {
        document.getElementById('result').textContent = `A*`
    } else if (percent >= 80) {
document.getElementById('result').textContent = `A`
    } else if (percent >= 70 ) {
        document.getElementById('result').textContent = `B`
    } else if (percent >= 60 ) {
        document.getElementById('result').textContent = `C`
    } else if (percent >= 50) {
        document.getElementById('result').textContent = `D`
    } else if (percent >= 40) {
        document.getElementById('result').textContent = `E`
    } else  {
    document.getElementById('result').textContent = `U`
    }
    // TODO: Display the percentage and grade
    
    document.getElementById('percentage').textContent = percent
}
