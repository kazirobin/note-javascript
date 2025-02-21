# **📚 Day 37: LeetCode - Two Sum (HashMap Solution)**  

Today, we’ll focus on solving the **Two Sum** problem using a **HashMap** (or Object) approach, which offers an efficient solution.  

---

## **🔹 Problem Statement**  

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

### **Example**:
```plaintext
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
```

### **Explanation**: 
Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

---

## **🔹 HashMap Solution**  

### **Approach**  
1. Create an empty HashMap (Object).
2. Iterate through the array.
3. For each element, calculate the difference between the target and the current element.
4. Check if the difference exists in the HashMap:
   - If it does, return the indices.
   - If not, store the current element with its index in the HashMap.

### **Code Implementation**:
```js
function twoSum(nums, target) {
    const map = new Map(); // Create a HashMap

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement

        // Check if the complement exists in the HashMap
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return the indices
        }
        
        // Add the current number and its index to the HashMap
        map.set(nums[i], i);
    }
    return []; // Return an empty array if no solution is found
}

// Example usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
```

### **Time Complexity**:  
- The time complexity is **O(n)**, where n is the number of elements in the array. This is because we traverse the array only once.

### **Space Complexity**:  
- The space complexity is also **O(n)** due to the HashMap storing each element.

---

## **📝 Tasks for You**  
1️⃣ Test the `twoSum` function with different inputs to ensure it works correctly.  
2️⃣ Try modifying the function to return all unique pairs that sum to the target, if applicable.

---

🎯 **[Next Lesson (Day 38): LeetCode: Group Anagrams](../day_38/README.md) !**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../README.md)