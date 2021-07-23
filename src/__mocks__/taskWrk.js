/* eslint-disable */

import component from './displayHtml.js';
export let tasks = [];

/* eslint-enable */

class ToDo {
  constructor(index, description, complete = false) {
    this.index = index;
    this.description = description;
    this.complete = complete;
  }
}

// add
export const input = () => {
  let taskObj = new ToDo(1, 'Test', false);
  tasks.push(taskObj);
  taskObj = new ToDo(2, 'Test2', false);
  tasks.push(taskObj);
  taskObj = new ToDo(2, 'Test3', true);
  tasks.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const changeContent = (newDescription, index) => {
  tasks[index].description = newDescription;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  component();
};

export const storage = () => {
  const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
  if (tasksOnStorage == null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  } else {
    tasks = tasksOnStorage;
    component();
  }
};
