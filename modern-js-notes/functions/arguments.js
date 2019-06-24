// arguments.js
// Birchall 2019

// add function - use as add(number, number), returns a number
// checks type of value passed and enough arguments passed
let add = function(n1, n2) {
    if(!n1 || !n2) {
        console.log('invalid input - missing parameter, please use as add(number, number)')
        return
    }

    if(typeof n1 != 'number' || typeof n2 != 'number') {
         console.log('invalid input - missing type (number), please use as add(number, number)')
        return
    }

    return n1 + n2
}

let result = add(10, 'a')
if(result) {
    console.log(result)
}

let result2 = add(10)
if(result2) {
    console.log(result2)
}
