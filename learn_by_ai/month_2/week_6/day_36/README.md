# **📚 Day 36: HashMaps & Sets in JavaScript**  

Today, we’ll explore **HashMaps** (or **Objects** in JavaScript) and **Sets**, which are powerful data structures for efficient data storage and manipulation.  

---

## **🔹 1. HashMaps (Objects)**  

📌 **What is a HashMap?**  
A HashMap is a collection of key-value pairs where each key is unique. In JavaScript, we often use **objects** or the `Map` class to implement HashMaps.

### **✅ Using Objects as HashMaps**  
- Objects allow us to store key-value pairs.
- Keys can be strings (or Symbols), and values can be any data type.

**Code Example**:
```js
const hashMap = {};

// Adding key-value pairs
hashMap["name"] = "Alice";
hashMap["age"] = 25;
hashMap["isStudent"] = false;

// Accessing values
console.log(hashMap["name"]); // Output: Alice

// Checking if a key exists
console.log("age" in hashMap); // Output: true

// Iterating over keys
for (const key in hashMap) {
    console.log(`${key}: ${hashMap[key]}`);
}
```

### **✅ Using the Map Class**  
- The `Map` class provides a more robust implementation of HashMaps.
- It maintains the insertion order of keys and allows any data type as a key.

**Code Example**:
```js
const map = new Map();

// Adding key-value pairs
map.set("name", "Bob");
map.set("age", 30);
map.set(1, "One"); // Key as a number

// Accessing values
console.log(map.get("name")); // Output: Bob

// Checking if a key exists
console.log(map.has("age")); // Output: true

// Iterating over key-value pairs
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
```

---

## **🔹 2. Sets**  

📌 **What is a Set?**  
A Set is a collection of unique values. It is similar to an array but does not allow duplicates.

### **✅ Using Sets**  
- Sets are useful for storing unique items and performing operations like union, intersection, and difference.

**Code Example**:
```js
const set = new Set();

// Adding values
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate value, will not be added

// Checking size
console.log(set.size); // Output: 3

// Checking if a value exists
console.log(set.has(2)); // Output: true
console.log(set.has(4)); // Output: false

// Iterating over values
for (const value of set) {
    console.log(value); // Output: 1, 2, 3
}

// Removing a value
set.delete(2);
console.log(set.size); // Output: 2
```

### **✅ Common Operations with Sets**  
- **Union**: Combine two sets.
- **Intersection**: Get common elements from two sets.
- **Difference**: Get elements in one set that are not in the other.

---

## **📝 Tasks for You**  
1️⃣ Implement a simple **phonebook** using a HashMap (Object or Map) where you can add, retrieve, and delete contacts.  
2️⃣ Create a function that takes two arrays and returns a Set containing their union, intersection, and difference.  

---

# **📚 Day 37: Advanced Data Structures & Algorithms**  

Today, we’ll dive into more complex data structures and algorithms that are fundamental for solving advanced programming problems.  

---

## **🔹 1. Advanced Data Structures**  

### **✅ 1.1 Trees**  
- **Definition**: A tree is a hierarchical data structure consisting of nodes, where each node has a value and can have child nodes.
- **Binary Trees**: Each node has at most two children (left and right).
- **Binary Search Trees (BST)**: A binary tree where the left child is less than the parent node, and the right child is greater.

**Code Example**:
```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}
```

### **✅ 1.2 Heaps**  
- **Definition**: A special tree-based data structure that satisfies the heap property.
- **Types**: Max-Heap (parent nodes are greater than or equal to child nodes) and Min-Heap (parent nodes are less than or equal to child nodes).
- **Use Cases**: Priority queues, heap sort.

**Code Example** (Min-Heap):
```js
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    remove() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) || 
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}
```

### **✅ 1.3 Graphs**  
- **Definition**: A collection of nodes connected by edges.
- **Types**: Directed, undirected, weighted, unweighted.
- **Representation**: Adjacency list or adjacency matrix.

**Code Example** (Adjacency List):
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

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
}
```

---

## **🔹 2. Algorithms**  

### **✅ 2.1 Sorting Algorithms**  
- **Quick Sort**: Divide-and-conquer algorithm that sorts by selecting a pivot.
- **Merge Sort**: A stable sorting algorithm that divides the array into halves and merges them back.

**Code Example** (Quick Sort):
```js
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); // Output: [1, 1, 2, 3, 6, 8, 10]
```

### **✅ 2.2 Search Algorithms**  
- **Binary Search**: Efficient algorithm for finding an item in a sorted array by repeatedly dividing the search interval in half.

**Code Example**:
```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // Not found
}

// Example usage
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
```

---

## **📝 Tasks for You**  
1️⃣ Implement a Binary Search Tree and include methods for insertion, searching, and traversal (in-order, pre-order, post-order).  
2️⃣ Solve **LeetCode 104: Maximum Depth of Binary Tree** and **LeetCode 200: Number of Islands** to practice working with trees and graphs.  

---

🎯 **Next Lesson (Day 37): **LeetCode:** Two Sum (HashMap Solution)!**  
Let me know if you have any questions or need help with the tasks! 🚀