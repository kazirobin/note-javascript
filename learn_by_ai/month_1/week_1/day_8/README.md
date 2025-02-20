### **📚 Day 7: JavaScript Arrays (Methods & Manipulation)**  
Welcome to Day 7! 🎉 Today, we’ll cover:  
✅ Creating and Accessing Arrays  
✅ Common Array Methods (`push`, `pop`, `shift`, `unshift`)  
✅ Advanced Methods (`map`, `filter`, `reduce`, `forEach`, `find`)  
✅ Sorting & Reversing Arrays  
✅ Splicing and Slicing  

---

## **🔹 1. Creating & Accessing Arrays**  
Arrays store **multiple values** in a single variable.  

📌 **Example:**  
```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);  // Output: Apple
console.log(fruits.length);  // Output: 3
```

✅ **Modify Array Elements:**  
```js
fruits[1] = "Mango";
console.log(fruits);  // Output: ["Apple", "Mango", "Cherry"]
```

---

## **🔹 2. Adding & Removing Elements**  

✅ **`push()`** → Add to end  
✅ **`pop()`** → Remove from end  
✅ **`unshift()`** → Add to beginning  
✅ **`shift()`** → Remove from beginning  

📌 **Example:**  
```js
let colors = ["Red", "Blue"];
colors.push("Green");   // Add "Green" at the end
console.log(colors);    // Output: ["Red", "Blue", "Green"]

colors.pop();   // Remove last item
console.log(colors);    // Output: ["Red", "Blue"]

colors.unshift("Yellow");  // Add at the beginning
console.log(colors);       // Output: ["Yellow", "Red", "Blue"]

colors.shift();  // Remove first item
console.log(colors);  // Output: ["Red", "Blue"]
```

---

## **🔹 3. Looping Through Arrays**  

✅ **Using `forEach()`**  
```js
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); 
// Output: 2, 4, 6
```

✅ **Using `for...of` (Best for readability)**  
```js
for (let num of numbers) {
    console.log(num);
}
```

---

## **🔹 4. Transforming Arrays (`map`, `filter`, `reduce`)**  

### **📌 `map()` (Creates a new modified array)**  
```js
let nums = [1, 2, 3];
let squared = nums.map(num => num * num);
console.log(squared);  // Output: [1, 4, 9]
```

### **📌 `filter()` (Filters elements based on condition)**  
```js
let evens = nums.filter(num => num % 2 === 0);
console.log(evens);  // Output: [2]
```

### **📌 `reduce()` (Reduces array to a single value)**  
```js
let sum = nums.reduce((total, num) => total + num, 0);
console.log(sum);  // Output: 6
```

---

## **🔹 5. Finding & Checking Elements**  

✅ **`find()`** → Returns **first** matching value  
✅ **`includes()`** → Checks if value exists  

📌 **Example:**  
```js
let people = ["Alice", "Bob", "Charlie"];
let result = people.find(person => person.startsWith("B"));
console.log(result);  // Output: Bob

console.log(people.includes("Alice"));  // Output: true
```

---

## **🔹 6. Sorting & Reversing**  

✅ **`sort()`** → Sorts alphabetically  
✅ **`reverse()`** → Reverses order  

📌 **Example:**  
```js
let names = ["Zara", "Mike", "Alice"];
names.sort();  
console.log(names);  // Output: ["Alice", "Mike", "Zara"]

names.reverse();
console.log(names);  // Output: ["Zara", "Mike", "Alice"]
```

📌 **Sorting Numbers (Use Compare Function)**  
```js
let numbers = [10, 3, 7, 1];
numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [1, 3, 7, 10]
```

---

## **🔹 7. Splicing & Slicing**  

✅ **`slice(start, end)`** → Extracts part of an array  
✅ **`splice(start, deleteCount, ...items)`** → Removes/replaces elements  

📌 **Example:**  
```js
let animals = ["Cat", "Dog", "Elephant", "Lion"];
console.log(animals.slice(1, 3));  // Output: ["Dog", "Elephant"]

animals.splice(2, 1, "Tiger");  // Replace "Elephant" with "Tiger"
console.log(animals);  // Output: ["Cat", "Dog", "Tiger", "Lion"]
```

---

## **📝 Task for You**  
1️⃣ Create an array of **numbers** and find the **sum** using `reduce()`.  
2️⃣ Use `filter()` to extract only **even numbers** from an array.  
3️⃣ Sort an array of numbers in **descending order**.  
4️⃣ Use `splice()` to replace an element in an array.  

---

🎯 **Next Lesson (Day 8): JavaScript Objects (Properties, Methods, & Destructuring)!**  
Let me know if you have any questions! 🚀