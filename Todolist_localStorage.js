const form = document.querySelector('#todoForm');
const todoList = document.querySelector('#list');

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    if (newTodo.isCompleted) {
      newTodo.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTodo);
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newTodo = document.createElement("li");
    let inputValue = document.getElementById("#todo").value;
    newTodo.innerText = inputValue;
    newTodo.isCompleted = false;
    form.reset();
    todoList.appendChild(newTodo);

    savedTodos.push({task: newTodo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(e) {
    let clickedListItem = e.target;
  
    if (!clickedListItem.isCompleted) {
      clickedListItem.style.textDecoration = "line-through";
      clickedListItem.isCompleted = true;
    } else {
      clickedListItem.style.textDecoration = "none";
      clickedListItem.isCompleted = false;
    }

    for (let i = 0; i < savedTodos.length; i++) {
        if (savedTodos[i].task === clickedListItem.innerText) {
          savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
          localStorage.setItem("todos", JSON.stringify(savedTodos));
        }
      }
    });