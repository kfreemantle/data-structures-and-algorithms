'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert method - adds a new node with the given value to the tree
  insert(value) {
    const newNode = new Node(value); // Create a new Node with the given value

    if (this.root === null) {
      this.root = newNode; // If the tree is empty, set the new Node as the root
    } else {
      this.insertNode(this.root, newNode); // Otherwise, recursively insert the new Node
    }
  }

  // Insert Node method - recursively inserts a new node in the appropriate position in the tree
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode; // If the current node's left child is empty, insert the new Node
      } else {
        this.insertNode(node.left, newNode); // Otherwise, continue recursively to the left
      }
    } else {
      if (node.right === null) {
        node.right = newNode; // If the current node's right child is empty, insert the new Node
      } else {
        this.insertNode(node.right, newNode); // Otherwise, continue recursively to the right
      }
    }
  }

  // Find Max Value method - returns the maximum value stored in the tree
  findMaxValue() {
    return this.findMaxValueRecursively(this.root);
  }

  // Find Max Value Recursively method - recursively finds the maximum value in the tree
  findMaxValueRecursively(node) {
    if (node.right === null) {
      return node.value; // If the current node has no right child, return its value as the max value
    } else {
      return this.findMaxValueRecursively(node.right); // Otherwise, continue recursively to the right
    }
  }
}

module.exports = BinarySearchTree;
