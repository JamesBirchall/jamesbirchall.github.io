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
    console.log(item)
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
    let allNotes = document.querySelectorAll('p')
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
            const newElement = document.createElement('p')
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
        const newElement = document.createElement('p')
        newElement.textContent = newValue.body
        const identifier = `note${notes.length}`
        newElement.setAttribute('id', identifier)
        document.querySelector('body').appendChild(newElement)
    }
}

const filters= {
    searchText : ''
}

const renderNotes = function(notes, filters){
    const filterNotes = notes.filter(function(note){
        let noteBodyLowerCase = note.body.toLowerCase()
        let filterLowerCase = filters.searchText.toLowerCase()

        return noteBodyLowerCase.includes(filterLowerCase)
    })
    console.log(filterNotes)
}

renderNotes(notes, filters)

//event listener for input field for filtering notes field - best to use input for monitoring all changes
document.getElementById('input1').addEventListener('input', function(element){
    renderNotes(notes, filters)
})