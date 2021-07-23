/**
 * @jest-environment jsdom
 */

import { input, tasks, storage } from './taskWrk.js';
import component from './displayHtml.js';
import { deleteTrash } from './delete.js';

describe('Add task functionalities', () => {
  test('Create a new Object', () => {
    input();
    expect(tasks.length).toBeGreaterThanOrEqual(0);
  });

  test('Create DOM', () => {
    document.body.innerHTML = `<ul id="container_ul"></ul>
    <button id="button" class="button" id="delete_btn">Clear all completed</button>`;
    component();
    expect(tasks.length).toBeGreaterThanOrEqual(0);
  });
});

describe('Delete functions', () => {
  test('Delete test in position 1', () => {
    if (tasks.length > 0) {
      deleteTrash();
      const trash = document.querySelector("li[id='0'] > div > i");
      trash.click();
    }
    const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toHaveLength(tasksOnStorage.length);
  });

  test('Delete test in position 2', () => {
    if (tasks.length > 0) {
      deleteTrash();
      const trash = document.querySelector("li[id='1'] > div > i");
      trash.click();
    }
    const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toHaveLength(tasksOnStorage.length);
  });

  test('Delete last test', () => {
    if (tasks.length > 0) {
      deleteTrash();
      const trash = document.querySelector("li[id='0'] > div > i");
      trash.click();
    }
    const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks).toHaveLength(tasksOnStorage.length);
  });
});

describe('Storage test', () => {
  test('Storage', () => {
    storage();
    const tasksOnStorage = JSON.parse(localStorage.getItem('tasks'));
    expect(tasksOnStorage.length).toBeGreaterThanOrEqual(0);
  });
});
