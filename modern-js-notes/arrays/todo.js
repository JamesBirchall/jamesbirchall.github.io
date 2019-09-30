// todo.js
// Birchall 2019
// to-do list application

const todoList = ['Walk the dog', 'Put rubbish out', 'Buy food', 'Do work', 'Go for a run']

// challenge 1
console.log(`You have ${todoList.length} todo's!`)
console.log(`Todo: ${todoList[0]}\nTodo: ${todoList[todoList.length-2]}`)

// challenge 2
const deletedItem = todoList.splice(2,1)    // rmeove 3rd item in the list, no need for last argument as it's optional, actuall last to are
console.log(todoList)
console.log(`deleted item: ${deletedItem}`)

// challenge 3
// print 1. first item, and so on
// Callback function, run as part of forEach API
todoList.forEach(function(item, index) {
    console.log(`${index+1}. ${item}`)
})
console.log('.')

//challenge 4
for(let i = 0; i < todoList.length; i++) {
    console.log(`${i+1}. ${todoList[i]}`)
}
console.log('.')

// Challange

//1. Make array of objects, completed or not status
//2. create function to remove a todo by text Value of item

let todoObjectlist = [
    {
        item: 'Walk the dog',
        completed: false
    },
    {
        item: 'Buy Food',
        completed: false
    },
    {
        item: 'Take out rubbish',
        completed: true
    }
]

let deleteTodo = function(item) {
    // search through todoObjectList and find the item string, if exists remove item
    const index = todoObjectlist.findIndex(function(todo){
        let title = String(item.item)
        let secondTitle = String(todo.item)
        return title === secondTitle
    })

    if(index > -1) {
        todoObjectlist.splice(index-1, 1)
    } else {
        console.log('Could not find title of todo with case insensative search')
    }
}
console.log(todoObjectlist)
console.log('--------------')
deleteTodo('Buy food')
console.log(todoObjectlist)
deleteTodo('Buy food')