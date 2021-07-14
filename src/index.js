import _ from 'lodash';
import './style.css';

const container = document.getElementById('container_ul');

const list = [{
    description: 'wash the dishes',
    completed: false,    
}, {
    description: 'buy milk',
    completed: false, 
}, {
    description: 'clean the floor',
    completed: false, 
}
];

function component() {
    const li = document.createElement('li');  
   
    container.innerHTML = ``
   
  
    return element;
  }
  
  document.body.appendChild(component());