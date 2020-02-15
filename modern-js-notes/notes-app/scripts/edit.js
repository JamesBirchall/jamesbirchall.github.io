// edit.js
// logic for the edit view

const noteID = getNoteIDFromURLIDParameter()
const notes = getNotesInLocalStorage()
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')

const index = findIndexOfExistingObject(noteID)

if (index > -1) {
    const note = notes[index]
    titleElement.value = note.title
    bodyElement.value = note.body
} else {
    console.log('invalid ID, note not found')
    console.log(`${noteID} not in list.`)
    location.assign('./index.html')
}

document.querySelector('#remove-note').addEventListener('click', function() {
    deleteNote(noteID)
    saveNotesToLocalStorage()
    location.assign('./index.html')
})

titleElement.addEventListener('input', function(e) {
    const note = notes[index]
    note.title = e.target.value
    saveNotesToLocalStorage()
})

bodyElement.addEventListener('input', function(e) {
    const note = notes[index]
    note.body = e.target.value
    saveNotesToLocalStorage()
})
