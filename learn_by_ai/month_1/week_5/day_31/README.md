# **📚 Day 31: String Manipulation & Anagrams**  

Today, we’ll cover:  
✅ **String Manipulation Techniques** (methods for working with strings in JavaScript)  
✅ **Anagrams** (understanding and solving problems related to rearranging characters)  

---

## **🔹 1. String Manipulation Techniques**  

📌 JavaScript **strings** are used to represent text and can be manipulated in various ways.

### **✅ Common String Methods**  
- **Length**: `string.length` gives the length of the string.
- **Accessing Characters**: You can access characters using bracket notation `string[index]`.
- **Substring Methods**:  
  - `slice(start, end)`: Extracts a section of the string.
  - `substring(start, end)`: Similar to `slice`, but does not accept negative indices.
  - `substr(start, length)`: Extracts a substring based on starting index and length.

**Code Example**:
```js
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str[0]); // "H"
console.log(str.slice(7, 12)); // "World"
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substr(7, 5)); // "World"
```

### **✅ String Manipulation Methods**  
- **`toLowerCase()`** / **`toUpperCase()`**: Converts string to lower or upper case.
- **`trim()`**: Removes whitespace from both ends of the string.
- **`replace(searchValue, newValue)`**: Replaces a specified value with another value in a string.
- **`split(separator)`**: Splits a string into an array of substrings.

**Code Example**:
```js
let text = "   Hello, JavaScript!   ";
console.log(text.trim()); // "Hello, JavaScript!"
console.log(text.toLowerCase()); // "   hello, javascript!   "
console.log(text.replace("JavaScript", "JS")); // "   Hello, JS!   "
console.log(text.split(" ")); // ["", "", "", "Hello,", "JavaScript!", "", "", ""]
```

---

## **🔹 2. Understanding Anagrams**  

📌 An anagram is a rearrangement of the letters of a word or phrase to form a new word or phrase.

### **✅ Key Properties**:
- Two strings are anagrams if they contain the same characters in the same frequency.

### **✅ Example Problem**: Check if two strings are anagrams of each other.
**Approach**:
1. Normalize the strings by converting them to the same case and removing spaces.
2. Sort the characters of both strings and compare them.

**Code Example**:
```js
function areAnagrams(str1, str2) {
    const normalize = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// Example usage
console.log(areAnagrams("Listen", "Silent")); // true
console.log(areAnagrams("Hello", "World")); // false
```

### **✅ Another Approach**: Using Frequency Count
- Create a frequency count of characters for both strings and compare the counts.

**Code Example**:
```js
function areAnagramsFrequency(str1, str2) {
    const countChars = (str) => {
        const charCount = {};
        for (const char of str.replace(/\s+/g, '').toLowerCase()) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        return charCount;
    };

    const count1 = countChars(str1);
    const count2 = countChars(str2);

    return JSON.stringify(count1) === JSON.stringify(count2);
}

// Example usage
console.log(areAnagramsFrequency("Listen", "Silent")); // true
console.log(areAnagramsFrequency("Hello", "World")); // false
```

---

## **📝 Tasks for You**  
1️⃣ Implement `reverseString(str)`, which reverses a string using string manipulation techniques.  
2️⃣ Solve **LeetCode 242: Valid Anagram** using any of the methods discussed above.  

---

🎯 **Next Lesson (Day 32): **LeetCode:** Longest Substring, Valid Anagram!**  
Let me know if you have any questions or need help with the tasks! 🚀