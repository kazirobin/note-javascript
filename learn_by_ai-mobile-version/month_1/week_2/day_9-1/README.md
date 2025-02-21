# **📚 Day 9: Advanced Array Methods (`map`, `filter`, `reduce`, `sort`)**  

Today, we will explore four powerful array methods in JavaScript:  

✅ `map()` – **Transforms** elements in an array  
✅ `filter()` – **Filters** elements based on a condition  
✅ `reduce()` – **Reduces** an array to a single value  
✅ `sort()` – **Sorts** elements in ascending/descending order  

---

## **🔹 1. `map()`: Transforming an Array**  
📌 **Creates a new array** by applying a function to each element.  

✅ **Example 1: Square each number**  
```js
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared);  // Output: [1, 4, 9, 16]
```

✅ **Example 2: Convert names to uppercase**  
```js
let names = ["alice", "bob", "charlie"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);  // Output: ["ALICE", "BOB", "CHARLIE"]
```

---

## **🔹 2. `filter()`: Filtering Elements**  
📌 **Creates a new array** with elements that pass a condition.  

✅ **Example 1: Filter even numbers**  
```js
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // Output: [2, 4, 6]
```

✅ **Example 2: Filter words with length > 4**  
```js
let words = ["apple", "cat", "banana", "dog"];
let longWords = words.filter(word => word.length > 4);
console.log(longWords);  // Output: ["apple", "banana"]
```

---

## **🔹 3. `reduce()`: Reducing an Array to a Single Value**  
📌 **Reduces** the array to a single value (sum, product, max, etc.).  

✅ **Example 1: Sum of all numbers**  
```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // Output: 10
```

✅ **Example 2: Find the maximum value**  
```js
let numbers = [5, 12, 8, 20, 7];
let max = numbers.reduce((a, b) => a > b ? a : b);
console.log(max);  // Output: 20
```

---

## **🔹 4. `sort()`: Sorting Elements**  
📌 **Sorts an array in place** (modifies the original array).  

✅ **Example 1: Sort numbers in ascending order**  
```js
let numbers = [10, 3, 7, 1];
numbers.sort((a, b) => a - b);
console.log(numbers);  // Output: [1, 3, 7, 10]
```

✅ **Example 2: Sort words alphabetically**  
```js
let words = ["banana", "apple", "cherry"];
words.sort();
console.log(words);  // Output: ["apple", "banana", "cherry"]
```

✅ **Example 3: Sort numbers in descending order**  
```js
let numbers = [10, 3, 7, 1];
numbers.sort((a, b) => b - a);
console.log(numbers);  // Output: [10, 7, 3, 1]
```

---

## **📝 Task for You**  
1️⃣ Use `map()` to create an array of **squares** from `[1, 2, 3, 4, 5]`.  
2️⃣ Use `filter()` to extract only names starting with `"A"` from `["Alice", "Bob", "Anna", "Charlie"]`.  
3️⃣ Use `reduce()` to find the **product** of `[2, 3, 4]`.  
4️⃣ Use `sort()` to sort an array of numbers in **descending order**.  

---

🎯 **[Next Lesson (Day 9-2): JavaScript String Methods](../day_9-2/README.md)!**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)