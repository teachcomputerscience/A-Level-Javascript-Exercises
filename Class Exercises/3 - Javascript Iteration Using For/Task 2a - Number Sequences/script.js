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
    let MaxNum = parseFloat(document.getElementById('maxNumber').value)
    let seqtype = document.getElementById('sequenceType').value

    // TODO: Initialize array to store sequence
    let Sequence = []

    // TODO: Generate sequence based on type selected:
    // countUp: Use a for loop counting from 1 to N
    if (seqtype === 'countUp'){
        for (){
            // code goes here
        }
    }


    // countDown: Use a for loop counting from N down to 1
    if (seqtype === 'countDown'){
        for (i=MaxNum; i>=1; i--){
            // code goes here
        }
    }


    // steps: Use a for loop with custom step value
    if (seqtype === 'steps'){
        for (i=0; i<MaxNum; i++){
            // code goes here
        }
    }


    // even: Use a for loop with if statement to check even numbers
    if (seqtype === 'even'){
        for (){
            // code goes here
        }
    }


    // odd: Use a for loop with if statement to check odd numbers
    if (seqtype === 'odd'){
        for (){
            // code goes here
        }
    }


    // TODO: Calculate sum of sequence
    

    // TODO: Display sequence, count of numbers, and sum


}
