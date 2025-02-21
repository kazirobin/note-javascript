# **📚 Day 29: Array Basics & Two Pointers Technique**  

Today, we’ll cover:  
✅ **Array Basics** (`push`, `pop`, `shift`, `unshift`)  
✅ **Two Pointers Technique** (for solving array problems efficiently)  

---

## **🔹 1. Array Basics in JavaScript**  

📌 JavaScript **arrays** store multiple values in a single variable.  

✅ **Declaring Arrays:**  
```js
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

✅ **Adding Elements (`push`, `unshift`)**  
```js
fruits.push("Mango"); // Adds to the end
fruits.unshift("Grapes"); // Adds to the beginning
console.log(fruits); // ["Grapes", "Apple", "Banana", "Orange", "Mango"]
```

✅ **Removing Elements (`pop`, `shift`)**  
```js
fruits.pop(); // Removes from the end
fruits.shift(); // Removes from the beginning
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

✅ **Accessing & Updating Elements:**  
```js
console.log(fruits[1]); // "Banana"
fruits[1] = "Blueberry"; // Update element
console.log(fruits); // ["Apple", "Blueberry", "Orange"]
```

✅ **Looping Through Arrays (`forEach`, `map`)**  
```js
fruits.forEach(fruit => console.log(fruit)); // Prints each fruit
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BLUEBERRY", "ORANGE"]
```

---

## **🔹 2. Two Pointers Technique**  

📌 The **Two Pointers Technique** is used for solving problems efficiently by having two indices (pointers) move towards each other.  

### **✅ Example 1: Check if an Array is a Palindrome**  
📌 A palindrome is the same forwards and backwards, like `[1, 2, 3, 2, 1]`.  

```js
function isPalindrome(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome([1, 2, 3, 2, 1])); // true
console.log(isPalindrome([1, 2, 3, 4]));   // false
```
🔹 We use **two pointers** (`left` and `right`) and compare values while moving towards the center.  

---

### **✅ Example 2: Finding Two Sum (Sorted Array)**  
📌 Given a **sorted array** and a target sum, find two numbers that add up to the target.  

```js
function twoSumSorted(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) return [left, right];
        else if (sum < target) left++;
        else right--;
    }
    return [];
}

console.log(twoSumSorted([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(twoSumSorted([2, 3, 5, 8, 11], 10)); // [0, 3]
```
🔹 Since the array is **sorted**, we can use **two pointers** to find the sum efficiently in **O(n) time** instead of **O(n²)** using nested loops.  

---

## **📝 Task for You**  
1️⃣ Implement `reverseArray(arr)`, which reverses an array using the **two-pointer technique**.  
2️⃣ Solve **LeetCode 125: Valid Palindrome** using **two pointers**.  

---

🎯 **[Next Lesson (Day 30): Sliding Window Technique](../day_30/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../README.md)