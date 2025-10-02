// Add your event listener and while loop code here
document.getElementById('countBtn').addEventListener('click', function() {

     
      let n = parseFloat(document.getElementById('numberInput').value);
      let i = 1;
      let output = '';

      while (i <= n) {
            output += i + ' ';
            i++; 
      };
      document.getElementById('output').textContent = output;
});



    


// When the button is clicked, display numbers 1 to N in the output area using a while loop
