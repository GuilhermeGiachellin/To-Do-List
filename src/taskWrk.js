
import component from './displayHtml.js';
import drag  from './drag.js';


const checkbox = document.querySelector('.task_check');
const check_label = document.getElementById('label');
export let tasks = [];

console.log('classes tasks:')

class ToDo {
  constructor(index = 0, description, complete = false) {
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
    }
  });
}

export const storage = () => {
  const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
  console.log(tasksOnStorage)
  if (tasksOnStorage == null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  } else {
    tasks = tasksOnStorage;
    component();
  }
}

/*checkbox.addEventListener('change', (e) => {
    e.preventDefault();
    check_label.style = 'color: grey; text-decoration-line: line-through;'
});*/



