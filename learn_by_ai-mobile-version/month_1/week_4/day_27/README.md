# **📚 Day 27: LeetCode Problems - Promises & Async Handling**  

Today, we’ll solve **two LeetCode-style problems** focused on **Promises and async/await**:  
✅ **Problem 1: Sleep Function (`setTimeout` with Promises)**  
✅ **Problem 2: Parallel Execution of Asynchronous Functions**  

---

## **🔹 Problem 1: Implement a Sleep Function**  
📌 Implement a function `sleep(ms)` that pauses execution for `ms` milliseconds.  

✅ **Example:**  
```js
console.log("Start");
await sleep(2000); // Waits for 2 seconds
console.log("End"); // Logs after 2 seconds
```

✅ **Solution:**  
```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function testSleep() {
  console.log("Start");
  await sleep(2000); // Waits for 2 seconds
  console.log("End");
}

testSleep();
```
🔹 **`setTimeout(resolve, ms)`** resolves the Promise after `ms` milliseconds.  
🔹 **`await sleep(2000)`** pauses execution for 2 seconds.  

---

## **🔹 Problem 2: Run Promises in Parallel**  
📌 Write a function that takes an array of asynchronous functions and executes them **in parallel**, returning the results as an array.  

✅ **Example:**  
```js
const asyncFunc1 = () => new Promise(res => setTimeout(() => res(1), 1000));
const asyncFunc2 = () => new Promise(res => setTimeout(() => res(2), 2000));

executeAll([asyncFunc1, asyncFunc2]).then(console.log); // [1, 2] (after 2 sec)
```

✅ **Solution using `Promise.all`**  
```js
async function executeAll(asyncFunctions) {
  return Promise.all(asyncFunctions.map(fn => fn()));
}

const asyncFunc1 = () => new Promise(res => setTimeout(() => res(1), 1000));
const asyncFunc2 = () => new Promise(res => setTimeout(() => res(2), 2000));

executeAll([asyncFunc1, asyncFunc2]).then(console.log); // [1, 2]
```
🔹 **`Promise.all()`** executes multiple Promises **in parallel**.  
🔹 **Waits for all Promises to resolve** before returning results.  

---

## **📝 Task for You**  
1️⃣ Modify `sleep(ms)` to return execution time.  
2️⃣ Modify `executeAll()` to handle **errors** (if one function fails, return `"Error"` for that function but still execute others).  

---

🎯 **[Next Lesson (Day 28): Project: Weather App using Fetch API](../day_28/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)