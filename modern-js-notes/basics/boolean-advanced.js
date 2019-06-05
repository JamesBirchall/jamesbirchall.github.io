let isAccountLocked = true

if (isAccountLocked) {
    console.log('Is Account Locked? :' + isAccountLocked)
} else {
    console.log('Sorry account is locked.')
}

let userRole = 'Admin'

if (!isAccountLocked) {
    console.log('Sorry account is locked.')
} else if (userRole == 'Admin') {
    console.log('Welcome Admin.')
} else {
    console.log('Welcome.')
}

// Challenge - its freezing outside; its pretty hot outside; go for it, its pretty nice

let temp = 111

if (temp <=32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
    console.log('Is is so hot outside!')
} else {
    console.log('Go for it, its pretty nice!')
}