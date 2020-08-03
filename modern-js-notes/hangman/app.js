// app.js
// Birchall 2020
// Hangman Game

const puzzleElement = document.querySelector("#puzzle")
const guessesElement = document.querySelector("#guesses")
const hangmanRound1 = new Hangman("HigH hOrse", 7)
puzzleElement.textContent = hangmanRound1.getPuzzle()
guessesElement.textContent = hangmanRound1.statusMessage()

window.addEventListener("keypress", function (e) {
  checkEntry(e.key)
})

const checkEntry = function (key) {
  hangmanRound1.makeGuess(key)
  puzzleElement.textContent = hangmanRound1.getPuzzle()
  guessesElement.textContent = hangmanRound1.statusMessage()
}

async function reloadGame() {
  // wait for 2 seconds
  await new Promise((r) => setTimeout(r, 2000))

  // reload the page
  window.location.reload()
}
