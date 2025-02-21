### **📚 Day 6: JavaScript Functions (Declaration, Expression, Arrow Functions)**  

Functions are **reusable blocks of code** that perform a specific task. Today, we'll cover:  
✅ Function **Declaration**  
✅ Function **Expression**  
✅ **Arrow Functions**  
✅ **Parameters & Arguments**  
✅ **Return Statements**  
✅ **Higher-Order Functions**  

---

## **🔹 1. Function Declaration**  
A function declaration defines a function **with a name**.  

✅ **Syntax:**  
```js
function functionName(parameters) {
    // Code block
    return value;
}
```

✅ **Example:**  
```js
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));  // Output: Hello, Alice!
```

✅ **Function Hoisting**:  
Function declarations are **hoisted** (moved to the top of the code before execution), so they can be called **before** they are defined.  

```js
console.log(sayHello());  // ✅ Works because of hoisting
function sayHello() {
    return "Hello!";
}
```

---

## **🔹 2. Function Expression**  
A function expression **stores a function inside a variable**.  

✅ **Syntax:**  
```js
const functionName = function(parameters) {
    return value;
};
```

✅ **Example:**  
```js
const add = function(a, b) {
    return a + b;
};
console.log(add(3, 5));  // Output: 8
```

❌ **Not Hoisted:** Function expressions **cannot** be called before they are defined.  

```js
console.log(subtract(10, 5));  // ❌ Error: Cannot access 'subtract' before initialization
const subtract = function(a, b) {
    return a - b;
};
```

---

## **🔹 3. Arrow Functions (`=>`)**  
Arrow functions provide a **shorter syntax** for writing functions.  

✅ **Syntax:**  
```js
const functionName = (parameters) => expression;
```

✅ **Example:**  
```js
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));  // Output: 8
```

🚀 **Key Differences from Regular Functions:**  
1️⃣ **No `function` keyword**  
2️⃣ **No `{}` needed** if only **one line**  
3️⃣ **No `return` needed** if it's an implicit return  

✅ **Example with One Parameter:**  
```js
const square = x => x * x;  // No need for parentheses if one parameter
console.log(square(5));  // Output: 25
```

✅ **Example with No Parameters:**  
```js
const hello = () => "Hello, World!";
console.log(hello());  // Output: Hello, World!
```

---

## **🔹 4. Function Parameters & Default Values**  
✅ **Function with Default Parameters:**  
```js
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greet());  // Output: Hello, Guest!
console.log(greet("Alice"));  // Output: Hello, Alice!
```

✅ **Arrow Function with Default Parameters:**  
```js
const multiply = (a, b = 2) => a * b;
console.log(multiply(5));  // Output: 10
```

---

## **🔹 5. Higher-Order Functions (Functions that Take Functions as Arguments)**  
📌 Functions can be **passed as arguments** to other functions.  

✅ **Example: Using `forEach()` (Built-in Higher-Order Function)**  
```js
let numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
    console.log(num * 2);  // Output: 2, 4, 6, 8
});
```

✅ **Example: Passing a Function to Another Function**  
```js
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
console.log(operate(4, 5, add));  // Output: 9
```

---

## **📝 Task for You**  
1️⃣ Write a function declaration that **calculates the area of a rectangle**.  
2️⃣ Convert the function to a **function expression**.  
3️⃣ Convert it to an **arrow function**.  
4️⃣ Use a **higher-order function** to apply a mathematical operation.  

---

🎯 **[Next Lesson (Day 7): Practice LeetCode Easy Problems](../day_7/)!**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)