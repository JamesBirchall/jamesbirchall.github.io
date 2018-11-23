document.addEventListener("DOMContentLoaded", function(event) {

    // Clear text if JS is present so animation can run
    var intro = document.querySelector('.intro');
    intro.textContent = "";

    var options = {
        strings: ["Hello, I'm James", "Hello, I'm James &amp; I solve problems!", "Hello, I'm James &amp; I write Javascript!", "Hello, I'm James &amp; I write Python!", "Hello, I'm James &amp; I write SQL!"],
        typeSpeed: 30,
        startDelay: 4000,
        backDelay: 1000
    }

    var typed = new Typed(".intro", options);
});