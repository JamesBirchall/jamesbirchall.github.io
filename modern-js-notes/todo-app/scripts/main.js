// main.js
// Birchall 2019

// example of finding content and removing based on includes - this case removes p element with 'gym' in innerText string
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function(item){
    if(item.innerText.includes('gym')){
        item.remove()
    }
})