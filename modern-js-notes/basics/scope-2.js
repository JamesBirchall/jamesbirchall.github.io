// scope-2.js
// Birchall 2019

//let name = 'Jimbo'

if (true) {
    // can overwrite scope of parent scope variable
    //let name = 'James'

    if (true) {
        name = 'Jones' // leaked global if set without let to scope
        console.log(name)
    }
}

if (true) {
    console.log(name)
}

// if variable is used without declaring it's hoisted first to global scope
// and accessible to whole program, each variable looks up scope hence why it's hoisted
