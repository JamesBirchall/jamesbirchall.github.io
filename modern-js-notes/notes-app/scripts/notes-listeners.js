// event listener for the button
document.querySelector("button").addEventListener("click", function() {
  addNote()
})

//event listener for input field for adding note text
document.getElementById("input0").addEventListener("keypress", function(key) {
  if (key.key == "Enter") {
    addNote()
  }
})

// Remove All Notes button listener
document.querySelectorAll("button")[1].addEventListener("click", function() {
  clearNotesArray()

  // go through all p elements with id starting note and remove
  let allNotes = document.querySelectorAll("li")
  if (allNotes) {
    allNotes.forEach(function(note) {
      if (note.getAttribute("id").includes("note")) {
        note.remove()
      }
    })
  }

  document.getElementById("input1").value = ""

  removeNotesFromLocalStorage()
})

//event listener for input field for filtering notes field - best to use input for monitoring all changes, also detects backspaces etc
document.getElementById("input1").addEventListener("input", function(element) {
  filters.searchText = element.target.value
  renderNotes(notes, filters)
})

// event listener for filter change
document
  .getElementById("filter-by")
  .addEventListener("change", function(event) {
    // console.log(event.target.value)
    filters.sortOrder = event.target.value
    renderNotes(notes, filters)
  })
