# **📚 Day 8: JavaScript Arrays Basics (`push`, `pop`, `shift`, `unshift`)**  

Today, we will learn about **arrays** and some fundamental methods to manipulate them.  

✅ **What is an array?**  
✅ **Adding elements (`push`, `unshift`)**  
✅ **Removing elements (`pop`, `shift`)**  
✅ **Checking length and accessing elements**  

---

## **🔹 1. What is an Array?**  
📌 An **array** is a collection of values stored in a **single variable**.  
📌 Each value has an **index** (starting from `0`).  

✅ **Example:**  
```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);  // Output: ["Apple", "Banana", "Cherry"]
console.log(fruits[0]);  // Output: "Apple"
console.log(fruits[2]);  // Output: "Cherry"
```

---

## **🔹 2. `push()`: Add Element to End**  
📌 `push()` **adds** an element **at the end** of an array.  

✅ **Example:**  
```js
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);  // Output: [1, 2, 3, 4]
```

---

## **🔹 3. `pop()`: Remove Last Element**  
📌 `pop()` **removes** the **last** element from an array and **returns it**.  

✅ **Example:**  
```js
let colors = ["Red", "Green", "Blue"];
let removedColor = colors.pop();
console.log(colors);  // Output: ["Red", "Green"]
console.log(removedColor);  // Output: "Blue"
```

---

## **🔹 4. `unshift()`: Add Element to Beginning**  
📌 `unshift()` **adds** an element **to the beginning** of an array.  

✅ **Example:**  
```js
let animals = ["Cat", "Dog"];
animals.unshift("Elephant");
console.log(animals);  // Output: ["Elephant", "Cat", "Dog"]
```

---

## **🔹 5. `shift()`: Remove First Element**  
📌 `shift()` **removes** the **first** element and **returns it**.  

✅ **Example:**  
```js
let cities = ["New York", "Paris", "Tokyo"];
let removedCity = cities.shift();
console.log(cities);  // Output: ["Paris", "Tokyo"]
console.log(removedCity);  // Output: "New York"
```

---

## **🔹 6. Checking Length & Accessing Elements**  
📌 **Length of an array:** `array.length`  
📌 **Access elements:** `array[index]`  

✅ **Example:**  
```js
let numbers = [10, 20, 30];
console.log(numbers.length);  // Output: 3
console.log(numbers[1]);  // Output: 20
```

---

## **🔹 7. Combining Methods**  
📌 You can use multiple methods together!  

✅ **Example:**  
```js
let queue = [];
queue.push("A");  // ["A"]
queue.push("B");  // ["A", "B"]
queue.shift();  // Removes "A", queue is now ["B"]
queue.unshift("C");  // ["C", "B"]
queue.pop();  // Removes "B", queue is now ["C"]

console.log(queue);  // Output: ["C"]
```

---

## **📝 Task for You**  
1️⃣ Create an array of **5 numbers**.  
2️⃣ Use `push()` to **add a number** at the end.  
3️⃣ Use `pop()` to **remove the last number**.  
4️⃣ Use `unshift()` to **add a number** at the beginning.  
5️⃣ Use `shift()` to **remove the first number**.  

---

🎯 **Next Lesson (Day 9): Advanced Array Methods (`map`, `filter`, `reduce`, `sort`)**  
Let me know if you have any questions! 🚀