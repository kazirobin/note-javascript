# **📚 Day 52: Graphs, BFS & DFS**  

Today, we’ll explore graphs, one of the fundamental data structures in computer science. We will also learn about two common traversal techniques: **Breadth-First Search (BFS)** and **Depth-First Search (DFS)**.

---

## **🔹 Graph Basics**  

A **graph** is a collection of nodes (or vertices) connected by edges. Graphs can be directed or undirected, and they can also be weighted or unweighted.

### **Key Terminology**:
- **Vertex (Node)**: A fundamental part of a graph, representing an entity.
- **Edge**: A connection between two vertices.
- **Directed Graph**: Edges have a direction, going from one vertex to another.
- **Undirected Graph**: Edges do not have a direction; the connection is bidirectional.
- **Weighted Graph**: Edges have weights (costs) associated with them.

### **Graph Representation**:
1. **Adjacency List**: A list of lists, where each list represents a vertex and its neighbors.
2. **Adjacency Matrix**: A 2D array where the cell at row `i` and column `j` indicates whether there is an edge from vertex `i` to vertex `j`.

### **Example Adjacency List**:
```plaintext
0: [1, 2]
1: [0, 3]
2: [0, 3]
3: [1, 2, 4]
4: [3]
```

---

## **🔹 Breadth-First Search (BFS)**  

BFS is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node) and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

### **BFS Algorithm Steps**:
1. Start with a queue and enqueue the starting vertex.
2. Mark the starting vertex as visited.
3. While the queue is not empty:
   - Dequeue a vertex and visit it.
   - Enqueue all unvisited neighbors and mark them as visited.

### **BFS Code Example**:
```js
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); // Undirected graph
    }

    bfs(start) {
        const queue = [start];
        const visited = {};
        visited[start] = true;

        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex); // Visit the vertex

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Example usage
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

graph.bfs(0); // Output: 0, 1, 2, 3, 4
```

---

## **🔹 Depth-First Search (DFS)**  

DFS is another algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node) and explores as far as possible along each branch before backtracking.

### **DFS Algorithm Steps**:
1. Start with a stack (or recursion) and push the starting vertex.
2. Mark the starting vertex as visited.
3. While the stack is not empty:
   - Pop a vertex and visit it.
   - Push all unvisited neighbors onto the stack.

### **DFS Code Example**:
```js
class Graph {
    // Add the previous Graph class methods here...

    dfs(start, visited = {}) {
        if (!start) return;

        visited[start] = true;
        console.log(start); // Visit the vertex

        for (const neighbor of this.adjacencyList[start]) {
            if (!visited[neighbor]) {
                this.dfs(neighbor, visited);
            }
        }
    }
}

// Example usage
const graph = new Graph();
// Add vertices and edges as before...

graph.dfs(0); // Output: 0, 1, 3, 2, 4 (order may vary)
```

---

## **📝 Tasks for You**  
1️⃣ Implement the **iterative version** of DFS using a stack instead of recursion.  
2️⃣ Solve problems using BFS and DFS, such as finding the shortest path in an unweighted graph or checking if a path exists between two nodes.  
3️⃣ Explore more advanced graph problems, such as detecting cycles in a graph or topological sorting.

---
# **Advanced Graph Algorithms**  

Today, we will explore advanced graph algorithms that are commonly used to solve complex problems in graph theory. We will cover **Dijkstra’s Algorithm** for finding the shortest path in a weighted graph and **Topological Sorting** for ordering vertices in a directed acyclic graph (DAG).

---

## **🔹 Dijkstra’s Algorithm**  

Dijkstra's algorithm is used to find the shortest path from a starting node to all other nodes in a weighted graph. It works with non-negative weights and uses a priority queue to explore the nearest unvisited vertex.

### **Algorithm Steps**:
1. Create a priority queue and initialize distances from the start node to infinity, except for the start node (which is set to 0).
2. While the priority queue is not empty:
   - Extract the vertex with the minimum distance.
   - Update the distances to its neighbors.
   - If a shorter path is found, update the distance and add the neighbor to the queue.

### **Dijkstra’s Algorithm Code Example**:
```js
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight }); // Undirected graph
    }

    dijkstra(start) {
        const distances = {};
        const priorityQueue = new MinPriorityQueue();
        
        // Initialize distances
        for (const vertex in this.adjacencyList) {
            distances[vertex] = Infinity;
        }
        distances[start] = 0;
        priorityQueue.enqueue(start, 0);

        while (priorityQueue.size()) {
            const { element } = priorityQueue.dequeue();

            for (const neighbor of this.adjacencyList[element]) {
                const distance = distances[element] + neighbor.weight;
                if (distance < distances[neighbor.node]) {
                    distances[neighbor.node] = distance;
                    priorityQueue.enqueue(neighbor.node, distance);
                }
            }
        }

        return distances;
    }
}

// MinPriorityQueue implementation can be added here

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

const distances = graph.dijkstra('A');
console.log(distances); // { A: 0, B: 1, C: 3, D: 4 }
```

### **Time Complexity**:  
- **O((V + E) log V)**: where V is the number of vertices and E is the number of edges.

---

## **🔹 Topological Sorting**  

Topological sorting is the ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge `u → v`, vertex `u` comes before vertex `v`. This is useful in scenarios like task scheduling and course prerequisites.

### **Algorithm Steps**:
1. Compute the in-degree (number of incoming edges) for each vertex.
2. Initialize a queue with all vertices that have an in-degree of 0.
3. While the queue is not empty:
   - Dequeue a vertex and add it to the sorted order.
   - Decrease the in-degree of its neighbors.
   - If any neighbor's in-degree becomes 0, enqueue it.

### **Topological Sorting Code Example**:
```js
class Graph {
    // Add the previous Graph class methods here...

    topologicalSort() {
        const inDegree = {};
        const sortedOrder = [];
        const queue = [];

        // Initialize in-degrees
        for (const vertex in this.adjacencyList) {
            inDegree[vertex] = 0;
        }

        // Calculate in-degrees
        for (const vertex in this.adjacencyList) {
            for (const neighbor of this.adjacencyList[vertex]) {
                inDegree[neighbor.node] += 1;
            }
        }

        // Add vertices with in-degree of 0 to the queue
        for (const vertex in inDegree) {
            if (inDegree[vertex] === 0) {
                queue.push(vertex);
            }
        }

        while (queue.length > 0) {
            const vertex = queue.shift();
            sortedOrder.push(vertex);

            for (const neighbor of this.adjacencyList[vertex]) {
                inDegree[neighbor.node] -= 1;
                if (inDegree[neighbor.node] === 0) {
                    queue.push(neighbor.node);
                }
            }
        }

        if (sortedOrder.length !== Object.keys(this.adjacencyList).length) {
            throw new Error("Graph has at least one cycle!");
        }

        return sortedOrder;
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

const sorted = graph.topologicalSort();
console.log(sorted); // Output: ['A', 'B', 'C', 'D'] or any valid topological order
```

### **Time Complexity**:  
- **O(V + E)**: where V is the number of vertices and E is the number of edges.

---

## **📝 Tasks for You**  
1️⃣ Implement the **MinPriorityQueue** class used in Dijkstra's algorithm.  
2️⃣ Solve problems related to Dijkstra’s algorithm, such as finding the shortest path in different graph configurations.  
3️⃣ Practice topological sorting with various directed acyclic graphs and handle cases where a cycle exists.

---

🎯 **Next Lesson (Day 53): **LeetCode:** Number of Islands  !**  
Let me know if you have any questions or need help with the implementation! 🚀