# **📚 Day 23: JavaScript Promises (`then`, `catch`, `finally`)**  

Today, we’ll cover:  
✅ **What is a Promise?**  
✅ **States of a Promise**  
✅ **Chaining Promises (`then`)**  
✅ **Error Handling (`catch`)**  
✅ **Final Cleanup (`finally`)**  

---

## **🔹 1. What is a Promise?**  
📌 A **Promise** is an object that represents **the eventual completion or failure** of an asynchronous operation.  
📌 It helps avoid **callback hell** and makes async code more readable.  

✅ **Creating a Simple Promise:**  
```js
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating success or failure

  setTimeout(() => {
    if (success) {
      resolve("✅ Data fetched successfully!");
    } else {
      reject("❌ Error: Failed to fetch data.");
    }
  }, 2000);
});
```
🔹 `resolve()` is called when the operation **succeeds**.  
🔹 `reject()` is called when the operation **fails**.  

---

## **🔹 2. Promise States**  
A Promise has **three states**:  
1️⃣ **Pending** → Initial state (neither resolved nor rejected).  
2️⃣ **Fulfilled** → `resolve()` is called (success).  
3️⃣ **Rejected** → `reject()` is called (failure).  

✅ **Example with `.then()` and `.catch()`**  
```js
myPromise
  .then((result) => {
    console.log(result); // ✅ Data fetched successfully!
  })
  .catch((error) => {
    console.error(error); // ❌ Error: Failed to fetch data.
  });
```
🔹 `.then()` runs when the Promise is **resolved**.  
🔹 `.catch()` runs when the Promise is **rejected**.  

---

## **🔹 3. Chaining Promises (`then`)**  
📌 `.then()` can return a new Promise, allowing **chaining**.  

✅ **Example: Fetch & Process Data**  
```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Data Loaded"), 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return "🔄 Processing Data...";
  })
  .then((processed) => {
    console.log(processed);
    return "✅ Data Processed!";
  })
  .then((finalResult) => {
    console.log(finalResult);
  });
```
🔹 Each `.then()` **receives the result** of the previous `.then()`.  

---

## **🔹 4. Error Handling (`catch`)**  
📌 If **any `.then()` fails**, `.catch()` will handle the error.  

✅ **Example: Simulating Failure**  
```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("❌ Network Error"), 2000);
  });
}

fetchData()
  .then((data) => console.log(data)) // Skipped if rejected
  .catch((error) => console.error(error)); // Handles rejection
```
🔹 If any **step in the chain fails**, the rest are **skipped**, and `.catch()` runs.  

---

## **🔹 5. `.finally()` - Always Executes**  
📌 **`.finally()` always runs**, whether the Promise is **resolved or rejected**.  

✅ **Example: Cleaning Up**  
```js
fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("🔚 Operation Completed"));
```
🔹 **Use `.finally()` for cleanup** (closing connections, hiding loaders, etc.).  

---

## **📝 Task for You**  
1️⃣ Write a function `delayedPromise(delay)` that resolves with `"Done!"` after `delay` ms.  
2️⃣ Modify it to reject after `delay` ms if `delay > 3000`.  
3️⃣ Chain `.then()`, `.catch()`, and `.finally()`.  

---

🎯 **[Next Lesson (Day 24): Async/Await](../day_24/) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)