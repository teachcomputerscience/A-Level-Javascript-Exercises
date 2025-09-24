function doSomething(n) {
    console.log(n);
}

// TODO: Write the countdown function
function startCountdown() {
    // Get input values
    const startNum = parseInt(document.getElementById('startNum').innerHTML);
    const delay = parseInt(document.getElementById('delay').innerHTML);
    let countdown = [];
    let pt = '';
    
    // Get display element and button
    const display = document.getElementById('countdownDisplay');
    const button = document.getElementById('startButton').innerHTML;
    
    // TODO: Validate inputs
    // Check if values are valid numbers
   if (isNaN(startNum) || isNaN(delay)) {
        document.getElementById('sequenceOutput').innerHTML = 'Invalid Number';
        return;
   }
    // Check if start number is positive
   if (startNum < 0) {
        document.getElementById('sequenceOutput').innerHTML = 'Enter a postivive number';
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
        document.getElementById('sequenceOutput').innerHTML = pt

        // TODO: Show "Blast off!" at the end
        if (i === 0) {
            document.getElementById('sequenceOutput').innerHTML = countdown.join('   BLAST OFF');
            return;
        }


    }
    // TODO: Re-enable button after countdown finishes
    document.getElementById('startButton').disabled = false;
}

// Initialize the page
window.onload = function() {
    document.getElementById('countdownDisplay').innerHTML.textContent = 'Ready to start!';
};
