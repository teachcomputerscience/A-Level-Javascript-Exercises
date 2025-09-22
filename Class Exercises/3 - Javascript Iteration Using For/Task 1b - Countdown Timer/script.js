function doSomething(n) {
    console.log(n);
}

// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(display.innerHTML('startNum').value);
    const delay = parseInt(display.innerHTML('delay').value);
    let countdown = [];
    
    // Get display element and button
    const display = display.innerHTML('countdownDisplay');
    const button = display.innerHTML('startButton');
    
    // TODO: Validate inputs
    // Check if values are valid numbers
   if (isNaN(startNum) || isNaN(delay)) {
        display.innerHTML('sequenceOutput').innerHTML = 'Invalid Number';
        return;
   }
    // Check if start number is positive
   if (startNum < 0) {
        display.innerHTML('sequenceOutput').innerHTML = 'Enter a postivive number';
        return;
   }

    // Check if delay is at least 100ms
    for (let i = 1; i < 10; i++){
        setTimeout(() => {
            doSomething(i);}
        , 100);
    }
    
    // TODO: Disable button during countdown
    
    // TODO: Create the countdown loop
    // Use a for loop counting backwards
    // Start from startNum and then work back to 0 
    for (let i = startNum; i <= 0; i++){
    // Use setTimeout to create the delay between numbers  
        setTimeout(startCountdown, delay)
        countdown.push(i);
        display.innerHTML('sequenceOutput').innerHTML = i

        // TODO: Show "Blast off!" at the end
        if (i === 0) {
            display.innerHTML('sequenceOutput').innerHTML = countdown.join('   BLAST OFF');
        }


    // TODO: Show "Blast off!" at the end
    
    // TODO: Re-enable button after countdown finishes
}

// Initialize the page
window.onload = function() {
    display.innerHTML('countdownDisplay').textContent = 'Ready to start!';
};
