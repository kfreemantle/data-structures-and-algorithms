'use strict';

const { Stack, PseudoQueue } = require('../psuedoQueue');

describe('PseudoQueue', () => {
  test('enqueue elements and maintain FIFO order', () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  test('enqueue and dequeue elements in interleaved order', () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);

    queue.enqueue(30);
    expect(queue.dequeue()).toBe(20);

    queue.enqueue(40);
    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(40);
  });

  test('dequeue from an empty queue returns undefined', () => {
    const queue = new PseudoQueue();
    expect(queue.dequeue()).toBeUndefined();
  });

  test('dequeue from a queue with one element', () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
  });

  test('dequeue from a queue after all elements have been dequeued', () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();

    expect(queue.dequeue()).toBeUndefined();
  });
});
