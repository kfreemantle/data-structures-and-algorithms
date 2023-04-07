'use strict';


// Node constructor takes a value and initializes the next pointer as null.  I THINK that's all we need.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// LinkedList constructor initializes an empty linked list with the head as null
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserts a new node with the given value at the head of the list
  // Create a new node with the given value
  insert(value) {
    const newNode = new Node(value);

    // Point the new node's next pointer to the current head of the list
    // This feels more verbose than it needs to be.  I think I'm doing too much
    newNode.next = this.head;

    // Update the head of the list to be the new node
    this.head = newNode;
  }

  // Returns true if the given value exists in the list, otherwise returns false
  includes(value) {
    // Initialize a pointer to the current node as the head of the list
    let currentNode = this.head;

    // Iterate through the list until the end is reached or the value is found
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    // Value not found in the list, return false
    return false;
  }

  // Returns a string representation of the list
  // Initialize an empty string for the result
  toString() {
    let result = '';

    // Initialize a pointer to the current node as the head of the list
    let currentNode = this.head;

    // Iterate through the list and append each value to the result string
    while (currentNode !== null) {
      result += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }

    // Append "NULL" to the end of the result string and return it
    result += 'NULL';
    return result;
  }
}

module.exports = { Node, LinkedList };
