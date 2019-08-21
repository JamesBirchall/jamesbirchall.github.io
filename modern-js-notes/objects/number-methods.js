// number-methods.js
// James Birchall

let num = 103.941

console.log(num)

// toFixed - truncate or expand
console.log(num.toFixed(20))

// to Precision, using scientific notation
console.log(num.toPrecision(1))

// Math related methods
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// 0-9.9 recurring generation
let randomNumber = Math.random()
console.log(randomNumber)

let min = 10
let max = 30
// generates random number between those 2 values
let limitedRandomNumber = Math.floor(Math.random() * (max - min + 1) + min)
console.log(limitedRandomNumber)

// Challenge

// 1-5 range
// true if correct, false if not correct

let makeGuess = function(guess) {
    console.log(`Guess = ${guess}`)
    let min = 1
    let max = 5
    // generates random number between those 2 values
    let limitedRandomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(`Hidden NUmber = ${limitedRandomNumber}`)
    return limitedRandomNumber == guess
}

console.log(makeGuess(5))
