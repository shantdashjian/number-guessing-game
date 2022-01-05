const MAX_GUESSES = 10;
let answer;
let previousGuesses;
let guessesLeft;

const guessInput = document.querySelector('#guess-input');
const guessButton = document.querySelector('#guess-button');
const previousGuessesPara = document.querySelector('#previous-guesses');
const resultPara = document.querySelector('#result');
const restartButton = document.querySelector('#start-new-game');
guessButton.onclick = checkGuess;
restartButton.onclick = startNewGame;

startNewGame();

function prepareToRestart() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.removeAttribute('hidden');
}

function checkGuess() {
    const guessValue = Number(guessInput.value);
    previousGuesses.push(guessValue);
    guessesLeft--;
    guessInput.value = '';
    let resultText;

    const previousGuessesText = previousGuesses.join(' ');
    previousGuessesPara.textContent = `Previous guesses: ${previousGuessesText}`;

    if (guessValue === answer) {
        resultText = 'Congratulations! You win!';
        resultPara.className = 'win';
        prepareToRestart();
    } else if (guessesLeft > 0) {
        if (guessValue < answer) {
            resultText = 'Wrong! Too low!';
        } else if (guessValue > answer) {
            resultText = 'Wrong! Too high!';
        }
    } else {
        resultText = '!!!GAME OVER!!!';
        prepareToRestart();
    }

    resultPara.textContent = resultText;
    guessInput.focus();
}

function startNewGame() {
    guessInput.disabled = false;
    guessInput.focus();
    guessButton.disabled = false;
    restartButton.setAttribute('hidden', 'true');
    answer = Math.floor((Math.random() * (50 - 0)) + 30);
    previousGuesses = [];
    guessesLeft = MAX_GUESSES;
    previousGuessesPara.textContent = '';
    resultPara.textContent = '';
    resultPara.className = 'wrong-or-game-over';
}
