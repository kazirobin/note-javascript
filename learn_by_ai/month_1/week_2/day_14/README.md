# **📚 Day 14: LeetCode Problems – Two Sum & Palindrome Number**  

Today, we’ll solve two common LeetCode problems:  
✅ **Two Sum** → Find two numbers that add up to a target  
✅ **Palindrome Number** → Check if a number is a palindrome  

---

## **🔹 1. Two Sum (LeetCode #1 – Easy)**  
📌 Given an array `nums` and a target `sum`, return the **indices** of the two numbers that add up to the target.  
📌 **Input:** `nums = [2, 7, 11, 15], target = 9`  
📌 **Output:** `[0, 1]` (since `2 + 7 = 9`)  

✅ **Approach 1: Brute Force (O(n²))**  
🔹 Loop through every pair and check if the sum equals the target.  
```js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```

✅ **Approach 2: Hash Map (O(n) – Optimal)**  
🔹 Use a **hash map (object)** to store numbers and their indices.  
```js
function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```
**Why Hash Map?**  
- We **store values** in a map while iterating.  
- For each number, we check if the **complement exists**.  
- If yes → return the indices. If no → continue.  

---

## **🔹 2. Palindrome Number (LeetCode #9 – Easy)**  
📌 **A number is a palindrome** if it reads the same forward and backward.  
📌 **Input:** `x = 121`  
📌 **Output:** `true` (since `121` is the same backward)  
📌 **Edge Cases:** Negative numbers (`-121`) are **not** palindromes!  

✅ **Approach 1: Convert to String (O(n))**  
🔹 Convert the number to a string, reverse it, and compare.  
```js
function isPalindrome(x) {
  let str = x.toString();
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10));   // Output: false
```

✅ **Approach 2: Reverse Half the Number (O(log n) – Optimal)**  
🔹 **Without converting to a string**, we reverse half the number.  
```js
function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false; 

  let reversed = 0;
  let original = x;

  while (x > reversed) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return x === reversed || x === Math.floor(reversed / 10);
}

console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10));   // Output: false
```
**Why Reverse Half the Number?**  
- Instead of reversing the entire number, we reverse **half** and compare.  
- If the first half equals the reversed second half → it's a palindrome.  

---

## **📝 Task for You**  
1️⃣ Modify `twoSum()` to return **all pairs** instead of just one.  
2️⃣ Solve **Palindrome Number** using a `for` loop instead of `.reverse()`.  
3️⃣ Try solving **Two Sum** with sorting and two-pointer approach.  

---

🎯 **[Next Lesson (Day 15): `this` Keyword, Lexical Scope](../../week_3/day_15/) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)