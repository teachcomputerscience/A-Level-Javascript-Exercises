// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePercentage);

function calculatePercentage() {
    // TODO:
    // 1. Get the maximum mark and student's mark from the input fields
let mm = parseFloat(document.getElementById('maxMark').value)
let sm = parseFloat(document.getElementById('studentMark').value)

    // 2. Calculate the percentage using the formula: (student's mark ÷ maximum mark) × 100
let percent = (sm/mm) * 100

    // 3. Display the result in the percentage span element
document.getElementById('percentage').innerText = percent
}
