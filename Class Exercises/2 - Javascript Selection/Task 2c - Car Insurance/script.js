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
    let ager  = number(document.getElementID(age).value)
    let years = number(document.getElementID(noClaims).value)
    let PC = number(document.getElementID(previousClaims).value)
    
    // TODO: Calculate base premium (£500)
    let basepre = 500
    let add = 0
    // TODO: Apply age adjustment
    // Under 25: +50%
    if  (ager < 25){]
        add = basepre * 0.5
        basepre = add + basepre
    }else if (ager >= 40){
        add = basepre * 1.15
        basepre = 
    }
    // 25-40: No change

    // Over 40: -15%
    

    // TODO: Apply no claims bonus

    // 0 years: No discount

    // 1-2 years: 10% discount

    // 3-5 years: 25% discount

    // Over 5 years: 35% discount

    
    // TODO: Add previous claims adjustment

    // Each claim adds 20%

    
    // TODO: Display the final premium and the breakdown of calculations

}
