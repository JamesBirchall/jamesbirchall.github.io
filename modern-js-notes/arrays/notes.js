// notes.js
// Birchall 2019
// note taking application

const notes = ['Note 1', 'Note 2', 'Note 3']    // array literal syntax
notes.push('Note 4')    // pushes onto the notes app a new value to the end

console.log(notes.pop())    // pop off last item, comes back as a string

console.log(notes.shift())  // similar to pop but from front of array
notes.unshift('Note 1') // similar to push but to front of array

notes.splice(1,0, 'Note 1.5')   // allows insert into any part of array and removal of values as well
notes.splice(0,2, 'Note 1.5', 'Note 1.6', 'Note 1.7')   // variable number of values can be pass in last to form new data spliced in

notes[0] = 'Note 1'     //direct replace

console.log(notes)

// count items in array, using length property
console.log(notes.length)

// grab individual item from numbered index, 0 based, undefined if not valid, get last item
console.log(notes[notes.length - 1])
console.log('')

// forEach takes a function as its argument
// const doSomething = function() {}   // defined a function variable for use
// or use inline function
notes.forEach(function(item, index) {
    // called for each item in arra
    console.log(`Item ${index+1}: ${item}`)
})
console.log('')

// for statement - can break out and more specific/traditional
for(let i = 0; i < notes.length; i++) {
    console.log(`Item ${i+1}: ${notes[i]}`)
}
console.log('')