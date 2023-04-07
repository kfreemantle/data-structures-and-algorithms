'use strict';

const { Node, LinkedList } = require('../index');

describe('LinkedList', () => {
  test('Can instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
  });

  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(5);
    expect(list.head.value).toBe(5);
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert(5);
    list.insert(10);
    expect(list.head.value).toBe(10);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.toString()).toBe('{ 15 } -> { 10 } -> { 5 } -> NULL');
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.includes(10)).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.includes(20)).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert(5);
    list.insert(10);
    list.insert(15);
    expect(list.toString()).toBe('{ 15 } -> { 10 } -> { 5 } -> NULL');
  });
});
