### **📚 Day 5: JavaScript Loops (`for`, `while`, `do-while`)**  
Welcome to Day 5! 🎉 Today, we’ll cover:  
✅ `for` loop  
✅ `while` loop  
✅ `do-while` loop  
✅ `break` and `continue`  
✅ Looping through arrays  

---

## **🔹 1. `for` Loop (Fixed Repetitions)**
Used when you **know how many times** to loop.  

📌 **Syntax:**  
```js
for (initialization; condition; increment) {
    // Code to execute
}
```

✅ **Example:**  
```js
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```
**Output:**  
```
Iteration: 1  
Iteration: 2  
Iteration: 3  
Iteration: 4  
Iteration: 5  
```

---

## **🔹 2. `while` Loop (Repeats Until False)**
Used when **you don’t know** how many times the loop will run.

📌 **Syntax:**  
```js
while (condition) {
    // Code runs while condition is true
}
```

✅ **Example:**  
```js
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}
```

---

## **🔹 3. `do-while` Loop (Runs At Least Once)**
Runs **once before checking** the condition.

📌 **Syntax:**  
```js
do {
    // Code executes at least once
} while (condition);
```

✅ **Example:**  
```js
let num = 5;
do {
    console.log("Number:", num);
    num++;
} while (num < 3);  // Runs once even though num starts at 5
```

---

## **🔹 4. `break` and `continue`**
- **`break`** → Stops the loop immediately.  
- **`continue`** → Skips the current iteration and moves to the next.

✅ **Example:**
```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;  // Stops at 3
    console.log(i);
}
// Output: 1, 2
```

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skips 3
    console.log(i);
}
// Output: 1, 2, 4, 5
```

---

## **🔹 5. Looping Through Arrays**
✅ **Using `for` loop:**
```js
let colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

✅ **Using `for...of` (Simpler for arrays):**
```js
for (let color of colors) {
    console.log(color);
}
```

✅ **Using `forEach` (Best for simple array loops):**
```js
colors.forEach(function(color) {
    console.log(color);
});
```

---

## **📝 Task for You**
1️⃣ Print numbers from `1 to 10` using a `for` loop.  
2️⃣ Print **even numbers** from `1 to 10` using a `while` loop.  
3️⃣ Use a `do-while` loop to print `"Hello"` **at least once**, even if the condition is false.  
4️⃣ Use `forEach` to print each element of an array: `["apple", "banana", "cherry"]`.  

---

🎯 **Next Lesson (Day 6): Functions (Declaration, Expression, Arrow Functions)  !**  
Let me know if you have any questions! 🚀
[**Back to Home**](../../../)