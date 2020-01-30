// check for existing notes saved in localStorage and return string
function getNotesInLocalStorage() {
  const notesJSON = localStorage.getItem("notes")
  if (notesJSON) {
    return JSON.parse(notesJSON)
  }
}
