// scope-2.js
// Birchall 2019

let name = "Jimbo"

if (true) {
    // can overwrite scope of parent scope variable
    let name = "James"

    if (true) {
        console.log(name)
    }
}

if (true) {
}
