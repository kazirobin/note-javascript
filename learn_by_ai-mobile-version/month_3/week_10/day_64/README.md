# **📚 Day 64: Debouncing & Throttling (Performance Optimization)**  

Today, we’ll explore **debouncing** and **throttling**, two important techniques for optimizing performance in JavaScript applications. These techniques are especially useful when dealing with events that can trigger multiple times in quick succession, like scrolling, resizing, or keypress events.  

---

## **🔹 What is Debouncing?**  

📌 **Debouncing** ensures that a function is only executed once after a specified period of inactivity. This is useful for scenarios where you want to wait until a user has finished typing, resizing a window, or scrolling.  

### **How It Works:**  
- When the event is triggered, the function is scheduled to run after a delay.  
- If the event is triggered again before the delay expires, the timer resets.  

### **Debouncing Example**  
```js
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId); // Clear the previous timer
        timeoutId = setTimeout(() => {
            func.apply(this, args); // Execute the function
        }, delay);
    };
}

// Usage
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(() => {
    console.log("Searching...");
}, 300));
```
🔹 In this example, the search function will only execute 300 milliseconds after the user has stopped typing.

---

## **🔹 What is Throttling?**  

📌 **Throttling** ensures that a function is executed at most once in a specified time interval, regardless of how many times the event is triggered. This is useful for scenarios like scroll events where you want to limit how often a function runs.  

### **How It Works:**  
- The function can be executed at regular intervals (e.g., every 100 milliseconds), but any additional calls during that interval will be ignored.  

### **Throttling Example**  
```js
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args); // Execute immediately
            lastRan = Date.now(); // Record when it was last run
        } else {
            clearTimeout(lastFunc); // Clear previous timer
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now(); // Update last run time
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Usage
window.addEventListener("scroll", throttle(() => {
    console.log("Scrolling...");
}, 100));
```
🔹 In this example, the scrolling function will execute at most once every 100 milliseconds while the user scrolls.

---

## **🔹 When to Use Debouncing vs. Throttling**  

| **Scenario**                          | **Use Debouncing**            | **Use Throttling**          |
|---------------------------------------|-------------------------------|-----------------------------|
| User input (e.g., search box)        | ✔                             | ❌                          |
| Window resize event                   | ✔                             | ✔                           |
| Scroll event                          | ❌                            | ✔                           |
| Keypress event                        | ✔                             | ❌                          |
| API calls (to avoid excessive requests)| ✔                           | ✔                           |

---

## **📝 Tasks for You**  
1️⃣ Implement **debouncing** on a text input field that fetches suggestions from an API after the user stops typing.  
2️⃣ Use **throttling** to limit how often a scroll event listener logs the current scroll position.  
3️⃣ Compare performance differences between debounced and throttled functions in a real-world scenario (like a search feature).  

---

🎯 **[Next Lesson (Day 65): Factory, Singleton, Observer Patterns](../day_65/README.md)!**  
Let me know if you have any questions about debouncing and throttling! 🚀

[**Back to Home**](../../../README.md)