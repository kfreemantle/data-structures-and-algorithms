'use strict';


// Node constructor takes a value and initializes the next pointer as null.  I THINK that's all we need.
// no update needed for linked-list-insertions
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

  // new methods for linked-list-insertions begin here

  // append function

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
      // if there is no data coming through for head, we make a newNode on this.head.
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }


  // insertBefore function

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error('The list is empty.');
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (!currentNode.next) {
      throw new Error('Value not found.');
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // insertAfter function

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error('The list is empty.');
    }

    let currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    if  (!currentNode) {
      throw new Error('Value not found.');
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // kth from end

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('k must be a positive integer');
    }

    let currentNode = this.head;
    let nodesCount = 0;

    while (currentNode !== null) {
      nodesCount++;
      currentNode = currentNode.next;
    }

    if (k >= nodesCount) {
      throw new Error('k is greater than or equal to the length of the linked list');
    }

    let targetIndex = nodesCount - k - 1;
    currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== targetIndex) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }

  // zip list functionality, I hope.  jesus
  
  static zipLists(list1, list2) {
    if (!list1.head) {
      return list2;
    }
    if (!list2.head) {
      return list1;
    }

    let currentNode1 = list1.head;
    let currentNode2 = list2.head;
    let nextNode1, nextNode2;

    while (currentNode1 && currentNode2) {
      nextNode1 = currentNode1.next;
      nextNode2 = currentNode2.next;

      currentNode1.next = currentNode2;
      currentNode2.next = nextNode1;

      currentNode1 = nextNode1;
      currentNode2 = nextNode2;
    }

    return list1;
  }

}

module.exports = { Node, LinkedList };
