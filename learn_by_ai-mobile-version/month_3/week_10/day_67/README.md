# **📚 Day 67: Project – Custom Throttle Function**  

Today, we'll build a **Custom Throttle Function**. This project will help you solidify your understanding of the throttling concept and give you practical experience implementing it in JavaScript.

---

## **🔹 Project Overview**  

The goal of this project is to create a throttle function that limits how often a specific function can be called. We’ll be able to use this custom throttle function for various events, like scroll and resize events, to improve performance in our applications.

### **What is Throttling?**  
Throttling ensures that a function is executed at most once in a specified time interval. This is useful for limiting the execution of events that may fire too frequently, such as:
- Scroll events
- Resize events
- Mouse movements

---

## **🔹 Implementation**  

### **1. Creating the Throttle Function**  
Here's how to implement a simple throttle function in JavaScript:

```js
function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args); // Execute immediately
            lastRan = Date.now(); // Record when it was last run
        } else {
            clearTimeout(lastFunc); // Clear previous timer
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now(); // Update last run time
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
```

### **2. Usage Example**  
We can use the custom throttle function in a real-world scenario, like a scroll event listener:

```js
const logScrollPosition = throttle(() => {
    console.log(`Scroll position: ${window.scrollY}`);
}, 100); // Throttle to every 100ms

window.addEventListener("scroll", logScrollPosition);
```

### **3. Testing Your Throttle Function**  
To test your throttle function, follow these steps:
- Create an HTML file with a long content area so you can scroll.
- Add a script tag linking to your JavaScript file where the throttle function is implemented.
- Open your HTML file in a browser and scroll to see the throttled log of the scroll position.

---

## **🔹 Enhancements**  
Here are some ideas for enhancing your custom throttle function or project:
1. **Add Options**: Modify your throttle function to accept options for leading and trailing executions. This way, you can choose whether to execute the function at the start, the end, or both.
2. **Integrate with Other Events**: Implement the throttle function with other events, such as window resize, mouse move, or keypress events.
3. **Create a Performance Tracker**: Monitor the performance of the throttled function by logging the number of times it was called over a certain period.

---

## **📝 Tasks for You**  
1️⃣ Implement the enhanced throttle function with options for leading and trailing executions.  
2️⃣ Create a demo page that showcases the usage of the throttle function with multiple event types.  
3️⃣ Share your custom throttle function with a friend or peer and get feedback on potential improvements!

---

🎯 **[Next Lesson (Day 68-69): **Revision & Debugging](../day_68-69/README.md)!**  
Let me know if you have any questions about the custom throttle function or need help with anything else! 🚀

[**Back to Home**](../../../README.md)