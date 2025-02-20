# **📚 Day 24: Async/Await in JavaScript**  

Today, we’ll cover:  
✅ **What is `async/await`?**  
✅ **How `async/await` simplifies Promises**  
✅ **Error Handling with `try...catch`**  
✅ **Using `await` with Multiple Promises (`Promise.all`)**  

---

## **🔹 1. What is `async/await`?**  
📌 `async/await` is a **modern way** to handle asynchronous code in JavaScript.  
📌 It makes working with Promises **easier to read** and **avoid `.then()` chaining**.  

✅ **Example with a Promise:**  
```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Data Loaded"), 2000);
  });
}
```

✅ **Same Example with `async/await`:**  
```js
async function loadData() {
  let data = await fetchData(); // Waits for fetchData() to resolve
  console.log(data);
}

loadData();
```
🔹 **`await` waits** for the Promise to resolve before moving to the next line.  
🔹 **No need for `.then()` chaining**.  

---

## **🔹 2. Using `await` with API Calls**  
✅ **Example: Fetching JSON Data (Simulated)**  
```js
async function fetchUserData() {
  console.log("Fetching user data...");

  let response = await new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Alice", age: 25 }), 2000)
  );

  console.log("User Data:", response);
}

fetchUserData();
```
🔹 The code **waits** for the Promise to resolve before printing data.  

---

## **🔹 3. Error Handling with `try...catch`**  
📌 `try...catch` makes it easy to handle errors inside `async` functions.  

✅ **Example: Handling Errors in Async Functions**  
```js
async function fetchDataWithError() {
  try {
    let response = await new Promise((_, reject) =>
      setTimeout(() => reject("❌ Error: Network Failure"), 2000)
    );
    console.log(response);
  } catch (error) {
    console.error(error); // Catches the error
  }
}

fetchDataWithError();
```
🔹 **`try...catch` prevents crashes** and handles rejected Promises gracefully.  

---

## **🔹 4. Running Multiple Promises with `Promise.all`**  
📌 **`Promise.all()`** runs multiple Promises **at the same time** (concurrently).  

✅ **Example: Fetching Two APIs in Parallel**  
```js
async function fetchMultipleData() {
  let promise1 = new Promise((resolve) => setTimeout(() => resolve("✅ Data 1"), 2000));
  let promise2 = new Promise((resolve) => setTimeout(() => resolve("✅ Data 2"), 3000));

  let [data1, data2] = await Promise.all([promise1, promise2]);

  console.log(data1); // ✅ Data 1
  console.log(data2); // ✅ Data 2
}

fetchMultipleData();
```
🔹 `Promise.all()` **waits for all promises** to resolve before continuing execution.  

---

## **📝 Task for You**  
1️⃣ Write an `async` function that fetches two pieces of data using `Promise.all()`.  
2️⃣ Add `try...catch` to handle potential errors.  
3️⃣ Modify it to introduce a failure case and handle it properly.  

---

🎯 **Next Lesson (Day 25): Fetch API, Making API Requests  !**  
Let me know if you have any questions! 🚀