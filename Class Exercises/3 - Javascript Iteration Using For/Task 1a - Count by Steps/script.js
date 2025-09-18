// TODO: Write the function to generate the sequence
function generateSequence() {
    // Get input values
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const step = parseInt(document.getElementById('step').value);
    
    // Get output element
    const output = document.getElementById('sequenceOutput');
    
    // TODO: Validate inputs
    let startn  = parseFloat(document.getElementById('start').value)
    let endn = parseFloat(document.getElementById('end').value)
    let ss = parseFloat(document.getElementById('step').value)
    // TODO: Create array to store sequence
    let sequence = [];

    // Check if values are valid numbers
    if (typeof startn === 'number' && endn === 'number'){

    // Check if step is positive
    // Check if end is greater than start
        if (ss > 0 && endn > startn){

      // TODO: Use for loop with step to generate sequence
    // Remember to use the step in the for loop increment
            for (!isNaN(startn) && !isNaN(endn) && !isNaN(ss)) {
                sequence.push(i);
            }
            document.getElementById('sequenceOutput').innerHTML = sequence.join(' → ');
        } else {
            document.getElementById('sequenceOutput').innerHTML = 'Step must be positive and end must be greater than start.';
        }
    }else {
            document.getElementById('sequenceOutput').innerHTML = 'Invalid Number';
        }
    

    
    // TODO: Display the sequence
    // Join the numbers with arrows between them
    document.getElementById('sequenceOutput').innerHTML = sequence.join(' → ');
}

// Initialize the page
window.onload = function() {
    generateSequence();
};


