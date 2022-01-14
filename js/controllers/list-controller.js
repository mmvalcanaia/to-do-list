function State() {
  this.list = null;
}

const state = new State();

export function init() {
  state.list = document.querySelector("#to-do-list");
  console.log(state.list);
}

export function addNewTaskToScreen(task) {
  const newTask = createListItem(task);
  const list = addItemtoList(newTask);

  state.list.appendChild(list);
}

function createListItem(task) {
  const li = document.createElement("li");
  li.classList.add("to-do-item");
  li.innerHTML = task.value;
  return li;
}

function addItemtoList(li) {
  console.log(document.querySelectorAll("ul"));
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
