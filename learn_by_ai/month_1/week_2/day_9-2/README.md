# **📚 Day 9_part-2: JavaScript String Methods**  

Today, we'll explore **important string methods** in JavaScript to manipulate text effectively.  

✅ `length` – Get the length of a string  
✅ `toUpperCase()` & `toLowerCase()` – Change case  
✅ `trim()` – Remove whitespace  
✅ `slice()`, `substring()`, `substr()` – Extract part of a string  
✅ `replace()` & `replaceAll()` – Replace text  
✅ `split()` – Convert string to array  
✅ `includes()` & `startsWith()` & `endsWith()` – Check for substrings  
✅ `charAt()` & `indexOf()` & `lastIndexOf()` – Character positions  

---

## **🔹 1. Get String Length (`length`)**  
📌 Returns the number of characters in a string.  

✅ **Example:**  
```js
let text = "Hello, JavaScript!";
console.log(text.length);  // Output: 18
```

---

## **🔹 2. Change Case (`toUpperCase()` & `toLowerCase()`)**  
📌 Converts text to **uppercase** or **lowercase**.  

✅ **Example:**  
```js
let message = "JavaScript";
console.log(message.toUpperCase());  // Output: "JAVASCRIPT"
console.log(message.toLowerCase());  // Output: "javascript"
```

---

## **🔹 3. Remove Whitespace (`trim()`)**  
📌 Removes spaces from **start and end** of a string.  

✅ **Example:**  
```js
let greeting = "  Hello World!  ";
console.log(greeting.trim());  // Output: "Hello World!"
```

---

## **🔹 4. Extract Part of a String (`slice()`, `substring()`, `substr()`)**  
📌 **Extracts** a portion of a string.  

✅ **Using `slice(start, end)` (Recommended):**  
```js
let text = "JavaScript";
console.log(text.slice(0, 4));  // Output: "Java"
console.log(text.slice(-6));  // Output: "Script"
```

✅ **Using `substring(start, end)` (Similar to `slice`)**  
```js
console.log(text.substring(0, 4));  // Output: "Java"
```

✅ **Using `substr(start, length)` (Not recommended, deprecated)**  
```js
console.log(text.substr(4, 6));  // Output: "Script"
```

---

## **🔹 5. Replace Text (`replace()` & `replaceAll()`)**  
📌 **Replaces** part of a string.  

✅ **Example:**  
```js
let text = "I love JavaScript!";
console.log(text.replace("JavaScript", "Python"));  // Output: "I love Python!"
```

✅ **Replace multiple occurrences (`replaceAll()`)**  
```js
let sentence = "apple apple orange";
console.log(sentence.replaceAll("apple", "banana"));  
// Output: "banana banana orange"
```

---

## **🔹 6. Convert String to Array (`split()`)**  
📌 Splits a string into an **array** based on a separator.  

✅ **Example:**  
```js
let words = "Hello,World,JavaScript";
let arr = words.split(",");
console.log(arr);  // Output: ["Hello", "World", "JavaScript"]
```

---

## **🔹 7. Check for Substrings (`includes()`, `startsWith()`, `endsWith()`)**  
📌 **Check if a string contains** specific text.  

✅ **Example:**  
```js
let text = "JavaScript is amazing!";
console.log(text.includes("JavaScript"));  // Output: true
console.log(text.startsWith("Java"));  // Output: true
console.log(text.endsWith("!"));  // Output: true
```

---

## **🔹 8. Find Character Position (`charAt()`, `indexOf()`, `lastIndexOf()`)**  
📌 **Find characters in a string.**  

✅ **Example:**  
```js
let text = "JavaScript";
console.log(text.charAt(2));  // Output: "v"
console.log(text.indexOf("S"));  // Output: 4
console.log(text.lastIndexOf("a"));  // Output: 3
```

---

## **📝 Task for You**  
1️⃣ Convert `"hello world"` to **uppercase** and **lowercase**.  
2️⃣ Extract `"Script"` from `"JavaScript"` using `slice()`.  
3️⃣ Replace `"bad"` with `"good"` in `"This is a bad day."`.  
4️⃣ Split `"apple,banana,grape"` into an array.  
5️⃣ Check if `"Learning JavaScript"` **includes** `"JavaScript"`.  

---

🎯 **Next Lesson (Day 10): JavaScript Object Basics!**  
Let me know if you have any questions! 🚀
[**Back to Home**](../../../)