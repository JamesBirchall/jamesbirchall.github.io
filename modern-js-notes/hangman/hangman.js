// hangman.js
// Birchall 2020

"use strict"

// creating consutcot for hangman game
// 2 attributes, 1 for word, 1 for mised guesses allowed
// create 2 instances and print both to console

const Hangman = function (word, guesses) {
  this.word = word.toLowerCase().split("")
  this.guesses = guesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  // generating the string
  let puzzle = ""

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter
    } else {
      puzzle += "*"
    }
  })

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()

  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.guesses--
  }
}

const hangmanRound1 = new Hangman("HigH hOrse", 7)

window.addEventListener("keypress", function (e) {
  // console.log(e.key)
  checkEntry(e.key)
})

const checkEntry = function (key) {
  hangmanRound1.makeGuess(key)
  console.log(hangmanRound1.getPuzzle())
  console.log(hangmanRound1.guesses)
}
