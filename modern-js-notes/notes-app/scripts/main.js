let header1 = document.getElementById('header1')
header1.innerText = 'Something else'

// DOM - Document Object Model manipulation

// delete an element <p> tag
// const paragraph = document.querySelector('p')   // only takes first instance of <p> querySelectorAll('') for array of all of them
// console.log(paragraph)
// paragraph.remove()

// delete all element <p> tags
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(function(item) {
    console.log(item)
    item.remove()
})