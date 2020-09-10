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
    guessInput.setAttribute('disabled', 'true');
    guessButton.setAttribute('disabled', 'true');
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
        prepareToRestart();
    } else if (guessesLeft > 0) {
        if (guessValue < answer) {
            resultText = 'Too low';
        } else if (guessValue > answer) {
            resultText = 'Too high';
        }
    } else {
        resultText = '!!!GAME OVER!!!';
        prepareToRestart();
    }

    resultPara.textContent = resultText;
}

function startNewGame() {
    guessInput.removeAttribute('disabled');
    guessButton.removeAttribute('disabled');
    restartButton.setAttribute('hidden', 'true');
    answer = Math.floor((Math.random() * (100 - 0)) + 1);
    previousGuesses = [];
    guessesLeft = MAX_GUESSES;
    previousGuessesPara.textContent = '';
    resultPara.textContent = '';
}
