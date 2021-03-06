// Some abitrary DOM manipulation...

"use strict"

let header1 = document.getElementById("header1")
header1.innerText = "Notes"

const paragraphs = document.querySelectorAll("p")
paragraphs.forEach(function (item) {
  item.remove()
})

const listItems = document.querySelectorAll("li")
listItems.forEach(function (item) {
  item.remove()
})

// setup notes if available locally
let notes = getNotesInLocalStorage()

// filter settings for viewing notes with
const filters = {
  searchText: "",
  sortOrder: "none",
}

// Validate note string and add
function addNote() {
  const id = uuid4()
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
    const errorMessage = document.getElementById("error0")

    if (errorMessage) {
      errorMessage.remove()
    }

    input.value = ""

    let dateCreated = Date.now()

    let newValue = {
      title: "title",
      body: text,
      dateCreated: dateCreated,
      updatedAt: dateCreated,
      id: id,
    }
    notes.push(newValue)

    createNotes([newValue], notes.length)
  }

  // renderNotes(notes, filters) // re-draw because of filters/sorting order

  saveNotesToLocalStorage()
  return id
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    let noteBodyLowerCase = note.body.toLowerCase()
    let filterLowerCase = filters.searchText.toLowerCase()

    return noteBodyLowerCase.includes(filterLowerCase)
  })

  // sorting now based on filter.sortOrder selection
  switch (filters.sortOrder) {
    case "last-edited":
      filteredNotes.sort(function (a, b) {
        return b.updatedAt - a.updatedAt
      })
      break
    case "last-created":
      // use sort function on the list of filteredNotes
      // put newest (greatest lastCreated date) first
      filteredNotes.sort(function (a, b) {
        return b.dateCreated - a.dateCreated
      })
      break
    case "a-z":
      filteredNotes.sort(function (a, b) {
        const first = String(a.body).toLowerCase()
        const second = String(b.body).toLowerCase()

        if (first > second) {
          return 1
        }
        if (second > first) {
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

const reDisplayNotes = function (filteredNotes) {
  clearNotesFromDisplay()
  createNotes(filteredNotes)
}

const clearNotesFromDisplay = function () {
  let allNotes = document.querySelectorAll("li")

  if (allNotes) {
    allNotes.forEach(function (note) {
      if (note.getAttribute("id").includes("note")) {
        note.remove()
      }
    })
  }
}

const createNotes = function (notes, altIndex) {
  notes.forEach(function (note, index) {
    const newElement = document.createElement("li")

    const divElement = document.createElement("span")

    const button = document.createElement("button")
    button.textContent = "x"
    button.addEventListener("click", function () {
      deleteNote(note.id)
      saveNotesToLocalStorage()
      notes.splice(index, 1) // remove
      renderNotes(notes, filters)
    })

    const text = note.body
    divElement.appendChild(document.createTextNode(text))

    const hyperlinkEditNote = document.createElement("a")
    hyperlinkEditNote.setAttribute("href", `./edit.html#id=${note.id}`)
    hyperlinkEditNote.appendChild(document.createTextNode("-edit-"))

    let identifier = 0
    if (altIndex) {
      identifier = `note${altIndex}`
    } else {
      identifier = `note${index}`
    }
    newElement.setAttribute("id", identifier)

    newElement.appendChild(button)
    newElement.appendChild(divElement)
    newElement.appendChild(hyperlinkEditNote)
    document.querySelector("ul").appendChild(newElement)
  })
}

renderNotes(notes, filters)

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue)
    console.log(notes)
    renderNotes(notes, filters)
  }
})

// // Playground for library - moment
// const now = moment()
// console.log(now.toString())
// now.add(5, 'year').subtract(2, 'year')
// console.log(now.format('DD-MMM-YYYY'))
