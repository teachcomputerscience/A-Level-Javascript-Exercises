// Add your event listener and while loop code here
document.getElementById('checkBtn').addEventListener('click', function() {

    
    let correctPassword = "password"
    
 let incorrect = true
    while(incorrect) { 
         
         let passwordInput = document.getElementById('passwordInput').value;
        
         if (passwordInput === correctPassword) {
             incorrect = false
             alert ('the password is correct')
         }
         else {
            incorrect = false
            alert ('enter the password again')
         }       
  
             
   }
          
    });
// When the button is clicked, use a while loop to check the password until correct
