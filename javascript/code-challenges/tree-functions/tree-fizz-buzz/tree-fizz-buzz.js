'use strict';

// A class representing a node in a k-ary tree
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// A function to perform fizz buzz on a k-ary tree
function fizzBuzzTree(root) {
  if (!root) {
    return null;
  }

  const newRoot = new Node(
    root.value % 15 === 0 ? 'FizzBuzz' :
    root.value % 3 === 0 ? 'Fizz' :
    root.value % 5 === 0 ? 'Buzz' :
    root.value.toString()
  );

  for (let child of root.children) {
    newRoot.children.push(fizzBuzzTree(child));
  }

  if (typeof root.value === 'string') {
    newRoot.value = root.value;
  }

  return newRoot;
}

module.exports = fizzBuzzTree;
