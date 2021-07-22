/**
 * @jest-environment jsdom
 */

import { input, tasks, storage } from "./taskWrk";
import component from './displayHtml';
import { deleteTrash } from './delete';

describe('Add task functionalities', () => {
    test('Create a new Object', () => {
        input();         
        expect(tasks.length).toBe(2);
    })

    test('Create DOM', () => {
        document.body.innerHTML = `<ul id="container_ul"></ul>`;
        component();
        const list = document.querySelectorAll('#container_ul li');         
        expect(list).toHaveLength(2);
    })  
})

