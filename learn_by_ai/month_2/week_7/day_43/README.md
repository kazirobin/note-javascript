# **📚 Day 43: Stacks (LIFO) and Queues (FIFO)**  

Today, we’ll explore two important data structures: **Stacks** and **Queues**. Understanding these concepts is crucial for solving various algorithmic problems efficiently.  

---

## **🔹 Stacks (LIFO - Last In, First Out)**  

A stack is a collection of elements that follows the LIFO principle, meaning the last element added is the first one to be removed.

### **Key Operations**:
- **Push**: Add an element to the top of the stack.
- **Pop**: Remove and return the top element of the stack.
- **Peek**: Return the top element without removing it.
- **isEmpty**: Check if the stack is empty.

### **Example Implementation**:
```js
class Stack {
    constructor() {
        this.items = []; // Initialize an empty array for the stack
    }

    push(element) {
        this.items.push(element); // Add element to the top of the stack
    }

    pop() {
        return this.items.pop(); // Remove and return the top element
    }

    peek() {
        return this.items[this.items.length - 1]; // Return the top element
    }

    isEmpty() {
        return this.items.length === 0; // Check if the stack is empty
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.isEmpty()); // Output: false
```

---

## **🔹 Queues (FIFO - First In, First Out)**  

A queue is a collection of elements that follows the FIFO principle, meaning the first element added is the first one to be removed.

### **Key Operations**:
- **Enqueue**: Add an element to the end of the queue.
- **Dequeue**: Remove and return the front element of the queue.
- **Front**: Return the front element without removing it.
- **isEmpty**: Check if the queue is empty.

### **Example Implementation**:
```js
class Queue {
    constructor() {
        this.items = []; // Initialize an empty array for the queue
    }

    enqueue(element) {
        this.items.push(element); // Add element to the end of the queue
    }

    dequeue() {
        return this.items.shift(); // Remove and return the front element
    }

    front() {
        return this.items[0]; // Return the front element
    }

    isEmpty() {
        return this.items.length === 0; // Check if the queue is empty
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.isEmpty()); // Output: false
```

---

## **📝 Practice Problems**  

### **1. Stacks**  
- Implement a function to check for balanced parentheses in an expression (e.g., `{[()]}`).
- Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

### **2. Queues**  
- Implement a function to simulate a ticket booking system using a queue.
- Design a data structure that supports the following operations: `insert`, `delete`, and `get_random_element`, where all operations should be done in constant time.

---

🎯 **Next Lesson (Day 44): **LeetCode:** Valid Parentheses, Min Stack!**  
Let me know if you have any questions or need help with the implementation! 🚀