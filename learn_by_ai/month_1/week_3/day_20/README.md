# **📚 Day 20: JavaScript Modules (`import/export`)**  

Today, we’ll cover:  
✅ **Why Use Modules?**  
✅ **Named Exports & Imports**  
✅ **Default Exports & Imports**  
✅ **Dynamic Imports (`import()`)**  

---

## **🔹 1. Why Use Modules?**  
📌 JavaScript modules allow you to **split code into multiple files** for better **organization and reusability**.  
📌 A module **exports** functions, variables, or classes, and another module **imports** them.  

✅ **Example of Using Modules in a Project**  
```txt
project/
│── index.html
│── script.js  // Main script
│── math.js    // A module file
```

---

## **🔹 2. Named Exports & Imports**  
📌 You can export multiple items from a module using `export`.  
📌 When importing, you must **use the same names** inside `{}`.  

✅ **Example: `math.js` (Module File)**
```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14159;
```

✅ **Example: `script.js` (Importing the Module)**
```js
import { add, subtract, PI } from "./math.js";

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(PI); // Output: 3.14159
```
🚀 **Important:**  
- Use **`{}`** when importing multiple named exports.  
- The names **must match exactly** as they were exported.  

✅ **Using `as` to Rename Imports**  
```js
import { add as sum, subtract as minus } from "./math.js";

console.log(sum(4, 2)); // Output: 6
console.log(minus(10, 5)); // Output: 5
```
🔹 Useful when you need to avoid name conflicts!  

---

## **🔹 3. Default Exports & Imports**  
📌 A module can have **one default export**.  
📌 When importing a default export, **you can use any name**.  

✅ **Example: `greet.js` (Default Export)**
```js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

✅ **Example: `script.js` (Importing Default Export)**
```js
import hello from "./greet.js";

console.log(hello("Alice")); // Output: Hello, Alice!
```
🚀 **Key Differences from Named Exports:**  
- **No `{}` needed** when importing.  
- You can rename it (`hello` instead of `greet`).  

---

## **🔹 4. Mixing Named and Default Exports**  
✅ **Example: `utils.js`**
```js
export const multiply = (a, b) => a * b;
export default function greet(name) {
  return `Hi, ${name}!`;
}
```
✅ **Example: `script.js`**
```js
import greet, { multiply } from "./utils.js";

console.log(greet("John")); // Output: Hi, John!
console.log(multiply(3, 4)); // Output: 12
```
🔹 **Default export is imported first, then named exports inside `{}`**.  

---

## **🔹 5. Dynamic Imports (`import()`)**  
📌 **Dynamic Imports** allow us to load modules **only when needed**, improving performance.  
📌 The `import()` function **returns a Promise**, meaning it is **asynchronous**.  

✅ **Example: Loading a Module Dynamically**  
```js
document.getElementById("load").addEventListener("click", async () => {
  const { add } = await import("./math.js");
  console.log(add(10, 5)); // Output: 15
});
```
🔹 This is **useful for large applications** to **load code only when necessary**.  

---

## **📝 Task for You**  
1️⃣ Create a module (`math.js`) with `multiply` and `divide` functions.  
2️⃣ Import these functions into `script.js` using named imports.  
3️⃣ Add a default export function called `greet()`. Import it in `script.js`.  
4️⃣ Try using `import()` to dynamically load `math.js`.  

---

🎯 **Next Lesson (Day 21): **LeetCode Problems:** Group Anagrams, Merge Intervals!**  
Let me know if you have any questions! 🚀