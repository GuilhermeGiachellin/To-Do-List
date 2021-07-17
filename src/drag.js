/* eslint-disable import/no-cycle */

import component from './displayHtml.js';
import { tasks } from './taskWrk.js';

let startPos; let
  currentPos = 0;
const draggables = document.querySelector('#container_ul').childNodes;

const drag = () => {
  draggables.forEach((e) => {
    e.addEventListener('dragstart', () => {
      e.classList.add('dragging');
      startPos = parseInt(e.id, 10);
    });
    e.addEventListener('dragleave', () => {
      e.classList.remove('over');
    });
    e.addEventListener('dragover', (j) => {
      j.preventDefault();
      currentPos = parseInt(e.id, 10);
      e.classList.add('over');
    });
    e.addEventListener('dragend', () => {
      e.classList.remove('dragging');

      if (startPos !== currentPos) {
        const holder = tasks[startPos].description;
        const holderCheck = tasks[startPos].complete;
        tasks[startPos].description = tasks[currentPos].description;
        tasks[startPos].complete = tasks[currentPos].complete;
        tasks[currentPos].complete = holderCheck;
        tasks[currentPos].description = holder;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        component();
      }
    });
  });
};

export default drag;