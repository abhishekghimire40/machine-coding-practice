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

// function to store and  display all todo
function setData(todoList) {
  storeTodo(todoList);
  listTodo(todoList);
}

// function to add todo to list
function addTodo(e) {
  if (!formInput.value) return;
  const formValue = formInput.value;
  clearInput();
  allTodo.push(formValue);
  // storeTodo(allTodo);
  // listTodo(allTodo);
  setData(allTodo);
}

// function to delete todo
function deleteTodo(e) {
  if (e.target.tagName !== "I") return;
  const todo_id = e.target.closest(".todo").dataset.id;
  allTodo = allTodo.filter((todo, i) => i != todo_id);
  // storeTodo(allTodo);
  // listTodo(allTodo);
  setData(allTodo);
}

// function to save edited todo
function editContent(element, id, e) {
  if (e.key === "Enter") {
    element.contentEditable = false;
    allTodo[id] = element.textContent;
    element.removeEventListener(
      "keypress",
      editContent.bind(this, element, id)
    );
    setData(allTodo);
  }
}

// function to edit todo
function editTodo(e) {
  if (e.target.tagName !== "P") return;
  const paragraphEl = e.target;
  const id = paragraphEl.closest(".todo").dataset.id;
  paragraphEl.contentEditable = true;
  paragraphEl.addEventListener(
    "keypress",
    editContent.bind(this, paragraphEl, id)
  );
}

// Event listeners
clearForm.addEventListener("click", clearInput);
addTodoBtn.addEventListener("click", addTodo);
todoContainer.addEventListener("click", deleteTodo);
todoContainer.addEventListener("dblclick", editTodo);
