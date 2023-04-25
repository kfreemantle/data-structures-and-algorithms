'use strict';

const BinarySearchTree = require('../maxTree');

describe('BinarySearchTree', () => {
  test('If there are no numeric values in the tree', () => {
    const bst = new BinarySearchTree();
    expect(() => bst.findMaxValue()).toThrow(Error);
  });

  test('If all the values of the tree are the same', () => {
    const bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(5);
    bst.insert(5);
    expect(bst.findMaxValue()).toBe(5);
  });
});
