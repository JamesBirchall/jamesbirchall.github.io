// firefox treats localStorage / session slight strangely
// looks like session can work between views loaded by location.assign
// but local still cannot.

// check for existing notes saved in localStorage and return string
function getNotesInLocalStorage() {
  const notesJSON = localStorage.getItem("notes")

  // tertiary operator example for if else below
  return notesJSON !== null ? JSON.parse(notesJSON) : []

  // if (notesJSON) {
  //   return JSON.parse(notesJSON)
  // } else {
  //   return []
  // }
}

// save notes to storage
function saveNotesToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes))
}

// remove notes from storage
function removeNotesFromLocalStorage() {
  localStorage.removeItem("notes")
}

function clearNotesArray() {
  window.notes = [] // reset notes array and future note count
  removeNotesFromLocalStorage()
}

const deleteNote = function (id) {
  const notesIndex = findIndexOfExistingObject(id)

  if (notesIndex > -1) {
    notes.splice(notesIndex, 1)
  }
}

const findIndexOfExistingObject = function (id) {
  // converted to arrow function with shorthand return code
  const notesIndex = notes.findIndex((note) => note.id === id)

  return notesIndex
}

const getNoteIDFromURLIDParameter = function () {
  const idString = location.href.split("#")[1]

  if (idString.startsWith("id=")) {
    const id = idString.split("=")[1]
    return id
  }
}

const generateLastUpdatedDOM = function (note) {
  const lastEditedSpan = document.querySelector("#last-updated-span")
  if (lastEditedSpan) {
    const lastUpdate = moment(note.updatedAt)
    lastEditedSpan.textContent = `last edited: ${lastUpdate.toNow(true)}`
  } else {
    // set last edited value
    const lastEditedSpan = document.createElement("span")
    lastEditedSpan.setAttribute("id", "last-updated-span")
    const lastUpdate = moment(note.updatedAt)
    lastEditedSpan.appendChild(
      document.createTextNode(`last edited: ${lastUpdate.toNow(true)}`)
    )
    document.querySelector("#last-update").append(lastEditedSpan)
  }
}
