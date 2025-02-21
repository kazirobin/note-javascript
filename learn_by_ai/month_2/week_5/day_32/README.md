# **📚 Day 32: Longest Substring & Valid Anagram**  

Today, we’ll cover:  
✅ **Longest Substring Without Repeating Characters** (using the sliding window technique)  
✅ **Valid Anagram** (checking if two strings are anagrams of each other)  

---

## **🔹 1. Longest Substring Without Repeating Characters**  

📌 **Problem Statement**: Given a string, find the length of the longest substring without repeating characters.

### **✅ Approach**: Using Sliding Window
1. Use two pointers to create a window.
2. Expand the right pointer to include new characters.
3. If a character repeats, move the left pointer to shrink the window until there are no repeats.
4. Track the maximum length of valid substrings.

**Code Example**:
```js
function lengthOfLongestSubstring(s) {
    const charIndexMap = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (charIndexMap[s[right]] !== undefined) {
            left = Math.max(charIndexMap[s[right]] + 1, left);
        }
        charIndexMap[s[right]] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
```

---

## **🔹 2. Valid Anagram**  

📌 **Problem Statement**: Given two strings, determine if they are anagrams of each other.

### **✅ Approach**: Using Frequency Count
1. Normalize the strings by removing spaces and converting to the same case.
2. Count the frequency of each character in both strings.
3. Compare the frequency counts.

**Code Example**:
```js
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}

// Example usage
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
```

### **✅ Alternative Approach**: Sorting
1. Normalize the strings.
2. Sort the characters and compare the results.

**Code Example**:
```js
function isAnagramSort(s, t) {
    const normalize = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(s) === normalize(t);
}

// Example usage
console.log(isAnagramSort("anagram", "nagaram")); // Output: true
console.log(isAnagramSort("rat", "car")); // Output: false
```

---

## **📝 Tasks for You**  
1️⃣ Solve **LeetCode 3: Longest Substring Without Repeating Characters** using the sliding window technique if you haven't yet.  
2️⃣ Solve **LeetCode 242: Valid Anagram** using the frequency count method.  

---

🎯 **Next Lesson (Day 33): More String Problems!**  
Let me know if you have any questions or need help with the tasks! 🚀