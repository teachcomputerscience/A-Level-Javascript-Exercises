// Guess the Number Game implementation
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

document.getElementById('guessBtn').addEventListener('click', function () {
    if (gameOver) return;
    let guess = parseInt(document.getElementById('guessInput').value);
    let outputDiv = document.getElementById('output');
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        outputDiv.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (guess === randomNumber) {
        outputDiv.textContent = `Correct it took ${attempts} attempts.`;
        gameOver = true;
    } else if (guess < randomNumber) {
        outputDiv.textContent = 'Too low.';
    } else {
        outputDiv.textContent = 'Too high.';
    }
});
