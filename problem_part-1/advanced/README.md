Here are **detailed explanations and solutions** for each **advanced JavaScript problem**:  

---

## **2️⃣1️⃣ Implement Memoization for Performance Optimization**
### **Problem:**
Improve function performance by caching previous results.

### **Solution:**
Use a **JavaScript object (cache)** to store previously computed values.

```javascript
function memoize(fn) {
    let cache = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key]; // Return cached result
        }
        let result = fn(...args);
        cache[key] = result; // Store in cache
        return result;
    };
}

// Example: Fibonacci with Memoization
const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

console.log(fib(10)); // Output: 55
console.log(fib(40)); // Much faster than a normal recursive Fibonacci!
```

---

## **2️⃣2️⃣ Find the Longest Substring Without Repeating Characters**
### **Problem:**
Find the length of the longest substring without repeating characters.

### **Solution:**
Use a **sliding window approach** to track unique characters.

```javascript
function longestUniqueSubstring(s) {
    let set = new Set();
    let maxLength = 0, left = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3 (Substring: "abc")
```

---

## **2️⃣3️⃣ Implement a Custom Deep Clone Function**
### **Problem:**
Deep clone an object to avoid reference issues.

### **Solution:**
Use recursion to copy nested objects.

```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    
    let clone = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        clone[key] = deepClone(obj[key]); // Recursively clone properties
    }
    return clone;
}

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = deepClone(obj1);
obj2.b.c = 10;

console.log(obj1.b.c); // Output: 2 (Original object is unaffected)
```

---

## **2️⃣4️⃣ Solve the Two-Sum Problem**
### **Problem:**
Find two numbers in an array that sum up to a target.

### **Solution:**
Use a **hash map** for O(n) efficiency.

```javascript
function twoSum(arr, target) {
    let map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices
        }
        map.set(arr[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```

---

## **2️⃣5️⃣ Implement Merge Sort**
### **Problem:**
Sort an array using **Merge Sort**.

### **Solution:**
Recursively divide the array and merge sorted halves.

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        sorted.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return [...sorted, ...left, ...right];
}

console.log(mergeSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
```

---

## **2️⃣6️⃣ Implement an LRU Cache**
### **Problem:**
Create a **Least Recently Used (LRU) Cache**.

### **Solution:**
Use **Map** to track usage order.

```javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Output: 1
```

---

## **2️⃣7️⃣ Find the Smallest Window in a String Containing All Characters of Another String**
### **Problem:**
Find the smallest substring that contains all characters of another string.

### **Solution:**
Use **Sliding Window** technique.

```javascript
function minWindow(s, t) {
    let map = new Map();
    for (let c of t) map.set(c, (map.get(c) || 0) + 1);

    let left = 0, minLength = Infinity, start = 0, count = t.length;

    for (let right = 0; right < s.length; right++) {
        if (map.get(s[right]) > 0) count--;
        map.set(s[right], (map.get(s[right]) || 0) - 1);

        while (count === 0) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            }
            map.set(s[left], (map.get(s[left]) || 0) + 1);
            if (map.get(s[left]) > 0) count++;
            left++;
        }
    }
    return minLength === Infinity ? "" : s.substr(start, minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
```

---

## **2️⃣8️⃣ Implement a Promise-Based Delay Function**
### **Problem:**
Create a `delay(ms)` function that resolves after `ms` milliseconds.

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("Delayed for 2 seconds"));
```

---

## **2️⃣9️⃣ Build a Mini Calculator to Parse Mathematical Expressions**
### **Problem:**
Evaluate a mathematical string like `"3 + 5 * 2"`.

### **Solution:**
Use **`eval()`** (or a safer parser).

```javascript
function evaluateExpression(exp) {
    return Function(`"use strict"; return (${exp})`)();
}

console.log(evaluateExpression("3 + 5 * 2")); // Output: 13
```

---

## **3️⃣0️⃣ Solve the "N-Queens" Problem Using Backtracking**
### **Problem:**
Find all possible solutions for `N` queens on an `N x N` board.

```javascript
function solveNQueens(n) {
    let result = [];
    function backtrack(board = [], row = 0) {
        if (row === n) {
            result.push(board.map(col => ".".repeat(col) + "Q" + ".".repeat(n - col - 1)));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!board.some((c, r) => c === col || r - row === c - col || r - row === col - c)) {
                backtrack([...board, col], row + 1);
            }
        }
    }
    backtrack();
    return result;
}

console.log(solveNQueens(4)); // Output: All valid placements of 4 queens
```

---

## **🚀 Next Steps**
- Try modifying the problems and optimize them further!  
- Would you like more **challenging problems**? 😊