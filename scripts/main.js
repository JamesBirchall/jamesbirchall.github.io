document.addEventListener("DOMContentLoaded", function (event) {
  // Clear text if JS is present so animation can run
  var intro = document.querySelector(".intro")
  intro.textContent = ""

  var options = {
    strings: [
      "Hello, I'm James",
      "Hello, I'm James &amp; I'm a Google Cloud Certified Architect &amp; Engineer",
      "Hello, I'm James &amp; I spend time with all things Cloud, Data &amp; Marketing related",
      "Hello, I'm James &amp; I spend time with JavaScript, SQL, &amp; lots of Python &amp; PowerPoint",
      "Hello, I'm James &amp; I also like running!",
      "Hello, I'm James &amp; I find digital solutions, have you got a digital problem?",
    ],
    typeSpeed: 20,
    startDelay: 2000,
    backDelay: 2000,
    showCursor: false,
  }

  var typed = new Typed(".intro", options)
})
