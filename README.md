# Complete JavaScript Guide - Basic to Advanced

Here's the updated **Table of Contents** with your additional topics included:

## Table of Contents

### **1. [Introduction to JavaScript](#introduction-to-javascript)**

- [1.1 What is a Programming Language?](#what-is-a-programming-language)
- [1.2 Why Learn JavaScript?](#why-learn-javascript)
- [1.3 Frontend and Backend Overview](#frontend-and-backend-overview)
- [1.4 Introduction to Web Technologies](#introduction-to-web-technologies)

### **2. [History of JavaScript](#history-of-javascript)**

- [2.1 The Birth of JavaScript](#21-the-birth-of-javascript)
- [2.2 Evolution of JavaScript](#22-evolution-of-javascript)
- [2.3 JavaScript in Modern Web Development](#23-javascript-in-modern-web-development)

### **3. [Setting Up Development Environment](#setting-up-development-environment)**

- [3.1 Installing Visual Studio Code](#installing-visual-studio-code)
- [3.2 JavaScript Execution in Browser and Node.js](#32-javascript-execution-in-browser-and-nodejs)
- [3.3 Setting Up a Project Structure](#33-setting-up-a-project-structure)

### **4. [JavaScript Core Concepts](#javascript-core-concepts)**

- [4.1 JavaScript Features](#javascript-features)
- [4.2 JavaScript Interaction](#javascript-interaction)
- [4.3 Variables and Data Types](#variables-and-data-types)
  - [4.3.1 `var`, `let`, `const`](#var-let-const)
  - [4.3.2 Primitive and Reference Data Types](./primitive_type/README.md)
- [4.4 Truthy and Falsy Values](#truthy-and-falsy-values)
- [4.5 Type Conversion](#type-conversion)
  - [4.5.1 Implicit and Explicit Conversion](#451-implicit-and-explicit-conversion)
- [4.6 JavaScript Popup Boxes](#javascript-popup-boxes)
- [4.7 Identifiers and Comments](#identifiers-and-comments)

### **5. [JavaScript Operators](#javascript-operators)**

- [5.1 Assignment Operators](#assignment-operators)
- [5.2 Comparison Operators](#comparison-operators)
- [5.3 Arithmetic Operators](#arithmetic-operators)
- [5.4 Bitwise Operators](#bitwise-operators)
- [5.5 Logical Operators](#logical-operators)
- [5.6 BigInt Operators](#bigint-operators)
- [5.7 String Operators](#string-operators)
- [5.8 Conditional (Ternary) Operators](#conditional-ternary-operators)
- [5.9 Comma Operators](#comma-operators)
- [5.10 Unary Operators](#unary-operators)
- [5.11 Relational Operators](#relational-operators)

### **6. [The `this` Keyword in JavaScript](#the-this-keyword-in-javascript)**

- [6.1 `this` in a Method](#this-in-a-method)
- [6.2 `this` in a Function](#this-in-a-function)
- [6.3 Using `this` Alone](#using-this-alone)
- [6.4 `this` in Event Handlers](#this-in-event-handlers)
- [6.5 `this` in Arrow Functions](#this-in-arrow-functions)
- [6.6 Explicit Binding (`call`, `apply`, `bind`)](#explicit-binding-call-apply-bind)

### **7. [JavaScript Scope](#javascript-scope)**

### **8. [JavaScript Closures](#javascript-closures)**

### **9. [JavaScript Control Flow](#javascript-control-flow)**

### **10. [JavaScript Conditions and Loops](#javascript-conditions-and-loops)**

### **11. [JavaScript Arrays](#javascript-arrays)**

### **12. [JavaScript Objects](#javascript-objects)**

### **13. [JavaScript Functions](#javascript-functions)**

### **14. [Hoisting](#hoisting)**

### **15. [High-Order Functions](#high-order-functions)**

### **16. [Callback Functions](#callback-functions)**

### **17. [Regular Expressions (RegExp)](#regexp-regular-expressions)**

### **18. [JavaScript Debugging and Error Handling](#javascript-debugging-and-error-handling)**

### **19. [JavaScript Data Structures](#javascript-data-structures)**

### **20. [Equality Comparisons](#20-equality-comparisons)**

### **21. [JavaScript Modern Features (ES6+)](#javascript-modern-features-es6)**

### **22. [JavaScript DOM and BOM](#javascript-dom-and-bom)**

### **23. [JavaScript Asynchronous Programming](#javascript-asynchronous-programming)**

### **24. [Event Loop](#event-loop)**

### **25. [JavaScript OOP (Object-Oriented Programming)](#javascript-oop-object-oriented-programming)**

### **26. [Advanced JavaScript Concepts](#advanced-javascript-concepts)**

### **27. [JavaScript Security and Best Practices](#javascript-security-and-best-practices)**

### **28. [Conclusion and Next Steps](#conclusion-and-next-steps)**

Let me know if you need any further modifications! 🚀

---

# Complete JavaScript Guide - Basic to Advanced

## Introduction to JavaScript

JavaScript is a powerful, high-level programming language primarily used for web development. It enables developers to create interactive and dynamic web pages, making it one of the most widely used programming languages today.

This guide is structured to help both beginners and experienced developers master JavaScript, covering everything from basic syntax to advanced concepts.

### What is a Programming Language?

A **programming language** is a set of instructions that tells a computer what to do. JavaScript is a **high-level, interpreted** language designed to add interactivity to web pages.

### Why Learn JavaScript?

- **Core language of the web** - Supported by all modern browsers.
- **Versatile** - Used in both frontend and backend development.
- **High demand** - Many job opportunities in web development.
- **Large community** - Extensive learning resources available.

### Frontend and Backend Overview

JavaScript is used in both **frontend** and **backend** development:

- **Frontend**: Works with HTML and CSS to build interactive web pages.
- **Backend**: Used with **Node.js** to handle server-side logic.

### Introduction to Web Technologies

- **HTML (HyperText Markup Language)**: Defines webpage structure.
- **CSS (Cascading Style Sheets)**: Styles webpages.
- **JavaScript**: Adds interactivity and dynamic content.
- **APIs (Application Programming Interfaces)**: Enable communication between web services.

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

### **var let const**

In JavaScript, **`var`**, **`let`**, and **`const`** are used to declare variables. However, they have key differences in **scope**, **hoisting**, and **mutability**.

---

### **1️⃣ `var` (Old Way of Declaring Variables)**

- **Function-scoped** (Not block-scoped)
- **Can be re-declared and updated**
- **Gets hoisted with `undefined`**
- **Not recommended** (due to issues with scope)

### **Example: `var` is Function-Scoped**

```javascript
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (accessible outside if-block)
}
example();
```

🔹 **Problem:** `var` is accessible **outside the block** where it was defined.

---

### **2️⃣ `let` (Preferred for Mutable Variables)**

- **Block-scoped** (Only accessible inside `{}`)
- **Can be updated but not re-declared in the same scope**
- **Hoisted but not initialized (`ReferenceError` if accessed before declaration)**

### **Example: `let` is Block-Scoped**

```javascript
function example() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ❌ Error: y is not defined
}
example();
```

🔹 **Solution:** `let` is **only available within its block**.

### **Example: `let` Can Be Updated**

```javascript
let count = 1;
count = 2; // ✅ Allowed
console.log(count); // 2
```

---

### **3️⃣ `const` (For Constants - Cannot be Changed)**

- **Block-scoped** (same as `let`)
- **Cannot be re-assigned**
- **Must be initialized at declaration**

### **Example: `const` Cannot Be Updated**

```javascript
const PI = 3.14;
PI = 3.1416; // ❌ Error: Assignment to constant variable
```

🔹 **Use `const` for values that should never change**.

### **Example: `const` with Objects and Arrays**

```javascript
const person = { name: "Alice" };
person.name = "Bob"; // ✅ Allowed (Object properties can change)

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed (Array elements can change)
```

🔹 **You cannot reassign `const`, but you can modify objects and arrays inside it.**

---

### **Key Differences Summary**

| Feature        | `var`                                   | `let`                        | `const`                      |
| -------------- | --------------------------------------- | ---------------------------- | ---------------------------- |
| Scope          | Function-scoped                         | Block-scoped                 | Block-scoped                 |
| Re-declaration | ✅ Allowed                              | ❌ Not Allowed               | ❌ Not Allowed               |
| Hoisting       | ✅ Hoisted (Initialized as `undefined`) | ✅ Hoisted (Not initialized) | ✅ Hoisted (Not initialized) |
| Re-assignment  | ✅ Allowed                              | ✅ Allowed                   | ❌ Not Allowed               |
| Best Use Case  | Avoid using                             | When variable value changes  | When value is constant       |

---

### **When to Use `var`, `let`, and `const`?**

✅ **Use `const`** whenever possible (for values that don’t change).  
✅ **Use `let`** when a variable’s value needs to change.  
❌ **Avoid `var`** because of its function-scoping and hoisting issues.

---

### **Example Combining `var`, `let`, and `const`**

```javascript
function test() {
  var a = 10; // Function-scoped
  let b = 20; // Block-scoped
  const c = 30; // Constant

  if (true) {
    var a = 40; // ✅ Allowed (but overwrites previous value)
    let b = 50; // ✅ Allowed (new block scope)
    // c = 60;  ❌ Error (Cannot reassign a `const`)
  }

  console.log(a); // 40 (var is function-scoped)
  console.log(b); // 20 (let is block-scoped)
}

test();
```

🔹 **Best Practice:** Use `const` by default, `let` when necessary, and avoid `var`. 🚀

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

---

### **identifiers and comments**

#### **Identifiers in JavaScript**

An **identifier** is the name given to variables, functions, classes, or other entities in JavaScript. Identifiers must follow certain rules:

#### **Rules for Identifiers**

1. **Can include** letters (`A-Z`, `a-z`), digits (`0-9`), underscore (`_`), and dollar sign (`$`).
2. **Cannot start** with a digit (`0-9`).
3. **Case-sensitive** (`myVar` and `myvar` are different).
4. **Cannot be a reserved keyword** (e.g., `var`, `function`, `return`).

##### **Valid Identifiers:**

```javascript
let myVariable;
let _privateVar;
let $dollarSign;
let user123;
```

##### **Invalid Identifiers:**

```javascript
let 123user; // ❌ Cannot start with a number
let let;     // ❌ "let" is a reserved keyword
let my-var;  // ❌ Hyphens are not allowed
```

---

#### **Comments in JavaScript**

Comments are used to explain code and make it more readable. JavaScript ignores comments during execution.

##### **Types of Comments**

1. **Single-line comments**: Use `//` to comment a single line.

   ```javascript
   // This is a single-line comment
   let name = "John"; // Variable storing a name
   ```

2. **Multi-line comments**: Use `/* ... */` for multiple lines.
   ```javascript
   /*
   This is a multi-line comment.
   It can span multiple lines.
   */
   let age = 25;
   ```

---

#### **Why Use Comments?**

- To **document** code for better understanding.
- To **debug** by temporarily disabling a piece of code.
- To **collaborate** effectively in a team.

Here’s a **simple introduction** for each section while keeping the links unchanged:

---

## **JavaScript Operators**

Operators are special symbols or keywords that perform operations on values and variables. JavaScript provides different types of operators to handle calculations, comparisons, logical expressions, and more.

### **Assignment Operators**

Assignment operators are used to assign values to variables. The most common one is `=`. Other assignment operators include `+=`, `-=`, `*=`, and `/=`.

### **Comparison Operators**

Comparison operators compare two values and return a boolean result (`true` or `false`). Examples include `==`, `===`, `!=`, `<`, `>`, `<=`, and `>=`.

### **Arithmetic Operators**

Arithmetic operators perform mathematical calculations, such as addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).

### **Bitwise Operators**

Bitwise operators perform bit-level operations on numbers. Examples include `&` (AND), `|` (OR), `^` (XOR), and `<<` (left shift).

### **Logical Operators**

Logical operators are used to perform logical operations. Common operators include `&&` (AND), `||` (OR), and `!` (NOT).

### **BigInt Operators**

BigInt is a special type of number that allows working with very large integers. It supports arithmetic operations like addition, subtraction, and multiplication.

### **String Operators**

String operators include concatenation (`+`) and template literals using backticks (`` ` ``).

### **Conditional (Ternary) Operators**

The conditional or ternary operator (`condition ? value1 : value2`) is a shorthand for an `if...else` statement.

### **Comma Operators**

The comma operator (`,`) allows multiple expressions to be evaluated in a single statement.

### **Unary Operators**

Unary operators work on a single operand. Examples include `+`, `-`, `typeof`, and `delete`.

### **Relational Operators**

Relational operators determine relationships between values, such as membership (`in`) and object property checking (`instanceof`).

---

## **The `this` Keyword in JavaScript**

The `this` keyword refers to the object that is currently executing the function. Its value depends on how and where the function is called.

### **`this` in a Method**

When used inside an object method, `this` refers to the object itself.

### **`this` in a Function**

In a regular function, `this` refers to the global object (`window` in browsers, `global` in Node.js).

### **Using `this` Alone**

When `this` is used alone (outside a function), it usually refers to the global object.

### **`this` in Event Handlers**

In event handlers, `this` refers to the element that received the event.

### **`this` in Arrow Functions**

Arrow functions do not have their own `this`. Instead, they inherit `this` from their enclosing scope.

### **Explicit Binding (`call`, `apply`, `bind`)**

The `call`, `apply`, and `bind` methods allow explicitly setting the value of `this`.

---

---

## JavaScript Scope

### What is Scope?

Scope in JavaScript defines the **accessibility** or **visibility** of variables, functions, and objects in different parts of the code. It determines **where** variables and functions can be used within a program.

### Types of Scope in JavaScript

1. **Global Scope**

   - A variable declared outside of any function or block has global scope.
   - It can be accessed from anywhere in the script.
   - Example:

     ```javascript
     var globalVar = "I am global";

     function showGlobal() {
       console.log(globalVar); // Accessible
     }

     showGlobal();
     console.log(globalVar); // Accessible
     ```

2. **Function Scope (Local Scope)**

   - Variables declared inside a function are **local** to that function and cannot be accessed outside.
   - Example:

     ```javascript
     function myFunction() {
       var localVar = "I am local";
       console.log(localVar); // Accessible
     }

     myFunction();
     console.log(localVar); // Error: localVar is not defined
     ```

3. **Block Scope (ES6: `let` and `const`)**

   - Introduced in ES6 with `let` and `const`.
   - Variables declared inside `{}` (block) cannot be accessed outside.
   - Example:

     ```javascript
     if (true) {
       let blockVar = "I exist only inside this block";
       console.log(blockVar); // Accessible
     }

     console.log(blockVar); // Error: blockVar is not defined
     ```

4. **Lexical Scope (Static Scope)**

   - Inner functions can access variables of their parent functions.
   - Example:

     ```javascript
     function outerFunction() {
       let outerVar = "I am from outer";

       function innerFunction() {
         console.log(outerVar); // Accessible due to lexical scope
       }

       innerFunction();
     }

     outerFunction();
     ```

---

## JavaScript Closures

### What is a Closure?

A **closure** is a function that **remembers** the scope in which it was created, even if it is executed outside that scope. Closures allow functions to "remember" variables from their outer function.

### How Closures Work

Closures occur when:

1. A function is defined inside another function.
2. The inner function **remembers** the variables of the outer function.
3. The outer function **returns** the inner function.

### Example of a Closure

```javascript
function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count++;
    console.log(count);
  };
}

const counter = outerFunction();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```

### Explanation

- `outerFunction` declares a variable `count`.
- It returns `innerFunction`, which increases `count` and logs it.
- Even though `outerFunction` has finished execution, `innerFunction` **remembers** `count` because of the closure.

### Why Use Closures?

1. **Data Encapsulation** – Variables remain **private** inside the closure.
2. **Persistent State** – Useful for counters, event handlers, and maintaining data across function calls.
3. **Functional Programming** – Closures enable higher-order functions and callbacks.

---

### Key Differences Between Scope and Closures

| Feature       | Scope                                  | Closures                                    |
| ------------- | -------------------------------------- | ------------------------------------------- |
| Definition    | Defines the accessibility of variables | A function that remembers its lexical scope |
| Accessibility | Global, Function, Block                | Access to outer function's variables        |
| Persistence   | Variables are lost once function exits | Variables persist in memory                 |
| Usage         | Determines where variables can be used | Helps maintain state across function calls  |

Would you like more real-world examples of closures? 🚀

---

## JavaScript Control Flow

- **Conditional Statements**: `if`, `else if`, `switch`
- **Loops**: `for`, `while`, `do-while`, `for...in`, `for...of`
- **Loop Control**: `break`, `continue`

---

## JavaScript Conditions and Loops

### **JavaScript Conditions**

Conditional statements allow a program to make decisions based on **true or false** values.

### **Types of Conditional Statements:**

1. **`if` Statement** – Executes a block of code if the condition is `true`.

   ```javascript
   let age = 18;
   if (age >= 18) {
     console.log("You are an adult.");
   }
   ```

2. **`if...else` Statement** – Runs different code based on whether the condition is `true` or `false`.

   ```javascript
   let num = 10;
   if (num > 0) {
     console.log("Positive number");
   } else {
     console.log("Negative number");
   }
   ```

3. **`if...else if...else` Statement** – Used for multiple conditions.

   ```javascript
   let score = 85;
   if (score >= 90) {
     console.log("Grade: A");
   } else if (score >= 80) {
     console.log("Grade: B");
   } else {
     console.log("Grade: C");
   }
   ```

4. **`switch` Statement** – Used for multiple fixed cases.
   ```javascript
   let day = "Monday";
   switch (day) {
     case "Monday":
       console.log("Start of the week!");
       break;
     case "Friday":
       console.log("Weekend is coming!");
       break;
     default:
       console.log("A regular day.");
   }
   ```

---

### **JavaScript Loops**

Loops are used to repeat a block of code multiple times.

### **Types of Loops:**

1. **`for` Loop** – Used when the number of iterations is known.

   ```javascript
   for (let i = 1; i <= 5; i++) {
     console.log("Iteration:", i);
   }
   ```

2. **`while` Loop** – Executes as long as the condition is `true`.

   ```javascript
   let count = 1;
   while (count <= 5) {
     console.log("Count:", count);
     count++;
   }
   ```

3. **`do...while` Loop** – Executes at least **once**, even if the condition is `false`.

   ```javascript
   let num = 10;
   do {
     console.log("Number:", num);
     num++;
   } while (num < 5);
   // Runs once even though condition is false.
   ```

4. **`for...in` Loop** – Loops through the properties of an object.

   ```javascript
   let person = { name: "Alice", age: 25, city: "New York" };
   for (let key in person) {
     console.log(key, ":", person[key]);
   }
   ```

5. **`for...of` Loop** – Loops through values of an iterable (like arrays).
   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   for (let fruit of fruits) {
     console.log(fruit);
   }
   ```

---

## JavaScript Arrays

An **array** is a data structure used to store multiple values in a single variable.

### **Declaring an Array**

```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
```

### **Accessing Elements**

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
```

### **Modifying Elements**

```javascript
fruits[2] = "Cherry";
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

### **Array Methods**

| Method       | Description                      | Example                                     |
| ------------ | -------------------------------- | ------------------------------------------- |
| `push()`     | Adds element to the end          | `fruits.push("Grapes");`                    |
| `pop()`      | Removes last element             | `fruits.pop();`                             |
| `shift()`    | Removes first element            | `fruits.shift();`                           |
| `unshift()`  | Adds element to the beginning    | `fruits.unshift("Orange");`                 |
| `splice()`   | Adds/removes elements            | `fruits.splice(1, 1, "Peach");`             |
| `slice()`    | Extracts part of an array        | `let newArr = fruits.slice(0, 2);`          |
| `indexOf()`  | Finds index of an element        | `fruits.indexOf("Banana");`                 |
| `includes()` | Checks if element exists         | `fruits.includes("Mango");`                 |
| `join()`     | Converts array to string         | `fruits.join(", ");`                        |
| `map()`      | Applies function to all elements | `fruits.map(fruit => fruit.toUpperCase());` |

---

## JavaScript Objects

An **object** is a collection of **key-value pairs** used to store structured data.

### **Creating an Object**

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person);
```

### **Accessing Object Properties**

```javascript
console.log(person.name); // John
console.log(person["age"]); // 30
```

### **Modifying Properties**

```javascript
person.age = 35;
person["city"] = "Los Angeles";
console.log(person);
```

### **Adding New Properties**

```javascript
person.country = "USA";
console.log(person);
```

### **Deleting Properties**

```javascript
delete person.city;
console.log(person);
```

### **Looping Through an Object**

```javascript
for (let key in person) {
  console.log(key, ":", person[key]);
}
```

### **Object Methods**

Objects can have functions as values (methods).

```javascript
let car = {
  brand: "Tesla",
  model: "Model X",
  start: function () {
    console.log("Car is starting...");
  },
};

car.start();
```

---

### **Difference Between Arrays and Objects**

| Feature      | Arrays                          | Objects                        |
| ------------ | ------------------------------- | ------------------------------ |
| Data Storage | Stores ordered list of elements | Stores key-value pairs         |
| Access       | Accessed by index (`arr[0]`)    | Accessed by keys (`obj.key`)   |
| Iteration    | `for`, `forEach()`, `map()`     | `for...in` loop                |
| Use Case     | When order matters              | When data has named properties |

---

### **Summary:**

- **Conditions** (`if`, `switch`) help make decisions.
- **Loops** (`for`, `while`) repeat actions.
- **Arrays** store ordered data and have useful built-in methods.
- **Objects** store structured data with properties and methods.

Would you like more real-world examples for any of these? 🚀

## JavaScript Functions

### **What is a Function?**

A function in JavaScript is a **block of reusable code** that performs a specific task. It helps **avoid repetition** and makes the code more **organized**.

### **Declaring a Function**

```javascript
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!
```

### **Function with Parameters**

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!
```

### **Function with Return Value**

```javascript
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum); // Output: 15
```

### **Arrow Function (ES6)**

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12
```

### **Function Expressions**

```javascript
const sayHello = function () {
  console.log("Hello!");
};
sayHello(); // Output: Hello!
```

---

## Hoisting

### **What is Hoisting?**

Hoisting is a JavaScript mechanism where **variable and function declarations** are moved to the top of their scope **before execution**.

### **Function Hoisting**

JavaScript moves function declarations to the top, so we can call a function before declaring it.

```javascript
sayHello();

function sayHello() {
  console.log("Hello!");
}
// Output: Hello!
```

### **Variable Hoisting**

- **`var` is hoisted, but not initialized:**

  ```javascript
  console.log(x); // Output: undefined
  var x = 5;
  ```

- **`let` and `const` are not initialized before declaration:**
  ```javascript
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 10;
  ```

---

## Higher-Order Functions

### **What is a Higher-Order Function?**

A **higher-order function** is a function that:

1. **Takes another function as an argument** (callback function).
2. **Returns a function** as its result.

### **Example: Using a Function as an Argument**

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreeting() {
  console.log("How are you?");
}

greet("Alice", afterGreeting);
/*
Output:
Hello, Alice
How are you?
*/
```

### **Example: Returning a Function**

```javascript
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

### **Common Higher-Order Functions in JavaScript**

| Method     | Description                         | Example                                    |
| ---------- | ----------------------------------- | ------------------------------------------ |
| `map()`    | Transforms each array element       | `[1, 2, 3].map(x => x * 2)`                |
| `filter()` | Filters elements based on condition | `[1, 2, 3, 4].filter(x => x > 2)`          |
| `reduce()` | Reduces an array to a single value  | `[1, 2, 3].reduce((sum, x) => sum + x, 0)` |

---

## Callback Functions

### **What is a Callback Function?**

A **callback function** is a function **passed as an argument** to another function and executed later.

### **Example of a Callback Function**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data loaded");
    callback();
  }, 2000);
}

function showMessage() {
  console.log("Processing data...");
}

fetchData(showMessage);
/*
Output:
(Data loads after 2 seconds)
Data loaded
Processing data...
*/
```

### **Why Use Callbacks?**

- Used in **asynchronous programming** (e.g., API requests).
- Helps execute functions **in sequence**.

---

## RegExp (Regular Expressions)

### **What is RegExp?**

Regular Expressions (**RegExp**) are patterns used to match **strings** in JavaScript.

### **Creating a Regular Expression**

- **Using `/pattern/` syntax:**
  ```javascript
  let regex = /hello/;
  ```
- **Using `RegExp` constructor:**
  ```javascript
  let regex = new RegExp("hello");
  ```

### **Common RegExp Methods**

| Method      | Description                             | Example                                |
| ----------- | --------------------------------------- | -------------------------------------- |
| `test()`    | Checks if pattern exists (`true/false`) | `/hello/.test("hello world") // true`  |
| `match()`   | Returns matched parts of a string       | `"hello".match(/l/g) // ["l", "l"]`    |
| `replace()` | Replaces matched string                 | `"hello".replace(/h/, "H") // "Hello"` |

### **Example: Test for a Word in a String**

```javascript
let sentence = "JavaScript is awesome!";
let pattern = /awesome/;
console.log(pattern.test(sentence)); // Output: true
```

### **Example: Extract Numbers from a String**

```javascript
let str = "Order #12345";
let numbers = str.match(/\d+/);
console.log(numbers); // Output: ["12345"]
```

### **Example: Replace Words in a String**

```javascript
let message = "Hello, World!";
let newMessage = message.replace(/World/, "JavaScript");
console.log(newMessage); // Output: Hello, JavaScript!
```

### **Common RegExp Patterns**

| Pattern | Description                                 | Example                                |
| ------- | ------------------------------------------- | -------------------------------------- |
| `\d`    | Matches any digit (0-9)                     | `/\d+/.test("123") // true`            |
| `\s`    | Matches whitespace                          | `/\s+/.test("Hello World") // true`    |
| `\w`    | Matches word characters (a-z, A-Z, 0-9, \_) | `/\w+/.test("hello_123") // true`      |
| `^`     | Matches start of string                     | `/^hello/.test("hello world") // true` |
| `$`     | Matches end of string                       | `/world$/.test("hello world") // true` |

---

**Summary**

- **Functions** allow reusability of code.
- **Hoisting** moves function and variable declarations to the top before execution.
- **Higher-Order Functions** accept or return functions.
- **Callback Functions** execute inside another function, useful for async programming.
- **RegExp** is used for pattern matching in strings.

---

## JavaScript Debugging and Error Handling

### **What is Debugging?**

Debugging is the process of **finding and fixing errors** (bugs) in your JavaScript code. JavaScript provides **console tools, breakpoints, and error handling mechanisms** to help with debugging.

### **1. Using `console.log()`**

The simplest way to debug is by printing messages to the console.

```javascript
let x = 10;
console.log("Value of x:", x);
```

### **2. Using `console.error()` and `console.warn()`**

```javascript
console.error("This is an error message!");
console.warn("This is a warning!");
```

### **3. Using `debugger` Statement**

The `debugger` keyword stops execution at that point if Developer Tools are open.

```javascript
let a = 5;
debugger; // Stops execution here
let b = 10;
console.log(a + b);
```

### **4. Handling Errors with `try...catch`**

```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error);
}
```

### **5. Throwing Custom Errors**

```javascript
function checkNumber(num) {
  if (num < 0) {
    throw new Error("Number must be positive");
  }
  return num;
}

try {
  console.log(checkNumber(-5));
} catch (error) {
  console.error(error.message);
}
```

---

## JavaScript Data Structures

### **1. Arrays (Ordered Collection)**

```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple
```

### **2. Objects (Key-Value Pairs)**

```javascript
let person = { name: "Alice", age: 25 };
console.log(person.name); // Output: Alice
```

### **3. Sets (Unique Values Collection)**

```javascript
let uniqueNumbers = new Set([1, 2, 2, 3, 4]);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4 }
```

### **4. Maps (Key-Value Pair with any Key Type)**

```javascript
let map = new Map();
map.set("name", "Alice");
map.set("age", 25);
console.log(map.get("name")); // Output: Alice
```

---

## JavaScript Modern Features (ES6+)

| Feature           | Description                        | Example                               |
| ----------------- | ---------------------------------- | ------------------------------------- |
| `let` & `const`   | Block-scoped variables             | `let x = 5; const y = 10;`            |
| Arrow Functions   | Short function syntax              | `const add = (a, b) => a + b;`        |
| Template Literals | String interpolation               | `Hello, ${name}!`                     |
| Destructuring     | Extract values from arrays/objects | `let {name, age} = person;`           |
| Spread Operator   | Expands iterable values            | `let arr2 = [...arr1, 4, 5];`         |
| Promises          | Handle async operations            | `fetch(url).then(res => res.json());` |

---

## JavaScript DOM and BOM

### **What is the DOM?**

The **Document Object Model (DOM)** represents the structure of a web page as a tree.

### **Manipulating DOM Elements**

```javascript
document.getElementById("demo").innerHTML = "Hello, World!";
document.querySelector("p").style.color = "red";
```

### **Adding Event Listeners**

```javascript
document.getElementById("btn").addEventListener("click", function () {
  alert("Button Clicked!");
});
```

### **What is the BOM?**

The **Browser Object Model (BOM)** allows JavaScript to interact with the browser (e.g., `window`, `navigator`, `location`).

### **Example: Redirecting with `location`**

```javascript
window.location.href = "https://example.com";
```

---

## JavaScript Asynchronous Programming

### **1. Callbacks (Old Way)**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Processing Data...");
});
```

### **2. Promises (Modern Approach)**

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data Loaded"), 2000);
});

promise.then((data) => console.log(data));
```

### **3. Async/Await (Best Practice)**

```javascript
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}

fetchData();
```

---

### **Conclusion**

- **Debugging** helps find and fix errors in JavaScript.
- **Data Structures** like arrays, objects, maps, and sets store data efficiently.
- **ES6+ Features** improve JavaScript with modern syntax.
- **DOM/BOM** allows interaction with web pages and browsers.
- **Asynchronous Programming** prevents blocking and improves performance.

---

## **Event Loop**

### **What is the JavaScript Event Loop?**

The **Event Loop** is a crucial concept in JavaScript that helps handle asynchronous tasks efficiently. Since JavaScript is **single-threaded** (it can execute only one task at a time), the Event Loop allows JavaScript to handle multiple tasks (like network requests, timers, and user interactions) **without blocking the execution of the main program**.

---

### **Why Do We Need the Event Loop?**

JavaScript runs in a **single thread**, meaning it can execute **only one piece of code at a time** in the **Call Stack**. But what happens when an operation takes too long, like:

- Fetching data from an API
- Reading a file
- Waiting for a user action (click, keypress)
- Executing `setTimeout()`

If JavaScript had to **wait** for these operations, your website would **freeze** and become unresponsive.

Instead of waiting, **JavaScript offloads these tasks to the browser (Web APIs) and continues executing the next code**. Once the async task completes, the **Event Loop** ensures that the result is processed **when JavaScript is ready**.

---

### **How the Event Loop Works?**

The Event Loop works with three main components:

### **1️⃣ Call Stack (Execution Stack)**

- Where JavaScript executes **synchronous** code (line by line).
- Each function call is **pushed** onto the stack when invoked and **popped** off when completed.

### **2️⃣ Web APIs (Browser APIs)**

- Handles **asynchronous tasks** like:
  - `setTimeout()`
  - `fetch()` (API calls)
  - Event listeners (`click`, `keydown`)
- These tasks are **sent to the background** so the main thread **doesn’t get blocked**.

### **3️⃣ Task Queues**

- **Microtask Queue** (High Priority) → Handles Promises, `MutationObserver()`.
- **Callback Queue** (Low Priority) → Handles `setTimeout()`, `setInterval()`, `fetch()`, event listeners.

👉 **The Event Loop continuously checks if the Call Stack is empty. If empty, it moves pending tasks from the queues to be executed.**

---

### **Example to Understand the Event Loop**

```javascript
console.log("1️⃣ Start");

setTimeout(() => {
  console.log("4️⃣ setTimeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3️⃣ Promise Resolved");
});

console.log("2️⃣ End");
```

### **Output:**

```
1️⃣ Start
2️⃣ End
3️⃣ Promise Resolved
4️⃣ setTimeout Callback
```

### **Why This Happens?**

1. `"Start"` is logged **immediately** (synchronous).
2. `"End"` is logged **immediately** (synchronous).
3. The **Promise** goes to the **Microtask Queue**, which has higher priority, so `"Promise Resolved"` is logged before `setTimeout`.
4. The `setTimeout()` callback goes to the **Callback Queue** and runs **only after** the Microtask Queue is cleared.

🔹 **Key Takeaway:** **Promises run before `setTimeout` callbacks because the Microtask Queue has higher priority than the Callback Queue.**

---

### **Where is the Event Loop Used?**

The Event Loop is useful for **handling non-blocking code** in JavaScript. You will use it in:  
✅ **Fetching API data** (`fetch()`, `XMLHttpRequest()`)  
✅ **Executing delayed functions** (`setTimeout()`, `setInterval()`)  
✅ **Handling user interactions** (`click`, `scroll`, `keyup`)  
✅ **Processing heavy computations efficiently** (`Web Workers`, `setImmediate()`)

---

### **Summary**

- JavaScript is **single-threaded**, meaning it can only do **one task at a time**.
- The **Event Loop** allows JavaScript to **handle async tasks without blocking the main thread**.
- **Microtask Queue (Promises)** runs **before** the **Callback Queue (`setTimeout`, `setInterval`)**.
- The Event Loop ensures smooth execution of JavaScript programs, making the web responsive and efficient. 🚀

💡 **Now try modifying the example by adding multiple `setTimeout()` and `Promise.resolve()` calls to see how the Event Loop prioritizes them!**

---

## JavaScript OOP (Object-Oriented Programming)

### **What is OOP?**

Object-Oriented Programming (OOP) is a programming paradigm that organizes code into **objects**, which contain **properties** (data) and **methods** (functions).

### **Key OOP Concepts in JavaScript**

1. **Objects** – Collections of properties and methods.
2. **Classes** – Blueprints for creating objects.
3. **Constructor Function** – Initializes objects.
4. **Prototype Inheritance** – Allows objects to inherit properties.
5. **Encapsulation** – Hides data within objects.
6. **Polymorphism** – Methods behave differently based on the object.

### **1. Creating Objects in JavaScript**

#### **Using Object Literals**

```javascript
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // Output: Hello, my name is Alice
```

#### **Using Constructor Functions**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new Person("Bob", 30);
console.log(user1.name); // Output: Bob
```

### **2. JavaScript Classes (ES6)**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const user2 = new Person("Charlie", 28);
user2.greet(); // Output: Hello, my name is Charlie
```

### **3. Inheritance in JavaScript**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Buddy");
myDog.speak(); // Output: Buddy barks.
```

---

## Advanced JavaScript Concepts

### **1. Closures**

A closure is a function that retains access to its **outer function's variables**, even after the outer function has finished executing.

```javascript
function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
  };
}
const newFunc = outerFunction("Hello");
newFunc("World"); // Output: Outer: Hello, Inner: World
```

### **2. The `this` Keyword**

- **Refers to the object calling the method.**
- **Different behavior in arrow functions vs regular functions.**

```javascript
const obj = {
  name: "Alice",
  sayHello() {
    console.log(this.name);
  },
};
obj.sayHello(); // Output: Alice
```

### **3. Event Loop & Asynchronous JavaScript**

JavaScript uses an **event loop** to handle asynchronous tasks like API calls.

```javascript
console.log("Start");
setTimeout(() => console.log("Async task"), 2000);
console.log("End");
// Output: Start, End, Async task (after 2 sec)
```

### **4. Prototypes & Prototype Inheritance**

JavaScript uses **prototypes** for inheritance instead of traditional class-based inheritance.

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};
const dog = new Animal("Buddy");
dog.speak(); // Output: Buddy makes a noise.
```

---

## JavaScript Security and Best Practices

### **1. Avoid Using `eval()`**

The `eval()` function executes any string as JavaScript code, which can be exploited by attackers.

```javascript
// Bad practice
eval("alert('This is dangerous!')");
```

### **2. Use `Strict Mode`**

Strict mode prevents accidental mistakes and enhances security.

```javascript
"use strict";
x = 10; // ReferenceError: x is not defined
```

### **3. Avoid Global Variables**

Global variables can lead to unexpected behavior. Instead, use function scope or `let/const`.

```javascript
function example() {
  let localVar = "I am safe!";
}
console.log(localVar); // ReferenceError: localVar is not defined
```

### **4. Secure User Input**

Sanitize and validate user input to prevent attacks like **XSS (Cross-Site Scripting)** and **SQL Injection**.

```javascript
const userInput = "<script>alert('Hacked!')</script>";
const sanitizedInput = userInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");
console.log(sanitizedInput); // Safe output
```

### **5. Use HTTPS & Secure Authentication**

- Always use **HTTPS** for secure data transmission.
- Implement **OAuth or JWT** for authentication.

---

## Conclusion and Next Steps

### **Key Takeaways**

- JavaScript is a **powerful, versatile language** used for web development.
- Understanding **OOP, asynchronous programming, and security** is crucial for professional development.
- **Modern JavaScript (ES6+)** introduces useful features like **classes, arrow functions, and promises**.
- **Best practices** like using `strict mode`, avoiding `eval()`, and securing user input are essential.

### **Next Steps**

✅ **Practice coding** by building projects (e.g., to-do apps, calculators, interactive web pages).  
✅ **Learn JavaScript frameworks** like **React, Vue, or Angular**.  
✅ **Explore backend development** using **Node.js**.  
✅ **Keep improving** by solving problems on **LeetCode, CodeWars, and HackerRank**.

🚀 **Happy Coding!** Would you like project suggestions or additional exercises? 😃
