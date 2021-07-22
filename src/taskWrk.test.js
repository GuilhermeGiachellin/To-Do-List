/**
 * @jest-environment jsdom
 */

import { input, tasks } from "./taskWrk";
import component from './displayHtml'

jest.mock('./taskWrk');
jest.mock('./displayHtml');

describe('Add new task', () => {
    test('Add new obj', () => {
        input(); 
        console.log(tasks)           
        expect(tasks.length).toBe(4);
    })
    
    test('Create the Html', () => {

    })
})