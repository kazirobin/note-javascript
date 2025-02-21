# **📚 Day 55: LeetCode - Word Search (Backtracking)**  

Today, we’ll solve the **Word Search** problem using **Backtracking**, a powerful technique for exploring all possible solutions by trying different options and undoing choices when they lead to failure.  

---

## **🔹 Problem Statement: Word Search**  

📌 Given an `m x n` grid of characters and a word, determine if the word exists in the grid. The word can be formed by **adjacent** letters (horizontally or vertically), but **cannot be reused** in the same word path.

### **Example 1**:
```plaintext
Input:
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED"

Output: true
```

### **Example 2**:
```plaintext
Input:
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "SEE"

Output: true
```

### **Example 3**:
```plaintext
Input:
board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCB"

Output: false
```

---

## **🔹 Approach: Backtracking**  

🔹 **Backtracking** is used to explore possible paths recursively. If a path does not lead to the correct solution, we backtrack and try another.  

### **Steps to Solve the Problem**:
1. **Iterate** through the grid and start a search if the first character matches.  
2. **Use DFS (Depth-First Search)** to explore all possible paths (up, down, left, right).  
3. **Mark visited cells temporarily** to avoid reusing characters.  
4. **Backtrack** if the current path does not lead to a solution.  

---

## **🔹 JavaScript Implementation**  

```js
function exist(board, word) {
    if (!board || board.length === 0) return false;

    const rows = board.length;
    const cols = board[0].length;

    const dfs = (r, c, index) => {
        if (index === word.length) return true; // Found the word
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) return false;

        // Mark as visited
        let temp = board[r][c];
        board[r][c] = '#';

        // Explore all directions
        let found = dfs(r + 1, c, index + 1) || // Down
                    dfs(r - 1, c, index + 1) || // Up
                    dfs(r, c + 1, index + 1) || // Right
                    dfs(r, c - 1, index + 1);   // Left

        // Restore the character (Backtrack)
        board[r][c] = temp;

        return found;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }

    return false;
}

// Example usage
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE"));    // true
console.log(exist(board, "ABCB"));   // false
```

---

## **🔹 Complexity Analysis**  
🔹 **Time Complexity**: **O(m × n × 4^L)**, where `m` and `n` are grid dimensions and `L` is the word length.  
🔹 **Space Complexity**: **O(L)** (recursion depth).  

---

## **📝 Tasks for You**  
1️⃣ Modify the function to return **all occurrences** of the word instead of just `true` or `false`.  
2️⃣ Solve **LeetCode 212: Word Search II**, which requires finding multiple words in the grid.  
3️⃣ Optimize the solution using **Trie + Backtracking** for multiple words.  

---

🎯 **[Next Lesson (Day 56): **Revision & Practice](../day_56/README.md)!**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)