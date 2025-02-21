# **📚 Day 39: LeetCode - Longest Consecutive Sequence**  

Today, we’ll solve the **Longest Consecutive Sequence** problem, which involves finding the longest sequence of consecutive integers in an unsorted array.  

---

## **🔹 Problem Statement**  

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

### **Example**:
```plaintext
Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
```

### **Explanation**: 
The longest consecutive elements sequence is `[1, 2, 3, 4]`, which has a length of `4`.

---

## **🔹 Approach**  

1. **Use a HashSet**: Store all numbers in a HashSet to allow O(1) average time complexity for lookups.
2. **Iterate Through Numbers**: For each number, check if it's the start of a sequence by checking if `num - 1` is not in the set.
3. **Count Consecutive Numbers**: If it is the start of a sequence, count how many consecutive numbers exist starting from that number.

### **Code Implementation**:
```js
function longestConsecutive(nums) {
    const numSet = new Set(nums); // Create a HashSet
    let longestStreak = 0;

    for (const num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
```

### **Time Complexity**:  
- The time complexity is **O(n)**, where n is the number of elements in the array. This is because we traverse the set for each unique element.

### **Space Complexity**:  
- The space complexity is **O(n)** for storing the elements in the HashSet.

---

## **📝 Tasks for You**  
1️⃣ Test the `longestConsecutive` function with different inputs to ensure it works correctly.  
2️⃣ Try to implement a naive approach using sorting and compare the performance with the HashSet approach.

---

🎯 **[Next Lesson (Day 40): Project: URL Shortener Using HashMap](../day_40/README.md)!**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../)