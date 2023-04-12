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

// adding testing suite for the linked-list append, insertBefore and insertAfter

describe('LinkedList append tests: ', () => {
  // append tests
  test('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    expect(list.toString()).toBe('{ 5 } -> { 10 } -> { 15 } -> NULL');
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(10);
    list.append(15);
    expect(list.toString()).toBe('{ 5 } -> { 10 } -> { 15 } -> NULL');
  });
});

describe('LinkedList insertBefore tests: ', () => {
  // insertBefore tests
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    list.insertBefore(3, 5);
    expect(list.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 2 } -> NULL');
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    list.insertBefore(1, 5);
    expect(list.toString()).toBe('{ 5 } -> { 1 } -> { 3 } -> { 2 } -> NULL');
  });

  test('Can successfully insert a node before a node with a duplicated value', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(2);
    list.insertBefore(2, 5);
    expect(list.toString()).toBe('{ 1 } -> { 5 } -> { 2 } -> { 2 } -> NULL');
  });

  test('Throws an error when trying to insert before a value that does not exist in the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    expect(() => list.insertBefore(4, 5)).toThrow('Value not found.');
  });
});

describe('LinkedList insertAfter tests: ', () => {
  // insertAfter tests
  test('Can successfully insert a node after a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    list.insertAfter(3, 5);
    expect(list.toString()).toBe('{ 1 } -> { 3 } -> { 5 } -> { 2 } -> NULL');
  });

  test('Can successfully insert a node after the last node of a linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    list.insertAfter(2, 5);
    expect(list.toString()).toBe('{ 1 } -> { 3 } -> { 2 } -> { 5 } -> NULL');
  });

  test('Can successfully insert a node after a node with a duplicated value', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(2);
    list.insertAfter(2, 5);
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 5 } -> { 2 } -> NULL');
  });

  test('Throws an error when trying to insert after a value that does not exist in the list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(2);
    expect(() => list.insertAfter(4, 5)).toThrow('Value not found.');
  });
});
// adding in kth from end tests

describe('LinkedList kthFromEnd tests: ', () => {
  test('Can successfully find a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    expect(list.kthFromEnd(2)).toBe(3);
  });

  test('Can successfully find the last node of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    expect(list.kthFromEnd(0)).toBe(2);
  });

  test('Throws an error when k is greater than the length of the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    expect(() => list.kthFromEnd(6)).toThrow('k is greater than or equal to the length of the linked list');
  });

  test('Throws an error when k is not a positive integer', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    expect(() => list.kthFromEnd(-1)).toThrow('k must be a positive integer');
  });

  test('Can successfully find the only node in a linked list of size 1', () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.kthFromEnd(0)).toBe(1);
  });
});
