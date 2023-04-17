'use strict';

// Define the Stack class for creating a stack
class Stack {
  constructor() {
    this.items = []; // An array to store the stack elements
  }

  // Adds an element to the top of the stack
  push(value) {
    this.items.push(value);
  }

  // Removes and returns the top element from the stack
  pop() {
    return this.items.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }
}

// Define the PseudoQueue class for creating a queue-like structure using two Stack instances
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack(); // First stack for enqueue operations
    this.stack2 = new Stack(); // Second stack for dequeue operations
  }

  // Adds an element to the PseudoQueue, using a first-in, first-out approach
  enqueue(value) {
    // Move all elements from stack2 to stack1
    // This ensures that the elements maintain their original order
    while (this.stack2.peek() !== undefined) {
      this.stack1.push(this.stack2.pop());
    }

    // Add the new value to stack1
    // The new value becomes the last element in the queue
    this.stack1.push(value);
  }

  // Removes and returns the first element from the PseudoQueue, using a first-in, first-out approach
  dequeue() {
    // Move all elements from stack1 to stack2
    // This reverses the order of the elements, so the first element in the queue becomes the top element in stack2
    while (this.stack1.peek() !== undefined) {
      this.stack2.push(this.stack1.pop());
    }

    // Pop and return the top element from stack2, which is the first element in the queue
    return this.stack2.pop();
  }
}

// Example usage of the PseudoQueue class
const myQueue = new PseudoQueue();

// Enqueue some values
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

// Dequeue and print the values
console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.dequeue()); // Output: 20

// Enqueue another value
myQueue.enqueue(40);

// Dequeue and print the remaining values
console.log(myQueue.dequeue()); // Output: 30
console.log(myQueue.dequeue()); // Output: 40

module.exports = { Stack, PseudoQueue };

