# **📚 Day 51: LeetCode - Invert Binary Tree**  

Today, we’ll solve the problem of inverting a binary tree. This is a common interview question that tests your understanding of tree traversal and manipulation.

---

## **🔹 Problem Statement: Invert Binary Tree**  

Given the root of a binary tree, invert the tree, meaning that for every node, the left and right children are swapped.

### **Example**:
```plaintext
Input: 
     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output: 
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

### **Approach**:  
We can invert the binary tree using either an iterative approach (using a queue or stack) or a recursive approach. Here, we’ll focus on the recursive approach, which is simpler and more elegant.

### **Recursive Code Implementation**:
1. Swap the left and right children of the current node.
2. Recursively call the function on the left and right children.

### **Code Example**:
```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertTree(root) {
    if (!root) return null; // Base case

    // Swap the left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root; // Return the root of the inverted tree
}

// Example usage
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

const invertedRoot = invertTree(root);

// Function to print the tree in order (for testing)
function inOrderTraversal(node) {
    if (node) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

// Print the inverted tree
inOrderTraversal(invertedRoot); // Output: 9, 7, 6, 4, 3, 2, 1
```

### **Time Complexity**:  
- **O(n)**: We visit each node once.

### **Space Complexity**:  
- **O(h)**: The space complexity is determined by the height of the tree due to the call stack used in recursion. In the worst case (unbalanced tree), this could be O(n).

---

## **📝 Tasks for You**  
1️⃣ Implement the iterative approach for inverting a binary tree using a queue or stack.  
2️⃣ Test your function with various binary tree inputs to ensure it works correctly.  
3️⃣ Solve related problems, such as checking if two binary trees are the same or finding the maximum depth of a binary tree.

---

🎯 **[Next Lesson (Day 52): Graphs, BFS & DFS](../day_52/)!**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../)