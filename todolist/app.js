const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");

const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
let todos = loadTodos();
todos.forEach(renderTodo);

list.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return;
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.todoId;
  const todo = todos.find((t) => t.id === todoId);
  todo.complete = e.target.checked; // true or false
  //   console.log(todos);
  saveTodos();
});

list.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return;

  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.todoId;
  parent.remove();
  todos = todos.filter((todo) => todo.id !== todoId);
  console.log(todos);
  saveTodos();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoName = todoInput.value;
  if (todoName === "") return;
  // create obj todo
  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString(),
  };

  todos.push(newTodo);

  renderTodo(newTodo);
  saveTodos();
  todoInput.value = "";
});

function renderTodo(todo) {
  const tempClone = template.content.cloneNode(true); // copy all stuff in template
  const listItem = tempClone.querySelector(".list-item");
  listItem.dataset.todoId = todo.id; // setting catch (id) to document (list-item)
  const textElement = tempClone.querySelector("[data-list-item-text]");
  textElement.innerText = todo.name;
  const checkbox = tempClone.querySelector("[data-list-item-checkbox]");
  checkbox.checked = todo.complete; // setting checked/no to document
  list.appendChild(tempClone);
}

function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY);
  return JSON.parse(todosString) || []; // if LS is empty
}
