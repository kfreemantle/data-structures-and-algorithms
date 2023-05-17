class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this._addNode(this.root, value);
    }
  }

  _addNode(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new Node(value);
      } else {
        this._addNode(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new Node(value);
      } else {
        this._addNode(node.right, value);
      }
    }
  }
}

module.exports = BinaryTree;
