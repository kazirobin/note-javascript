### **📚 Day 7: Practice LeetCode Easy Problems**  
Today, we will solve **LeetCode Easy Problems** and learn:  
✅ **FizzBuzz** (LeetCode #412)  
✅ **Reverse String** (LeetCode #344)  
✅ More Easy LeetCode Problems  

---

## **🔹 1. Problem: FizzBuzz (LeetCode #412)**  
📌 **Problem Statement:**  
Write a function that prints numbers **from 1 to `n`** with the following rules:  
- If divisible by `3`, print `"Fizz"`.  
- If divisible by `5`, print `"Buzz"`.  
- If divisible by `3` and `5`, print `"FizzBuzz"`.  
- Otherwise, print the number.  

---

### **✅ Solution Approach:**  
1️⃣ Loop from `1` to `n`.  
2️⃣ Check conditions:  
   - If `i % 3 === 0 && i % 5 === 0` → `"FizzBuzz"`  
   - If `i % 3 === 0` → `"Fizz"`  
   - If `i % 5 === 0` → `"Buzz"`  
   - Else → Print the number as a string.  
3️⃣ Store results in an array and return.  

---

### **✅ Code:**
```js
function fizzBuzz(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
}

console.log(fizzBuzz(15));
```

---

### **✅ Output:**
```
["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", 
 "11", "Fizz", "13", "14", "FizzBuzz"]
```

---

## **🔹 2. Problem: Reverse String (LeetCode #344)**  
📌 **Problem Statement:**  
Write a function that **reverses a string** (array of characters) **in-place**.  

---

### **✅ Solution Approach:**  
1️⃣ Use **two pointers** (start and end).  
2️⃣ Swap characters **until pointers meet in the middle**.  
3️⃣ **Modify the input array** (no extra space).  

---

### **✅ Code:**
```js
function reverseString(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]]; // Swap characters
        left++;
        right--;
    }

    return s; // Return the modified array
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
```

---

### **✅ Output:**
```
["o", "l", "l", "e", "h"]
```

---

## **🔹 3. Problem: Two Sum (LeetCode #1)**  
📌 **Problem Statement:**  
Given an array of numbers, return **indices** of two numbers that sum up to a target.  

---

### **✅ Solution Approach:**  
1️⃣ Use a **hashmap (object)** to store numbers & their indices.  
2️⃣ Check if `target - current number` exists in hashmap.  
3️⃣ If found, return `[index1, index2]`.  

---

### **✅ Code:**
```js
function twoSum(nums, target) {
    let map = {}; // Stores number and its index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // Found indices
        }
        map[nums[i]] = i; // Store in hashmap
    }

    return []; // No solution found
}

console.log(twoSum([2, 7, 11, 15], 9));
```

---

### **✅ Output:**
```
[0, 1]
```

---

## **🔹 4. Problem: Valid Palindrome (LeetCode #125)**  
📌 **Problem Statement:**  
Check if a given string is a **palindrome** (ignoring spaces & special characters).  

---

### **✅ Solution Approach:**  
1️⃣ Convert the string to **lowercase**.  
2️⃣ Remove **non-alphanumeric characters** using regex.  
3️⃣ Compare the **string with its reverse**.  

---

### **✅ Code:**
```js
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Remove non-alphanumeric
    return s === s.split("").reverse().join(""); // Compare with reversed string
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
```

---

### **✅ Output:**
```
true
false
```

---

## **📝 Task for You**
1️⃣ Solve **FizzBuzz** and **Reverse String** on [LeetCode](https://leetcode.com/).  
2️⃣ Try solving **Two Sum** without using extra space.  
3️⃣ Solve **Valid Palindrome** for different test cases.  

---

🎯 **Next Lesson (Day 8): JavaScript Objects (Properties, Methods, & Destructuring)!**  
Let me know if you have any questions! 🚀
[**Back to Home**](../../../)