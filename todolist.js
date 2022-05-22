const form = document.querySelector('#todoForm');
const todoList = document.querySelector('#list');
const removeButtons = document.querySelector('li button');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let inputValue = document.querySelector('#todo').value;
    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = '-';
    
    removeBtn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });
    
    newTodo.addEventListener('click', function(){
        newTodo.style.textDecoration = 'line-through';
    });
    
    newTodo.innerText = inputValue;
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
})






