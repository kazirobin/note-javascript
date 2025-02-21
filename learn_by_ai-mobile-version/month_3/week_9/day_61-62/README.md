# **📚 Day 61-62: Revision & Debugging – DOM & Browser APIs**  

Today, we’ll **revise** DOM Manipulation, Browser APIs, and focus on **debugging techniques** in JavaScript.  

---

## **🔹 Topics to Revise**  

✅ **DOM Basics** (`getElementById`, `querySelector`)  
✅ **Event Handling** (`addEventListener`, Event Delegation)  
✅ **Local Storage & Cookies**  
✅ **Timers** (`setTimeout`, `setInterval`)  
✅ **Debugging Techniques**  

---

## **🔹 1. Quick DOM Manipulation Recap**  

### ✅ **Selecting Elements**  
```js
let btn = document.getElementById("myButton"); // By ID
let divs = document.querySelectorAll(".box"); // By class (returns NodeList)
let input = document.querySelector("input"); // First matching element
```

### ✅ **Modifying Content**  
```js
document.getElementById("title").textContent = "New Title!";
document.querySelector(".box").innerHTML = "<b>Updated Content</b>";
```

### ✅ **Modifying Styles**  
```js
document.querySelector("p").style.color = "blue";
```

---

## **🔹 2. Event Handling Recap**  

### ✅ **Adding Event Listeners**  
```js
document.getElementById("btn").addEventListener("click", () => {
    alert("Button Clicked!");
});
```

### ✅ **Event Delegation (Handling Events for Dynamic Elements)**  
```js
document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
```

---

## **🔹 3. Local Storage & Cookies Recap**  

### ✅ **Using Local Storage**  
```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // "dark"
localStorage.removeItem("theme");
localStorage.clear();
```

### ✅ **Using Cookies**  
```js
document.cookie = "username=John; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";
console.log(document.cookie);
```

---

## **🔹 4. Timers (`setTimeout`, `setInterval`)**  

### ✅ **Delaying Execution (`setTimeout`)**  
```js
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);
```

### ✅ **Repeating Execution (`setInterval`)**  
```js
let counter = 0;
let interval = setInterval(() => {
    console.log("Counter:", ++counter);
    if (counter === 5) clearInterval(interval); // Stop after 5 times
}, 1000);
```

---

## **🔹 5. Debugging Techniques**  

### ✅ **1. Using `console.log()` Effectively**  
```js
let value = 42;
console.log("Value:", value);
```
🔹 Use `console.table()` for arrays/objects:  
```js
console.table([{ name: "Alice" }, { name: "Bob" }]);
```

---

### ✅ **2. Debugging with `debugger`**  
📌 **Pause execution & inspect variables**  
```js
function test() {
    let num = 10;
    debugger; // Execution stops here in DevTools
    num += 5;
    console.log(num);
}
test();
```

---

### ✅ **3. Using DevTools (Chrome, Firefox, Edge)**  
1️⃣ **Right-click** → Inspect Element  
2️⃣ Go to **Console** (for logs, errors)  
3️⃣ Go to **Sources** → Add **Breakpoints**  
4️⃣ Use **Network tab** (for API requests)  

---

### ✅ **4. Handling Errors with `try...catch`**  
```js
try {
    let result = JSON.parse("{ invalid JSON }"); // Will throw an error
} catch (error) {
    console.error("Error parsing JSON:", error);
}
```

---

## **🔹 Debugging Task**  

**Problem:** The following script should change the button color, but it’s not working. **Fix the bug!**  
```js
document.getElementById("changeColor").addEventListener("click", () => {
    document.getElementById("box").style.color = "red"; // ❌ Wrong property
});
```
✔ **Hint:** Fix `color` → `backgroundColor`.  

---

## **📝 Tasks for You**  
1️⃣ **Fix common JavaScript errors** using DevTools.  
2️⃣ **Debug a to-do list**: Try breaking and fixing parts of a to-do list.  
3️⃣ **Optimize an event listener**: Replace multiple event listeners with **event delegation**.  

---

🎯 **[Next Lesson (Day 63): Memory Management, Garbage Collection](../../week_10/day_63/README.md)  !**  
Let me know if you need more debugging examples! 🚀

[**Back to Home**](../../../README.md)