"use-strict";
const formInput = document.querySelector(".input-todo");
const addTodoBtn = document.querySelector(".add-todo");
const todoContainer = document.querySelector(".list-todo");
const clearForm = document.querySelector(".form i");

let allTodo = [];

(function () {
  allTodo = getTodo();
  listTodo(allTodo);
})();

// function to store todo in local storage
function storeTodo(todo_list) {
  localStorage.setItem("todo", JSON.stringify(todo_list));
}

// function to get todo from local storage if any
function getTodo() {
  if (localStorage.getItem("todo")) {
    return JSON.parse(localStorage.getItem("todo"));
  }
  return [];
}

// function to clear input field
function clearInput() {
  formInput.value = "";
}
// list all added todos of user
function listTodo(todo) {
  if (todo.length === 0) {
    todoContainer.innerHTML = `
      <p class='no-todo'> No Todo's Added </p>
    `;
    return;
  }
  todoContainer.innerHTML = todo
    .map((el, i) => {
      return `
    <div data-id=${i}  class="todo">
      <p>${el}</p>
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
  allTodo.push(formValue);
  storeTodo(allTodo);
  listTodo(allTodo);
}

function removeSingleTodo(id) {
  allTodo = allTodo.filter((todo, i) => i != id);
  storeTodo(allTodo);
  listTodo(allTodo);
}

function deleteTodo(e) {
  if (e.target.tagName !== "I") return;
  const todo_div = e.target.closest(".todo");
  removeSingleTodo(todo_div.dataset.id);
}

// Event listeners
clearForm.addEventListener("click", clearInput);
addTodoBtn.addEventListener("click", addTodo);
todoContainer.addEventListener("click", deleteTodo);
