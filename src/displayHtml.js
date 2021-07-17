/* eslint-disable import/no-cycle */

import checkVal from './completed.js';
import drag from './drag.js';
import { tasks } from './taskWrk.js';

function component() {
  const container = document.getElementById('container_ul');
  container.innerHTML = '';
  let counter = -1;
  for (let i = 0; i < tasks.length; i += 1) {
    const li = document.createElement('li');
    counter += 1;
    tasks[i].index = i;
    if (tasks[i].complete !== false) {
      li.innerHTML = `<div>
                      <input id="${counter}" type="checkbox" class="task_check" name="tasks" checked>
                      <label class="check_true" for="tasks" id="label">${tasks[i].description}</label>
                      </div>
                      <div><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
      li.classList.add('tasks_li');
      li.setAttribute('id', `${tasks[i].index}`);
      li.setAttribute('draggable', 'true');
      container.appendChild(li);
    } else {
      li.innerHTML = `<div>
      <input id="${counter}" type="checkbox" class="task_check" name="tasks">
      <label for="tasks" id="label">${tasks[i].description}</label>
      </div>
      <div><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`;
      li.classList.add('tasks_li');
      li.setAttribute('id', `${tasks[i].index}`);
      li.setAttribute('draggable', 'true');
      container.appendChild(li);
    }
  }
  checkVal();
  drag();
}

export default component;
