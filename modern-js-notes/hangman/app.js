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
const request = new XMLHttpRequest()  // constructor function
request.addEventListener("readystatechange", function (e) {
  if(e.target.readyState === 4 && e.target.status === 200){
    // console.log(e.target)
    // console.log(e) // prints the readystatechange object
    // console.log(e.target.status + ': '+ e.target.statusText)
    const data = JSON.parse(e.target.responseText)
    console.log(data['puzzle'])
  } else if(e.target.readyState === 4){
    console.log('Error occured, unable to fetch data: ' + e.target.status + ': ' + e.target.statusText)
  }
})

request.open("GET", "http://puzzle.mead.io/puzzle")
request.send()  // initiate the process to connect/process/return response

// example using restcountries.eu api and the find function

const countryCode = 'GB'
const countryRequest = new XMLHttpRequest()
countryRequest.addEventListener('readystatechange', (e) => {
  if(e.target.readyState === 4 && e.target.status === 200){
    const data = JSON.parse(e.target.responseText)
    // Find function takes a function that contains the element of an array and a check to return the find object it matches
    // in this case we are checking for the first object in the array whose value for the key alpha2Code matches GB
    const foundCountry = data.find((country) => country.alpha2Code === countryCode)
    // console.log(data)
    if(foundCountry){
      // console.log(foundCountry)
      console.log(foundCountry.name)
    }
  } else if(e.target.readyState === 4){
    console.log(e)
    console.log('Error occured, unable to fetch data: ' + e.target.status + ': ' + e.target.statusText)
  }
})

countryRequest.open('GET','https:restcountries.eu/rest/v2/all')
countryRequest.send()