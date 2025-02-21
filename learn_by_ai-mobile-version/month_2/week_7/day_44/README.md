# **📚 Day 44: LeetCode - Valid Parentheses & Min Stack**  

Today, we’ll solve two problems involving stacks: **Valid Parentheses** and **Min Stack**. These problems are great for understanding how to use stacks effectively in real-world scenarios.

---

## **🔹 Problem 1: Valid Parentheses**  

### **Problem Statement**  
Given a string containing just the characters `()[]{}`, determine if the input string is valid. An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.

### **Example**:
```plaintext
Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
```

### **Approach**:  
1. Use a stack to keep track of opening brackets.
2. Traverse the string character by character:
   - If it’s an opening bracket, push it onto the stack.
   - If it’s a closing bracket, check if the stack is not empty and if the top of the stack matches the corresponding opening bracket.
3. At the end, check if the stack is empty (all opening brackets are matched).

### **Code Implementation**:
```js
function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if (bracketMap[char]) {
            const topElement = stack.pop();
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

// Example usage
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]"));     // Output: false
```

---

## **🔹 Problem 2: Min Stack**  

### **Problem Statement**  
Design a stack that supports the following operations:
- `push(val)`: Pushes the element `val` onto the stack.
- `pop()`: Removes the element on the top of the stack.
- `top()`: Gets the top element.
- `getMin()`: Retrieves the minimum element in the stack.

### **Example**:
```plaintext
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   // Returns -3.
minStack.pop();
minStack.top();      // Returns 0.
minStack.getMin();   // Returns -2.
```

### **Approach**:  
1. Use two stacks:
   - One for storing the actual stack elements.
   - Another for keeping track of the minimum elements.
2. When pushing an element, also push it onto the min stack if it’s less than or equal to the current minimum.
3. When popping an element, if it’s the same as the current minimum, pop it from the min stack as well.

### **Code Implementation**:
```js
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const topElement = this.stack.pop();
        if (topElement === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top());     // Output: 0
console.log(minStack.getMin());  // Output: -2
```

### **Time Complexity**:  
- For both problems, the time complexity for each operation (`push`, `pop`, `top`, `getMin`) is **O(1)**.

### **Space Complexity**:  
- For the Min Stack, the space complexity is **O(n)** due to the storage of elements in two stacks.

---

## **📝 Tasks for You**  
1️⃣ Test the `isValid` function and the `MinStack` class with different inputs to ensure they work correctly.  
2️⃣ Try to implement the `MinStack` using a single stack with a different approach.

---

🎯 **[Next Lesson (Day 45): Singly & Doubly Linked Lists](../day_45/README.md)!**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../)