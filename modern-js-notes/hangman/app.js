// app.js
// Birchall 2020
// Hangman Game

const puzzleElement = document.querySelector("#puzzle")
const guessesElement = document.querySelector("#guesses")
const hangmanRound1 = new Hangman("HigH hOrse", 7)
puzzleElement.textContent = hangmanRound1.getPuzzle()
guessesElement.textContent = hangmanRound1.guesses

window.addEventListener("keypress", function (e) {
  // console.log(e.key)
  checkEntry(e.key)
})

const checkEntry = function (key) {
  console.log(hangmanRound1.getPuzzle())
  hangmanRound1.makeGuess(key)
  puzzleElement.textContent = hangmanRound1.getPuzzle()
  guessesElement.textContent = hangmanRound1.guesses
}
