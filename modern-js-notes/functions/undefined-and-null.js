// Undefined-and-null.js
// Birchall 2019

// Undefined is an out of the box value type
// undefined happens when we don't assign a value to a variable, when we don't pass a value to a function, or if a function doesn't return a result

let name    // declaring variable but not assigning a variable
// console.log(name)   // result is undefined variable type

/// use === operator to check for absolute type check, == does type conversion
if(name === undefined) {
    console.log('"name" was undefined.')
} else {
    console.log(name)
}

// undefined for function arguments

let square = function(someNumber) {
    console.log(someNumber)
    console.log(someNumber * someNumber)    // NaN number because of undefined * undefined calc
}

square(3)
square() // when argument isn't provided undefined is assigned as its value

let result = square()   // return undefined if function doesn't actually have a return
console.log(result)

// best practice to set a value to null value type in order to indicate that the program made explicit changes to the variable vs. the 3 above undefined outcomes
let age = 32
age = null
console.log(age)