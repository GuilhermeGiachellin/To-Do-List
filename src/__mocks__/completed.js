/* eslint-disable import/no-cycle */

import component from './displayHtml.js';
import { tasks } from './taskWrk.js';

const checkVal = () => {
  const check = document.querySelectorAll('.task_check');

  check.forEach((e) => {
    e.addEventListener('change', () => {
      if (e.checked) {
        tasks[e.id].complete = true;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        component();
      } else {
        tasks[e.id].complete = false;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        component();
      }
      window.location.reload();
    });
  });
};

export default checkVal;