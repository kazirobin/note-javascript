# **Complete JavaScript Learning Guide** 🚀  
A structured, beginner-to-advanced JavaScript guide covering all key concepts, operators, functions, objects, arrays, scope, closures, and more.

---

## **📌 Phase 1: JavaScript Basics**

### **1️⃣ Call Stack**  
The **call stack** is a mechanism JavaScript uses to manage function execution, following the **LIFO (Last In, First Out)** principle.  

#### **Example:**
```javascript
function first() {
    console.log("First function");
    second();
}
function second() {
    console.log("Second function");
    third();
}
function third() {
    console.log("Third function");
}
first();
```
📌 The last function called is the first one removed from the stack.

---

### **2️⃣ [Primitive Types](./primitive_type/README.md)**  
JavaScript has **seven primitive data types**, which are **immutable (unchangeable)**:  

- `Number` – Numeric values (`let x = 10;`)
- `String` – Text values (`let name = "John";`)
- `Boolean` – True or false (`let isValid = true;`)
- `Null` – Empty or unknown value (`let value = null;`)
- `Undefined` – A variable declared but not assigned (`let x;`)
- `Symbol` – Unique identifiers (`let id = Symbol("id");`)
- `BigInt` – Large integers (`let bigNumber = 12345678901234567890n;`)

---

### **3️⃣ Value Types vs Reference Types**  
JavaScript stores data in two ways:  

✔ **Value Types (Primitive Data)**: Stored **directly in memory**.  
✔ **Reference Types (Objects, Arrays, Functions)**: Stored **by reference** in memory.  

#### **Example:**
```javascript
let a = 10;
let b = a;  // Copying the value (primitive type)
b = 20;
console.log(a); // 10 (original value remains unchanged)
```
```javascript
let obj1 = { name: "Alice" };
let obj2 = obj1;  // Reference to the same object
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (changes reflect in both)
```

---

### **4️⃣ JavaScript Operators**  
Operators allow us to perform calculations, comparisons, and logical operations.

#### **Types of JavaScript Operators:**

1️⃣ **Arithmetic Operators** – Perform math calculations.  
   ```javascript
   let sum = 10 + 5;  // Addition (+)
   let power = 2 ** 3; // Exponentiation (**)
   ```

2️⃣ **Assignment Operators** – Assign values.  
   ```javascript
   let x = 5;
   x += 3;  // Same as x = x + 3;
   ```

3️⃣ **Comparison Operators** – Compare values.  
   ```javascript
   console.log(5 == "5");   // true (loose equality)
   console.log(5 === "5");  // false (strict equality)
   ```

4️⃣ **Logical Operators** – Combine conditions.  
   ```javascript
   console.log(true && false); // false (AND)
   console.log(true || false); // true (OR)
   ```

5️⃣ **Bitwise Operators** – Work at the binary level.  
   ```javascript
   let bitwiseAnd = 5 & 1; // AND operation
   ```

6️⃣ **Ternary Operator** – Shorter `if-else`.  
   ```javascript
   let age = 20;
   let status = age >= 18 ? "Adult" : "Minor";
   ```

---

### **5️⃣ JavaScript Functions**  
Functions help break code into reusable blocks.

#### **Types of Functions:**
- **Function Declaration**  
   ```javascript
   function greet(name) {
       return "Hello, " + name + "!";
   }
   ```
- **Function Expression**  
   ```javascript
   const greet = function(name) {
       return "Hello, " + name + "!";
   };
   ```
- **Arrow Function**  
   ```javascript
   const greet = (name) => "Hello, " + name + "!";
   ```
- **IIFE (Immediately Invoked Function Expression)**  
   ```javascript
   (function() {
       console.log("I am an IIFE");
   })();
   ```
- **Generator Function**  
   ```javascript
   function* generatorFunction() {
       yield 1;
       yield 2;
       yield 3;
   }
   ```

---

