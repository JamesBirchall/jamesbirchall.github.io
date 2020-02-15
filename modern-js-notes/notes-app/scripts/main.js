// Some abitrary DOM manipulation...

let header1 = document.getElementById('header1')
header1.innerText = 'Notes'

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function(item) {
    item.remove()
})

const listItems = document.querySelectorAll('li')
listItems.forEach(function(item) {
    item.remove()
})

// setup notes if available locally
const notes = getNotesInLocalStorage()

// filter settings for viewing notes with
const filters = {
    searchText: '',
    sortOrder: 'none'
}

// Validate note string and add
function addNote() {
    const id = uuid4()
    let input = document.getElementById('input0')
    let text = input.value
    if (text == '') {
        const errorMessage = document.getElementById('error0')
        if (errorMessage) {
            return
        } else {
            const newElement = document.createElement('li')
            newElement.textContent = 'You need to enter at least something.'
            newElement.setAttribute('id', 'error0')
            document
                .querySelector('h1')
                .insertAdjacentElement('afterend', newElement)
        }
    } else {
        const errorMessage = document.getElementById('error0')

        if (errorMessage) {
            errorMessage.remove()
        }

        input.value = ''

        let newValue = {
            title: 'title',
            body: text,
            dateCreated: Date.now(),
            id: id
        }
        notes.push(newValue)

        createNotes([newValue], notes.length)
    }

    // renderNotes(notes, filters) // re-draw because of filters/sorting order

    saveNotesToLocalStorage()
    return id
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        let noteBodyLowerCase = note.body.toLowerCase()
        let filterLowerCase = filters.searchText.toLowerCase()

        return noteBodyLowerCase.includes(filterLowerCase)
    })

    // sorting now based on filter.sortOrder selection
    switch (filters.sortOrder) {
        case 'last-edited':
            break
        case 'last-created':
            // use sort function on the list of filteredNotes
            // put newest (greatest lastCreated date) first
            filteredNotes.sort(function(a, b) {
                return b.dateCreated - a.dateCreated
            })
            break
        case 'a-z':
            filteredNotes.sort(function(a, b) {
                if (a.body > b.body) {
                    return 1
                }
                if (b.body > a.body) {
                    return -1
                }
                return 0
            })
            break
        default:
            break
    }

    reDisplayNotes(filteredNotes)
}

const reDisplayNotes = function(filteredNotes) {
    clearNotesFromDisplay()
    createNotes(filteredNotes)
}

const clearNotesFromDisplay = function() {
    let allNotes = document.querySelectorAll('li')

    if (allNotes) {
        allNotes.forEach(function(note) {
            if (note.getAttribute('id').includes('note')) {
                note.remove()
            }
        })
    }
}

const createNotes = function(notes, altIndex) {
    notes.forEach(function(note, index) {
        const newElement = document.createElement('li')

        const divElement = document.createElement('span')

        const button = document.createElement('button')
        button.textContent = 'x'
        button.addEventListener('click', function() {
            deleteNote(note.id)
            saveNotesToLocalStorage()
            notes.splice(index, 1) // remove
            renderNotes(notes, filters)
        })

        const text = note.body
        divElement.appendChild(document.createTextNode(text))

        const hyperlinkEditNote = document.createElement('a')
        hyperlinkEditNote.setAttribute('href', `./edit.html#id=${note.id}`)
        hyperlinkEditNote.appendChild(document.createTextNode('-edit-'))

        let identifier = 0
        if (altIndex) {
            identifier = `note${altIndex}`
        } else {
            identifier = `note${index}`
        }
        newElement.setAttribute('id', identifier)

        newElement.appendChild(button)
        newElement.appendChild(divElement)
        newElement.appendChild(hyperlinkEditNote)
        document.querySelector('ul').appendChild(newElement)
    })
}

renderNotes(notes, filters)
