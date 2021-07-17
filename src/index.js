import './style.css';
import drag from './drag.js';
import { input, storage, changeContent } from './taskWrk.js';
import checkVal from './completed.js';
import { deleteTask, deleteTrash } from './delete.js';

storage();
input();
changeContent();
deleteTask();
deleteTrash();
drag();
checkVal();
