// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const generateButton = document.getElementById('generateButton');
    const sequenceType = document.getElementById('sequenceType');
    const stepInput = document.getElementById('stepInput');
    
    // Show/hide step input based on sequence type
    sequenceType.addEventListener('change', function() {
        stepInput.classList.toggle('hidden', this.value !== 'steps');
    });
    
    // Add click event listener to the button
    generateButton.addEventListener('click', generateSequence);
});

// Function to generate number sequence
function generateSequence() {
    // TODO: Get the maximum number and sequence type from inputs
    let num = parseFloat(document.getElementById('maxNumber').value);
    let type = document.getElementById('sequenceType').value;
    let step = parseFloat(document.getElementById('stepValue').value);
    // TODO: Initialize array to store sequence
    let sequence = [];

    // TODO: Generate sequence based on type selected:
    if (type == 'countUp') {
        for (let i = 1; i <= num; i++){
        sequence.push(i);
        console.log('countUp');
        }
    } else if (type == 'countDown') {
        for (let i = num; i >= 1; i = i - 1) {
            sequence.push(i);
            console.log('countDown');
        }
    } else if (type == 'steps') {
        for (let i = 1; i <= num; i = i + step){
            sequence.push(i);
            console.log('steps');                                                 
        }
    } else if (type == 'even') {
        for (let i = 1; i <= num; i++){
            if (i % 2 === 0){
                sequence.push(i);
            }
            console.log('even')
        }
     } else if (type == 'odd') {
        for (let i = 1; i <= num; i++){
            if (i % 2 === 1){
                sequence.push(i);
            }
            console.log('odd')
        }
    }
    // countUp: Use a for loop counting from 1 to N
    // countDown: Use a for loop counting from N down to 1
    // steps: Use a for loop with custom step value
    // even: Use a for loop with if statement to check even numbers
    // odd: Use a for loop with if statement to check odd numbers
    
    // TODO: Calculate sum of sequence
    
    // TODO: Display sequence, count of numbers, and sum
    document.getElementById('sequenceDisplay').textContent = sequence.join(' ')
}
