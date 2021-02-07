// app.js
// Birchall 2020
// Hangman Game 

// HTTP Request - request / response protocol
// Request - what we want to do
// Response - what was actually done
// Request URL http://puzzle.mead.io/puzzle
// Response = JSON payload and JS Object with key:value pairs

const puzzleElement = document.querySelector("#puzzle")
const guessesElement = document.querySelector("#guesses")
const hangmanRound1 = new Hangman("HigH hOrse", 7)
puzzleElement.textContent = hangmanRound1.getPuzzle()
guessesElement.textContent = hangmanRound1.statusMessage()

window.addEventListener("keypress", function (e) {
  checkEntry(e.key)
})

const checkEntry = function (key) {
  hangmanRound1.makeGuess(key)
  puzzleElement.textContent = hangmanRound1.getPuzzle()
  guessesElement.textContent = hangmanRound1.statusMessage()
}

async function reloadGame() {
  // wait for 2 seconds
  await new Promise((r) => setTimeout(r, 2000))

  // reload the page
  window.location.reload()
}

// Making a HTTP Request
const request = new XMLHttpRequest()
request.addEventListener("readystatechange", function (e) {
  if(e.target.readyState === 4){
    // console.log(e.target)
    const data = JSON.parse(e.target.responseText)
    console.log(data['puzzle'])
  }
})

request.open("GET", "http://puzzle.mead.io/puzzle")
request.send()  // initiate the process to connect/process/return response
