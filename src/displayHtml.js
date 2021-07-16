import {tasks} from './taskWrk';

function component() {
  const container = document.getElementById('container_ul');
  container.innerHTML = '';  
  for (let i = 0; i < tasks.length; i += 1) {    
    const li = document.createElement('li');    
    li.innerHTML = `<div>
                      <input type="checkbox" class="task_check" name="tasks">
                      <label for="tasks" id="label">${tasks[i].description}</label>
                      </div>
                      <div><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
    li.classList.add('tasks_li');    
    li.setAttribute('id', `${tasks[i].index}`)
    li.setAttribute('draggable', 'true');
    container.appendChild(li);    
  }  
}
export default component;
