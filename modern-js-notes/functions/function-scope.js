// function-scope.js
// Birchall 2019

// Global scope (convertFahrenheitToCelsius)
//// Local scope (fahValue)

let convertFahrenheitToCelsius = function(fahValue) {
    if (!fahValue) {
        console.log(
            'Incorrect use of function: convertFahrenheitToCelsius(number), no number provided.'
        )
    }

    let celsius = ((fahValue - 32) * 5) / 9

    if (celsius <= 0) {
        console.log('Freezing')
    }

    return celsius
}

console.log('32 degrees F is ' + convertFahrenheitToCelsius(32) + ' degrees C.')
console.log(
    '64 degrees F is ' +
        convertFahrenheitToCelsius(64).toFixed(2) +
        ' degrees C.'
)
