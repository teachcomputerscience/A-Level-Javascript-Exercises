# Times Tables Calculator

## Task Description
Create a program with two features:
1. A button that displays the 8 times table (from 1x8 to 12x8)
2. A button that displays a custom times table based on user input (number between 1-10)

## Template Structure
- The HTML is complete and provides:
  - A button for the 8 times table
  - An input field for the custom number
  - A button for the custom times table
  - A results area to display the output
- The CSS is complete and styles all elements
- The JavaScript file contains:
  - Event listeners (already set up)
  - Function frameworks that need completing

## Your Task
Complete the JavaScript functions:

1. `showEightTimesTable()`
   - Create a for loop that counts from 1 to 12
   - Multiply each number by 8
   - Add each calculation to the output string
   - Example output format: "8 x 1 = 8"

2. `showCustomTimesTable()`
   - Get the user's input number
   - Validate that it's between 1 and 10
   - If valid, create a times table for that number
   - If invalid, show an error message

## Example Output
```
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
...etc
```

## Tips
- Use a for loop to count from 1 to 12
- Use string concatenation to build the output
- Remember to add newline characters (\n) between each line
- Use parseInt() to convert the input to a number
