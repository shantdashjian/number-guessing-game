// guess a number
let answer = Math.floor((Math.random() * (100 - 0)) + 1);
// add ability for button to check guess against number
const guessButton = document.querySelector('#guess-button');
console.log(answer);
let previousGuesses = [];
const MAX_GUESSES = 10;
let guessesLeft = MAX_GUESSES;
//    and give feedback
function checkGuess() {
    const guessInput = document.querySelector('#guess-input');
    const guessValue = Number(guessInput.value);
    previousGuesses.push(guessValue);
    guessInput.value = '';
    const resultPara = document.querySelector('#result');
    let resultText;
    guessesLeft--;
    const previousGuessesPara = document.querySelector('#previous-guesses');
    const previousGuessesText = previousGuesses.join(' ');

    previousGuessesPara.textContent = `Previous guesses: ${previousGuessesText}`;
    if (guessValue === answer) {
        resultText = 'Congratulations! You win!';
        guessInput.setAttribute('disabled', 'true');
        guessButton.setAttribute('disabled', 'true');
    } else if (guessesLeft > 0) {
        if (guessValue < answer) {
            resultText = 'Too low';
        } else if (guessValue > answer) {
            resultText = 'Too high';
        }
    } else {
        resultText = '!!!GAME OVER!!!';
        guessInput.setAttribute('disabled', 'true');
        guessButton.setAttribute('disabled', 'true');
    }

    resultPara.textContent = resultText;

}
guessButton.onclick = checkGuess;

