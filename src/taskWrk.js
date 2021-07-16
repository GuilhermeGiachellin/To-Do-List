
import component from './displayHtml.js';
//import { drag } from './drag.js';


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

let startPos, currentPos = 0;
const draggables = document.querySelectorAll('.tasks_li')
console.log(draggables);
export const drag = () => {
 
  draggables.forEach((e) => {
    e.addEventListener('dragstart', (j) => {
      e.classList.add('dragging');
      console.log("START")
      startPos = parseInt(e.id, 10);
    })
    e.addEventListener('dragleave', (j) => {
      e.classList.remove('over');
    })
    e.addEventListener('dragover', (j) => {
      j.preventDefault();
      currentPos = parseInt(e.id, 10);
      e.classList.add('over');
    })
    e.addEventListener('dragend', (j) => {
      e.classList.remove('dragging');

      tasks[startPos].index = currentPos;
      tasks[currentPos].index = startPos;
    })
  })
}


/*checkbox.addEventListener('change', (e) => {
    e.preventDefault();
    check_label.style = 'color: grey; text-decoration-line: line-through;'
});*/



