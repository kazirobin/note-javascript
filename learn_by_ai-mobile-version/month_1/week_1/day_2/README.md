### **📚 Day 2: JavaScript Variables & Data Types**  
Welcome to Day 2! 🎉 Today, we’ll cover:  
✅ What are variables?  
✅ `var`, `let`, and `const`  
✅ JavaScript data types  
✅ Type conversion  

---

## **🔹 1. What is a Variable?**  
A **variable** is a container used to store data. You can think of it as a **box** that holds a value.  

📌 **Example:**  
```js
let name = "John";  // Stores "John" in the variable 'name'
console.log(name);   // Output: John
```

---

## **🔹 2. Declaring Variables: `var`, `let`, `const`**  

### **1️⃣ `var` (Old Way - Avoid Using)**
- Used in older JavaScript versions.  
- Has **function scope**, not block scope.  
- Can be **redeclared**.  

🔹 **Example:**  
```js
var age = 25;
var age = 30;  // Allowed
console.log(age);  // Output: 30
```

### **2️⃣ `let` (Modern & Recommended)**
- Introduced in ES6.  
- Has **block scope** (only available inside `{}` where it is declared).  
- Cannot be redeclared, but can be reassigned.  

🔹 **Example:**  
```js
let score = 50;
score = 80;  // Allowed (Reassigning)
console.log(score);  // Output: 80
```

### **3️⃣ `const` (Constant - Cannot be Changed)**
- The value **cannot be changed** after assignment.  
- Must be **initialized** when declared.  

🔹 **Example:**  
```js
const pi = 3.14;
// pi = 3.1415;  ❌ Error (Cannot reassign)
console.log(pi);  // Output: 3.14
```

✅ **Use `let` for variables that change, and `const` for values that stay the same.**  

---

## **🔹 3. JavaScript Data Types**  
JavaScript has **7 primitive data types**:

### **1️⃣ String**
A sequence of characters (text). Enclosed in `""` or `''`.  
```js
let name = "Alice";
console.log(typeof name);  // Output: string
```

### **2️⃣ Number**
Represents integers and decimals.  
```js
let price = 99.99;
console.log(typeof price);  // Output: number
```

### **3️⃣ Boolean**
Only **true** or **false** values.  
```js
let isOnline = true;
console.log(typeof isOnline);  // Output: boolean
```

### **4️⃣ Undefined**
A variable declared but **not assigned a value**.  
```js
let user;
console.log(typeof user);  // Output: undefined
```

### **5️⃣ Null**
Represents an **empty** or **unknown** value.  
```js
let car = null;
console.log(typeof car);  // Output: object (weird JS bug)
```

### **6️⃣ BigInt**  
For very **large numbers**.  
```js
let bigNumber = 12345678901234567890n;
console.log(typeof bigNumber);  // Output: bigint
```

### **7️⃣ Symbol**  
A unique value, used for advanced features.  
```js
let id = Symbol("id");
console.log(typeof id);  // Output: symbol
```

---

## **🔹 4. Type Conversion**
Sometimes, you need to **convert** one data type into another.

### **1️⃣ String to Number**
```js
let str = "123";
let num = Number(str);
console.log(typeof num);  // Output: number
```

### **2️⃣ Number to String**
```js
let num = 123;
let str = String(num);
console.log(typeof str);  // Output: string
```

### **3️⃣ Boolean Conversion**
```js
console.log(Boolean(0));     // false
console.log(Boolean(1));     // true
console.log(Boolean(""));    // false
console.log(Boolean("Hi"));  // true
```

---

## **📝 Task for You**
1️⃣ Declare a variable `myName` and store your name inside it. Print it using `console.log()`.  
2️⃣ Create two variables `a` and `b`, assign them numbers, and print their sum.  
3️⃣ Try to reassign a `const` variable and see what error you get.  

---

🎯 **[Next Lesson (Day 3): JavaScript Operators](../day_3/README.md)!**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)