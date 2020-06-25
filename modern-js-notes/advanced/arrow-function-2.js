// arrow-function-2.js
// Birchall 2020

const add = function (a, b) {
  console.log(arguments)
}

add(2, 4, 5, 6)

// arguments doesn't exist in arrow functions
// inside an object, (methods) arrow functions cannot access this
