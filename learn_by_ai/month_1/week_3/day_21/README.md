# **📚 Day 21: LeetCode Problems - Group Anagrams, Merge Intervals**  

Today, we'll solve:  
✅ **Group Anagrams** (`Medium`)  
✅ **Merge Intervals** (`Medium`)  

---

## **🔹 1. Group Anagrams**  
📌 **Problem:** Given an array of strings, group the anagrams together.  
📌 **Example:**  
```js
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```
📌 **Solution Approach:**  
1️⃣ **Sort each word** → Two anagrams will have the same sorted version.  
2️⃣ **Use a HashMap** (`Map`) → Store words with the same sorted version together.  
3️⃣ **Return the grouped anagrams.**  

✅ **JavaScript Solution:**  
```js
function groupAnagrams(strs) {
  let map = new Map();

  for (let str of strs) {
    let sortedStr = str.split('').sort().join(''); // Sort characters
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }

  return Array.from(map.values());
}

// Test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
```
🔹 **Time Complexity:** `O(n * k log k)`, where `n` is the number of words and `k` is the max length of a word.  

---

## **🔹 2. Merge Intervals**  
📌 **Problem:** Given a list of intervals, merge all overlapping intervals.  
📌 **Example:**  
```js
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
```
📌 **Solution Approach:**  
1️⃣ **Sort the intervals** based on the start time.  
2️⃣ **Iterate through the intervals** and merge overlapping ones.  
3️⃣ **Store merged intervals in a result array.**  

✅ **JavaScript Solution:**  
```js
function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]); // Sort by start time
  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = result[result.length - 1];
    let curr = intervals[i];

    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1]); // Merge overlapping intervals
    } else {
      result.push(curr);
    }
  }

  return result;
}

// Test
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
```
🔹 **Time Complexity:** `O(n log n)`, due to sorting.  

---

## **📝 Task for You**  
1️⃣ Modify `groupAnagrams()` to handle case-insensitive words.  
2️⃣ Modify `mergeIntervals()` to handle single-element intervals correctly.  

---

🎯 **Next Lesson (Day 22): Callbacks, Event Loop!**  
Let me know if you have any questions! 🚀
[**Back to Home**](../../../)