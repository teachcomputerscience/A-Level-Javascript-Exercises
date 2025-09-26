function doSomething(n) {
    console.log(n);
}

// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').value);
    const delay = parseInt(document.getElementById('delay').value);
    let countdown = [];
    let pt = '';
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
   if (isNaN(startNum) || isNaN(delay)) {
        document.getElementById('countdownDisplay').innerHTML = 'Invalid Number';
        return;
   }
    // Check if start number is positive
   if (startNum < 0) {
        document.getElementById('countdownDisplay').innerHTML = 'Enter a postivive number';
        return;
   }

    // Check if delay is at least 100ms
    for (let i = 1; i < 10; i++){
        setTimeout(() => {
            doSomething(i);}
        , 100);
    }
    
    // TODO: Disable button during countdown
    document.getElementById('startButton').disabled = true;

    // TODO: Create the countdown loop
    // Use a for loop counting backwards
    // Start from startNum and then work back to 0 
    for (let i = startNum; i >= 0; i--){
    // Use setTimeout to create the delay between numbers  
        setTimeout(startCountdown(i), delay)
        pt = countdown.push(i);
        document.getElementById('countdownDisplay').innerHTML = pt

        // TODO: Show "Blast off!" at the end
        if (i === 0) {
            document.getElementById('countdownDisplay').innerHTML = countdown.join('   BLAST OFF');
            return;
        }


    }
    // TODO: Re-enable button after countdown finishes
    document.getElementById('startButton').disabled = false;
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').innerHTML = 'Ready to start!';
};
