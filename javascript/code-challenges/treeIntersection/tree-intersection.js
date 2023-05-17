const HashTable = require('../hashTable/hashTable');

function treeIntersection(tree1, tree2) {
  // Initialize the hashmap and the result set
  const hashmap = new HashTable();
  const resultSet = new Set();

  // Helper function for tree traversal
  function traverse(node, callback) {
    if (node !== null) {
      traverse(node.left, callback);
      callback(node.value);
      traverse(node.right, callback);
    }
  }

  // Insert all elements from tree1 into the hashmap
  traverse(tree1.root, (value) => {
    if (!hashmap.has(value)) {
      hashmap.set(value, true);
    }
  });

  // Check if elements from tree2 are in the hashmap
  traverse(tree2.root, (value) => {
    if (hashmap.has(value)) {
      resultSet.add(value);
    }
  });

  return resultSet;
}

module.exports = treeIntersection;
