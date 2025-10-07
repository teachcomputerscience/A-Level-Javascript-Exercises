// Add your event listener and while loop code here
document.getElementById('addBtn').addEventListener('click', function () {
  let num1 = parseFloat(document.getElementById('numberInput').value);
 let i = 0 
  

  while (num1 !== 0) {
let sum = i
   
    let num1 = parseFloat(document.getElementById('numberInput').value);
    i = num1 + sum;

    
    
    document.getElementById('output').textContent = `The current sum is: ${i}`;
    return i;

  }

  document.getElementById('output').textContent = `The final sum is: ${i}`;

});



// When the button is clicked, use a while loop to sum numbers until 0 is entered
