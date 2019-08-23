// var.js
// Birchall 2019
// original way for using varibales in JS, historic code will contain this and transpiled code
// can re-assign value like let, but realistically use const & let
// function scoped not block scoped like let

var firstName = 'Jim'
firstName = 'James'

// var firstName = 'Jim'   // can re-assign and re-define, unlike let/const

// block
if(1 == 1) {
    var firstName = 'Jim'   // function scoped, so firstname gets re-written here
}

const setName = function() {
    // this sits only in scope of this function
    var firstName = 'Birch'
    console.log(firstName)
}
setName()

// won't access the function scoped version
console.log(firstName)


console.log(lastName)   // should print 10 on old engines/browsers
// let lastName    // let will generate error not defined
var lastName    // wil be undefined, hoisted to top of code and setup, no value
lastName = 10
