let header1 = document.getElementById('header1')
header1.innerText = 'Notes App Basics'

// DOM - Document Object Model manipulation

// delete an element <p> tag
// const paragraph = document.querySelector('p')   // only takes first instance of <p> querySelectorAll('') for array of all of them
// console.log(paragraph)
// paragraph.remove()

// delete all element <p> tags
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function(item) {
    item.remove()
})

const listItems = document.querySelectorAll('li')
listItems.forEach(function(item) {
    item.remove()
})

// adding elements to DOM in 3 steps (create element, update contents, put it somewhere)

// const newElement = document.createElement('p') // not visible or containing contents but is representative of DOM object returned
// newElement.textContent = 'An added new element from JS'
// document.querySelector('body').appendChild(newElement)

let notes = [
    // {},
    // {
    //     title: 'Note 4',
    //     body: 'Some body text for this 4th note'
    // },
    // {
    //     title: 'note 2',
    //     body: 'This Person is going to be good 2nd'
    // },
    // {
    //     title: 'Note 3 for a Person',
    //     body: 'Some body text for this note 3'
    // },
    // {
    //     title: 'Note 1',
    //     body: 'Have found a person in here 1st'
    // }
]

// notes.forEach(function(note, index){
//     const newElement = document.createElement('p')
//     newElement.textContent = note.body
//     document.querySelector('body').appendChild(newElement)
// })

// event listener for the button
document.querySelector('button').addEventListener('click', function(){
    addNote()
})

//event listener for input field for adding note text
document.getElementById('input0').addEventListener('keypress', function(key){
    if(key.key == 'Enter') {
        addNote()
    }
})

// get 2nd button - reset
document.querySelectorAll('button')[1].addEventListener('click', function(){
    notes = []  // reset notes array and future note count

    // go through all p elements with id starting note and remove
    let allNotes = document.querySelectorAll('li')
    if(allNotes) {
        allNotes.forEach(function(note){
            if(note.getAttribute('id').includes('note')){
                note.remove()
            }
        })
    }

    document.getElementById('input1').value = ''
})

function addNote() {
    let input = document.getElementById('input0')
    let text = input.value
    if(text == '') {
        const errorMessage = document.getElementById('error0')
        if(errorMessage) {
            console.log('Message already present')
            return
        } else {
            console.log('You need to enter at least something')
            const newElement = document.createElement('li')
            newElement.textContent = 'You need to enter at least something.'
            newElement.setAttribute('id', 'error0')
            document.querySelector('h1').insertAdjacentElement("afterend", newElement)
        }

    } else {
        const errorMessage = document.getElementById('error0')

        if(errorMessage) {
            errorMessage.remove()
        }

        input.value = ''

        let newValue = {title:'title', body:text}
        notes.push(newValue)

        createNotes([newValue], notes.length)
    }
}

const filters= {
    searchText : ''
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        let noteBodyLowerCase = note.body.toLowerCase()
        let filterLowerCase = filters.searchText.toLowerCase()

        return noteBodyLowerCase.includes(filterLowerCase)
    })
    
    reDisplayNotes(filteredNotes)
}

//event listener for input field for filtering notes field - best to use input for monitoring all changes, also detects backspaces etc
document.getElementById('input1').addEventListener('input', function(element){
    filters.searchText = element.target.value
    renderNotes(notes, filters)
})

const reDisplayNotes = function(filteredNotes){
    clearNotesFromDisplay()
    createNotes(filteredNotes)
}

const clearNotesFromDisplay = function(){
    let allNotes = document.querySelectorAll('li')
    
    if(allNotes) {
        allNotes.forEach(function(note){
            if(note.getAttribute('id').includes('note')){
                note.remove()
            }
        })
    }
}

const createNotes = function(notes, altIndex) {
    notes.forEach(function(note, index){
        const newElement = document.createElement('li')

        // how to create checkbox element and provide
        // const checkboxElement = document.createElement('input')
        // checkboxElement.type = 'checkbox'
        // checkboxElement.value = true
        // newElement.appendChild(checkboxElement)

        const text = note.body
        newElement.appendChild(document.createTextNode(text))
        let identifier = 0
        if(altIndex){
            identifier = `note${altIndex}`
        } else {
            identifier = `note${index}`
        }
        newElement.setAttribute('id', identifier)
        document.querySelector('ul').appendChild(newElement)
    })
}