//import  drag  from './drag';
import './style.css';
import {input, storage, drag} from './taskWrk.js';
//import component from './displayHtml.js';
storage();
input();

document.addEventListener('DOMContentLoaded', drag);


