"use strict"

const editViewLocation = "edit.html"

// event listener for the button
document.querySelector("button").addEventListener("click", function () {
  let input = document.getElementById("input0")
  let text = input.value
  if (text == "") {
    const errorMessage = document.getElementById("error0")
    if (errorMessage) {
      return
    } else {
      const newElement = document.createElement("li")
      newElement.textContent = "You need to enter at least something."
      newElement.setAttribute("id", "error0")
      document.querySelector("h1").insertAdjacentElement("afterend", newElement)
    }
  } else {
    const noteID = addNote()
    console.log("going to location.assign...:")
    console.log(`${editViewLocation}#id=${noteID}`)
    location.assign(`${editViewLocation}#id=${noteID}`)
  }
})

//event listener for input field for adding note text
// used for adding simply list notes, everythign else gets
// set to defaults which would be editable via edit note view
document.getElementById("input0").addEventListener("keypress", function (key) {
  let input = document.getElementById("input0")
  let text = input.value
  if (text == "") {
    const errorMessage = document.getElementById("error0")
    if (errorMessage) {
      return
    } else {
      const newElement = document.createElement("li")
      newElement.textContent = "You need to enter at least something."
      newElement.setAttribute("id", "error0")
      document.querySelector("h1").insertAdjacentElement("afterend", newElement)
    }
  } else {
    if (key.key == "Enter") {
      const noteID = addNote()
      console.log("going to location.assign...:")
      console.log(`${editViewLocation}#id=${noteID}`)
      location.assign(`${editViewLocation}#id=${noteID}`)
    }
  }
})

// Remove All Notes button listener
document.querySelectorAll("button")[1].addEventListener("click", function () {
  clearNotesArray()

  // go through all p elements with id starting note and remove
  let allNotes = document.querySelectorAll("li")
  if (allNotes) {
    allNotes.forEach(function (note) {
      if (note.getAttribute("id").includes("note")) {
        note.remove()
      }
    })
  }

  document.getElementById("input1").value = ""

  removeNotesFromLocalStorage()
})

//event listener for input field for filtering notes field - best to use input for monitoring all changes, also detects backspaces etc
document.getElementById("input1").addEventListener("input", function (element) {
  filters.searchText = element.target.value
  renderNotes(notes, filters)
})

// event listener for filter change
document
  .getElementById("filter-by")
  .addEventListener("change", function (event) {
    // console.log(event.target.value)
    filters.sortOrder = event.target.value
    renderNotes(notes, filters)
  })
