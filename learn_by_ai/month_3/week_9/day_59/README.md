# **📚 Day 59: Local Storage & Cookies in JavaScript**  

Today, we’ll explore **Local Storage** and **Cookies**, which allow us to store data in the browser persistently.  

---

## **🔹 What is Local Storage?**  

📌 **Local Storage** is a browser API that lets us store **key-value pairs** in the browser **permanently** (until manually cleared).  
✅ **Data persists** even after page reload or browser restart.  
✅ Stores up to **5MB of data per domain**.  
✅ Stores only **strings**.  

---

## **🔹 Using Local Storage**  

### **✅ Storing Data (`setItem`)**  
```js
localStorage.setItem("username", "JohnDoe");
```
🔹 Saves `"JohnDoe"` under the key `"username"`.  

---

### **✅ Retrieving Data (`getItem`)**  
```js
let user = localStorage.getItem("username");
console.log(user); // "JohnDoe"
```

---

### **✅ Removing Data (`removeItem`)**  
```js
localStorage.removeItem("username");
```

---

### **✅ Clearing All Data (`clear`)**  
```js
localStorage.clear();
```

---

### **✅ Storing & Retrieving Objects**  

📌 Since Local Storage only supports **strings**, store objects using `JSON.stringify()` and retrieve using `JSON.parse()`.  

```js
let user = { name: "Alice", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "Alice"
```

---

## **🔹 What are Cookies?**  

📌 **Cookies** store small amounts of data (4KB max) and are often used for:  
✅ **User authentication (e.g., session IDs)**  
✅ **Tracking preferences**  
✅ **Saving user data across sessions**  

---

## **🔹 Using Cookies in JavaScript**  

### **✅ Setting a Cookie**  
```js
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
```
🔹 Stores `"username=JohnDoe"` that **expires** on the given date.  
🔹 `path=/` makes the cookie available across the whole site.  

---

### **✅ Reading Cookies**  
```js
console.log(document.cookie);
```
🔹 Returns a **string** of all cookies:  
```
"username=JohnDoe; theme=dark"
```

---

### **✅ Deleting a Cookie**  
📌 Set the **expiry date to the past** to delete a cookie.  
```js
document.cookie = "username=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

---

## **🔹 Local Storage vs. Cookies**  

| Feature            | Local Storage | Cookies |
|--------------------|--------------|---------|
| **Data Size**      | ~5MB         | ~4KB    |
| **Persistence**    | Until cleared | Can have expiry date |
| **Accessibility**  | Only by JavaScript | Sent to server with every request |
| **Use Case**       | Storing settings, user data | Authentication, session tracking |

---

## **🔹 Example: Storing Theme Preference in Local Storage**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Local Storage Example</title>
</head>
<body>
    <button id="darkMode">Enable Dark Mode</button>
    <script>
        const button = document.getElementById("darkMode");

        // Apply theme if saved in localStorage
        if (localStorage.getItem("theme") === "dark") {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }

        button.addEventListener("click", function () {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            localStorage.setItem("theme", "dark");
        });
    </script>
</body>
</html>
```
🔹 Click **"Enable Dark Mode"**, and it will persist after refresh.  

---

## **📝 Tasks for You**  
1️⃣ Store **user preferences** (e.g., language, font size) in **Local Storage**.  
2️⃣ Create a **"Remember Me" login system** using **Cookies**.  
3️⃣ Implement a **counter** that persists using Local Storage.  

---

🎯 **[Next Lesson (Day 60): **Mini Project:** To-Do List](../day_60/) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)