// === - equality operator
// !== - no equality operator
//  < - less than
// > - greater than
// <= - Less than or equal to
// >= greater than or equal to

let temp = 32
let isFreezing = temp <= 32
console.log(isFreezing)

if (temp <=32) {
    console.log('It is freezing outside!')
}

if (temp >= 110) {
    console.log('Is is so hot outside!')
}

// Challenge

let age = 31
let isChild = age <= 7
let isPensioner = age >= 65
console.log('Are you a child? ' + isChild)
console.log('Are you a pensioner? ' + isPensioner)