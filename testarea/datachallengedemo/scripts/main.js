// main.js
// Birchall 2020
// Build app to image identification and present a classification ID
// Then contact Data.World for lookup table query and return the vital statistics via the API
// Present all of that eventually on the page

"use strict"

console.log("Main.js - Script running...")
console.log("ml5 version:", ml5.version)

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/bqVsSDMLS/"
const modelURL = URL + "model.json"
// const metadataURL = URL + "metadata.json"
let logoclassifier
let imagetoassess

function gotResults(err, results) {
  if (err) {
    console.err(err)
  } else {
    console.log(results)
    let label = results[0].label
    let c = color(255, 204, 0)
    fill(c)
    textSize(20)
    text(label, 10, height - height + 25)

    // now take the label value and construct something to send a request to Data.World using Axios HTTP request library.
    // concept will be, construct a request using the label as lookup value in a table on Data.World
    // ideally constructed as a data SQL request so I can get back json relating to the query
    // then parse that and console.log the stats relating to the first record, JSON parsing probably
    // maybe start by bringing back the logo in question, then do a later one ofr vital statistics.
    requestDataWorld(label)
  }
}

function modelLoaded() {
  console.log("model is ready!")
}

function imageReady() {
  resizeCanvas(imagetoassess.width, imagetoassess.height)
  image(imagetoassess, 0, 0)
  logoclassifier.predict(imagetoassess, gotResults)
}

function setup() {
  createCanvas(640, 480)
  //   imagetoassess = createImg("images/7-eleven-backpack.jpg", imageReady)
  imagetoassess = createImg("images/hoodie-branded.jpg", imageReady)
  imagetoassess.hide()
  background(0)
  logoclassifier = ml5.imageClassifier(modelURL, modelLoaded)
}

function requestDataWorld(label) {
  console.log("going to make request to data.world")
  const baseURL =
    "https://api.data.world/v0/sql/wppdatacatalogue/brand-information-logos"
  const bearerKey =
    "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcm9kLXVzZXItY2xpZW50OmphbWVzYmlyY2hhbGwiLCJpc3MiOiJhZ2VudDpqYW1lc2JpcmNoYWxsOjpjYzk5ZGUxNC1lOGNiLTRlOTEtODBjMi1lMDFhOGZiZGViYWUiLCJpYXQiOjE1ODAxMTg1NTUsInJvbGUiOlsidXNlcl9hcGlfcmVhZCIsInVzZXJfYXBpX3dyaXRlIl0sImdlbmVyYWwtcHVycG9zZSI6dHJ1ZSwic2FtbCI6eyJ3cHBkYXRhY2F0YWxvZ3VlIjotMX19.Q2DhizQCX9t1W7w4hTI4TDQ6oSqraExzlBUlcHdModCBna769h2GhBt5LJqpc2tLdi5jUPkVXE15uZv5CLJPYg"
  const contentType = "application/json"
  const dataEncode =
    'SELECT id, name, logo_hires_png FROM brands WHERE name = "' + label + '"'
  console.log("Query:" + dataEncode)

  // test request and response
  axios({
    method: "post",
    url: baseURL,
    headers: {
      Authorization: bearerKey,
      Accept: "text/csv",
    },
    data: {
      query: dataEncode,
    },
  }).then(function (response) {
    console.log(response.status)
    console.log(response.data)
  })
}