### **6️⃣ JavaScript Objects**  
Objects store data in **key-value** pairs.

#### **Creating an Object:**
```javascript
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, " + this.name;
    }
};
```

---
### **7️⃣ JavaScript Arrays**  

Arrays in JavaScript are special objects used to store multiple values in a single variable. They allow efficient data manipulation and are widely used in JavaScript programming.

## Creating an Array

### 1. **Using Array Literal**
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
```

### 2. **Using the `new Array()` Constructor**
```javascript
const fruits = new Array("Apple", "Banana", "Cherry");
```

## Accessing Array Elements
```javascript
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
```

## Modifying Array Elements
```javascript
fruits[1] = "Mango";
console.log(fruits); // ["Apple", "Mango", "Cherry"]
```

## Array Properties and Methods

### 1. **Finding Array Length**
```javascript
console.log(fruits.length); // 3
```

### 2. **Adding Elements**
```javascript
fruits.push("Orange"); // Adds to the end
fruits.unshift("Grapes"); // Adds to the beginning
```

### 3. **Removing Elements**
```javascript
fruits.pop(); // Removes last element
fruits.shift(); // Removes first element
```

### 4. **Iterating Over an Array**
```javascript
fruits.forEach(fruit => console.log(fruit));
```

### 5. **Array Methods (Map, Filter, Reduce)**
```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0); // 15
```
---

### **8️⃣ [JavaScript Scope](./Scope/README.md)**  
Scope defines variable accessibility.

✔ **Global Scope** – Accessible everywhere.  
✔ **Function Scope** – Accessible only inside functions.  
✔ **Block Scope** – Accessible inside `{}`.

```javascript
let globalVar = "I am global"; // Global scope

function test() {
    let functionVar = "Inside function"; // Function scope
    if (true) {
        let blockVar = "Inside block"; // Block scope
    }
}
```

---

### **9️⃣ JavaScript Closures**  
A **closure** is a function that **remembers** variables from its outer scope even after execution.

#### **Example:**
```javascript
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
    };
}
const closureExample = outerFunction("Hello");
closureExample("World");
```

---

## **📌 Phase 2: Intermediate JavaScript**

### **🔹 Message Queue and Event Loop**
JavaScript handles async operations using the **Event Loop** and **Message Queue**.

---

### **🔹 setTimeout, setInterval, and requestAnimationFrame**
```javascript
setTimeout(() => console.log("After 2 seconds"), 2000);
setInterval(() => console.log("Every second"), 1000);
```

---

### **🔹 JavaScript Engines**
JavaScript engines like **V8** (Chrome) and **SpiderMonkey** (Firefox) convert JavaScript code to machine code.

---

### **🔹 Prototype Inheritance**
JavaScript uses **prototypes** instead of classes.

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    return "Hello, " + this.name;
};
```

---

## **📌 Phase 3: Advanced JavaScript**

### **🔹 Higher-Order Functions**
Functions that take another function as an argument.

```javascript
function doSomething(fn) {
    fn();
}
doSomething(() => console.log("Executed!"));
```

---

### **🔹 Promises and Async/Await**
Handle asynchronous operations.

```javascript
async function fetchData() {
    let response = await fetch("https://api.example.com");
    let data = await response.json();
    console.log(data);
}
```

---

### **🔹 Data Structures and Algorithms**
JavaScript supports various **data structures** like **arrays, linked lists, stacks, queues, trees, and graphs**.

---

### **🔹 Clean Code and Design Patterns**
Follow **SOLID principles** and use **Factory, Singleton, Observer, and Module patterns**.

---

# **🚀 Next Steps: Problem Solving & Projects**
✅ Solve problems on **LeetCode, CodeWars, and HackerRank**.  
✅ Build real-world projects like **To-Do List, Weather App, Shopping Cart**.  
✅ Apply concepts in **real-world applications**.

---

Would you like **detailed exercises** for each topic? Let me know how I can improve this guide for you! 🚀