const localStorageTodoStore = "todos"

// Fetch existing todos from localStorage
// getSavedTodos - DONE!

const getSavedTodos = function() {
  const todoJSON = localStorage.getItem(localStorageTodoStore)

  return todoJSON ? JSON.parse(todoJSON) : []
}

// Save todos to localStorage
// saveTodos - DONE!

const saveTodos = function(todos) {
  localStorage.setItem(localStorageTodoStore, JSON.stringify(todos))
}

// Render Application todos based on filters
// renderTodos - DONE!

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed
  })

  generateTodoDOM(incompleteTodos, filteredTodos)
}

// Get the DOM elements for an individual note
// generateTodoDOM - DONE!!
const generateTodoDOM = function(incompleteTodos, filteredTodos) {
  document.querySelector("#todos").innerHTML = ""

  generateSummaryDOM(incompleteTodos)

  filteredTodos.forEach(function(todo) {
    const p = document.createElement("p")
    p.textContent = todo.text
    document.querySelector("#todos").appendChild(p)
  })
}

// Get the DOM elements for a list summary
// generateSummaryDOM
const generateSummaryDOM = function(incompleteTodos) {
  const summary = document.createElement("h2")
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector("#todos").appendChild(summary)
}
