# **Complete JavaScript Learning Guide** 🚀  
A structured, beginner-to-advanced JavaScript guide covering all key concepts, operators, functions, objects, arrays, scope, closures, and more.

---
> # **JavaScript Basics**

[1. Call Stack](#1️⃣-call-stack) 

[2. Primitive Types](#2️⃣-primitive-types)

[3. Value Types vs Reference Types](#3️⃣-value-types-vs-reference-types)

[4. JavaScript Operators](#4️⃣-javascript-operators)

[5. JavaScript Functions](#5️⃣-javascript-functions)

[6. JavaScript Objects](#6️⃣-javascript-objects)

[7. JavaScript Arrays](#7️⃣-javascript-arrays)

[8. JavaScript Scope](#8️⃣-javascript-scope)

[9. JavaScript Closures](#9️⃣-javascript-closures)

[10. JavaScript Conditions and Loops](#10-js-conditions-and-loops)
## **📌 Phase 1: JavaScript Basics**

### **1️⃣ Call Stack**  
The **call stack** is a mechanism JavaScript uses to manage function execution, following the **LIFO (Last In, First Out)** principle.  

<img src="images/callStack.png" alt="Javascript Call Stack Sequence" />




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

## Explanation of this program & call stack:

1. **first() is called**  
   - first() is called, so its execution context is added to the stack.  
   - **Call Stack at this moment:**  
     |first()|  
   - `"First function"` is printed.

2. **second() is called**  
   - second() is called from inside first(), so its execution context is added to the stack.  
   - **Call Stack at this moment:**  
     |first()| second()|  
   - `"Second function"` is printed.

3. **third() is called**  
   - third() is called from inside second(), so its execution context is added to the stack.  
   - **Call Stack at this moment:**  
     |first()| second()| third()|  
   - `"Third function"` is printed.

4. **Pop Execution Contexts (LIFO Principle)**  
   - The stack follows the Last In, First Out (LIFO) principle, so the functions are popped off in the reverse order they were called.  
     - **third()** completes and is removed from the stack.  
     -  **second()** completes and is removed from the stack.  
     - Finally, **first()** completes and is removed from the stack.  
   - **Call Stack after all functions are completed:**  
     |empty|




### Key Points:
- Each function call **pushes** its execution context onto the call stack.
- **first()** is added to the stack first, so it starts executing first.

- the function execute immediately after the function is added to the stack.
- Functions are **popped** from the stack immediately after they finish executing.


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

#### Creating an Array

#### 1. **Using Array Literal**
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
```

#### 2. **Using the `new Array()` Constructor**
```javascript
const fruits = new Array("Apple", "Banana", "Cherry");
```

#### Accessing Array Elements
```javascript
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
```

#### Modifying Array Elements
```javascript
fruits[1] = "Mango";
console.log(fruits); // ["Apple", "Mango", "Cherry"]
```

#### Array Properties and Methods

#### 1. **Finding Array Length**
```javascript
console.log(fruits.length); // 3
```

#### 2. **Adding Elements**
```javascript
fruits.push("Orange"); // Adds to the end
fruits.unshift("Grapes"); // Adds to the beginning
```

#### 3. **Removing Elements**
```javascript
fruits.pop(); // Removes last element
fruits.shift(); // Removes first element
```

#### 4. **Iterating Over an Array**
```javascript
fruits.forEach(fruit => console.log(fruit));
```

#### 5. **Array Methods (Map, Filter, Reduce)**
```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0); // 15
```
---

### **8️⃣ [JavaScript Scope](./scopes/README.md)**  
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

### **10 JS Conditions and Loops**
 

In JavaScript, **conditions** are used to make decisions in code, and **loops** are used to execute a block of code multiple times. Let's break down each concept step by step.

---

## History of JavaScript

JavaScript was created in **1995** by **Brendan Eich** while working at Netscape. It has since evolved significantly:

- **ES5 (2009)**: Introduced `JSON`, `strict mode`, and new array methods.
- **ES6 (2015)**: Added `let/const`, arrow functions, classes, template literals.
- **Ongoing Updates**: New features are added yearly through ECMAScript specifications.

---

## Setting Up Development Environment

### Installing Visual Studio Code

- Download and install **VS Code** from [code.visualstudio.com](https://code.visualstudio.com/).
- Install essential extensions for JavaScript development.

### Project Structure

- **Separation of Concerns**: Keep HTML, CSS, and JavaScript files separate.
- **Organizing Files**: Follow best practices for maintainability.

---

## JavaScript Core Concepts

### JavaScript Features

- **High-Level** - Abstracts low-level operations.
- **Dynamically Typed** - No need for explicit type declarations.
- **Prototype-Based** - Objects inherit properties from other objects.
- **Single-Threaded & Event-Driven** - Uses an event loop for handling tasks asynchronously.

### JavaScript Interaction

- `console.log()` - Logs messages to the console.
- `document.write()` - Writes directly to the webpage.
- `alert()` - Displays alert boxes.
- `innerHTML` - Dynamically updates webpage content.

---
### Variables and Data Types

JavaScript supports different data types:

- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Reference Types**: `object`, `array`, `function`

### Truthy and Falsy Values

Values that evaluate as `true` or `false` in boolean contexts:

- **Truthy**: Any non-zero number, non-empty string, object, array, `true`.
- **Falsy**: `0`, `""`, `null`, `undefined`, `NaN`, `false`.

### Type Conversion

JavaScript allows implicit and explicit type conversions:

- **Implicit** (Type Coercion): `"5" + 5 = "55"`
- **Explicit**: `Number("10")`, `String(100)`, `Boolean(1)`

### JavaScript Popup Boxes

JavaScript provides popup boxes to interact with users:

- `alert("Hello, world!")`: Displays an alert message.
- `confirm("Are you sure?")`: Returns `true` or `false` based on user selection.
- `prompt("Enter your name:")`: Takes user input as a string.

## JavaScript Operators

- **Arithmetic Operators** (`+`, `-`, `*`, `/`, `%`, `**`)
- **Comparison Operators** (`==`, `===`, `!=`, `<`, `>`)
- **Logical Operators** (`&&`, `||`, `!`)
- **Bitwise Operators** (`&`, `|`, `^`, `~`, `<<`, `>>`)
- **Ternary Operator** (`condition ? expr1 : expr2`)

---

## JavaScript Control Flow

- **Conditional Statements**: `if`, `else if`, `switch`
- **Loops**: `for`, `while`, `do-while`, `for...in`, `for...of`
- **Loop Control**: `break`, `continue`

---

## JavaScript Functions

- **Function Declaration & Expression**
- **Arrow Functions**
- **First-Class & Higher-Order Functions**
- **Closures and Lexical Scope**

---

## JavaScript Debugging and Error Handling

- **Chrome DevTools** for debugging.
- **`console.log()`, `console.warn()`, `console.error()`** for debugging messages.
- **Error Handling**: `try`, `catch`, `finally`, `throw`.

---

## JavaScript Data Structures

- **Arrays**: `map()`, `filter()`, `reduce()`.
- **Objects**: Key-value storage.
- **Sets and Maps**: Unique collections.

---

## JavaScript Asynchronous Programming

- **AJAX and Fetch API**
- **Promises (`then`, `catch`)**
- **Async/Await**

---

## JavaScript OOP (Object-Oriented Programming)

- **Classes and Prototypes**
- **Inheritance and Encapsulation**
- **ES6 Classes**

---

## Advanced JavaScript Concepts

- **Execution Context and Call Stack**
- **Event Loop and Callback Queue**
- **Memory Management & Garbage Collection**

---

## JavaScript Security and Best Practices

- **XSS (Cross-Site Scripting) Prevention**
- **CSRF (Cross-Site Request Forgery) Protection**
- **Using Secure Cookies and HTTPS**

---

## Conclusion and Next Steps

- **Explore frameworks like React, Vue, Angular**
- **Learn backend development with Node.js**
- **Follow best coding practices**

---

This guide provides a **comprehensive learning experience** to help you become proficient in JavaScript.

