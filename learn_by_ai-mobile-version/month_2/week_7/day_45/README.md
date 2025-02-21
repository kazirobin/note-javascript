# **📚 Day 45: Singly & Doubly Linked Lists**  

Today, we’ll explore two fundamental data structures: **Singly Linked Lists** and **Doubly Linked Lists**. Understanding these data structures will help you grasp dynamic data management and manipulation.

---

## **🔹 Singly Linked Lists**  

A **singly linked list** is a collection of nodes where each node contains a value and a reference (or pointer) to the next node in the sequence. The list starts with a head node and ends with a node that points to null.

### **Key Operations**:
- **Insertion**: Add a new node at the beginning, end, or at a specific position.
- **Deletion**: Remove a node from the beginning, end, or a specific position.
- **Traversal**: Access each node in the list.

### **Example Implementation**:
```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Reference to the next node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list
    }

    // Insert a new node at the end
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Print the list
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Example usage
const linkedList = new SinglyLinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.print(); // Output: 1 -> 2 -> 3
linkedList.delete(2);
linkedList.print(); // Output: 1 -> 3
```

---

## **🔹 Doubly Linked Lists**  

A **doubly linked list** is similar to a singly linked list, but each node contains two references: one to the next node and another to the previous node. This allows traversal in both directions.

### **Key Operations**:
- **Insertion**: Add a new node at the beginning, end, or at a specific position.
- **Deletion**: Remove a node from the beginning, end, or a specific position.
- **Traversal**: Access each node in the list in both forward and backward directions.

### **Example Implementation**:
```js
class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Reference to the next node
        this.prev = null; // Reference to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list
    }

    // Insert a new node at the end
    insert(value) {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current; // Link the new node to the previous node
    }

    // Delete a node by value
    delete(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null; // Update the previous reference
            return;
        }
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current.next) current.next.prev = current.prev; // Link next to previous
                if (current.prev) current.prev.next = current.next; // Link previous to next
                return;
            }
            current = current.next;
        }
    }

    // Print the list
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' <-> '));
    }
}

// Example usage
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(1);
doublyLinkedList.insert(2);
doublyLinkedList.insert(3);
doublyLinkedList.print(); // Output: 1 <-> 2 <-> 3
doublyLinkedList.delete(2);
doublyLinkedList.print(); // Output: 1 <-> 3
```

---

## **📝 Practice Problems**  

### **1. Singly Linked List**  
- Implement a function to reverse a singly linked list.
- Write a function to detect a cycle in a linked list.

### **2. Doubly Linked List**  
- Implement a function to reverse a doubly linked list.
- Create a function to merge two sorted doubly linked lists into a single sorted list.

---

🎯 **[Next Lesson (Day 46): LeetCode: Reverse Linked List](../day_46/README.md)  !**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../)