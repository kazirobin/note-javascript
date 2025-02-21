# **📚 Day 57: DOM Manipulation Basics (`getElementById`, `querySelector`)**  

Today, we’ll learn the **basics of DOM (Document Object Model) manipulation** in JavaScript. The DOM allows us to **access, modify, and interact** with HTML elements dynamically.  

---

## **🔹 What is the DOM?**  

📌 The **DOM (Document Object Model)** is a representation of an HTML document as a **tree structure**.  
🔹 Each **HTML element** becomes a **node** in this tree.  
🔹 JavaScript allows us to **select and modify** these elements dynamically.  

---

## **🔹 Selecting Elements in the DOM**  

### **✅ `getElementById()` – Selects a Single Element by ID**  
```js
const heading = document.getElementById("title");
console.log(heading); // Logs the element with ID 'title'
heading.style.color = "blue"; // Changes text color
```
🔹 **Best for selecting unique elements** (e.g., headers, sections).  

---

### **✅ `querySelector()` – Selects the First Matching Element**  
```js
const firstParagraph = document.querySelector(".description");
console.log(firstParagraph); // Logs the first element with class 'description'
firstParagraph.style.fontSize = "18px"; // Changes text size
```
🔹 **More flexible** – can select by **class (`.`), ID (`#`), or tag (`h1`, `p`)**.  
🔹 Returns **only the first matching element**.  

---

### **✅ `querySelectorAll()` – Selects Multiple Elements**  
```js
const allItems = document.querySelectorAll(".list-item");
console.log(allItems); // Logs a NodeList of all elements with class 'list-item'

allItems.forEach(item => {
    item.style.color = "green"; // Changes color of each item
});
```
🔹 Returns a **NodeList** (similar to an array).  
🔹 Use **`.forEach()`** to modify multiple elements.  

---

## **🔹 Modifying Elements**  

### **✅ Changing Text Content**  
```js
const heading = document.getElementById("title");
heading.textContent = "Hello, DOM!"; // Changes the text
```

---

### **✅ Changing HTML Content**  
```js
const container = document.querySelector(".container");
container.innerHTML = "<h2>New Content Added!</h2>"; // Inserts new HTML
```
🔹 Be careful! `innerHTML` can replace existing content.  

---

### **✅ Modifying CSS Styles**  
```js
const box = document.getElementById("box");
box.style.backgroundColor = "lightblue"; // Changes background color
box.style.border = "2px solid black"; // Adds a border
```

---

## **🔹 Event Listeners**  

### **✅ Adding Click Event**  
```js
const button = document.getElementById("btn");
button.addEventListener("click", function () {
    alert("Button Clicked!");
});
```
🔹 **`addEventListener()`** attaches an event to an element.  
🔹 Triggers when the event (e.g., `click`) occurs.  

---

## **🔹 Example: Interactive DOM Manipulation**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="title">Welcome to DOM Manipulation</h1>
    <p class="description">This is a paragraph.</p>
    <button id="btn">Click Me</button>

    <script>
        const btn = document.getElementById("btn");
        btn.addEventListener("click", function () {
            document.getElementById("title").textContent = "You Clicked the Button!";
        });
    </script>
</body>
</html>
```
🔹 When the button is clicked, the text of the `h1` changes.  

---

## **📝 Tasks for You**  
1️⃣ Select an element using `getElementById()` and modify its **text content**.  
2️⃣ Select multiple elements using `querySelectorAll()` and change their **color**.  
3️⃣ Create a button that, when clicked, **hides an element** using `style.display = "none"`.

---
# **Advanced DOM Manipulation (`createElement`, `appendChild`, `removeChild`)**  

Today, we’ll dive deeper into **Advanced DOM Manipulation**, learning how to **create, add, and remove elements dynamically** using JavaScript.  

---

## **🔹 Creating Elements (`createElement`)**  

📌 The `document.createElement()` method allows us to create new **HTML elements** dynamically.  

### **✅ Example: Creating a New Element**  
```js
const newParagraph = document.createElement("p"); // Create a <p> element
newParagraph.textContent = "This is a dynamically created paragraph!";
```
🔹 We **created** a new `<p>` element, but it's **not added to the DOM yet**.  

---

## **🔹 Adding Elements to the DOM (`appendChild`, `prepend`, `insertBefore`)**  

### **✅ `appendChild()` – Add Element at the End**  
```js
const container = document.getElementById("container");
container.appendChild(newParagraph); // Adds <p> inside #container at the end
```
🔹 Adds the new element **as the last child** of the parent.  

---

### **✅ `prepend()` – Add Element at the Beginning**  
```js
container.prepend(newParagraph); // Adds <p> at the beginning of #container
```
🔹 Inserts the element **before all other children**.  

---

### **✅ `insertBefore()` – Insert at a Specific Position**  
```js
const firstChild = container.firstElementChild;
container.insertBefore(newParagraph, firstChild); // Adds <p> before the first child
```
🔹 Places the element **before a specific child element**.  

---

## **🔹 Removing Elements (`removeChild`, `remove`)**  

### **✅ `removeChild()` – Remove a Specific Child**  
```js
const heading = document.getElementById("title");
heading.parentNode.removeChild(heading); // Removes #title from its parent
```

---

### **✅ `remove()` – Directly Remove an Element**  
```js
heading.remove(); // Removes #title from the DOM
```
🔹 **`remove()` is simpler and preferred** over `removeChild()`.  

---

## **🔹 Example: Creating & Removing Elements Dynamically**  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Advanced DOM Manipulation</title>
</head>
<body>
    <div id="container">
        <h2>Existing Content</h2>
    </div>
    <button id="add">Add Paragraph</button>
    <button id="remove">Remove Paragraph</button>

    <script>
        const container = document.getElementById("container");
        const addButton = document.getElementById("add");
        const removeButton = document.getElementById("remove");

        addButton.addEventListener("click", function () {
            const newPara = document.createElement("p");
            newPara.textContent = "This is a new paragraph!";
            newPara.classList.add("dynamic");
            container.appendChild(newPara);
        });

        removeButton.addEventListener("click", function () {
            const para = document.querySelector(".dynamic");
            if (para) para.remove(); // Removes the first dynamic paragraph
        });
    </script>
</body>
</html>
```
🔹 Click **"Add Paragraph"** to dynamically create a `<p>`.  
🔹 Click **"Remove Paragraph"** to delete the first added `<p>`.  

---

## **📝 Tasks for You**  
1️⃣ Create a **new button dynamically** and add it to the DOM.  
2️⃣ Add an event listener to the button that **changes its own text** when clicked.  
3️⃣ Remove an element **after 3 seconds** using `setTimeout()`.  

---

🎯 **Next Lesson (Day 59): Event Delegation & Dynamic Event Handling!**  
Let me know if you have any questions! 🚀