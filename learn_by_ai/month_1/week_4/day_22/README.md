# **📚 Day 22: Callbacks & Event Loop in JavaScript**  

Today, we’ll cover:  
✅ **What are Callbacks?**  
✅ **Synchronous vs. Asynchronous Code**  
✅ **JavaScript Event Loop Explained**  

---

## **🔹 1. What is a Callback?**  
📌 A **callback** is a function **passed as an argument** to another function and executed later.  

✅ **Example of a Simple Callback:**  
```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // Calling the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
```
🔹 Here, `sayBye` is a **callback function** passed to `greet`.  

---

## **🔹 2. Synchronous vs. Asynchronous Code**  
📌 **Synchronous:** Code runs **line by line** (blocking).  
📌 **Asynchronous:** Code **does not block** execution (e.g., timers, API calls).  

✅ **Synchronous Example:**  
```js
console.log("Start");
console.log("End"); 
```
🔹 Output:  
```
Start  
End  
```

✅ **Asynchronous Example (setTimeout):**  
```js
console.log("Start");
setTimeout(() => console.log("Middle"), 2000);
console.log("End");
```
🔹 Output (after 2 seconds):  
```
Start  
End  
Middle  
```
🚀 `setTimeout` runs **asynchronously**, allowing the program to continue execution.  

---

## **🔹 3. JavaScript Event Loop Explained**  
📌 The **Event Loop** allows JavaScript to handle asynchronous tasks.  
📌 It moves **callbacks** from the task queue to the call stack **only when the stack is empty**.  

✅ **Example of the Event Loop in Action:**  
```js
console.log("Start");

setTimeout(() => console.log("Inside setTimeout"), 0);

console.log("End");
```
🔹 Output:  
```
Start  
End  
Inside setTimeout  
```
🔹 Even with `setTimeout(() => console.log("Inside setTimeout"), 0);`, it runs **after** `console.log("End")` because of the event loop.  

---

## **🔹 4. Callbacks in Asynchronous Operations**  
✅ **Example: Reading a File (Simulated with `setTimeout`)**  
```js
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
```
🔹 `fetchData()` runs **asynchronously**, and once done, `processData()` is executed.  

---

## **📝 Task for You**  
1️⃣ Write a function `delayedHello(name, delay, callback)` that prints `Hello, name!` after `delay` milliseconds.  
2️⃣ Explain why `setTimeout(fn, 0)` still executes after synchronous code.  

---

🎯 **[Next Lesson (Day 23): Promises (`then`, `catch`, `finally`)](../day_23/) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)