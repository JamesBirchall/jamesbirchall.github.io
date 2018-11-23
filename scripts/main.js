document.addEventListener("DOMContentLoaded", function(event) {
    // I want to clear this content, then progressively reveal the text over a few seconds...
    var intro = document.querySelector('.intro');
    intro.textContent = "";
    console.log('DOM Loaded and Script run.');
});