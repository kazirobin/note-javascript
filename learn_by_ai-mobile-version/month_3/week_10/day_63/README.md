# **📚 Day 63: Memory Management & Garbage Collection in JavaScript**  

Today, we’ll explore **memory management** in JavaScript and how **garbage collection** works to free up memory.  

---

## **🔹 What is Memory Management?**  

📌 **Memory management** involves allocating and deallocating memory in an application to ensure efficient use of resources.  
✅ In JavaScript, memory is managed automatically, but understanding how it works helps in writing efficient code.

---

## **🔹 How Memory is Allocated**  

1️⃣ **Primitive Values**: Stored directly in the stack (e.g., numbers, strings, booleans).  
2️⃣ **Reference Values**: Objects, arrays, and functions are stored in the heap. The stack holds references to these values.  

### **Memory Allocation Example**  
```js
let num = 42; // Primitive value in stack
let obj = { name: "Alice" }; // Object in heap
```

---

## **🔹 What is Garbage Collection?**  

📌 **Garbage collection** is the process of automatically identifying and freeing memory that is no longer in use to prevent memory leaks.  
✅ JavaScript uses **mark-and-sweep** algorithm for garbage collection.  

---

## **🔹 How Garbage Collection Works**  

### 1. **Mark Phase**  
🔍 The garbage collector marks all reachable (accessible) objects.  
- Any object that can be accessed through root references (global variables, local variables) is considered reachable.

### 2. **Sweep Phase**  
🧹 The garbage collector removes all objects that are not marked (unreachable) and reclaims their memory.  

---

### **Example**  
```js
function createUser(name) {
    let user = { name: name }; // user is created in the heap
    return user;
}

let alice = createUser("Alice");
alice = null; // Now, the user object can be garbage collected if no other reference exists
```

---

## **🔹 Memory Leaks**  
📌 A **memory leak** occurs when memory that is no longer needed is not released. This can happen due to:  
- Unreachable references (e.g., global variables)
- Forgotten timers or event listeners
- Closures holding references to variables

### **Example of Memory Leak**  
```js
let users = []; // Memory leak if we keep pushing data without clearing

function addUser(name) {
    users.push({ name: name }); // Continually adding users without a limit
}

// Call addUser multiple times without removing old data
```

### **How to Prevent Memory Leaks**  
- Remove event listeners when no longer needed.  
- Set objects to `null` when you’re done using them.  
- Avoid global variables whenever possible.  

---

## **🔹 Tools for Memory Management**  

### ✅ **Chrome DevTools**  
1️⃣ Open **DevTools** → Go to the **Performance** tab.  
2️⃣ Record the performance and look for memory usage spikes.  
3️⃣ Use the **Memory** tab to take heap snapshots and analyze memory distribution.

### ✅ **Memory Profiler**  
- Use tools like **Chrome's Memory Profiler** to analyze memory consumption, identify memory leaks, and optimize your applications.

---

## **📝 Tasks for You**  
1️⃣ **Implement a function** that creates and returns multiple user objects, then observe memory usage with DevTools.  
2️⃣ **Create a memory leak** intentionally in a sample project and use DevTools to find and fix it.  
3️⃣ **Optimize your previous projects** to avoid potential memory leaks.  

---

🎯 **[Next Lesson (Day 64): Debouncing & Throttling (Performance Optimization)](../day_64/README.md)!**  
Let me know if you have any questions about memory management or garbage collection! 🚀

[**Back to Home**](../../../README.md)