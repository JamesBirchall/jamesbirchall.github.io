// functions-101.js
// Birchall 2019

// function = input, code, output

// function assigned to a variable
let greetUser = function() {
    console.log('Hello, James')
}

// function assigned to variable and takes a string
let greetUser2 = function(name) {
    if (!name) {
        console.log(
            'Incorrect use of function: greetUser2(String), no String provided.'
        )
        return null
    }

    console.log('Hello, ' + name + '!')
}

let square = function(number) {
    return number * number
}

greetUser()

greetUser2()
greetUser2('Jimbo')

// number automatically turned into string
console.log('Square of 9 is: ' + square(9))

// Challenge

let convertFahrenheitToCelsius = function(fahValue) {
    if (!fahValue) {
        console.log(
            'Incorrect use of function: convertFahrenheitToCelsius(number), no number provided.'
        )
    }

    return ((fahValue - 32) * 5) / 9
}

console.log('32 degrees F is ' + convertFahrenheitToCelsius(32) + ' degrees C.')
console.log(
    '64 degrees F is ' +
        convertFahrenheitToCelsius(64).toFixed(2) +
        ' degrees C.'
)
