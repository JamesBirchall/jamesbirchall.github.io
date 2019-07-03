// objects-functions.js
// Birchall 2019

// objects are pass by reference

let myBook1 = {
    owner: 'Jim B',
    title: 'You don\'t know JS!',
    author: 'Kyle Simpson',
    pageCount: 444
}

let myBook2 = {
    owner: 'Jim B',
    title: 'Mythical Man Month',
    author: 'Fred Brooks',
    pageCount: 242
}

let generateMessage = function(book) {

    return {
        summary: `Title: ${book.title}, Author: ${book.author}, Owned by: ${book.owner}`,
        pageCountSummary: `Title: ${book.title}, Author: ${book.author}, its PageCount is: ${book.pageCount}, Owned by: ${book.owner}`
    }

}
// can return objects which means multiple values, in this case temporary variables printed from return
console.log(generateMessage(myBook1).summary)
console.log(generateMessage(myBook2).pageCountSummary)