const BinaryTree = require('./BinaryTree');
const treeIntersection = require('./tree-intersection');

describe('treeIntersection', () => {
  it('should return a set of values found in both trees', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    [10, 5, 15, 20, 7].forEach(value => tree1.add(value));
    [15, 20, 7, 30, 35].forEach(value => tree2.add(value));

    const intersection = treeIntersection(tree1, tree2);

    expect(intersection).toEqual(new Set([15, 20, 7]));
  });

  it('should return an empty set if there are no common values', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    [10, 5, 15, 20, 7].forEach(value => tree1.add(value));
    [30, 35, 40, 45, 50].forEach(value => tree2.add(value));

    const intersection = treeIntersection(tree1, tree2);

    expect(intersection).toEqual(new Set());
  });

  it('should handle trees with one node', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    tree1.add(10);
    tree2.add(10);

    const intersection = treeIntersection(tree1, tree2);

    expect(intersection).toEqual(new Set([10]));
  });
});
