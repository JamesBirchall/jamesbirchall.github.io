// person.js
// Birchall 2020

"use strict"

// undefined is returned as function has no return value
// const person = function () {}
// const me = person()
// console.log(me)

// new object instance gives us a person object instance
// Convention is to use an uppercase letter for the object construction definition
const Person = function (firstName, lastName, age, likes = []) {
  //   console.log(this) // valid to reference itself as an instance
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function () {
  // access  to this vs. arrow function which doesn't
  let bio = `${this.firstName} is ${this.age}.`

  // has to be an arrow function due to it not binding this - easy to catch you out!!
  // so remember, if I want to use this in a callback function, has to be arrow function, not regular function
  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })

  return bio
}

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ")
  if (names.length > 1) {
    this.firstName = names[0]
    this.lastName = names[1]
  } else {
    console.log("name parameter not valid, no change made")
  }
}

const me = new Person("James", "Birchall", "33", ["technology", "cars"])
const me2 = new Person("Jack", "Bond", "56")
console.log(me.getBio())
console.log(me2.getBio())
// me.setName("John")
// console.log(me.getBio())
// console.log(me.firstName)
// console.log(me.age)
// me.firstName = "Something" // can edit an objects values
// console.log(me)
