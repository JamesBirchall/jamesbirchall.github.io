// check for existing notes saved in localStorage and return string
function getNotesInLocalStorage() {
  const notesJSON = localStorage.getItem("notes")
  if (notesJSON) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
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
