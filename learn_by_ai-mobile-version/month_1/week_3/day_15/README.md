# **📚 Day 15: `this` Keyword & Lexical Scope in JavaScript**  

Today, we’ll cover two important JavaScript concepts:  
✅ **`this` Keyword** → How `this` works in different contexts  
✅ **Lexical Scope** → How variables are accessed  

---

## **🔹 1. Understanding the `this` Keyword**  
📌 `this` refers to the **object that is executing the current function**.  
📌 The value of `this` **depends on how a function is called**.  

---

### **✅ Example 1: `this` in the Global Scope**  
In the **browser**, `this` refers to the `window` object.  
```js
console.log(this); // window (in the browser)
```

---

### **✅ Example 2: `this` Inside an Object Method**  
📌 When `this` is used inside a **method**, it refers to the object.  
```js
const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // Output: "Hello, Alice"
```
**Explanation:**  
- `this.name` refers to `user.name`.  
- The method is called **inside the object**, so `this` refers to `user`.  

---

### **✅ Example 3: `this` in a Regular Function (Undefined in Strict Mode)**  
📌 In a **regular function**, `this` refers to the global object (`window` in browsers).  
📌 In `"strict mode"`, `this` is `undefined`.  
```js
function showThis() {
  "use strict";
  console.log(this);
}

showThis(); // Output: undefined (in strict mode)
```

---

### **✅ Example 4: `this` in Arrow Functions (Lexical `this`)**  
📌 **Arrow functions do not have their own `this`**. They inherit `this` from the surrounding scope.  
```js
const person = {
  name: "Bob",
  greet: function() {
    let arrowFunc = () => {
      console.log(this.name);
    };
    arrowFunc();
  }
};

person.greet(); // Output: "Bob"
```
**Explanation:**  
- The arrow function inherits `this` from the `greet` function, which refers to `person`.  

---

### **✅ Example 5: `this` in Event Listeners**  
📌 In an event listener, `this` refers to the element that triggered the event.  
```js
document.getElementById("btn").addEventListener("click", function() {
  console.log(this); // Refers to the clicked button element
});
```

---

### **✅ Example 6: `this` with `call()`, `apply()`, and `bind()`**  
🔹 **Manually setting `this`** using `call()`, `apply()`, and `bind()`.  

```js
function showName() {
  console.log(this.name);
}

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

showName.call(user1); // Output: "Alice"
showName.apply(user2); // Output: "Bob"

const boundFunction = showName.bind(user1);
boundFunction(); // Output: "Alice"
```
- `call()` and `apply()` **invoke the function immediately** with a specified `this`.  
- `bind()` **returns a new function** with `this` permanently set.  

---

## **🔹 2. Lexical Scope in JavaScript**  
📌 **Lexical Scope** means that **functions remember the scope in which they were created**.  

✅ **Example: Scope Levels**  
```js
let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    let innerVar = "I am inner";
    console.log(globalVar); // Accessible
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }

  innerFunction();
}

outerFunction();
```
**Explanation:**  
- `innerFunction()` **can access** `globalVar` and `outerVar`.  
- JavaScript looks for variables **inside-out** (lexical scope).  

---

✅ **Example: Closure (Lexical Scope in Action)**  
```js
function createCounter() {
  let count = 0; // Lexical Scope

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
```
**Explanation:**  
- The inner function **remembers** `count` even after `createCounter()` finishes executing.  
- This is called a **closure**.  

---

## **📝 Task for You**  
1️⃣ Create an object `car` with a method that logs `this.brand`.  
2️⃣ Experiment with `call()`, `apply()`, and `bind()`.  
3️⃣ Write a function that demonstrates lexical scope by using nested functions.  

---

🎯 **[Next Lesson (Day 16): Closures, Hoisting](../day_16/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)