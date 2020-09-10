// guess a number
let answer = Math.floor((Math.random() * (100 - 0)) + 1);
console.log(answer);
let previousGuesses = [];
// add ability for button to check guess against number
//    and give feedback
function checkGuess() {
    const guessInput = document.querySelector('#guess-input');
    const guessValue = Number(guessInput.value);
    previousGuesses.push(guessValue);
    guessInput.value = '';
    const resultPara = document.querySelector('#result');
    let resultText;
    if (guessValue === answer) {
        resultText = 'Congratulations! You win!';
    } else if (guessValue < answer) {
        resultText = 'Too low';
    } else if (guessValue > answer) {
        resultText = 'Too high';
    }
    resultPara.textContent = resultText;
    const previousGuessesPara = document.querySelector('#previous-guesses');
    const previousGuessesText = previousGuesses.join(' ');
    previousGuessesPara.textContent = `Previous guesses: ${previousGuessesText}`;
}

document.querySelector('#guess-button').onclick = checkGuess;

