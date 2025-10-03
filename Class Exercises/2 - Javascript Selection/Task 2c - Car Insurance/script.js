// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age = parseFloat(document.getElementById('age').value)
    let noclaims = parseFloat(document.getElementById('noClaims').value)
    let prev = parseFloat(document.getElementById('previousClaims').value)
    // TODO: Calculate base premium (£500)
    let base = 500
    
    // TODO: Apply age adjustment
    if (age <= 25) {
        base = base * 2
    } else if ( age > 40) {
        base = base * 0.85
    } 
    // Under 25: +50%
    // 25-40: No change
    // Over 40: -15%
    
    // TODO: Apply no claims bonus
    if (noclaims >= 1 && noclaims < 3) {
      base = base * 0.9
    } else if (noclaims >= 3 && noclaims < 6){
        base = base * 0.75
    } else if ( noclaims > 5 ) {
        base = base * 0.65
    }

    // 0 years: No discount
    // 1-2 years: 10% discount
    // 3-5 years: 25% discount
    // Over 5 years: 35% discount
    
    // TODO: Add previous claims adjustment
    claimajst = (prev * 0.2) + 1
    // Each claim adds 20%
    base = base * claimajst
    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById('result').textContent = `premuim = ${base} `
}
