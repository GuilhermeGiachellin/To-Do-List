import component from './displayHtml.js';
import { tasks } from './taskWrk.js';

const deleteTask = () => {
  const clearBtn = document.getElementById('button');
  clearBtn.addEventListener('click', () => {
    const result = tasks.filter((x) => x.complete === false);
    tasks.splice(0);
    tasks.push(...result);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    component();
  });
};

const deleteTrash = () => {
  const trash = document.querySelectorAll('#trash');
  trash.forEach((e) => {
    e.addEventListener('click', () => {
      const index = e.parentNode.parentNode.id;
      e.parentNode.parentNode.remove();
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      component();
      window.location.reload();
    });
  });
};

export { deleteTask, deleteTrash };