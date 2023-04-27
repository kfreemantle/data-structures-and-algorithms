'use strict';

const fizzBuzzTree = require('./tree-fizz-buzz');

// A class representing a node in a k-ary tree
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// A function to create a k-ary tree for testing
function createTree() {
  const tree = new Node(1);
  tree.children.push(new Node(3));
  tree.children.push(new Node(5));
  tree.children.push(new Node(7));
  tree.children[0].children.push(new Node(15));
  tree.children[0].children.push(new Node(9));
  tree.children[1].children.push(new Node(10));
  tree.children[2].children.push(new Node(14));
  tree.children[2].children.push(new Node(8));
  return tree;
}

describe('fizzBuzzTree()', () => {
  it('returns null for empty tree', () => {
    expect(fizzBuzzTree(null)).toBeNull();
  });

  it('returns a new tree with the same structure as the original', () => {
    const tree = createTree();
    const newTree = fizzBuzzTree(tree);
    expect(newTree.value).toBe('1');
    expect(newTree.children.length).toBe(3);
    expect(newTree.children[0].value).toBe('3');
    expect(newTree.children[1].value).toBe('5');
    expect(newTree.children[2].value).toBe('7');
    expect(newTree.children[0].children.length).toBe(2);
    expect(newTree.children[0].children[0].value).toBe('FizzBuzz');
    expect(newTree.children[0].children[1].value).toBe('Fizz');
    expect(newTree.children[1].children.length).toBe(1);
    expect(newTree.children[1].children[0].value).toBe('Buzz');
    expect(newTree.children[2].children.length).toBe(2);
    expect(newTree.children[2].children[0].value).toBe('14');
    expect(newTree.children[2].children[1].value).toBe('8');
  });

  it('returns a new tree with modified values', () => {
    const tree = createTree();
    const newTree = fizzBuzzTree(tree);
    expect(newTree.value).toBe('1');
    expect(newTree.children[0].value).toBe('3');
    expect(newTree.children[1].value).toBe('5');
    expect(newTree.children[2].value).toBe('7');
    expect(newTree.children[0].children[0].value).toBe('FizzBuzz');
    expect(newTree.children[0].children[1].value).toBe('Fizz');
    expect(newTree.children[1].children[0].value).toBe('Buzz');
    expect(newTree.children[2].children[0].value).toBe('14');
    expect(newTree.children[2].children[1].value).toBe('8');
  });

  it('handles negative numbers', () => {
    const tree = new Node(-15);
    tree.children.push(new Node(-6));
    tree.children.push(new Node(-10));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.value).toBe('FizzBuzz');
    expect(newTree.children[0].value).toBe('Fizz');
    expect(newTree.children[1].value).toBe('Buzz');
  });

  it('handles string values', () => {
    const tree = new Node('hello');
    tree.children.push(new Node('world'));
    tree.children[0].children.push(new Node('FizzBuzz'));
    tree.children[0].children.push(new Node('15'));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.value).toBe('hello');
    expect(newTree.children[0].value).toBe('world');
    expect(newTree.children[0].children[0].value).toBe('FizzBuzz');
    expect(newTree.children[0].children[1].value).toBe('FizzBuzz');
  });

  it('handles mixed numeric and string values', () => {
    const tree = new Node(1);
    tree.children.push(new Node('hello'));
    tree.children[0].children.push(new Node(15));
    tree.children[0].children.push(new Node('world'));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.value).toBe('1');
    expect(newTree.children[0].value).toBe('hello');
    expect(newTree.children[0].children[0].value).toBe('FizzBuzz');
    expect(newTree.children[0].children[1].value).toBe('world');
  });
});

