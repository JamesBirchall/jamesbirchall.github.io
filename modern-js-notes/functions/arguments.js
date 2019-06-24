// arguments.js
// Birchall 2019

// add function - use as add(number, number), returns a number
// checks type of value passed and enough arguments passed
let add = function(n1, n2) {
    if (!n1 || !n2) {
        console.log(
            'invalid input - missing parameter, please use as add(number, number)'
        )
        return
    }

    if (typeof n1 != 'number' || typeof n2 != 'number') {
        console.log(
            'invalid input - missing type (number), please use as add(number, number)'
        )
        return
    }

    return n1 + n2
}

let result = add(10, 'a')
if (result) {
    console.log(result)
}

let result2 = add(10)
if (result2) {
    console.log(result2)
}

// Default arguments when values may be undefined
let getScoreText = function(name = 'Unknown Player', score = '0') {
    return 'Name: ' + name + ', Score: ' + score
}

// can add undefined for values before a known one passed into function
let scoreText = getScoreText(undefined, '999') // name and score will be undefined unless using defaults
console.log(scoreText)

// Challenge

let getTip = function(total, tipPercentage = 20) {
    if (!total) {
        console.log('Please make sure to add a total value')
        return
    }

    return (tipPercentage / 100) * total + total
}

// let totalBill = getTip(100, 50)
let totalBill = getTip(100)
// let totalBill = getTip(undefined, 50)
if (totalBill) {
    console.log('For a £100 you tip included comes to: £' + totalBill)
}
