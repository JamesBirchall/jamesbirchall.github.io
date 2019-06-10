// scope.js
// Birchall 2019

// lexical scoping (static scoping) - variable limtied in scope

// Scope Tree:
//Global Scope - varOne
    // local Scope - varTwo
        // local scope - varFour
    // local Scope - varThree


// Global Scope
let varOne = 'varOne'

if (true) {
    console.log(varOne)   

    // Local Scope
    let varTwo = 'varTwo'
    console.log(varTwo) // works as in scope of same block

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varTree' // also local scope
}

// Won't work as scope of varTwo is inside a block!
// console.log(varTwo)

