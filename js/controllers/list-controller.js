function State() {
  this.listContainer = null;
  this.btnCheckBox = null;
  this.task = null;
}

const state = new State();

export function init() {
  state.listContainer = document.querySelector("#to-do-list");
  state.task = document.querySelectorAll("to-do-item");
}

export function addNewTaskToScreen(task) {
  const newTask = createListItem(task);
  const list = addItemtoList(newTask);

  state.listContainer.appendChild(list);
  addEventListenerToEveryCheckbox();
}

function addEventListenerToEveryCheckbox() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckBoxTaskChange);
  });
}

function createListItem(task) {
  const taskCheckBox = document.createElement("input");
  taskCheckBox.setAttribute("type", "checkbox");

  const label = document.createElement("label");
  label.innerHTML = task.value;

  taskCheckBox.classList.add("to-do-item-check");

  const li = document.createElement("li");
  li.appendChild(taskCheckBox);
  li.appendChild(label);
  li.classList.add("to-do-item");
  return li;
}

function addItemtoList(li) {
  if (document.querySelectorAll("ul").length == 1) {
    const ul = document.querySelector("ul");
    ul.appendChild(li);
    return ul;
  } else {
    const ul = createList();
    ul.appendChild(li);
    return ul;
  }
}

function createList() {
  const ul = document.createElement("ul");
  ul.classList.add("to-do-list-ul");
  return ul;
}

function handleCheckBoxTaskChange(event) {
  const checkBoxDone = event.target;
  if (checkBoxDone.checked) {
    console.log(this);
    removeTask(this);
  }
}

function removeTask(task) {
  const x = document.querySelector(".to-do-item-check").parentElement;
  x.remove();
}

// function addTaskToDoneList(doneTask){
//   const ulDoneTasks = document.createElement("ul");
//   ulDoneTasks.classList.add("to-do-item-done");
//   ulDoneTasks.appendChild(doneTask);
//   doneTask.classList.add("to-do-item-done");
//   doneTask.classList.remove("to-do-item");
// }
