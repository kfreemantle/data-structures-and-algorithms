// declare a class to represent each node in the graph
class Node {
  constructor(value) {
    // Each node has a value associated with it
    this.value = value;
  }
}

// This class represents each edge in the graph
class Edge {
  constructor(node, weight = 0) {
    // An edge connects to another node
    this.node = node;
    // An edge has a weight (default is 0 if not provided)
    this.weight = weight;
  }
}

// This class represents the graph as a whole
class Graph {
  constructor() {
    // The graph is represented as an adjacency list, where each node points to a list of edges
    this.adjacencyList = new Map();
  }

  // This function adds a node with the given value to the graph
  addNode(value) {
    // Create a new node
    let node = new Node(value);
    // Add the new node to the adjacency list and initialize its list of edges as an empty array
    this.adjacencyList.set(node, []);
    // Return the added node
    return node;
  }

  // This function adds an edge between two given nodes with a given weight
  addEdge(startNode, endNode, weight) {
    // Check if both nodes exist in the graph. If not, throw an error
    if (!this.adjacencyList.has(startNode) || !this.adjacencyList.has(endNode)) {
      throw new Error('Both nodes must exist in the graph');
    }

    // Get the list of edges for the start node
    let adjacencyListOfStartNode = this.adjacencyList.get(startNode);
    // Add a new edge to the start node's list of edges
    adjacencyListOfStartNode.push(new Edge(endNode, weight));
  }

  // This function returns a list of all nodes in the graph
  getNodes() {
    // Initialize an empty array to hold the nodes
    let nodes = [];
    // Iterate over each key (node) in the adjacency list and add it to the nodes array
    for (let node of this.adjacencyList.keys()) {
      nodes.push(node);
    }
    // Return the array of nodes
    return nodes;
  }

  // This function returns a list of all edges connected to a given node
  getNeighbors(node) {
    // Check if the node exists in the graph. If not, throw an error
    if (!this.adjacencyList.has(node)) {
      throw new Error('Node does not exist in the graph');
    }

    // Return the list of edges for the given node
    return this.adjacencyList.get(node);
  }

  // This function returns the total number of nodes in the graph
  size() {
    // The size is the number of keys (nodes) in the adjacency list
    return this.adjacencyList.size;
  }

  breadthFirst(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      throw new Error('Start node does not exist in the graph');
    }

    // Initialize the queue with the start node
    let queue = [];
    queue.push(startNode);

    // Create a Set to hold visited nodes
    let visitedNodes = new Set();
    visitedNodes.add(startNode);

    // Create an array to store the order of visited nodes
    let orderOfVisitedNodes = [];

    while (queue.length > 0) {
      // Dequeue the first node in the queue
      let currentNode = queue.shift();

      // Add the current node to the order of visited nodes
      orderOfVisitedNodes.push(currentNode);

      // Get the neighbors of the current node
      let neighbors = this.getNeighbors(currentNode);

      for (let edge of neighbors) {
        // If this node has not been visited before, add it to the queue and the set of visited nodes
        if (!visitedNodes.has(edge.node)) {
          visitedNodes.add(edge.node);
          queue.push(edge.node);
        }
      }
    }

    // Return the order of visited nodes
    return orderOfVisitedNodes;
  }

  businessTrip(cities) {
    let totalCost = 0;

    for (let i = 0; i < cities.length - 1; i++) {
      let startNode = this._findNode(cities[i]);
      let endNode = this._findNode(cities[i + 1]);

      if (!startNode || !endNode) {
        return null;
      }

      let edge = this._findEdge(startNode, endNode);

      if (!edge) {
        return null;
      }

      totalCost += edge.weight;
    }

    return totalCost;
  }

  _findNode(value) {
    for (let node of this.adjacencyList.keys()) {
      if (node.value === value) {
        return node;
      }
    }

    return null;
  }

  _findEdge(startNode, endNode) {
    let edges = this.adjacencyList.get(startNode);

    for (let edge of edges) {
      if (edge.node === endNode) {
        return edge;
      }
    }

    return null;
  }
}


module.exports = Graph;
