/**
 * @jest-environment jsdom
 */

import checkVal from './completed.js';
import { deleteTask } from './delete.js';
import component from './displayHtml.js';
import { changeContent, input, tasks } from './taskWrk.js';
import drag from './drag.js';

// CLEAR ALL COMPLETED TEST
describe('Add objects and DOM to test delete', () => {
  test('Create DOM', () => {
    document.body.innerHTML = `<ul id="container_ul"></ul>
                                    <button id="button" class="button" id="delete_btn">Clear all completed</button>`;
    component();
    expect(tasks.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Testing completed tasks', () => {
  test('Completed tasks delete', () => {
    input();
    const clearBtn = document.getElementById('button');
    deleteTask();
    clearBtn.click();
    const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toHaveLength(tasksOnStorage.length);
  });
});

// CHECKBOX TEST
describe('Add objects and DOM to test changing values', () => {
  test('Create DOM', () => {
    document.body.innerHTML = `<ul id="container_ul"></ul>
                                    <button id="button" class="button" id="delete_btn">Clear all completed</button>`;
    component();
    expect(tasks.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Changing value true or false of tasks', () => {
  test('Changing position 0 FALSE to TRUE', () => {
    const check = document.querySelector("li[id = '0'] > div > input");
    checkVal();
    check.click();
    expect(tasks.length).toBe(2);
    expect(tasks[0].complete).toBe(true);
  });

  test('Changing position 0 TRUE to FALSE', () => {
    const check = document.querySelector("li[id = '0'] > div > input");
    checkVal();
    check.click();
    expect(tasks.length).toBe(2);
    expect(tasks[0].complete).toBe(false);
  });

  test('Changing position 1 FALSE to TRUE', () => {
    const check = document.querySelector("li[id = '1'] > div > input");
    checkVal();
    check.click();
    expect(tasks.length).toBe(2);
    expect(tasks[1].complete).toBe(true);
  });

  test('Changing position 1 TRUE to FALSE', () => {
    const check = document.querySelector("li[id = '1'] > div > input");
    checkVal();
    check.click();
    expect(tasks.length).toBe(2);
    expect(tasks[1].complete).toBe(false);
  });
});

// DRAG TEST
describe('Drag functionalities test', () => {
  describe('Add objects and DOM to test changing values', () => {
    test('Create DOM', () => {
      document.body.innerHTML = `<ul id="container_ul"></ul>
                                          <button id="button" class="button" id="delete_btn">Clear all completed</button>`;
      component();
      expect(tasks.length).toBeGreaterThanOrEqual(0);
    });
  });

  test('Changing position 0 and 1', () => {
    const draggablesStart = document.querySelector("#container_ul > li[id='0']");
    const draggableDrop = document.querySelector("#container_ul > li[id='1']");
    drag(draggablesStart.id, draggableDrop.id);
    const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
    expect(tasksOnStorage[0].description).toBe('Test2');
  });
});

// CHANGE DESCRIPTION TEST
describe('Change description test', () => {
  test('Changing position 0 text to TestChange', () => {
    const newDescription = 'TestChange';
    const index = 0;
    changeContent(newDescription, index);
    expect(tasks[0].description).toBe('TestChange');
  });

  test('Changing position 0 text to TestChange', () => {
    const newDescription = 'TestChangeAgain';
    const index = 0;
    changeContent(newDescription, index);
    expect(tasks[0].description).toBe('TestChangeAgain');
  });
});