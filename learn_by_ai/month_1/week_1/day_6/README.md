### **📚 Day 6: JavaScript Functions (Regular & Arrow Functions)**  
Welcome to Day 6! 🎉 Today, we’ll cover:  
✅ Function Basics (`function` keyword)  
✅ Function Parameters & Return Values  
✅ Arrow Functions (`=>`)  
✅ Function Expressions vs Declarations  
✅ Default Parameters & Rest Parameters  

---

## **🔹 1. Function Basics**  
Functions **group reusable code** to make programming easier.  

📌 **Syntax:**  
```js
function functionName() {
    // Code to execute
}
```

✅ **Example:**  
```js
function greet() {
    console.log("Hello, World!");
}
greet();  // Output: Hello, World!
```

---

## **🔹 2. Function Parameters & Return Values**  
Functions can **take input (parameters)** and **return output**.  

📌 **Example:**  
```js
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));  // Output: 8
```

✅ **Multiple parameters:**  
```js
function greet(name, age) {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greet("Alice", 25));  // Output: Hello Alice, you are 25 years old.
```

---

## **🔹 3. Arrow Functions (`=>`)**  
A shorter way to write functions.  

📌 **Syntax:**  
```js
const functionName = (parameters) => expression;
```

✅ **Example (Arrow Function):**  
```js
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));  // Output: 20
```

✅ **Arrow Function with `{}` & `return`:**  
```js
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 4));  // Output: 6
```

✅ **Arrow Function with One Parameter:**  
```js
const square = num => num * num;
console.log(square(6));  // Output: 36
```

---

## **🔹 4. Function Expressions vs Declarations**  
### **Function Declaration (Hoisted)**
Can be called **before** the function is defined.  
```js
console.log(hello());  // Works!

function hello() {
    return "Hello!";
}
```

### **Function Expression (Not Hoisted)**
Stored in a variable and **can’t be used before declaration**.  
```js
const hello = function() {
    return "Hello!";
};
console.log(hello());  // Works, but must be after declaration
```

---

## **🔹 5. Default Parameters**  
📌 **Example:**  
```js
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();         // Output: Hello, Guest!
greet("John");   // Output: Hello, John!
```

---

## **🔹 6. Rest Parameters (`...`)**
Allows a function to take **multiple arguments** as an array.

📌 **Example:**  
```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));  // Output: 10
```

---

## **📝 Task for You**
1️⃣ Create a function that takes a **name** and prints `"Hello, Name!"`.  
2️⃣ Write an **arrow function** to calculate the square of a number.  
3️⃣ Create a function with **default parameters** (`name = "Guest"`).  
4️⃣ Use the **rest parameter** to sum all numbers passed to a function.  

---

🎯 **Next Lesson (Day 8): JavaScript Arrays (Methods & Manipulation)!**  
Let me know if you have any questions! 🚀