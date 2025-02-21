# **📚 Day 26: Error Handling in JavaScript (`try...catch`)**  

Today, we’ll cover:  
✅ **What is Error Handling?**  
✅ **Using `try...catch` to Handle Errors**  
✅ **Handling Synchronous vs. Asynchronous Errors**  
✅ **Custom Errors with `throw`**  
✅ **Using `finally` for Cleanup**  

---

## **🔹 1. Why Use Error Handling?**  
📌 Errors can occur **at runtime** due to invalid data, failed network requests, or logical mistakes.  
📌 `try...catch` helps **prevent crashes** by gracefully handling these errors.  

✅ **Basic Example:**  
```js
try {
  let num = 10 / 0;
  console.log(num); // Output: Infinity (No error)
} catch (error) {
  console.error("Something went wrong:", error);
}
```
🔹 If no error occurs, `catch` is **ignored**.  
🔹 If an error happens, `catch` runs and prevents a program crash.  

---

## **🔹 2. Using `try...catch` to Handle Errors**  
✅ **Example: Handling a Reference Error**  
```js
try {
  console.log(undeclaredVariable); // This variable is not defined
} catch (error) {
  console.error("Error caught:", error.message);
}
```
🔹 If `undeclaredVariable` doesn’t exist, JavaScript **throws an error**, and `catch` handles it.  

---

## **🔹 3. Handling Asynchronous Errors**  
📌 `try...catch` **does not** work with asynchronous errors unless used inside an `async` function.  

✅ **Incorrect Example (Error not caught):**  
```js
try {
  setTimeout(() => {
    throw new Error("Async Error");
  }, 1000);
} catch (error) {
  console.error("This won't catch the error!"); // ❌ This won't work!
}
```
✅ **Correct Example (Using `async/await` and `try...catch`):**  
```js
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchData();
```
🔹 **Always wrap `await fetch()` inside `try...catch`** for API calls.  

---

## **🔹 4. Throwing Custom Errors with `throw`**  
📌 You can manually create errors using `throw`.  

✅ **Example: Custom Error Handling**  
```js
function validateAge(age) {
  if (age < 18) {
    throw new Error("❌ Age must be 18 or above");
  }
  return "✅ Access granted";
}

try {
  console.log(validateAge(16)); // This will throw an error
} catch (error) {
  console.error("Validation Error:", error.message);
}
```
🔹 **`throw` stops execution** and passes the error to `catch`.  

---

## **🔹 5. Using `finally` for Cleanup**  
📌 **`finally` always runs**, whether there’s an error or not.  

✅ **Example: Using `finally` for Cleanup**  
```js
function openFile() {
  try {
    console.log("📂 Opening file...");
    throw new Error("File not found!");
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    console.log("🔚 Closing file...");
  }
}

openFile();
```
🔹 **Use `finally` for cleanup tasks** (closing files, clearing timeouts, hiding loaders, etc.).  

---

## **📝 Task for You**  
1️⃣ Write a function `divide(a, b)` that throws an error if `b` is `0`.  
2️⃣ Use `try...catch` to handle the error gracefully.  
3️⃣ Add a `finally` block to log `"Operation complete"` whether successful or not.  

---

🎯 **[Next Lesson (Day 27): LeetCode Problems: Promises & Async Handling](../day_27/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../README.md)