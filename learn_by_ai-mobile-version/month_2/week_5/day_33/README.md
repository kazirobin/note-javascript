# **📚 Day 33: Trapping Rain Water**  

Today, we’ll cover:  
✅ **Trapping Rain Water** (solving the problem of trapping rainwater between elevations)  

---

## **🔹 1. Trapping Rain Water Problem**  

📌 **Problem Statement**: Given an array of non-negative integers representing the elevation of each bar, compute how much water it can trap after raining.

### **✅ Approach 1: Brute Force (Inefficient)**
- For each element, find the maximum height to the left and right.
- The trapped water above each bar is determined by the smaller of the two maximum heights minus the height of the bar.

This approach results in a time complexity of **O(n²)** because for each bar, you have to scan the array to the left and right to find the maximum heights.

### **✅ Approach 2: Using Two Arrays (O(n))**
- Create two arrays:
  - `leftMax[i]`: The maximum height from the left up to index `i`.
  - `rightMax[i]`: The maximum height from the right up to index `i`.
- For each element, the trapped water is `min(leftMax[i], rightMax[i]) - height[i]`.

**Code Example**:
```js
function trap(height) {
    if (height.length === 0) return 0;

    const leftMax = Array(height.length).fill(0);
    const rightMax = Array(height.length).fill(0);
    let waterTrapped = 0;

    // Fill the leftMax array
    leftMax[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Fill the rightMax array
    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate trapped water
    for (let i = 0; i < height.length; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return waterTrapped;
}

// Example usage
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
```

### **✅ Approach 3: Optimized with Two Pointers (O(n))**
- Use two pointers, one at the left and one at the right.
- Keep track of the left and right maximum heights.
- Move the pointers towards the center, calculating the trapped water at each step.

**Code Example**:
```js
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            waterTrapped += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            waterTrapped += rightMax - height[right];
            right--;
        }
    }

    return waterTrapped;
}

// Example usage
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
```

---

## **📝 Tasks for You**  
1️⃣ Solve **LeetCode 42: Trapping Rain Water** using either the **two arrays approach** or the **optimized two pointers approach**.  
2️⃣ Try implementing the optimized solution on your own to improve your understanding!  

---

🎯 **[Next Lesson (Day 34): Mini Project: String Formatter](../day_34/README.md)!**  
Let me know if you have any questions or need help with the tasks! 🚀

[**Back to Home**](../../../README.md)