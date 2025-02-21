# **📚 Day 34: Mini Project - String Formatter**  

Today, we’ll work on a mini project that focuses on creating a **String Formatter**. This project will help you apply string manipulation techniques and enhance your understanding of JavaScript strings.

---

## **🔹 Project Overview: String Formatter**  

📌 The **String Formatter** will include several functions to manipulate strings according to user-defined rules. Here are some features we can implement:

### **✅ Features**:
1. **Trim Whitespace**: Remove leading and trailing whitespace from a string.
2. **Capitalize**: Capitalize the first letter of each word in a string.
3. **Convert to Lowercase/Uppercase**: Convert the entire string to lowercase or uppercase.
4. **Replace Substring**: Replace all occurrences of a specified substring with another substring.
5. **Count Words**: Count the number of words in a string.

---

## **🔹 Implementation**  

### **Step 1: Set Up the Project**  
Create a new JavaScript file called `stringFormatter.js` and set up the basic structure.  

### **Step 2: Implement the Functions**  

**1. Trim Whitespace**:  
```js
function trimWhitespace(str) {
    return str.trim();
}
```

**2. Capitalize First Letter of Each Word**:  
```js
function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}
```

**3. Convert to Lowercase**:  
```js
function toLowerCase(str) {
    return str.toLowerCase();
}
```

**4. Convert to Uppercase**:  
```js
function toUpperCase(str) {
    return str.toUpperCase();
}
```

**5. Replace Substring**:  
```js
function replaceSubstring(str, target, replacement) {
    return str.split(target).join(replacement);
}
```

**6. Count Words**:  
```js
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
```

### **Step 3: Test the Functions**  
You can create a simple test section in your code to verify that the functions work as expected.

**Code Example**:
```js
const testString = "  hello world! this is a string formatter project.  ";

console.log("Original String:", testString);
console.log("Trimmed:", trimWhitespace(testString));
console.log("Capitalized:", capitalizeWords(testString));
console.log("Lowercase:", toLowerCase(testString));
console.log("Uppercase:", toUpperCase(testString));
console.log("Replaced 'string' with 'text':", replaceSubstring(testString, "string", "text"));
console.log("Word Count:", countWords(testString));
```

---

## **📝 Tasks for You**  
1️⃣ Implement the **String Formatter** in a JavaScript file.  
2️⃣ Test each function to ensure they work correctly.  
3️⃣ Add any additional features or enhancements you think would be useful (e.g., handling special characters, supporting different languages, etc.).  

---

🎯 **[Next Lesson (Day 35): Review & Optimization Techniques](../day_35/README.md)!**  
Let me know if you have any questions or need help with the project! 🚀

[**Back to Home**](../../../)