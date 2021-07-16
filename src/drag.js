/*import { tasks } from "./taskWrk";

const draggables = document.querySelectorAll('task_li')
const containers = document.querySelector('.container_ul')
console.log('dragabless')
console.log(draggables)
console.log('tasks em drag')
console.log(tasks)

let startPos, currentPos = 0;

const drag = () => {
  
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
}*/

export default drag