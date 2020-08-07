// hangman.js
// Birchall 2020

"use strict"

class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split("")
    this.guesses = guesses
    this.guessedLetters = []
    this.status = "playing"
  }

  getPuzzle() {
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

  calculateStatus() {
    // if we have no guesses left then game over!
    if (this.guesses <= 0) {
      this.status = "failed"
      reloadGame()
    } else {
      // check each letter has been matched, count letters and white spaces and combine to check if finished as well
      let finished = false
      let foundLetters = 0
      let foundSpaces = 0

      for (let i = 0; i < this.word.length; i++) {
        if (this.guessedLetters.includes(this.word[i])) {
          foundLetters++
        } else if (this.word[i] === " ") {
          foundSpaces++
        }
      }

      if (this.word.length === foundLetters + foundSpaces) {
        finished = true
      }

      if (finished) {
        this.status = "finished"
        reloadGame()
      }
    }
  }

  makeGuess(guess) {
    if (this.status !== "playing") {
      return
    }

    guess = guess.toLowerCase()

    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
      this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.guesses--
    }

    this.calculateStatus()
  }

  statusMessage() {
    if (this.status === "failed") {
      return `Nice try! The word was: ${this.word.join("")}`
    } else if (this.status === "finished") {
      return "Great Work! You guessed the word correctly :-)"
    }

    return `Guesses Left: ${this.guesses}`
  }
}

// const Hangman = function (word, guesses) {
//   this.word = word.toLowerCase().split("")
//   this.guesses = guesses
//   this.guessedLetters = []
//   this.status = "playing"
// }

// Hangman.prototype.getPuzzle = function () {
//   // generating the string
//   let puzzle = ""

//   this.word.forEach((letter) => {
//     if (this.guessedLetters.includes(letter) || letter === " ") {
//       puzzle += letter
//     } else {
//       puzzle += "*"
//     }
//   })

//   return puzzle
// }

// Hangman.prototype.calculateStatus = function () {
//   // if we have no guesses left then game over!
//   if (this.guesses <= 0) {
//     this.status = "failed"
//     reloadGame()
//   } else {
//     // check each letter has been matched, count letters and white spaces and combine to check if finished as well
//     let finished = false
//     let foundLetters = 0
//     let foundSpaces = 0

//     for (let i = 0; i < this.word.length; i++) {
//       if (this.guessedLetters.includes(this.word[i])) {
//         foundLetters++
//       } else if (this.word[i] === " ") {
//         foundSpaces++
//       }
//     }

//     if (this.word.length === foundLetters + foundSpaces) {
//       finished = true
//     }

//     if (finished) {
//       this.status = "finished"
//       reloadGame()
//     }
//   }
// }

// Hangman.prototype.makeGuess = function (guess) {
//   if (this.status !== "playing") {
//     return
//   }

//   guess = guess.toLowerCase()

//   const isUnique = !this.guessedLetters.includes(guess)
//   const isBadGuess = !this.word.includes(guess)

//   if (isUnique) {
//     this.guessedLetters.push(guess)
//   }

//   if (isUnique && isBadGuess) {
//     this.guesses--
//   }

//   this.calculateStatus()
// }

// Hangman.prototype.statusMessage = function () {
//   if (this.status === "failed") {
//     return `Nice try! The word was: ${this.word.join("")}`
//   } else if (this.status === "finished") {
//     return "Great Work! You guessed the word correctly :-)"
//   }

//   return `Guesses Left: ${this.guesses}`
// }
