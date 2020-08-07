// get-set.js
// Birchall 2020

// good for hiding internals of objects and sanitising values before input/before output

const data = {
  locations: [],

  get location() {
    return this._location
  },
  set location(value) {
    value = value.trim()
    this._location = value
    this.locations.push(value)
  },
}

// code that uses data object
data.location = "   new york    "
data.location = "           london    "

console.log(data.location)
console.log(data.locations)
