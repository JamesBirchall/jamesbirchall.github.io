document.addEventListener("DOMContentLoaded", function(event) {

    // Clear text if JS is present so animation can run
    var intro = document.querySelector('.intro');
    intro.textContent = "";

    var options = {
        strings: ["Hello, I'm James", "&amp; I solve problems!"],
        typeSpeed: 40,
        startDelay: 1000,
        loop: true
    }

    var typed = new Typed(".intro", options);
});