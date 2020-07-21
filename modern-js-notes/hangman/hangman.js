// hangman.js
// Birchall 2020

"use strict"

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
