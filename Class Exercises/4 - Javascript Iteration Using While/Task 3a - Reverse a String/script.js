// Add your event listener and while loop code here
document.getElementById('reverseBtn').addEventListener('click', function () {


    const str = parseFloat(document.getElementById('stringInput').value);
    let reversed = ""
    
   


    while(str === true) {
        
      let i = str.length - 1; i >= 0; i--;
      reversed =+ str[i]
    

    
    }
       document.getElementById("output").innerText = `Reversed: ${reversed}`;
    
});
// When the button is clicked, use a while loop to reverse the string
