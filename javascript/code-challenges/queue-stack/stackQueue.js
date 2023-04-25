'use strict';

// Node class definition
class Node {
  constructor(value) {
    this.value = value; // The value stored in the Node
    this.next = null; // Pointer to the next node in the list
  }
}

// Stack class definition
class Stack {
  constructor() {
    this.top = null; // Initialize the top of the stack to be null
  }

  // Push method - adds a new node with the given value to the top of the stack
  push(value) {
    const newNode = new Node(value); // Create a new Node with the given value
    newNode.next = this.top; // Point the new Node's next to the current top
    this.top = newNode; // Set the new Node as the top of the stack
  }

  // Pop method - removes and returns the value from the node at the top of the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const value = this.top.value; // Store the value of the top node
    this.top = this.top.next; // Set the top to be the next node in the stack
    return value; // Return the stored value
  }

  // Peek method - returns the value of the node at the top of the stack without modifying the stack
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.value; // Return the value of the top node
  }

  // isEmpty method - returns a boolean indicating if the stack is empty
  isEmpty() {
    return this.top === null; // Return true if the top is null, otherwise return false
  }
}

// Queue class definition
class Queue {
  constructor() {
    this.front = null; // Initialize the front of the queue to be null
    this.rear = null; // Initialize the rear of the queue to be null
  }

  // Enqueue method - adds a new node with the given value to the rear of the queue
  enqueue(value) {
    const newNode = new Node(value); // Create a new Node with the given value
    if (this.isEmpty()) {
      this.front = newNode; // If the queue is empty, set the new Node as the front
      this.rear = newNode; // Set the new Node as the rear
    } else {
      this.rear.next = newNode; // Point the current rear's next to the new Node
      this.rear = newNode; // Set the new Node as the rear of the queue
    }
  }

  // Dequeue method - removes and returns the value from the node at the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const value = this.front.value; // Store the value of the front node
    this.front = this.front.next; // Set the front to be the next node in the queue
    if (this.front === null) {
      this.rear = null; // If the front becomes null, set the rear to null as well
    }
    return value; // Return the stored value
  }

  // Peek method - returns the value of the node at the front of the queue without modifying the queue
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.value; // Return the value of the front node
  }

  // isEmpty method - returns a boolean indicating if the queue is empty
  isEmpty() {
    return this.front === null; // Return true if the front is null, otherwise return false
  }
}

module.exports = { Node, Stack, Queue }; // Export the classes for use in other files
