# **📚 Day 50: Binary Trees & Binary Search Trees (BST)**  

Today, we’ll dive into two important data structures: **Binary Trees** and **Binary Search Trees (BST)**. Understanding these structures is crucial for efficient data organization and retrieval.

---

## **🔹 Binary Trees**  

A **binary tree** is a tree data structure in which each node has at most two children, referred to as the left child and the right child. 

### **Key Properties**:
- **Height**: The height of a binary tree is the length of the longest path from the root to a leaf node.
- **Depth**: The depth of a node is the length of the path from the root to the node.
- **Full Binary Tree**: Every node other than the leaves has two children.
- **Complete Binary Tree**: All levels are fully filled except possibly for the last level, which is filled from left to right.

### **Example Structure**:
```plaintext
        1
       / \
      2   3
     / \
    4   5
```

### **Basic Operations**:
- **Insertion**: Add nodes to the tree following the binary tree properties.
- **Traversal**: Visit each node in the tree. Common traversal methods are:
  - **In-order**: Left, Root, Right
  - **Pre-order**: Root, Left, Right
  - **Post-order**: Left, Right, Root
  - **Level-order**: Visit nodes level by level.

### **Traversal Example Code**:
```js
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node) {
        inOrderTraversal(node.left);
        console.log(node.value); // Visit the node
        inOrderTraversal(node.right);
    }
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); // Output: 4, 2, 5, 1, 3
```

---

## **🔹 Binary Search Trees (BST)**  

A **Binary Search Tree (BST)** is a binary tree with the following properties:
- The left subtree of a node contains only nodes with values less than the node’s value.
- The right subtree of a node contains only nodes with values greater than the node’s value.
- Both left and right subtrees must also be binary search trees.

### **Key Operations**:
- **Insertion**: Insert nodes while maintaining the BST properties.
- **Searching**: Search for a value in the tree using the properties of the BST.
- **Deletion**: Remove a node while maintaining the BST properties.

### **Example Insertion Code**:
```js
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // In-order traversal to display the BST in sorted order
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);

bst.inOrderTraversal(bst.root); // Output: 2, 3, 4, 5, 7
```

### **Time Complexity**:
- **Insertion, Searching, and Deletion**: Average case O(log n), worst case O(n) (when the tree becomes unbalanced).

---

## **📝 Tasks for You**  
1️⃣ Implement the **search** and **delete** methods for the `BST` class.  
2️⃣ Write functions for **pre-order**, **post-order**, and **level-order** traversals of the BST.  
3️⃣ Solve a problem related to BSTs, such as finding the **lowest common ancestor** of two nodes in a BST.

---

🎯 **Next Lesson (Day 51): **LeetCode:** Invert Binary Tree  !**  
Let me know if you have any questions or need help with the implementation! 🚀