Here's a detailed explanation and solution for each basic problem:

---

### **1️⃣ Find the Largest Number in an Array**
#### **Problem:**
Write a function that takes an array of numbers and returns the largest number.

#### **Solution:**
We loop through the array and compare each element to find the maximum.

```javascript
function findLargestNumber(arr) {
    let max = arr[0]; // Assume the first element is the largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a bigger number is found
        }
    }
    return max;
}

console.log(findLargestNumber([10, 5, 8, 20, 3])); // Output: 20
```

---

### **2️⃣ Reverse a String (Without `.reverse()`)**
#### **Problem:**
Reverse a string without using the built-in `.reverse()` method.

#### **Solution:**
Loop through the string from the end and construct the reversed string.

```javascript
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"
```

---

### **3️⃣ Check if a Number is Even or Odd**
#### **Problem:**
Write a function that checks whether a number is even or odd.

#### **Solution:**
Use the modulo operator (`%`). If `num % 2 === 0`, the number is even; otherwise, it's odd.

```javascript
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEvenOrOdd(10)); // Output: Even
console.log(isEvenOrOdd(7));  // Output: Odd
```

---

### **4️⃣ Convert Celsius to Fahrenheit and Vice Versa**
#### **Problem:**
Convert a temperature from Celsius to Fahrenheit and vice versa.

#### **Solution:**
Use the formulas:  
- `Fahrenheit = (Celsius × 9/5) + 32`
- `Celsius = (Fahrenheit - 32) × 5/9`

```javascript
function convertTemperature(value, type) {
    if (type === "C") {
        return (value * 9/5) + 32; // Celsius to Fahrenheit
    } else if (type === "F") {
        return (value - 32) * 5/9; // Fahrenheit to Celsius
    } else {
        return "Invalid Type";
    }
}

console.log(convertTemperature(0, "C")); // Output: 32 (Fahrenheit)
console.log(convertTemperature(32, "F")); // Output: 0 (Celsius)
```

---

### **5️⃣ Count the Number of Vowels in a String**
#### **Problem:**
Count how many vowels (`a, e, i, o, u`) are in a given string.

#### **Solution:**
Loop through the string and check each character.

```javascript
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello world")); // Output: 3
```

---

### **6️⃣ Find the Factorial of a Number Using Recursion**
#### **Problem:**
Find the factorial of a number (e.g., `5! = 5 × 4 × 3 × 2 × 1 = 120`).

#### **Solution:**
Use recursion: `factorial(n) = n * factorial(n - 1)`

```javascript
function factorial(n) {
    if (n === 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120
```

---

### **7️⃣ Find the Sum of All Numbers in an Array**
#### **Problem:**
Write a function that returns the sum of all elements in an array.

#### **Solution:**
Loop through the array and keep adding each number.

```javascript
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

---

### **8️⃣ Find the Longest Word in a String**
#### **Problem:**
Find the longest word in a given sentence.

#### **Solution:**
Split the string into words and find the longest one.

```javascript
function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
```

---

### **9️⃣ Remove Duplicates from an Array**
#### **Problem:**
Remove duplicate values from an array.

#### **Solution 1 (Using Set):**
A `Set` automatically removes duplicates.

```javascript
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
```

#### **Solution 2 (Using Loop and Object):**
Manually filter unique values.

```javascript
function removeDuplicates(arr) {
    let unique = [];
    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
```

---

### **🔟 Check if a String is a Palindrome**
#### **Problem:**
Check if a string reads the same backward as forward.

#### **Solution:**
Compare the original string with its reversed version.

```javascript
function isPalindrome(str) {
    let reversed = str.split("").reverse().join(""); // Reverse the string
    return str === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

---

## **🎯 What’s Next?**
✅ Solve these problems step by step.  
✅ Try optimizing your solutions.  
✅ Once you're comfortable, move to **Intermediate Problems**!  

Would you like **exercises or variations** on these problems? 🚀