
const TodoList= ['make dinner', 'kiss my kids']
renderPage()
function renderPage(){


    let todoListHTML = '';

    for(let i=0; i<TodoList.length; i++){
        const todo = TodoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html
    }
    document.querySelector('.js-paragraphs').innerHTML = todoListHTML
}
function addTodo(){    
    const inputElement = document.querySelector(".js-input-todo")
    const name = inputElement.value
    TodoList.unshift(name);
    inputElement.value= '';
    renderPage()
}
/*
const TodoList = [
    'wash clohes',
    'write some code',
    'pray to jesus'

]

for(let i=0; i<TodoList.length; i++){
    console.log(TodoList[i])
}

const numbers = [12, 45, 13]
const doubledArray =[]
let sum = 0
let doubled;
for(let i=0; i<numbers.length; i++){
    sum= sum + numbers[i]
    doubledArray.push(numbers[i]*2)   
}
console.log(sum)
console.log(doubledArray)
*/