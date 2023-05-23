// Import the necessary modules
const Graph = require('./graph');

// Describe the test suite for the Graph class
describe('Graph', function () {

  // Describe the test suite for the addNode method
  describe('#addNode()', function () {
    // Define a test case for adding a node to the graph
    it('should add a node to the graph', function () {
      // Instantiate a new Graph object
      let graph = new Graph();
      // Use the addNode method to add a node to the graph
      let node = graph.addNode('A');
      // Check if the node was added successfully
      expect(graph.getNodes().length).toBe(1);
      expect(graph.getNodes()[0]).toBe(node);
    });
  });

  // Describe the test suite for the addEdge method
  describe('#addEdge()', function () {
    it('should add an edge to the graph', function () {
      let graph = new Graph();
      let nodeA = graph.addNode('A');
      let nodeB = graph.addNode('B');
      graph.addEdge(nodeA, nodeB, 1);
      // Check if the edge was added successfully
      expect(graph.getNeighbors(nodeA)[0].node).toBe(nodeB);
      expect(graph.getNeighbors(nodeA)[0].weight).toBe(1);
    });
  });

  // Describe the test suite for the getNodes method
  describe('#getNodes()', function () {
    it('should retrieve all nodes from the graph', function () {
      let graph = new Graph();
      let nodeA = graph.addNode('A');
      let nodeB = graph.addNode('B');
      // Check if the nodes are retrieved correctly
      expect(graph.getNodes()).toEqual([nodeA, nodeB]);
    });
  });

  // Describe the test suite for the getNeighbors method
  describe('#getNeighbors()', function () {
    it('should retrieve all neighbors of a node from the graph', function () {
      let graph = new Graph();
      let nodeA = graph.addNode('A');
      let nodeB = graph.addNode('B');
      graph.addEdge(nodeA, nodeB, 1);
      // Check if the neighbors are retrieved correctly
      expect(graph.getNeighbors(nodeA)[0].node).toBe(nodeB);
      expect(graph.getNeighbors(nodeA)[0].weight).toBe(1);
    });
  });

  // Describe the test suite for the size method
  describe('#size()', function () {
    it('should return the correct size of the graph', function () {
      let graph = new Graph();
      graph.addNode('A');
      graph.addNode('B');
      // Check if the size is returned correctly
      expect(graph.size()).toBe(2);
    });
  });

  // Describe the test suite for the breadthFirst method
  describe('#breadthFirst()', function () {
    it('should return nodes in the order they were visited', function () {
      let graph = new Graph();
      let nodeA = graph.addNode('A');
      let nodeB = graph.addNode('B');
      let nodeC = graph.addNode('C');
      let nodeD = graph.addNode('D');
      let nodeE = graph.addNode('E');

      graph.addEdge(nodeA, nodeB);
      graph.addEdge(nodeB, nodeC);
      graph.addEdge(nodeC, nodeD);
      graph.addEdge(nodeD, nodeE);

      // Check if the breadth first traversal is correct
      expect(graph.breadthFirst(nodeA)).toEqual([nodeA, nodeB, nodeC, nodeD, nodeE]);
    });

    it('should throw an error for a non-existent start node', function () {
      let graph = new Graph();
      let nodeA = graph.addNode('A');
      let nodeB = new Node('B'); // nodeB is not added to the graph

      expect(() => graph.breadthFirst(nodeB)).toThrow('Start node does not exist in the graph');
    });


    it('should return only the start node if it has no neighbors', function () {
      let graph = new Graph();
      let nodeA = graph.addNode('A');

      expect(graph.breadthFirst(nodeA)).toEqual([nodeA]);
    });
  });
});
