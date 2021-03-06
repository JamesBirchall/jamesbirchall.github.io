// edit.js
// logic for the edit view

"use strict"

const noteID = getNoteIDFromURLIDParameter()
let notes = getNotesInLocalStorage()
const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")

const index = findIndexOfExistingObject(noteID)
console.log("Index is:" + index)
if (index > -1) {
  const note = notes[index]
  titleElement.value = note.title
  bodyElement.value = note.body

  generateLastUpdatedDOM(note)
  console.log("Route1")
} else {
  console.log("invalid ID, note not found")
  console.log(`${noteID} not in list.`)
  console.log("Route1")
  location.assign("./index.html")
}

document.querySelector("#remove-note").addEventListener("click", function () {
  deleteNote(noteID)
  saveNotesToLocalStorage()
  location.assign("./index.html")
})

titleElement.addEventListener("input", function (e) {
  const note = notes[index]
  note.title = e.target.value
  note.updatedAt = Date.now()
  generateLastUpdatedDOM(note)
  saveNotesToLocalStorage()
})

bodyElement.addEventListener("input", function (e) {
  const note = notes[index]
  note.body = e.target.value
  note.updatedAt = Date.now()
  generateLastUpdatedDOM(note)
  saveNotesToLocalStorage()
})

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    const index = findIndexOfExistingObject(noteID)

    if (index > -1) {
      const note = notes[index]
      titleElement.value = note.title
      bodyElement.value = note.body
      generateLastUpdatedDOM(note)
    } else {
      console.log("invalid ID, note not found")
      console.log(`${noteID} not in list.`)
      location.assign("./index.html")
    }
  }
})
