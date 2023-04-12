# Linked List Insertions

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

###  Node Challenge

We're extending an implementation from last week, adding methods to the linked-list code challenge.

### Big O Efficiency

Using a singly linked list with additional methods.

Big O time complexity = O(n)
Space complexity = O(1)

### Linked List

- Add to the existing Linked List class:

- append
  - arguments: new value
  - adds a new node with the given value to the end of the list

- insert before
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified

- insert after
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified

#### Structure and testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

You have access to the Node class and all the properties on the Linked List class.

#### Tests

- Can successfully add a node to the end of the linked list
- Can successfully add multiple nodes to the end of a linked list
- Can successfully insert a node before a node located i the middle of a linked list
- Can successfully insert a node before the first node of a linked list
- Can successfully insert after a node in the middle of the linked list
- Can successfully insert a node after the last node of the linked list

