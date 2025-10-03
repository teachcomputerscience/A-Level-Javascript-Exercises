// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    let valid = true
    // TODO: Validate inputs
    // Check if values are valid numbers
    // Check if start number is positive
    // Check if delay is at least 100ms
    if (isNaN(startNum)){
valid = false 
    }
    if (startNum < 1){
        valid = false
    }
    if (delay < 100){
        valid = false
    }
    // TODO: Disable button during countdown
    document.getElementById("startButton").disabled = true;
    // TODO: Create the countdown loop
    let countdown = [];
    if (valid){
        for (let i = startNum; i >= 0; i--){
            setTimeout(() => {
             countdown.push(i)
                document.getElementById('countdownDisplay').innerHTML = countdown.join(`...`)
            }, 1000 * (startNum - i));
           
    }
}
   document.getElementById("startButton").disabled = false;
    // Use a for loop counting backwards
    // Use setTimeout to create the delay between numbers
    
    // TODO: Show "Blast off!" at the end
    
    // TODO: Re-enable button after countdown finishes
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').textContent = 'Ready to start!';
};
