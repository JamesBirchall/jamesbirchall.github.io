document.addEventListener("DOMContentLoaded", function(event) {

    // Clear text if JS is present so animation can run
    var intro = document.querySelector('.intro');
    intro.textContent = "";

    var options = {
        strings: ["Hello, I'm James", "Hello, I'm James &amp; I make digital things", "Hello, I'm James &amp; I program in Python/JavaScript/SQL and more...", "Hello, I'm James &amp; I also like running!", "Hello, I'm James &amp; I solve problems, have you got one?"],
        typeSpeed: 30,
        startDelay: 2000,
        backDelay: 1000
    }

    var typed = new Typed(".intro", options);
});