// type-coercion.js
// jamesbirchall 2020
console.log("5" + 5) // concatenate as 2 strings type coercion
console.log("5" - 5) // treats as number in coercion due to - operator

// can coerce to number, string or boolean only in JS

console.log(5 === 5) //true
console.log("5" == 5) // checks equality but not type equality, still returns true

// type checking

console.log(typeof 123)
console.log(typeof { 1: 1, 2: 1, 3: 3, 4: 3 })
console.log(typeof "123")
console.log(typeof 123.12)

// true = 1 when coerced, false = 0

console.log(false + 12)
console.log(true + 12)
