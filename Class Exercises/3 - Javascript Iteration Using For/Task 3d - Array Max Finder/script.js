function getrandomnum(max) {
    return Math.floor(Math.random() * max);
}


document.getElementById("btnFindMax")
let numbers = []
let i = 0
for (i = 0; i <= 10; i++) {
    numbers(i) = getrandomnum(50)
}



function findmax(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
document.getElementById('output').textContent = findmax(numbers);

