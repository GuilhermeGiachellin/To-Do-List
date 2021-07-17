/* eslint-disable import/no-cycle */
/* eslint-disable  import/no-mutable-exports */
import component from './displayHtml.js';

export let tasks = [];

class ToDo {
  constructor(index, description, complete = false) {
    this.index = index;
    this.description = description;
    this.complete = complete;
  }
}

const taskInput = document.getElementById('add_input');
export const input = () => {
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      let index = tasks.length - 1;
      index += 1;
      const taskObj = new ToDo(index, taskInput.value, false);
      tasks.push(taskObj);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      component();
      taskInput.value = '';
    }
  });
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
