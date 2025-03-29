// Generate a random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Select elements
const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById('guessSubmit');
const guessList = document.getElementById('guessList');
const lastResult = document.getElementById('lastResult');
const lowOrHi = document.getElementById('lowOrHi');
const resetButton = document.getElementById('resetGame');

let guessCount = 1;
const maxGuesses = 10;
let guessesArray = [];

function checkGuess() {
    const userGuess = Number(guessField.value);

    // Validation
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        lastResult.textContent = "Enter a number between 1 and 100!";
        lastResult.className = "error";
        return;
    }

    if (guessCount === 1) {
        guessList.textContent = "";
    }

    // Store the guess
    guessesArray.push(userGuess);
    guessList.textContent = guessesArray.join(", ");

    // Check the guess
    if (userGuess === randomNumber) {
        lastResult.textContent = "🎉 Correct! You Win!";
        lastResult.className = "success";
        lowOrHi.textContent = "";
        endGame();
    } else if (guessCount === maxGuesses) {
        lastResult.textContent = "😞 Game Over! The number was " + randomNumber;
        lastResult.className = "error";
        lowOrHi.textContent = "";
        endGame();
    } else {
        lastResult.textContent = "❌ Wrong!";
        lastResult.className = "error";
        lowOrHi.textContent = userGuess < randomNumber ? "Too low!" : "Too high!";
    }

    // Prepare for the next guess
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function endGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.classList.remove('hidden');
}

function resetGame() {
    // Reset values
    guessCount = 1;
    guessesArray = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;

    // Reset UI
    guessList.textContent = "None";
    lastResult.textContent = "";
    lastResult.className = "";
    lowOrHi.textContent = "";
    
    // Enable input
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    resetButton.classList.add('hidden');
}

resetButton.addEventListener('click', resetGame);
