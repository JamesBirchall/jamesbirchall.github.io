"use strict"

const localStorageTodoStore = "todos"

// Fetch existing todos from localStorage
// getSavedTodos - DONE!

const getSavedTodos = function () {
  const todoJSON = localStorage.getItem(localStorageTodoStore)

  try {
    return todoJSON ? JSON.parse(todoJSON) : []
  } catch (error) {
    console.log("Could not parse JSON object from localstorage, setting to []")
    return []
  }
}

// Save todos to localStorage
// saveTodos - DONE!

const saveTodos = function (todos) {
  localStorage.setItem(localStorageTodoStore, JSON.stringify(todos))
}

// Render Application todos based on filters
// renderTodos - DONE!

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector("#todos").innerHTML = ""

  generateSummaryDOM(incompleteTodos)
  generateTodosDOM(incompleteTodos, filteredTodos)
}

// Get the DOM elements for a list summary
// generateSummaryDOM
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement("h2")
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector("#todos").appendChild(summary)
}

// Get the DOM elements for an individual note
// generateTodoDOM - DONE!!
const generateTodosDOM = function (incompleteTodos, filteredTodos) {
  filteredTodos.forEach(function (todo) {
    const divElement = document.createElement("div")
    const paraElement = document.createElement("span")

    const checkboxElement = document.createElement("input")
    checkboxElement.setAttribute("type", "checkbox")
    checkboxElement.checked = todo.completed
    checkboxElement.addEventListener("change", function () {
      changeCompletedStatus(todo.id)
      saveTodos(todos)
      renderTodos(todos, filters)
    })

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "x"
    deleteButton.addEventListener("click", function () {
      // remove our todo
      // console.log(todo.id)
      removeTodo(todo.id)
      saveTodos(todos)
      renderTodos(todos, filters)
    })

    paraElement.textContent = todo.text
    let rootDiv = document.querySelector("#todos")
    divElement.appendChild(checkboxElement)
    divElement.appendChild(paraElement)
    divElement.appendChild(deleteButton)
    divElement.setAttribute("id", todo.id)
    rootDiv.appendChild(divElement)
  })
}

const removeTodo = function (id) {
  const todoIndex = findIndexOfExistingObject(id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

const changeCompletedStatus = function (id) {
  const todoIndex = findIndexOfExistingObject(id)

  if (todoIndex > -1) {
    todos[todoIndex].completed = !todos[todoIndex].completed
  }
}

const findIndexOfExistingObject = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })

  return todoIndex
}
