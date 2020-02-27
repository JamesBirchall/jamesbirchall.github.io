// arrow-function.js
// Birchall 2019

const people = [
  {
    name: "James",
    age: 32
  },
  {
    name: "Emily",
    age: 33
  },
  {
    name: "John",
    age: 22
  },
  { name: "Sal", age: 22 },
  { name: "Tuppence", age: 22 }
]

// challenge time
// 1. find person with age 22
// 2. print that persons name

const peopleWhoAre22 = people.filter(person => person.age === 22)
let peopleWhoAre22Names = ""

peopleWhoAre22.forEach(function(person, index) {
  let name = String(person.name)

  if (index + 1 === peopleWhoAre22.length) {
    peopleWhoAre22Names += name
  } else {
    peopleWhoAre22Names += name += " and "
  }
})
// peopleWhoAre22Names += name += " and "
console.log(`It was ${peopleWhoAre22Names} who are 22!`)
