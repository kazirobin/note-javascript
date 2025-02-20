# **📚 Day 25: Fetch API - Making API Requests in JavaScript**  

Today, we’ll cover:  
✅ **What is the Fetch API?**  
✅ **Making GET Requests**  
✅ **Making POST Requests**  
✅ **Handling Errors in Fetch Requests**  

---

## **🔹 1. What is the Fetch API?**  
📌 **Fetch API** is used to make HTTP requests in JavaScript.  
📌 It **returns a Promise** that resolves to the response object.  

✅ **Basic Syntax:**  
```js
fetch(url)
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data)) // Handle the data
  .catch(error => console.error("Error:", error)); // Handle errors
```
🔹 `.json()` is used to parse the response into JavaScript objects.  
🔹 `.catch()` handles network errors.  

---

## **🔹 2. Making a GET Request**  
📌 **GET requests** are used to retrieve data from an API.  

✅ **Example: Fetching Data from a Public API**  
```js
async function fetchUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
```
🔹 **`fetch()` sends a request**, and `await response.json()` parses it.  
🔹 **`try...catch`** ensures errors are handled.  

---

## **🔹 3. Making a POST Request**  
📌 **POST requests** are used to **send data** to an API.  

✅ **Example: Sending Data to an API**  
```js
async function createPost() {
  let postData = {
    title: "JavaScript Fetch API",
    body: "Learning how to use Fetch API!",
    userId: 1
  };

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    let data = await response.json();
    console.log("Post Created:", data);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

createPost();
```
🔹 **`headers`** specify that we're sending JSON data.  
🔹 **`body: JSON.stringify(postData)`** converts JavaScript objects to JSON.  

---

## **🔹 4. Handling Errors in Fetch Requests**  
📌 **Check if the response is OK before using `.json()`.**  

✅ **Example: Handling API Errors**  
```js
async function fetchWithErrorHandling() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    let data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

fetchWithErrorHandling();
```
🔹 **`if (!response.ok)`** checks for HTTP errors.  
🔹 **`.catch(error => console.error(error))`** catches network failures.  

---

## **📝 Task for You**  
1️⃣ Make a **GET request** to fetch posts from `https://jsonplaceholder.typicode.com/posts`.  
2️⃣ Create a **POST request** to send a new comment to `https://jsonplaceholder.typicode.com/comments`.  
3️⃣ Handle **errors properly** in both cases.  

---

🎯 **Next Lesson (Day 26): Error Handling (`try...catch`)!**  
Let me know if you have any questions! 🚀