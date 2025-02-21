# **📚 Day 56: Revision & Practice - Trees & Graphs**  

For the next two days, we’ll **revise Trees and Graphs**, solving problems to strengthen understanding and optimize solutions.  

---

## **🔹 Trees Revision**  

### **✅ Important Concepts**  
✔ **Binary Tree** – Each node has at most **two** children.  
✔ **Binary Search Tree (BST)** – Left subtree has **smaller** values, right has **larger** values.  
✔ **Traversal Techniques** – **DFS (Preorder, Inorder, Postorder)** and **BFS (Level Order)**.  

### **✅ Practice Problems**  

1️⃣ **Invert a Binary Tree** (LeetCode 226)  
```js
function invertTree(root) {
    if (!root) return null;
    
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    
    return root;
}
```

2️⃣ **Lowest Common Ancestor of BST** (LeetCode 235)  
3️⃣ **Serialize and Deserialize a Binary Tree** (LeetCode 297)  
4️⃣ **Maximum Depth of a Binary Tree** (LeetCode 104)  

---

## **🔹 Graphs Revision**  

### **✅ Important Concepts**  
✔ **Graph Representations** – Adjacency List, Adjacency Matrix.  
✔ **Traversal Techniques** – **DFS (Recursive & Iterative)** and **BFS**.  
✔ **Connected Components, Shortest Path, Cycle Detection**.  

### **✅ Practice Problems**  

1️⃣ **Number of Islands (Graph DFS/BFS)** (LeetCode 200)  
2️⃣ **Clone a Graph** (LeetCode 133)  
3️⃣ **Course Schedule (Topological Sorting)** (LeetCode 207)  
4️⃣ **Word Ladder (BFS Shortest Path)** (LeetCode 127)  

---

## **🔹 Tasks for You**  
🔹 Solve **at least 5 problems** from Trees & Graphs on **LeetCode**.  
🔹 Implement **DFS & BFS** for graphs using an **Adjacency List**.  
🔹 Write a **shortest path algorithm** (Dijkstra’s or BFS).  

---

🎯 **[Next Lesson (Day 57): DOM Manipulation Basics (`getElementById`, `querySelector`)](../../../month_3/week_9/day_57/README.md)  !**  
Let me know if you need explanations or problem hints! 🚀

[**Back to Home**](../../../)