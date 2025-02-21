### **📚 Day 3: JavaScript Operators**  
Welcome to Day 3! 🎉 Today, we’ll learn about:  
✅ Arithmetic Operators  
✅ Assignment Operators  
✅ Comparison Operators  
✅ Logical Operators  
✅ Unary & Ternary Operators  

---

## **🔹 1. Arithmetic Operators (Math Operations)**
These operators perform basic math operations:  

| Operator | Description | Example |
|----------|------------|---------|
| `+`  | Addition | `5 + 3 = 8` |
| `-`  | Subtraction | `5 - 3 = 2` |
| `*`  | Multiplication | `5 * 3 = 15` |
| `/`  | Division | `10 / 2 = 5` |
| `%`  | Modulus (Remainder) | `10 % 3 = 1` |
| `**` | Exponentiation | `2 ** 3 = 8` |

📌 **Example:**
```js
let a = 10, b = 3;
console.log(a + b);  // Output: 13
console.log(a - b);  // Output: 7
console.log(a * b);  // Output: 30
console.log(a / b);  // Output: 3.3333
console.log(a % b);  // Output: 1
console.log(a ** b); // Output: 1000 (10^3)
```

---

## **🔹 2. Assignment Operators**
Used to assign values to variables.

| Operator | Example | Equivalent to |
|----------|---------|--------------|
| `=`  | `x = 10` | `x = 10` |
| `+=` | `x += 5` | `x = x + 5` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 2` | `x = x * 2` |
| `/=` | `x /= 4` | `x = x / 4` |
| `%=` | `x %= 3` | `x = x % 3` |

📌 **Example:**
```js
let x = 10;
x += 5;  // x = x + 5 → 15
x *= 2;  // x = x * 2 → 30
console.log(x);  // Output: 30
```

---

## **🔹 3. Comparison Operators**
Used to compare values and return `true` or `false`.

| Operator | Description | Example |
|----------|------------|---------|
| `==`  | Equal (loose) | `5 == "5"` → `true` |
| `===` | Strict Equal | `5 === "5"` → `false` |
| `!=`  | Not Equal | `5 != "5"` → `false` |
| `!==` | Strict Not Equal | `5 !== "5"` → `true` |
| `>`   | Greater Than | `10 > 5` → `true` |
| `<`   | Less Than | `10 < 5` → `false` |
| `>=`  | Greater Than or Equal | `10 >= 10` → `true` |
| `<=`  | Less Than or Equal | `10 <= 5` → `false` |

📌 **Example:**
```js
console.log(5 == "5");   // true (compares value only)
console.log(5 === "5");  // false (compares value & type)
console.log(10 > 5);     // true
console.log(10 !== "10"); // true
```

✅ **Always use `===` and `!==` for best results.**

---

## **🔹 4. Logical Operators**
Used to combine multiple conditions.

| Operator | Description | Example |
|----------|------------|---------|
| `&&` (AND) | True if both conditions are true | `(5 > 2) && (10 > 5) → true` |
| `||` (OR)  | True if at least one condition is true | `(5 > 2) || (10 < 5) → true` |
| `!`  (NOT) | Reverses the value | `!(10 > 5) → false` |

📌 **Example:**
```js
let age = 20;
console.log(age > 18 && age < 30);  // true (both conditions true)
console.log(age < 18 || age > 30);  // false (both conditions false)
console.log(!(age > 18));           // false (negation)
```

---

## **🔹 5. Unary Operators**
A single value is used in an operation.

| Operator | Description | Example |
|----------|------------|---------|
| `++` | Increment | `x++` (Increases by 1) |
| `--` | Decrement | `x--` (Decreases by 1) |

📌 **Example:**
```js
let counter = 5;
counter++;
console.log(counter);  // Output: 6
counter--;
console.log(counter);  // Output: 5
```

---

## **🔹 6. Ternary Operator (`? :`)**
Shortens `if-else` statements.

📌 **Example:**
```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);  // Output: Adult
```

✅ **This is useful for quick decisions!**

---

## **📝 Task for You**
1️⃣ Write a program to check if a number is **even or odd** using the `%` operator.  
2️⃣ Use the ternary operator to assign `"Eligible"` or `"Not Eligible"` based on `age >= 18`.  
3️⃣ Test `==` vs `===` with different data types and see the results.  

---

🎯 **[Next Lesson (Day 4): JavaScript Conditionals (`if-else`, `switch`)](../day_4/README.md)!**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)