// main.js
// Birchall 2019

// example of finding content and removing based on includes
const paragrphs = document.querySelectorAll('p')
paragrphs.forEach(function(item){
    if(item.innertext.includes('gym')){
        item.remove()
    }
})