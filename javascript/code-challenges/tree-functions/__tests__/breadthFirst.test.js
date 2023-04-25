'use strict';

const { TreeNode, breadthFirst } = require('../breadthFirst');

// Helper function to build a sample binary tree for testing
function buildSampleTree() {
  let root = new TreeNode(2);
  root.left = new TreeNode(7);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(5);
  root.left.right.right = new TreeNode(11);
  root.right.right = new TreeNode(9);
  root.right.right.left = new TreeNode(4);

  return root;
}

describe('breadthFirst', () => {
  it('should return an array with the values in the order they were encountered', () => {
    const tree = buildSampleTree();
    const expectedResult = [2, 7, 5, 2, 6, 9, 5, 11, 4];
    expect(breadthFirst(tree)).toEqual(expectedResult);
  });

  it('should return an empty array if the tree is empty', () => {
    const tree = null;
    const expectedResult = [];
    expect(breadthFirst(tree)).toEqual(expectedResult);
  });
});
