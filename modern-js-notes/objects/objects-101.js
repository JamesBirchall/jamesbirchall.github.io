// objects-101.js
// Birchall 2019

// Object notation = {} inside, comma seperated key:values
let myBook = {
    owner: 'Jim B',
    title: 'You don\'t know JS!',
    author: 'Kyle Simpson',
    pageCount: '444'
}

console.log(myBook) // prints whole object definition
console.log(myBook.title) // using dot notation to print a value for the key

// how to loop through the object for it's keys and values
for(let key in myBook) {
    console.log(`Key: ${key} | Value: ${myBook[key]}`)
}

// you can change the objects values
myBook.title = 'You do know JS!'
console.log(myBook.title)

// challenge area - model a person

let person = {
    age: 32,
    sex: 'male',
    name: 'Jim B',
    location: 'London, UK'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age += 1
console.log('And next year...')
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)