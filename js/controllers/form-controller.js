import Task from '../models/task.js';
import * as listController from './list-controller.js';

function State(){
    this.Task = new Task();

    this.inputTask = null;
    this.btnSave = null;
}

const state = new State();

export function init(){
    state.inputTask = document.querySelector(".input-task");
    state.btnSave = document.querySelector(".btn-add-task");

    state.btnSave.addEventListener("click", handleBtnSaveClick);
}

function handleBtnSaveClick(event){
    event.preventDefault();
    listController.addNewTaskToScreen(state.inputTask);
    clearInputTask();
}

function clearInputTask(){
    state.inputTask.value = "";
}
