// Add your event listener and while loop code here
document.getElementById('addBtn').addEventListener('click', function() {
   
    let sum = 0 
 while (num1 > 0){
  let num1 = parseFloat(document.getElementById('numberInput').value);
    sum = num1 + sum ;
    i++;
}

 document.getElementById('output').textContent = `The sum is: ${sum}`;

});
// When the button is clicked, use a while loop to sum numbers until 0 is entered
