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

// indexOf = -1 when item not found, string match is case sensitive
console.log(`Position of "Note 2" in array: ${notes.indexOf('Note 2')}`)    // uses === to do match, two objects equal have to be same object in memory

const newNotes = [{},
    {
        title: 'Note 1',
        body: 'Some body text for this note 1'
    },
    {
        title: 'Note 2',
        body: 'This Person is going to be good'
    },
    {
        title: 'Note 3 for a Person',
        body: 'Some body text for this note 3'
    },
    {
        title: 'Note 4',
        body: 'Have found a person in here'
    }
]

// instead of triple equality we define the search crieteria for objects properties matching

console.log('Index of \"Note 2\":'+newNotes.findIndex(
    function (item, index) {
        // if(item.title === 'Note 2') {
        //     return true
        // } else {
        //     return false
        // }

        return item.title === 'Note 2'  // more concise approach to returning boolean
    }
));

// same array methods but now can . notation into the object properties
newNotes.forEach(function(item, index) {
    // called for each item in arra
    console.log(`Item ${index+1}: ${item.title}, ${item.body}`)
});
console.log('')

// Find Note Function

const findNote = function(notes, noteTitle) {
    // return the note object rather than index or anything
    const index = notes.findIndex(function(item, index){
        // return item.title === noteTitle
        // case insensative - node was not processing if didn't explicitly make it a string type!!
        let title = String(item.title).toLowerCase()

        return title === noteTitle.toLowerCase()
    })

    return notes[index]
}

const findNote2 = function(notes, noteTitle) {
    return notes.find(function(item, index) {
        let title = String(item.title).toLowerCase()
        return title === noteTitle.toLowerCase()
    })
}

const note = findNote(newNotes, 'Note 3')
console.log(note)
const note2 = findNote2(newNotes, 'note 3')
console.log(note2)

// filter a list of notes for any string match in title or body
const findNoteFilter = function(filter) {
    let filterText = filter.toLowerCase()
    return newNotes.filter(function(note, index) {
        let titleText = String(note.title).toLowerCase()
        let bodyText = String(note.body).toLowerCase()
        return bodyText.includes(filterText) || titleText.includes(filterText)
    })
}

// change filter for different matches
findNoteFilter('Person').forEach(function(item) {
    console.log(`Title: ${item.title} | Body: ${item.body}`)
})