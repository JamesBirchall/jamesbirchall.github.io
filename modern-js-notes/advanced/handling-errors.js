// handling-errors.js
// Birchall 2020

const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25
  } else {
    // throw "Argument must be a number type"
    throw Error("Argument must be a number type") // best to have try catch when a function can return an Error to stop application crashing out
  }
}

try {
  const result = getTip(true) // not valid so type check!
  console.log(result)
} catch (error) {
  console.log("error in try:" + error)
}

try {
  const result2 = getTip(2) // not valid so type check!
  console.log(result2)
} catch (error) {
  console.log("error in try:" + error)
}
