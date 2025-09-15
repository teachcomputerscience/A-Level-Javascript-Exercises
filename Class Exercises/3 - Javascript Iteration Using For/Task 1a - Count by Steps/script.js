// TODO: Write the function to generate the sequence
function generateSequence() {
    // Get input values
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const step = parseInt(document.getElementById('step').value);
    
    // Get output element
    const output = document.getElementById('sequenceOutput');
    let valid = true
    let positive = false
    // TODO: Validate inputs
if (step === 0){
    valid = false
} else if (step > 0){
valid = true 
positive = true
} else if (step < 0 ){
    valid = true
    positive = false
}

if (valid == true) {
    if (end > start && positive) {
        valid = true
    } else if (end < start && positive){
        valid = false
    } else {
        valid = false 
    }
}

    // Check if values are valid numbers
    // Check if step is positive
    // Check if end is greater than start
    
    // TODO: Create array to store sequence
    let sequence = [];
    if (positive && valid){
    for (let i = start; i <= end; i += step){
        sequence.push(i)
    }
    } else if (valid) {
        for (let i = start; i >= end; i += step){
            sequence.push(i)
        }
    }

    // TODO: Use for loop with step to generate sequence
    // Remember to use the step in the for loop increment
    
    // TODO: Display the sequence
    if (valid) {
        document.getElementById('sequenceOutput').innerHTML = sequence.join(' → ');
    }
    // Join the numbers with arrows between them
}

// Initialize the page
window.onload = function() {
    generateSequence();
};
