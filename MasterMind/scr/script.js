let playerName = '';
let secretCode = '';
let attempts = 10;
let hintGiven = false; // Track if a hint has been given

// Wait for DOM content to load before assigning event listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start-button').addEventListener('click', startGame);
    document.getElementById('submit-guess-button').addEventListener('click', submitGuess);
    document.getElementById('restart-button').addEventListener('click', restartGame);
    document.getElementById('hint-button').addEventListener('click', giveHint); // Event listener for the hint button
});

function startGame() {
    playerName = document.getElementById('player-name').value;
    if (playerName === '') {
        alert('Please enter your name.');
        return;
    }

    // Generate a random 4-digit code
    secretCode = generateSecretCode();

    // Hide the welcome screen and show the game screen
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    document.getElementById('attempts').textContent = `Attempts left: ${attempts}`;
    hintGiven = false; // Reset the hint state
    document.getElementById('hint').textContent = ''; // Clear any previous hint
}

function generateSecretCode() {
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 10).toString();
    }
    return code;
}

function submitGuess() {
    const guess = document.getElementById('player-guess').value;
    if (guess.length !== 4 || isNaN(guess)) {
        alert('Please enter a 4-digit number.');
        return;
    }

    attempts--;
    document.getElementById('attempts').textContent = `Attempts left: ${attempts}`;

    if (guess === secretCode) {
        endGame(true);  // Player wins
    } else {
        let feedback = getFeedback(guess);
        document.getElementById('feedback').textContent = feedback;

        if (attempts === 0) {
            endGame(false);  // Player loses
        }
    }
}

function getFeedback(guess) {
    let correctDigits = 0;
    let correctPositions = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretCode[i]) {
            correctPositions++;
        } else if (secretCode.includes(guess[i])) {
            correctDigits++;
        }
    }

    return `${correctPositions} correct positions, ${correctDigits} correct digits`;
}

function endGame(won) {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';

    const message = won
        ? `Congratulations, ${playerName}! You guessed the code and won!`  // Win message
        : `Sorry, ${playerName}, you've lost. The correct code was ${secretCode}.`;  // Lose message

    document.getElementById('end-message').textContent = message;
}

function restartGame() {
    // Reset variables
    attempts = 10;
    secretCode = generateSecretCode();

    // Hide the end screen and show the game screen
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    document.getElementById('feedback').textContent = '';
    document.getElementById('player-guess').value = '';
    document.getElementById('attempts').textContent = `Attempts left: ${attempts}`;
    hintGiven = false;
    document.getElementById('hint').textContent = ''; // Clear any previous hint
}

function giveHint() {
    if (hintGiven) {
        document.getElementById('hint').textContent = 'You already received a hint!';
        return;
    }

    // Provide a hint by revealing one of the digits from the secret code
    const hintIndex = Math.floor(Math.random() * 4);
    const hintDigit = secretCode[hintIndex];
    document.getElementById('hint').textContent = `Hint: One of the digits is ${hintDigit} at position ${hintIndex + 1}.`;
    hintGiven = true; // Ensure only one hint is provided
}
