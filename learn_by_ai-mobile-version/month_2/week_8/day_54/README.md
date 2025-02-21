# **📚 Day 54: Trie (Prefix Tree) Data Structure**  

Today, we’ll explore **Trie (Prefix Tree)**, a tree-like data structure used for efficient storage and retrieval of strings, especially in dictionary-like applications.  

---

## **🔹 What is a Trie?**  

📌 A **Trie** (pronounced "try") is a **tree-based** data structure used for storing strings in a way that allows for fast lookup, insertion, and deletion. It is mainly used for **autocomplete, spell checking, and prefix matching**.

### **Key Properties of a Trie**:
✅ Each node represents a **character** of a string.  
✅ The **root** node is empty.  
✅ Each **path** from the root to a leaf represents a word.  
✅ Common prefixes are stored **efficiently**, reducing redundant storage.  

### **Example Trie Structure**:

```
          (root)
         /  |  \
        a   b   c
       /   / \   \
      p   a   e   a
     /   /     \   \
    p   t       r   t
   /                 \
  l                   s
 /                     \
e                       e
```

📌 Words stored: `"apple"`, `"bat"`, `"bar"`, `"cat"`, `"care"`, `"cart"`.

---

## **🔹 Implementing a Trie in JavaScript**  

### **✅ Step 1: Define the TrieNode Class**  
Each node will store a character and a `children` object to hold the next possible letters.

```js
class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}
```

---

### **✅ Step 2: Implement Trie with Insert, Search, and Prefix Matching**  

```js
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Check if there are words with a given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app"));   // true
```

---

## **🔹 Applications of Trie**  
✔ **Autocomplete & Spell Checking**  
✔ **Word Search & Dictionary Implementation**  
✔ **IP Routing & Network Prefix Matching**  
✔ **Bioinformatics (DNA sequence matching)**  

---

## **📝 Tasks for You**  
1️⃣ Implement a method to **delete a word** from the Trie.  
2️⃣ Modify the `search` function to return **all words with a given prefix**.  
3️⃣ Solve **LeetCode 208: Implement Trie (Prefix Tree)** using the Trie class.  

---

🎯 **[Next Lesson (Day 55): LeetCode: Word Search (Backtracking)](../day_55/README.md)!**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)
