# **📚 Day 11: Destructuring, Spread (`...`), and Rest Parameter**  

Today, we’ll cover three powerful JavaScript features that help write **cleaner and more readable code**:  

✅ **Destructuring** → Extract values from arrays and objects easily  
✅ **Spread (`...`)** → Expand arrays/objects into individual elements  
✅ **Rest Parameter (`...`)** → Collect multiple arguments into an array  

---

## **🔹 1. Array Destructuring**  
📌 **Extract values from an array into variables.**  

✅ **Example:**  
```js
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;

console.log(first);  // Output: "red"
console.log(second); // Output: "green"
console.log(third);  // Output: "blue"
```

✅ **Skipping values:**  
```js
let numbers = [10, 20, 30, 40];
let [first, , third] = numbers;

console.log(first);  // Output: 10
console.log(third);  // Output: 30
```

✅ **Using default values:**  
```js
let fruits = ["apple"];
let [fruit1, fruit2 = "banana"] = fruits;

console.log(fruit1); // Output: "apple"
console.log(fruit2); // Output: "banana" (default value)
```

---

## **🔹 2. Object Destructuring**  
📌 **Extract values from an object into variables.**  

✅ **Example:**  
```js
let person = { name: "Alice", age: 25, city: "New York" };
let { name, age, city } = person;

console.log(name);  // Output: "Alice"
console.log(age);   // Output: 25
console.log(city);  // Output: "New York"
```

✅ **Renaming variables:**  
```js
let user = { username: "JohnDoe", email: "john@example.com" };
let { username: userName, email: userEmail } = user;

console.log(userName);  // Output: "JohnDoe"
console.log(userEmail); // Output: "john@example.com"
```

✅ **Default values:**  
```js
let car = { brand: "Tesla" };
let { brand, model = "Model S" } = car;

console.log(brand); // Output: "Tesla"
console.log(model); // Output: "Model S" (default value)
```

---

## **🔹 3. Spread Operator (`...`)**  
📌 **Expands** arrays or objects into individual elements.  

✅ **Example: Spread in Arrays**  
```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

✅ **Copying an array:**  
```js
let original = [1, 2, 3];
let copy = [...original];

console.log(copy); // Output: [1, 2, 3]
```

✅ **Example: Spread in Objects**  
```js
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

---

## **🔹 4. Rest Parameter (`...`)**  
📌 **Collects multiple function arguments into an array.**  

✅ **Example:**  
```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10));      // Output: 15
```

✅ **Rest with destructuring:**  
```js
let [first, second, ...remaining] = [10, 20, 30, 40, 50];

console.log(first);      // Output: 10
console.log(second);     // Output: 20
console.log(remaining);  // Output: [30, 40, 50]
```

---

## **📝 Task for You**  
1️⃣ **Destructure** an array `["JavaScript", "Python", "C++"]` into three variables.  
2️⃣ **Destructure** an object `{ firstName: "John", lastName: "Doe" }` and rename properties.  
3️⃣ Use **spread (`...`)** to merge two arrays `[1, 2, 3]` and `[4, 5, 6]`.  
4️⃣ Use **rest parameter (`...`)** to create a function that accepts any number of arguments and returns their sum.  

---

🎯 **Next Lesson (Day 12): Higher Order Functions, Callbacks !**  
Let me know if you have any questions! 🚀