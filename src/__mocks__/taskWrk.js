 import component from './displayHtml.js';

export let tasks = [];

class ToDo {
  constructor(index, description, complete = false) {
    this.index = index;
    this.description = description;
    this.complete = complete;
  }
}

//add
// const taskInput = document.getElementById('add_input');
export const input = () => {
  console.log('CRIOU 2 OBJETOS')
  let taskObj = new ToDo(1, 'Test', false);
  tasks.push(taskObj);
  let taskObj2 = new ToDo(2, 'Test2', true);
  tasks.push(taskObj2);  
  component(); //PRECISA FAZER O TESTE DO HTML
  
}

// export const changeContent = () => {
//   const content = document.querySelectorAll('#label');
//   content.forEach((e) => {
//     e.addEventListener('keypress', (e) => {
//       if (e.key === 'Enter') {
//         const newDescription = e.target.innerText;
//         e.preventDefault();
//         tasks[e.target.parentNode.parentNode.id].description = newDescription;
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         component();
//       }
//     });
//   });
// };

// export const storage = () => {
//   const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
//   if (tasksOnStorage == null) {
//     localStorage.setItem('tasks', JSON.stringify([]));
//   } else {
//     tasks = tasksOnStorage;
//     component();
//   }
// };
