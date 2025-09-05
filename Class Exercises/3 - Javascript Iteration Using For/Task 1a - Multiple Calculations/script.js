// Event listeners for buttons
document.getElementById('eightTimesBtn').addEventListener('click', showEightTimesTable);
document.getElementById('customTimesBtn').addEventListener('click', showCustomTimesTable);

// Function to show 8 times table
function showEightTimesTable() {
    let output = '';
    
    // TODO: Write a for loop that:
    // 1. Counts from 1 to 12
    // 2. For each number, multiplies it by 8
    // 3. Adds each calculation to the output string
    // Example: 8 x 1 = 8
    
    // Display the results
    document.getElementById('results').textContent = output;
}

// Function to show custom times table
function showCustomTimesTable() {
    // Get the user's number
    let number = parseInt(document.getElementById('userNumber').value);
    let output = '';
    
    // TODO: 
    // 1. Check if the number is between 1 and 10
    // 2. If valid, create a times table for that number (1-12)
    // 3. If not valid, show an error message
    
    // Display the results
    document.getElementById('results').textContent = output;
}
