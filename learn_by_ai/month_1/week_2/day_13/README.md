# **📚 Day 13: Recursion Basics in JavaScript**  

Today, we will learn about **recursion**, a fundamental programming concept where a function **calls itself** to solve a problem.  

✅ **What is Recursion?**  
✅ **Base Case & Recursive Case**  
✅ **Recursion vs. Iteration**  
✅ **Examples: Factorial, Fibonacci, Sum of Numbers**  

---

## **🔹 1. What is Recursion?**  
📌 A recursive function is a function that **calls itself** inside its definition.  

✅ **Example of a Simple Recursive Function:**  
```js
function countdown(n) {
  if (n <= 0) {  // Base Case
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);  // Recursive Call
}

countdown(5);
// Output: 5, 4, 3, 2, 1, "Done!"
```
---

## **🔹 2. Base Case & Recursive Case**  
📌 A **recursive function must have:**  
- **Base Case** → The condition that **stops recursion**.  
- **Recursive Case** → The function calls itself **with a smaller input**.  

✅ **Example: Factorial of a Number (n!)**  
Formula: `n! = n * (n-1)!`  
```js
function factorial(n) {
  if (n === 1) return 1;  // Base Case
  return n * factorial(n - 1);  // Recursive Case
}

console.log(factorial(5)); // Output: 120
```
---

## **🔹 3. Recursion vs. Iteration**  
📌 Some problems can be solved using **both recursion and loops**.  
✅ **Example: Sum of Numbers from 1 to n**  

🔹 **Recursive Approach:**  
```js
function sumRecursive(n) {
  if (n === 1) return 1;  // Base Case
  return n + sumRecursive(n - 1);  // Recursive Case
}

console.log(sumRecursive(5)); // Output: 15
```

🔹 **Iterative Approach (Loop):**  
```js
function sumIterative(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumIterative(5)); // Output: 15
```

✅ **Which one to use?**  
- Use **recursion** when the problem **naturally breaks down** into smaller subproblems.  
- Use **iteration (loops)** when performance is important, as recursion may cause **stack overflow** for large inputs.  

---

## **🔹 4. Fibonacci Series Using Recursion**  
📌 **Formula:** `F(n) = F(n-1) + F(n-2)`  
✅ **Example:**  
```js
function fibonacci(n) {
  if (n <= 1) return n;  // Base Case
  return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive Case
}

console.log(fibonacci(6)); // Output: 8
```

🔹 **Optimized Fibonacci Using Memoization** (Avoid Recalculations)  
```js
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];  // Check if already computed
  if (n <= 1) return n;  // Base Case
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(50)); // Output: Large Fibonacci number quickly
```
---

## **📝 Task for You**  
1️⃣ Write a **recursive function** to reverse a string.  
2️⃣ Write a **recursive function** to find the sum of an array `[1, 2, 3, 4, 5]`.  
3️⃣ Modify the **fibonacci function** to handle large inputs efficiently (use memoization).  
4️⃣ Compare recursion vs iteration for calculating the sum of numbers from `1 to n`.  

---

🎯 **Recursion Advanced (Tree Traversal, Backtracking)**  
# **📚 Day 14: Advanced Recursion (Tree Traversal, Backtracking)**  

Today, we will go **deeper into recursion** by learning about:  
✅ **Tree Traversal (DFS, BFS)** → How to traverse tree structures  
✅ **Backtracking** → A technique for solving complex problems recursively  

---

## **🔹 1. Tree Traversal (Depth-First Search & Breadth-First Search)**  
📌 **Trees** are hierarchical data structures. Traversing a tree means visiting each node.  

### **✅ Example Tree Structure (Binary Tree)**
```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
```

---

### **🔹 Depth-First Search (DFS)**
📌 DFS explores as far as possible along each branch **before backtracking**.  
🔹 **Types of DFS Traversals:**  
- **Preorder (Root → Left → Right)**
- **Inorder (Left → Root → Right)**
- **Postorder (Left → Right → Root)**  

✅ **Example: Recursive DFS Traversals**
```js
// Preorder Traversal (Root → Left → Right)
function preorder(node) {
  if (!node) return;
  console.log(node.value);
  preorder(node.left);
  preorder(node.right);
}

console.log("Preorder:");
preorder(root); // Output: 1 2 4 5 3 6 7

// Inorder Traversal (Left → Root → Right)
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}

console.log("Inorder:");
inorder(root); // Output: 4 2 5 1 6 3 7

// Postorder Traversal (Left → Right → Root)
function postorder(node) {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
}

console.log("Postorder:");
postorder(root); // Output: 4 5 2 6 7 3 1
```

---

### **🔹 Breadth-First Search (BFS)**
📌 BFS explores all nodes at the present depth level **before moving deeper**.  
✅ **Example: BFS Using a Queue**
```js
function bfs(root) {
  if (!root) return;
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

console.log("BFS:");
bfs(root); // Output: 1 2 3 4 5 6 7
```

---

## **🔹 2. Backtracking (Solving Problems with Recursion)**
📌 **Backtracking** is a technique for solving problems by **trying different options and undoing** incorrect choices.  

### **✅ Example: Generating All Subsets**
```js
function subsets(nums, index = 0, current = [], result = []) {
  if (index === nums.length) {
    result.push([...current]);
    return;
  }

  // Include the current number
  current.push(nums[index]);
  subsets(nums, index + 1, current, result);

  // Exclude the current number (Backtrack)
  current.pop();
  subsets(nums, index + 1, current, result);

  return result;
}

console.log(subsets([1, 2, 3]));
// Output: [[], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]]
```

---

### **✅ Example: Solving N-Queens Problem**
📌 The **N-Queens** problem is a classic **backtracking problem** where `N` queens must be placed on an `N x N` chessboard so that no two queens attack each other.

```js
function solveNQueens(n) {
  let result = [];
  let board = new Array(n).fill().map(() => new Array(n).fill("."));

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(row => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = "."; // Backtrack
      }
    }
  }

  backtrack(0);
  return result;
}

console.log(solveNQueens(4));
/* Output:
[
  [".Q..","...Q","Q...","..Q."],
  ["..Q.","Q...","...Q",".Q.."]
]
*/
```

---

## **📝 Task for You**  
1️⃣ Implement **Preorder, Inorder, and Postorder Traversal** for a tree.  
2️⃣ Implement **BFS traversal** for a tree using a queue.  
3️⃣ Solve **Subset Sum Problem** using **backtracking**.  
4️⃣ Modify **N-Queens** to return the **number of solutions** instead of configurations.  

---

🎯 **Next Lesson (Day 14): **LeetCode Problems:** Two Sum, Palindrome Number
!**  
Let me know if you have any questions! 🚀