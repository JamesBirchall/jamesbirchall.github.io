// firefox treats localStorage / session slight strangely
// looks like session can work between views loaded by location.assign
// but local still cannot.

// check for existing notes saved in localStorage and return string
function getNotesInLocalStorage() {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// save notes to storage
function saveNotesToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// remove notes from storage
function removeNotesFromLocalStorage() {
    localStorage.removeItem('notes')
}

function clearNotesArray() {
    window.notes = [] // reset notes array and future note count
    removeNotesFromLocalStorage()
}

const deleteNote = function(id) {
    const notesIndex = findIndexOfExistingObject(id)

    if (notesIndex > -1) {
        notes.splice(notesIndex, 1)
    }
}

const findIndexOfExistingObject = function(id) {
    const notesIndex = notes.findIndex(function(note) {
        return note.id === id
    })

    return notesIndex
}

const getNoteIDFromURLIDParameter = function() {
    const idString = location.href.split('#')[1]

    if (idString.startsWith('id=')) {
        const id = idString.split('=')[1]
        return id
    }
}
