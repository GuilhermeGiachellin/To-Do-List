import component from "./displayHtml";
import { tasks, storage } from "./taskWrk";


let startPos, currentPos = 0;
const draggables = document.querySelector('#container_ul').childNodes

const drag = () => {
 console.log(draggables)
  draggables.forEach((e) => {
    e.addEventListener('dragstart', (j) => {
      e.classList.add('dragging');      
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
      
      if (startPos !== currentPos) {
        
        let holder = tasks[startPos].description;
        console.log(holder)
        tasks[startPos].index = currentPos;
        tasks[startPos].description = tasks[currentPos].description
        tasks[currentPos].index = startPos;
        tasks[startPos].description = holder;
        //console.log('DESCRIPTION START ' + tasks[currentPos].description)
        //console.log('DESCRIPTION DROP ' + tasks[currentPos].description)        
        console.log(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks));
        component();
        location.reload();
    }
    })
  })
}

export default drag