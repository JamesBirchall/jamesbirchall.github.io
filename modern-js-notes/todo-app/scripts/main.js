// main.js
// Birchall 2019

// example of finding content and removing based on includes
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function(item){
    if(item.innerText.includes('gym')){
        item.remove()
    }
})