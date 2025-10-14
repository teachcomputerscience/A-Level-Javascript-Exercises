// Add your event listener and while loop code here
document.getElementById('checkBtn').addEventListener('click', function() {

    
    let correctPassword = "password"
    
 let incorrect = true
    while(incorrect) { 
         
         let passwordInput = document.getElementById('passwordInput').value;
        
         if (passwordInput === correctPassword) {
             incorrect = false
             document.getElementById("message").textContent = `the password is correct`;
         }
         else {
            incorrect = false
            document.getElementById("message").textContent = ` The password is incorrect`;
         }       
  
             
   }
          
    });
// When the button is clicked, use a while loop to check the password until correct
