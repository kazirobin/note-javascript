# **📚 Day 47: Project - Custom Stack Implementation**  

Today, we’ll build a custom stack implementation from scratch. A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This project will reinforce your understanding of stacks and how to implement them in JavaScript.

---

## **🔹 Stack Class Overview**  

### **Stack Operations**:
- **push(value)**: Add an element to the top of the stack.
- **pop()**: Remove and return the top element of the stack.
- **peek()**: Return the top element without removing it.
- **isEmpty()**: Check if the stack is empty.
- **size()**: Return the number of elements in the stack.

### **Example Implementation**:
Here’s a basic implementation of a custom stack in JavaScript:

```js
class CustomStack {
    constructor() {
        this.stack = []; // Array to hold stack elements
    }

    // Add an element to the top of the stack
    push(value) {
        this.stack.push(value);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Return the number of elements in the stack
    size() {
        return this.stack.length;
    }

    // Print the stack elements (for debugging)
    print() {
        console.log(this.stack.join(' <- '));
    }
}

// Example usage
const myStack = new CustomStack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.print(); // Output: 10 <- 20 <- 30
console.log(myStack.pop()); // Output: 30
myStack.print(); // Output: 10 <- 20
console.log(myStack.peek()); // Output: 20
console.log(myStack.size()); // Output: 2
console.log(myStack.isEmpty()); // Output: false
```

### **Key Features**:
- The stack is implemented using an array, making it easy to manage elements.
- Each method handles basic stack operations with error checking for empty stack scenarios.

---

## **📝 Tasks for You**  
1️⃣ Expand the `CustomStack` class to include additional methods, such as:
   - `clear()`: Clear all elements from the stack.
   - `toArray()`: Convert the stack to an array representation.
  
2️⃣ Implement a method to sort the stack without using any additional data structures. You can use a recursive approach or a temporary stack.

3️⃣ Test your stack implementation with various operations to ensure everything works as expected.

---

🎯 **[Next Lesson (Day 48-49): **Revision & More Problems](../day_48-49/)!**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../)