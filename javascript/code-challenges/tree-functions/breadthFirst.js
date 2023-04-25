'use strict';

// Implement a binary tree node class to be used in the breadth-first traversal function
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Performs a breadth-first traversal on the given binary tree
 * @param {TreeNode} tree - The root node of the binary tree
 * @returns {Array} - An array containing the values of the tree in the order they were encountered
 */
function breadthFirst(tree) {
  // return an empty array if the tree is null
  if (tree === null) {
    return [];
  }

  // Initialize the queue with the root node of the tree and an empty array to store the traversed values
  let queue = [tree];
  let traversedValues = [];

  // Continue traversing until the queue is empty
  while (queue.length > 0) {
    // Dequeue the first node in the queue and add its value to the traversedValues array
    let currentNode = queue.shift();
    traversedValues.push(currentNode.value);

    // If the current node has a left child, enqueue it
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    // If the current node has a right child, enqueue it
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return traversedValues;
}

module.exports = { TreeNode, breadthFirst };
