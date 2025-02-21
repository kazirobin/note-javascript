# **📚 Day 30: Sliding Window Technique & Subarrays**  

Today, we’ll cover:  
✅ **Sliding Window Technique** (for optimizing subarray problems)  
✅ **Subarrays** (understanding and solving problems related to contiguous segments of an array)  

---

## **🔹 1. Sliding Window Technique**  

📌 The **Sliding Window Technique** is an efficient way to find subarrays or substrings by maintaining a range (window) of elements in an array.  

### **✅ Concept**  
- A **window** is defined by two pointers that define the start and end of the range.
- This technique is particularly useful for problems involving sums, counts, or other aggregates of contiguous subarrays.

### **✅ Fixed Size Sliding Window**  
**Example Problem**: Find the maximum sum of any contiguous subarray of size `k`.

**Approach**:
1. Calculate the sum of the first `k` elements.
2. Slide the window by adding the next element and removing the first element of the previous window.
3. Track the maximum sum.

**Code Example**:
```js
function maxSum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSum(arr, k)); // Output: 9
```

---

### **✅ Dynamic Size Sliding Window**  
**Example Problem**: Find the length of the longest substring with at most `k` distinct characters.

**Approach**:
1. Use two pointers to create a window.
2. Expand the right pointer to include new characters.
3. If the window contains more than `k` distinct characters, move the left pointer to shrink the window.
4. Track the maximum length of valid windows.

**Code Example**:
```js
function longestSubstringKDistinct(s, k) {
    let left = 0;
    let maxLength = 0;
    const charCount = {};

    for (let right = 0; right < s.length; right++) {
        charCount[s[right]] = (charCount[s[right]] || 0) + 1;

        while (Object.keys(charCount).length > k) {
            charCount[s[left]]--;
            if (charCount[s[left]] === 0) {
                delete charCount[s[left]];
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
const s = "eceba";
const k = 2;
console.log(longestSubstringKDistinct(s, k)); // Output: 3
```

---

## **🔹 2. Understanding Subarrays**  
📌 A **subarray** is a contiguous segment of an array. 

### **✅ Key Properties**:
- A subarray can be as short as one element or as long as the entire array.
- The number of possible subarrays in an array of size `n` is `n * (n + 1) / 2`.

### **✅ Example Problem**: Find all subarrays of a given array.
**Code Example**:
```js
function getAllSubarrays(arr) {
    const subarrays = [];
    for (let start = 0; start < arr.length; start++) {
        for (let end = start; end < arr.length; end++) {
            subarrays.push(arr.slice(start, end + 1));
        }
    }
    return subarrays;
}

// Example usage
const arr = [1, 2, 3];
console.log(getAllSubarrays(arr)); // Output: [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]
```

---

## **📝 Tasks for You**  
1️⃣ Implement `maxSubarraySum(arr, k)`, which finds the maximum sum of any contiguous subarray of size `k`.  
2️⃣ Solve **LeetCode 3: Longest Substring Without Repeating Characters** using the **sliding window technique**.  

---

🎯 **[Next Lesson (Day 31): String Manipulation, Anagrams](../day_31/README.md)!**  
Let me know if you have any questions or need help with the tasks! 🚀

[**Back to Home**](../../../)