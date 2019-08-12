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