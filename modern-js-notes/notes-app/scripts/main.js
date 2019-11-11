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

// adding elements to DOM in 3 steps (create element, update contents, put it somewhere)

// const newElement = document.createElement('p') // not visible or containing contents but is representative of DOM object returned
// newElement.textContent = 'An added new element from JS'
// document.querySelector('body').appendChild(newElement)

const notes = [{},
    {
        title: 'Note 4',
        body: 'Some body text for this 4th note'
    },
    {
        title: 'note 2',
        body: 'This Person is going to be good 2nd'
    },
    {
        title: 'Note 3 for a Person',
        body: 'Some body text for this note 3'
    },
    {
        title: 'Note 1',
        body: 'Have found a person in here 1st'
    }
]



notes.forEach(function(note, index){
    const newElement = document.createElement('p')
    newElement.textContent = note.body
    document.querySelector('body').appendChild(newElement)
})

// event listener for the button to add items
document.querySelector('button').addEventListener('click', function(){
    let input = document.querySelector('input1')
    let text = input.innerText
    input.innerText = ''


    console.log(text)
})