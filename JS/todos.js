function loadTodo(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => displayTodo(data))

}

function displayTodo(todos){
    // get the container
    const todoContainer = document.getElementById('todo-container');
for(const todo of todos){
    //create the child element
    const todoDiv = document.createElement('div');
    //set innerText or innerHTML
    todoDiv.innerHTML = `
    <h4> Title: ${todo.title} </h4>
    <h5> Id: ${todo.id} </h5>
    <p> ${todo.} </p>
    
    `;
    todoContainer.appendChild(todoDiv);

}
}


loadTodo();