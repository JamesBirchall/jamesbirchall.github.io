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
} else if (temp < 60 || temp > 90) {
    console.log('Not worth going outside...')
}

// Challenge

let isGuestOneVegan = false
let isGuestTwoVegan = true

// reservation system

// are both vegan?
// offer up vegan food
// is one of them vegan?
// offer up vegan and non vegan options
// neither vegan, offer up anything on menu

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer up just vegan food')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer up vegan and non-vegan options')
} else {
    console.log('Offer up whatever is on the menu')
}