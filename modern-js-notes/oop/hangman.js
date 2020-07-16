// hangman.js
// Birchall 2020

"use strict"

// creating consutcot for hangman game
// 2 attributes, 1 for word, 1 for mised guesses allowed
// create 2 instances and print both to console

const Hangman = function (word, guesses) {
  this.word = word.toLowerCase().split("")
  this.guesses = guesses

  this.guessedLetters = ["h", "t", "o"]
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

const hangmanRound1 = new Hangman("CaT", 4)
const hangmanRound2 = new Hangman("HigH hOrse", 7)

console.log(hangmanRound1)
console.log(hangmanRound1.getPuzzle())
console.log(hangmanRound2)
console.log(hangmanRound2.getPuzzle())
