# **📚 Day 46: LeetCode - Reverse Linked List**  

Today, we’ll tackle the problem of reversing a linked list. This is a common interview question that helps to reinforce your understanding of linked list manipulation.

---

## **🔹 Problem Statement: Reverse Linked List**  

Given the head of a singly linked list, reverse the list and return the reversed list.

### **Example**:
```plaintext
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
```

### **Approach**:  
We can reverse the linked list using an iterative approach or a recursive approach. Here, we’ll discuss both methods.

### **1. Iterative Approach**:
1. Initialize three pointers: `prev`, `current`, and `next`.
2. Traverse the list while reversing the `next` pointers.
3. At each step, update `next` to the next node, reverse the `current` pointer, and move `prev` and `current` one step forward.

### **Iterative Code Implementation**:
```js
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Reference to the next node
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        const next = current.next; // Store next node
        current.next = prev;       // Reverse current node's pointer
        prev = current;            // Move prev and current one step forward
        current = next;
    }

    return prev; // New head of the reversed list
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let reversedHead = reverseList(head);
// Print reversed list
let current = reversedHead;
while (current) {
    console.log(current.value); // Output: 5, 4, 3, 2, 1
    current = current.next;
}
```

### **2. Recursive Approach**:
1. Use recursion to reach the end of the list.
2. At each step, reverse the pointers while returning from the recursion.

### **Recursive Code Implementation**:
```js
function reverseListRecursive(head) {
    if (!head || !head.next) return head; // Base case

    const newHead = reverseListRecursive(head.next); // Recurse to the end
    head.next.next = head; // Reverse the pointer
    head.next = null; // Set the next of the original head to null

    return newHead; // Return new head of the reversed list
}

// Example usage
reversedHead = reverseListRecursive(head);
// Print reversed list
current = reversedHead;
while (current) {
    console.log(current.value); // Output: 5, 4, 3, 2, 1
    current = current.next;
}
```

### **Time Complexity**:  
- **O(n)**: Both iterative and recursive approaches traverse the list once.

### **Space Complexity**:  
- **O(1)** for the iterative approach (in-place reversal).
- **O(n)** for the recursive approach due to the call stack.

---

## **📝 Tasks for You**  
1️⃣ Implement both iterative and recursive solutions for the reverse linked list problem.  
2️⃣ Test your functions with various linked list inputs to ensure they work correctly.

---

🎯 **[Next Lesson (Day 47): Project: Custom Stack Implementation](../day_47/README.md)  !**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../)