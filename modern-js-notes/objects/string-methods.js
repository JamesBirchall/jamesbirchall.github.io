// string-methods.js
// Birchall 2019

let name = 'Jim Birchall'
console.log(name)

// length property - property is a value, not a method/function
console.log(name.length)

// uppercase string method
console.log(name.toUpperCase())

// lowercase string method
console.log(name.toLowerCase())

// includes example
let password = 'asdasdPassworddsadsa';
let input = 'password';
console.log(`The input "${input}" ${password.toLocaleLowerCase().includes(input)? 'is' : 'is not'} in the password`);

// trim example
let longString = ' some long string where there is plenty of spaces '
console.log(longString)
console.log(longString.trim())

// replace example using a regex which includesflags for repeat /g and ignore/i
console.log(longString.replace(/ /gi, ''))

// challenge

let isValidPassword = function(potentialPassword) {
    let valid = true
    let listBannedWords = ['password', 'limes']

    if (potentialPassword.length > 8) {
        for (let element of listBannedWords) {
            if(potentialPassword.toLocaleLowerCase().includes(element)) {
                valid = false
                console.log('Error: Bad password found, contains banned word')
                break
            }
        }
    } else {
        valid = false
        console.log('Error: Bad password found, too short')
    }


    return valid
}

console.log(isValidPassword('asdfel'))   // false
console.log(isValidPassword('asd321321(*&^&^')) // true
console.log(isValidPassword('asdasd*&^876876876password987324hjksdjfh')) // false