# **📚 Day 38: LeetCode - Group Anagrams**  

Today, we’ll solve the **Group Anagrams** problem, which involves grouping words that are anagrams of each other using a HashMap.  

---

## **🔹 Problem Statement**  

Given an array of strings, group the anagrams together. You can return the answer in any order.

### **Example**:
```plaintext
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
```

### **Explanation**: 
All words that are anagrams will be grouped together.

---

## **🔹 Approach**  

1. **Use a HashMap**: Create a HashMap to map sorted strings to their corresponding list of anagrams.
2. **Sort Each String**: For each string in the input, sort the characters to create a key.
3. **Group Anagrams**: Use the sorted string as a key in the HashMap and append the original string to the corresponding list.

### **Code Implementation**:
```js
function groupAnagrams(strs) {
    const map = new Map(); // Create a HashMap

    for (const str of strs) {
        // Sort the string to create a key
        const sortedStr = str.split('').sort().join('');
        
        // Check if the key already exists
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []); // Create a new list for the key
        }
        
        // Add the original string to the list
        map.get(sortedStr).push(str);
    }

    // Convert the HashMap values to an array
    return Array.from(map.values());
}

// Example usage
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
```

### **Time Complexity**:  
- The time complexity is **O(n * k log k)**, where n is the number of strings and k is the maximum length of a string. This accounts for sorting each string.

### **Space Complexity**:  
- The space complexity is **O(n)**, as we store the anagrams in the HashMap.

---

## **📝 Tasks for You**  
1️⃣ Test the `groupAnagrams` function with different inputs to ensure it works correctly.  
2️⃣ Try implementing a solution without sorting the strings (e.g., by counting character frequencies) to see how the performance differs.

---

🎯 **Next Lesson (Day 39): Exploring Dynamic Programming Techniques!**  
Let me know if you have any questions or need help with the implementation! 🚀