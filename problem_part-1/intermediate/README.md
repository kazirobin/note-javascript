Here are detailed explanations and solutions for each **intermediate JavaScript problem**:

---

## **1️⃣1️⃣ Find the Second Largest Number in an Array**
### **Problem:**
Find the second largest number in an array without sorting.

### **Solution:**
Keep track of the **largest** and **second largest** numbers while looping.

```javascript
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }
    return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
```

---

## **1️⃣2️⃣ Sort an Array Without Using `.sort()`**
### **Problem:**
Sort an array in ascending order without using `.sort()`.

### **Solution:**
We use **Bubble Sort** to compare and swap elements.

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
```

---

## **1️⃣3️⃣ Check if Two Strings Are Anagrams**
### **Problem:**
Check if two words are anagrams (contain the same characters in any order).

### **Solution:**
Sort both strings and compare.

```javascript
function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
```

---

## **1️⃣4️⃣ Flatten a Nested Array**
### **Problem:**
Convert a deeply nested array into a single flat array.

### **Solution:**
Use recursion to loop through nested arrays.

```javascript
function flattenArray(arr) {
    return arr.reduce((flat, item) => 
        Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item), []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
```

---

## **1️⃣5️⃣ Generate a Random Password**
### **Problem:**
Generate a random password of a given length.

### **Solution:**
Use `Math.random()` to pick random characters.

```javascript
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

console.log(generatePassword(10)); // Output: Random 10-character password
```

---

## **1️⃣6️⃣ Implement a Simple Debounce Function**
### **Problem:**
Create a debounce function that delays execution.

### **Solution:**
Use `setTimeout()` to delay function execution.

```javascript
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage
const sayHello = debounce(() => console.log("Hello!"), 1000);
sayHello(); // Will only execute if not called again within 1 sec
```

---

## **1️⃣7️⃣ Implement Binary Search**
### **Problem:**
Search for a number in a sorted array using **Binary Search**.

### **Solution:**
Use recursion or iteration to halve the search space.

```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
```

---

## **1️⃣8️⃣ Capitalize the First Letter of Each Word**
### **Problem:**
Convert `"hello world"` into `"Hello World"`.

### **Solution:**
Use `.split()`, `.map()`, and `.join()`.

```javascript
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
```

---

## **1️⃣9️⃣ Find the Missing Number in an Array (1 to N)**
### **Problem:**
Find the missing number in an array of `1 to N`.

### **Solution:**
Calculate the expected sum and subtract the actual sum.

```javascript
function findMissingNumber(arr, n) {
    let total = (n * (n + 1)) / 2; // Sum of first N numbers
    let sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5)); // Output: 4
```

---

## **2️⃣0️⃣ Rotate an Array Left or Right by K Positions**
### **Problem:**
Rotate an array left or right by `K` positions.

### **Solution:**
Use `.splice()` and `.concat()`.

#### **Left Rotation**
```javascript
function rotateLeft(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]
```

#### **Right Rotation**
```javascript
function rotateRight(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateRight([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
```

---

## **🎯 Next Steps**
✔ Practice these problems by modifying the inputs.  
✔ Try optimizing solutions for better performance.  
✔ Move to **Advanced Problems** once comfortable.  

Would you like **more variations** on these problems? 🚀