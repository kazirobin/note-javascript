# **📚 Day 12: Higher-Order Functions & Callbacks**  

Today, we’ll learn about **higher-order functions** and **callbacks** in JavaScript. These concepts are essential for writing **efficient, reusable, and modular code**.  

✅ **Higher-Order Functions** → Functions that take another function as an argument or return a function.  
✅ **Callbacks** → Functions passed as arguments to other functions.  

---

## **🔹 1. What is a Higher-Order Function?**  
📌 A **higher-order function** is a function that:  
- **Takes a function as an argument** ✅  
- **Returns a function as a result** ✅  

✅ **Example:**  
```js
function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(callback, userName) {
  return callback(userName);
}

console.log(processUser(greet, "Alice"));  
// Output: "Hello, Alice!"
```

---

## **🔹 2. What is a Callback Function?**  
📌 A **callback function** is a function **passed as an argument** to another function. It allows asynchronous operations, such as:  
- Handling **API responses**  
- **Event listeners** (e.g., button clicks)  
- **Asynchronous programming** (e.g., `setTimeout`, `setInterval`)  

✅ **Example:**  
```js
function printMessage(message) {
  console.log(message);
}

function delayedGreeting(name, callback) {
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 2000);
}

delayedGreeting("Bob", printMessage);
// Output (after 2 seconds): "Hello, Bob!"
```

---

## **🔹 3. Using Callbacks with Array Methods**  
📌 Many built-in JavaScript methods use **callback functions**, such as:  
- `forEach()`  
- `map()`  
- `filter()`  
- `reduce()`  

✅ **Example: `forEach()` with Callback**  
```js
let numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8
```

✅ **Example: `map()` with Callback**  
```js
let doubled = numbers.map(num => num * 2);
console.log(doubled);  
// Output: [2, 4, 6, 8]
```

✅ **Example: `filter()` with Callback**  
```js
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  
// Output: [2, 4]
```

✅ **Example: `reduce()` with Callback**  
```js
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  
// Output: 10
```

---

## **🔹 4. Returning Functions (Closure + Higher-Order Function)**  
📌 A function can **return another function** (useful for dynamic behavior).  

✅ **Example:**  
```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15
```

---

## **📝 Task for You**  
1️⃣ Write a **higher-order function** that takes a callback function and calls it with `"Hello, World!"`.  
2️⃣ Use a **callback** with `setTimeout()` to log `"This is delayed!"` after 3 seconds.  
3️⃣ Use `map()` to square each number in `[2, 4, 6]`.  
4️⃣ Use `filter()` to get only even numbers from `[1, 2, 3, 4, 5]`.  
5️⃣ Use `reduce()` to sum all numbers in `[5, 10, 15]`.  

---

🎯 **[Next Lesson (Day 13): Recursion Basics](../day_13/) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)