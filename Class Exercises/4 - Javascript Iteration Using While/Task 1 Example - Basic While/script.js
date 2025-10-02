const button = document.getElementById('showNumbersBtn');
const output = document.getElementById('output');

// Add an event listener to the button
button.addEventListener('click', () => {
  let count = 1;                  // start from 1
  let result = '';                // store the numbers

  // Use a while loop to build the string
  while (count <= 10) {
    result += count + '<br>';     // add the number and a line break
    count++;                      // increase the count
  }

  // Display the result in the output area
  output.innerHTML = result;
});
