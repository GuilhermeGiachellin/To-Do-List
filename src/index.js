import './style.css';

const container = document.getElementById('container_ul');

const list = [{
    description: 'wash the dishes',
    completed: false,
    index: 1,   
}, {
    description: 'buy milk',
    completed: false, 
    index: 2,
}, {
    description: 'clean the floor',
    completed: false, 
    index: 3,
}
];
console.log(list.length)
function component() {
    for(let i = 0; i < list.length; i+=1){
    const li = document.createElement('li');         
    li.innerHTML = `<div>
                    <input type="checkbox" id="task" name="tasks">                            
                    <label for="tasks">${list[i].description}</label>
                    </div>
                    <div><i class="fas fa-ellipsis-v"></i></i></div>`  
    li.classList.add('tasks_li');                                      
    container.appendChild(li)      
    }
  }

component();