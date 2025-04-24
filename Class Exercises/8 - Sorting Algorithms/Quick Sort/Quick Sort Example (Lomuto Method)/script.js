document.addEventListener("DOMContentLoaded", function() {
    const arrayDisplay = document.getElementById("array-display");
    const sortedArrayDisplay = document.getElementById("sorted-array");
    const generateButton = document.getElementById("generate-btn");
    const sortButton = document.getElementById("sort-btn");

    // Function to generate a random array
    function generateRandomArray() {
        const array = [];
        const size = Math.floor(Math.random() * 5) + 5; // Generate an array of size between 5 and 10
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
        }
        return array;
    }

    // Display the generated random array
    function displayArray(array) {
        arrayDisplay.textContent = JSON.stringify(array);
        sortedArrayDisplay.textContent = JSON.stringify(array); // Reset sorted array display
    }

    // Sort the array using the student-defined sorting function
    function sortArray() {
        const array = JSON.parse(arrayDisplay.textContent);
        const sortedArray = quickSort(array); // Example sorting algorithm to be replaced by the student
        sortedArrayDisplay.textContent = JSON.stringify(sortedArray);
    }


    //Quick sort
    function quickSort(arr) {

        //base case
        if (arr.length <= 1) {
            return arr;

        } 
        let pivot = arr[arr.length - 1];
        let i = 0
        let j = 0
        let temp
        let left;
        let right;
        while (j < arr.length - 1) {
            if (arr[j] <= pivot) {
                temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
                i = i + 1
            } 
            j = j + 1
        }
        //swap with pivot
        temp = arr[arr.length - 1];
        arr[arr.length - 1] = arr[i];
        arr[i] = temp;

        //split lists and repeat
        left = quickSort(arr.slice(0, i));
        right = quickSort(arr.slice(i + 1));
        
        return left.concat(arr[i],right);
    }

    // Generate a new random array when the button is clicked
    generateButton.addEventListener("click", function() {
        const newArray = generateRandomArray();
        displayArray(newArray);
    });

    // Sort the array when the button is clicked
    sortButton.addEventListener("click", sortArray);

    // Initial setup: generate and display a random array
    const initialArray = generateRandomArray();
    displayArray(initialArray);
});
