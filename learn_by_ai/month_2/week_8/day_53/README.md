# **📚 Day 53: LeetCode - Number of Islands**  

Today, we’ll solve the problem of counting the number of islands in a given 2D grid of `'1's` (land) and `'0's` (water). This problem can be efficiently solved using Depth-First Search (DFS) or Breadth-First Search (BFS).

---

## **🔹 Problem Statement: Number of Islands**  

Given a 2D grid consisting of `1`s (land) and `0`s (water), write a function to count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

### **Example**:
```plaintext
Input:
11110
11010
11000
00000

Output: 1
```

### **Approach**:  
1. Traverse each cell in the grid.
2. If a cell contains `1`, it indicates the start of an island.
3. Use DFS or BFS to mark all connected `1`s (parts of the island) as `0` (visited) to avoid counting them again.
4. Increment the island count for each new island encountered.

### **DFS Code Example**:
```js
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;
        
        // Mark the cell as visited
        grid[r][c] = '0';

        // Visit all adjacent cells (up, down, left, right)
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c); // Start DFS to mark the entire island
            }
        }
    }

    return islandCount;
}

// Example usage
const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

console.log(numIslands(grid)); // Output: 1
```

### **Time Complexity**:  
- **O(M * N)**: where M is the number of rows and N is the number of columns in the grid.

### **Space Complexity**:  
- **O(M * N)**: in the worst case, if the grid is filled with `1`s, the recursion stack can go up to the size of the grid.

---

## **📝 Tasks for You**  
1️⃣ Implement the solution using **BFS** instead of DFS for counting islands.  
2️⃣ Solve variations of the problem, such as counting lakes (groups of `0`s) in the grid.  
3️⃣ Experiment with different grid configurations and edge cases (like empty grids, all land, or all water).

---

🎯 **Next Lesson (Day 54): Trie Data Structure!**  
Let me know if you have any questions or need help with the implementation! 🚀