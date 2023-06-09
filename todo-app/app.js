"use-strict";
const formInput = document.querySelector(".input-todo");
const addTodoBtn = document.querySelector(".add-todo");
const todoContainer = document.querySelector(".list-todo");
const clearForm = document.querySelector(".form i");

const allTodo = [];
listTodo(allTodo);

// function to clear input field
function clearInput() {
  formInput.value = "";
}

function listTodo(todo) {
  if (todo.length === 0) {
    todoContainer.innerHTML = `
      <p class='no-todo'> No Todo's Added </p>
    `;
    return;
  }
  todoContainer.innerHTML = todo
    .filter((el) => !el.remove)
    .map((el, i) => {
      return `
    <div data-id=${i}  class="todo">
      <p>${el.text}</p>
      <i class="fa-solid fa-x"></i>
    </div>
    `;
    })
    .join(" ");
}

// function to add todo to list
function addTodo(e) {
  if (!formInput.value) return;
  const formValue = formInput.value;
  clearInput();
  allTodo.push({ text: formValue, remove: false });
  listTodo(allTodo);
}

// Event listeners
clearForm.addEventListener("click", clearInput);
addTodoBtn.addEventListener("click", addTodo);
