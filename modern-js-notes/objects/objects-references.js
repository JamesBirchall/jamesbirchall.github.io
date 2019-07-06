// object-references.js
// Birchall 2019

let myAccount = {
    name: 'Jim Birchall',
    expenses: 0,
    income: 0
}

console.log(myAccount)

// shows that objects are passed by reference, thus all vars are editable
let addExpense = function(account, amount) {
    if (!account || !amount) {
        console.log('missing objects expected')
        return
    }

    // would point to a new object with no value but has to be another object, would be local only in scope
    // account = {}

    account.expenses = account.expenses + amount
    console.log(account)
}

// addIncome
let addIncome = function(account, income) {
    if (!account || !income) {
        console.log('missing objects expected')
        return
    }

    account.income = account.income + income
    console.log(account)
}

// resetAccount
let resetAccount = function(account) {
    if (!account) {
        console.log('missing objects expected: account')
        return
    }

    account.income = 0
    account.expenses = 0
    console.log(account)
}

// getAccountSummary
let getAccountSummary = function(account) {
    if (!account) {
        console.log('missing objects expected: account')
        return
    }

    let balance = account.income - account.expenses
    return `Account owned by: ${account.name}, has £${balance}.`
}

addExpense(myAccount, 100)
addIncome(myAccount, 1000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
