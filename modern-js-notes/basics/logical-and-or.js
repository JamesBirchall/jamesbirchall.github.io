// logical-and-or-js
// Birchall 2019

let temp = 92

// The wrong way to do this!
// if (temp >= 60) {
//     if (temp <= 90) {
//         console.log('It\'s really nice outside.')
//     }
// }

// Correct way with logical and operator

if (temp >= 60 && temp <= 90) {
    console.log('It\'s really nice outside.')
}

// logical or operator
if (temp < 60 || temp > 90) {
    console.log('Not worth going outside...')
}