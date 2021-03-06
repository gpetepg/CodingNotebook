const Graph = require('../data_structures/Graph');
const Queue = require('../data_structures/Queue');

function bfsGraph(graph, source, destination) {
  const queue = new Queue([source]);
  const visited = new Set();
  let currentNode;
  
  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();
  
    if (visited.has(currentNode)) { continue; }
    // console.log(currentNode);
    if (currentNode == destination) { return true; }
    
    visited.add(currentNode);
    for (let node_i in graph.graph[currentNode]) {
      queue.enqueue(node_i);
    }
  }

  return false;
}

let theGraph = new Graph({
    0: {
      1: true,
      4: true,
      5: true
    },
    1: {
      3: true,
      4: true
    },
    2: {
      1: true
    },
    3: {
      2: true,
      4: true
    },
    4: {},
    5: {},
});

console.log(bfsGraph(theGraph, 0, 2), true);
console.log(bfsGraph(theGraph, 0, 5), true);
console.log(bfsGraph(theGraph, 4, 5), false);