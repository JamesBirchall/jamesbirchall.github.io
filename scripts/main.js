document.addEventListener("DOMContentLoaded", function(event) {

    // Clear text if JS is present so animation can run
    var intro = document.querySelector('.intro');
    intro.textContent = "";

    var options = {
        strings: ["Hello, I'm James", "Hello, I'm James &amp; I'm a Digital Analyst &amp; Developer", "Hello, I'm James &amp; I spend time with Adobe Analytics, Google Analytics &amp; Tag Managers", "Hello, I'm James &amp; I spend time with JavaScript, SQL, &amp; lots of Excel &amp; PowerPoint", "Hello, I'm James &amp; I also like running!", "Hello, I'm James &amp; I find answers, have you got a question?"],
        typeSpeed: 20,
        startDelay: 2000,
        backDelay: 2000,
        showCursor: false
    }

    var typed = new Typed(".intro", options);
});