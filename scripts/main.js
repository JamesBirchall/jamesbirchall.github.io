document.addEventListener("DOMContentLoaded", function(event) {
    var options = {
        strings: ["Hello, I'm James", "&amp; I solve problems!"],
        typeSpeed: 40,
        startDelay: 1000,
        loop: true
    }

    var typed = new Typed(".intro", options);
});