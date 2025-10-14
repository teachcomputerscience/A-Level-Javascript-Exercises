// Add your event listener and while loop code here
document.getElementById('addBtn').addEventListener('click', function () {
   let usernames = [] 
   let done = false
  let output = ''
  let userInput
   while(done = false)
      
   userInput = document.getElementById('usernameInput').value
   let i = userInput
     if (userInput !== done){
       usernames.push(i)
       done === false

     }
   
   
  else (userInput === done) ;{
        document.getElementById('usernameInput').textContent = '';
        done === true;
        
     }
 output = usernames 
document.getElementById("output").textContent = `the usernames are ${output}`;


});

      
// When the button is clicked, use a while loop to collect usernames until 'done' is entered
