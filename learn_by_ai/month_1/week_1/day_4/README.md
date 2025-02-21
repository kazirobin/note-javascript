### **📚 Day 4: JavaScript Conditionals (`if-else`, `switch`)**  
Welcome to Day 4! 🎉 Today, we’ll cover:  
✅ `if`, `else if`, `else` statements  
✅ `switch` statements  
✅ Truthy & Falsy values  
✅ Nested conditions & shorthand  

---

## **🔹 1. `if`, `else if`, `else` Statements**  
Conditional statements allow you to execute code **only if a condition is true**.  

📌 **Syntax:**  
```js
if (condition) {
    // Code runs if condition is true
} else if (anotherCondition) {
    // Code runs if anotherCondition is true
} else {
    // Code runs if none of the above are true
}
```

✅ **Example:**
```js
let age = 18;

if (age > 18) {
    console.log("You are an adult.");
} else if (age === 18) {
    console.log("You just became an adult!");
} else {
    console.log("You are a minor.");
}
```
**Output:** `"You just became an adult!"`

---

## **🔹 2. Comparison & Logical Operators in Conditions**
| Operator | Description | Example |
|----------|------------|---------|
| `>` | Greater than | `10 > 5` (true) |
| `<` | Less than | `5 < 10` (true) |
| `>=` | Greater than or equal to | `10 >= 10` (true) |
| `<=` | Less than or equal to | `5 <= 10` (true) |
| `==` | Equal (loose) | `5 == "5"` (true) |
| `===` | Strict equal | `5 === "5"` (false) |
| `&&` | AND (both true) | `(5 > 2) && (10 > 5)` (true) |
| `||` | OR (one true) | `(5 > 2) || (10 < 5)` (true) |
| `!` | NOT (reverses) | `!(5 > 2)` (false) |

---

## **🔹 3. Truthy & Falsy Values**
📌 **Falsy Values (Considered as `false` in conditions):**  
```js
false, 0, "", null, undefined, NaN
```
📌 **Truthy Values (Everything else, including non-empty strings & numbers):**  
```js
true, 1, "hello", [], {}, function() {}
```
✅ **Example:**
```js
if ("Hello") {
    console.log("This is truthy!");  // Runs
}
if (0) {
    console.log("This won't run");   // Won't run (0 is falsy)
}
```

---

## **🔹 4. `switch` Statement**
Used for **multiple cases** instead of multiple `if-else` statements.

📌 **Example:**
```js
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("You chose a banana.");
        break;
    case "apple":
        console.log("You chose an apple.");
        break;
    case "orange":
        console.log("You chose an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
```
**Output:** `"You chose an apple."`  
✅ **Always use `break` to stop execution after a match.**

---

## **🔹 5. Ternary Operator (Shorthand `if-else`)**
📌 **Syntax:**
```js
condition ? "If true" : "If false";
```
✅ **Example:**
```js
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);  // Output: "Adult"
```
✔ **Best for simple conditions!**

---

## **📝 Task for You**
1️⃣ Write a program to check if a number is **positive, negative, or zero** using `if-else`.  
2️⃣ Use a `switch` statement to print the **day of the week** based on a number (1 = Monday, 2 = Tuesday, etc.).  
3️⃣ Convert a regular `if-else` condition into a ternary operator.  

---

🎯 **[Next Lesson (Day 5): JavaScript Loops (`for`, `while`, `do-while`)](../day_5/)!**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)