# **📚 Day 66: LeetCode Hard Problem – LRU Cache**  

Today, we'll tackle the **LRU Cache** problem, a common problem that tests your understanding of data structures, specifically the **Least Recently Used (LRU)** cache mechanism. This problem can be solved efficiently using a combination of a **HashMap** and a **Doubly Linked List**.  

---

## **🔹 Problem Statement**  

Design and implement a data structure for an LRU cache. It should support the following operations:  
- **get(key)**: Get the value of the key if the key exists in the cache, otherwise return -1.  
- **put(key, value)**: Update or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.  

### **Constraints**  
- The number of operations will be at most `10^4`.
- The capacity must be a positive integer.

---

## **🔹 Approach**  

To implement the LRU Cache, we will use:  
1. **HashMap**: To store key-value pairs for O(1) access time.  
2. **Doubly Linked List**: To keep track of the usage order of the keys. The most recently used items will be at the front, and the least recently used will be at the back.

### **Operations**:  
- **get**: Look up the key in the HashMap. If it exists, move the node to the front of the linked list (mark it as most recently used). If it does not exist, return -1.
- **put**: Insert the key-value pair. If the key already exists, update the value and move it to the front. If the cache exceeds its capacity, remove the least recently used item from both the HashMap and the linked list.

---

## **🔹 Implementation**  
Here’s how you can implement the LRU Cache in JavaScript:  
```js
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // HashMap to store key-value pairs
        this.head = new Node(0, 0); // Dummy head
        this.tail = new Node(0, 0); // Dummy tail
        this.head.next = this.tail; // Connect head and tail
        this.tail.prev = this.head;
    }
    
    // Move a node to the front (most recently used)
    moveToFront(node) {
        this.removeNode(node);
        this.addNode(node);
    }
    
    // Remove a node
    removeNode(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }
    
    // Add a node right after the head
    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.cache.has(key)) return -1; // Key not found
        const node = this.cache.get(key);
        this.moveToFront(node); // Move to front (most recently used)
        return node.value; // Return the value
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value; // Update value
            this.moveToFront(node); // Move to front
        } else {
            const newNode = new Node(key, value);
            this.cache.set(key, newNode); // Add to HashMap
            this.addNode(newNode); // Add to linked list
            if (this.cache.size > this.capacity) {
                const lruNode = this.tail.prev; // Least recently used node
                this.removeNode(lruNode); // Remove from linked list
                this.cache.delete(lruNode.key); // Remove from HashMap
            }
        }
    }
}

// Usage
const lruCache = new LRUCache(2);
lruCache.put(1, 1); // Cache is {1=1}
lruCache.put(2, 2); // Cache is {1=1, 2=2}
console.log(lruCache.get(1)); // Returns 1
lruCache.put(3, 3); // Evicts key 2, Cache is {1=1, 3=3}
console.log(lruCache.get(2)); // Returns -1 (not found)
lruCache.put(4, 4); // Evicts key 1, Cache is {3=3, 4=4}
console.log(lruCache.get(1)); // Returns -1 (not found)
console.log(lruCache.get(3)); // Returns 3
console.log(lruCache.get(4)); // Returns 4
```

---

## **📝 Tasks for You**  
1️⃣ Modify the LRU Cache implementation to support additional operations, such as `getAllKeys()` that returns all keys in the order of most recently used.  
2️⃣ Analyze the time and space complexity of your implementation.  
3️⃣ Solve additional **LeetCode** problems that utilize caching mechanisms or data structures.

---

🎯 **[Next Lesson (Day 67): **Project:** Custom Throttle Function](../day_67/)!**  
Let me know if you have any questions about the LRU Cache or any other topics! 🚀

[**Back to Home**](../../../)