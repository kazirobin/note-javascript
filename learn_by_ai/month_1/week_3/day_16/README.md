# **📚 Day 16: Closures & Hoisting in JavaScript**  

Today, we’ll dive into two important JavaScript concepts:  
✅ **Closures** → Functions that "remember" their lexical scope  
✅ **Hoisting** → How JavaScript moves declarations to the top  

---

## **🔹 1. Closures in JavaScript**  
📌 A **closure** is a function that **remembers the variables** from its lexical scope even after the outer function has finished executing.  

✅ **Example 1: Basic Closure**  
```js
function outerFunction() {
  let count = 0; // This variable is inside the closure

  return function innerFunction() {
    count++; // Inner function remembers "count"
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```
**Explanation:**  
- `outerFunction()` runs **once**, and `count` is created.  
- The returned `innerFunction()` **remembers** `count` because of closure.  
- Every time `counter()` is called, `count` is **incremented**.  

---

✅ **Example 2: Closures in a Loop (Fixing `var` Issue)**  
**Problem: `var` causes unexpected behavior in loops.**  
```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output (after 1 sec): 4, 4, 4 (not 1, 2, 3)
```
🔹 **Solution: Use `let` or a closure**  
```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 1, 2, 3 (as expected)
```
OR  
```js
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}
```
**Why?**  
- `let` is **block-scoped**, so each iteration gets a new `i`.  
- The **IIFE (Immediately Invoked Function Expression)** creates a **new scope** for each `j`.  

---

✅ **Example 3: Practical Use of Closures – Private Variables**  
📌 Closures are useful for **creating private variables** (like in real-world applications).  
```js
function bankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrew: $${amount}. Remaining balance: $${balance}`);
      }
    },
    checkBalance() {
      console.log(`Current balance: $${balance}`);
    },
  };
}

const myAccount = bankAccount(100);
myAccount.deposit(50); // Deposited: $50. New balance: $150
myAccount.withdraw(30); // Withdrew: $30. Remaining balance: $120
myAccount.checkBalance(); // Current balance: $120
```
**Why?**  
- `balance` is **not directly accessible** → it’s **private**.  
- We **control** how it’s modified using methods inside the closure.  

---

## **🔹 2. Hoisting in JavaScript**  
📌 **Hoisting** means JavaScript **moves variable and function declarations** to the top of their scope **before execution**.  
📌 Only **declarations** are hoisted, **not initializations**!  

---

### **✅ Example 1: Function Hoisting**  
✅ **Function declarations** are hoisted, so you can call them **before** they are defined.  
```js
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
```
🚨 **But function expressions (including arrow functions) are NOT hoisted!**  
```js
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function () {
  console.log("Hello!");
};
```

---

### **✅ Example 2: Variable Hoisting (`var` vs `let` & `const`)**  
🚨 `var` is hoisted but **initialized as `undefined`**.  
```js
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5
```
🚨 `let` and `const` are **hoisted but NOT initialized** (They are in the **Temporal Dead Zone**).  
```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b);
```

---

### **✅ Example 3: Hoisting in a Function**  
```js
function demoHoisting() {
  console.log(x); // undefined (hoisted but not initialized)
  var x = 10;
  console.log(x); // 10
}
demoHoisting();
```
🔹 **Equivalent to:**  
```js
function demoHoisting() {
  var x; // Declaration hoisted
  console.log(x); // undefined
  x = 10; // Initialization remains in place
  console.log(x);
}
```

---

### **✅ Example 4: Hoisting with `let` and `const` in Blocks**  
📌 `let` and `const` are hoisted **inside block scope** but **not initialized**.  
```js
{
  console.log(x); // ❌ ReferenceError
  let x = 5;
}
```

---

## **📝 Task for You**  
1️⃣ Write a closure that keeps track of a user’s score in a game.  
2️⃣ Demonstrate hoisting with `var`, `let`, and `const`.  
3️⃣ Create a closure-based **counter** function that can increase, decrease, and reset a count.  

---

🎯 **Next Lesson (Day 17): Prototypes & Inheritance !**  
Let me know if you have any questions! 🚀
[**Back to Home**](../../../)