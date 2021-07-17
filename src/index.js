import './style.css';
import drag from './drag.js';
import { input, storage } from './taskWrk.js';
import checkVal from './completed.js';

storage();
input();
drag();
checkVal();