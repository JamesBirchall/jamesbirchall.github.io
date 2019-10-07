const account = {
    name: 'Jim',
    expenses: [],    // array of all expenses
    addExpense: function(description, amount) {
        if(isNaN(amount)) {
            console.log('Amount is not a number, expenses not added')
            return
        }

        this.expenses.push({description, amount})
    },
    getAccountSummary: function() {
        // reduce down the expenses array to get total
        let total = 0

        this.expenses.forEach(function(item){
            total += item['amount'] // looks up each item and if key is found else returns undefined
        })

        return `${this.name} has £${total.toFixed(2)} expenses.`
    }
}

// example
account.addExpense('Rent', 500)
account.addExpense('Coffee', 2.50)
account.addExpense('Coffee', 'abc')
console.log(account.getAccountSummary())