import TodoList from './TodoList.js';
import {setOnClick, setClassOnClick, setClassOnInput} from './utilities.js';

const todos = new TodoList();
var todoFilter = 'all';
reloadTasks();

function reloadTasks() {
  var todoList = null;
  if (todoFilter === 'active')
    todoList = todos.filterTodos(false);
  else if (todoFilter === 'completed')
    todoList = todos.filterTodos(true);

  document.getElementById("todo-list").innerHTML = todos.renderTodoList(todoList);
  recreateTaskEvents();

  const tasksLeft = document.getElementById("tasks-left");
  const numIncomplete = todos.filterTodos(false).length;
  if (numIncomplete === 1)
  tasksLeft.innerHTML = "1 task left";
  else
  tasksLeft.innerHTML = numIncomplete + " tasks left";
}

function recreateTaskEvents() {
  setClassOnInput("task-checkbox", function () {
    var taskID = this.dataset.taskId;
    var status = this.checked;
    todos.completeTodo(taskID, status);
    reloadTasks();
  });

  setClassOnClick("task-remove-btn", function () {
    var taskID = this.dataset.taskId;
    todos.removeTodo(taskID);
    reloadTasks();
  });
}

setOnClick("new-task-btn", function () {
  const newTask = document.getElementById("new-task-content");
  todos.addTodo(newTask.value);
  newTask.value = '';
  reloadTasks();
});

setClassOnClick("task-filter-btn", function () {
  document.getElementById("task-filter-" + todoFilter).removeAttribute("disabled");
  this.setAttribute('disabled', '');
  todoFilter = this.id.split('-')[2];
  reloadTasks();
});
