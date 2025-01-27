### JavaScript Data Types

In JavaScript, **data types** define the kind of data a variable can hold. These types fall into two main categories: 

1. **Primitive Data Types** 
2. **Non-Primitive (Reference) Data Types**

---

### **1. Primitive Data Types**
Primitive data types are the fundamental building blocks of JavaScript. They represent single, immutable values, meaning their actual value is stored directly in the variable.

#### **1.1 Number**
The `Number` type can hold both integer and floating-point values.

- **Example**:
```javascript
let x = 250;
let y = 40.5;
console.log("Value of x=" + x); // Outputs: Value of x=250
console.log("Value of y=" + y); // Outputs: Value of y=40.5
```

---

#### **1.2 String**
A `String` represents a sequence of characters enclosed in single or double quotes.

- **Example**:
```javascript
let str = 'Hello All';
let str1 = "Welcome to my new house";
console.log("Value of str=" + str);   // Outputs: Value of str=Hello All
console.log("Value of str1=" + str1); // Outputs: Value of str1=Welcome to my new house
```

---

#### **1.3 Undefined**
When a variable is declared but not assigned a value, it has the value `undefined`.

- **Example**:
```javascript
let x;
console.log(x); // Outputs: undefined
```

---

#### **1.4 Boolean**
A `Boolean` represents a logical entity and can have only two values: `true` or `false`.

- **Example**:
```javascript
let isAvailable = true;
console.log(isAvailable); // Outputs: true
```

---

#### **1.5 Null**
The `null` type represents an intentional absence of any value.

- **Example**:
```javascript
let x = null;
console.log("Value of x=" + x); // Outputs: Value of x=null
```

---

#### **1.6 BigInt**
`BigInt` is used to represent numbers larger than the `Number` type's limit (2⁵³ - 1). It is created by appending `n` to the number.

- **Example**:
```javascript
let bigNum = 123422222222222222222222222222222222222n;
console.log(bigNum); // Outputs: 123422222222222222222222222222222222222n
```

---

#### **1.7 Symbol**
A `Symbol` is a unique and immutable data type used to create unique object keys.

- **Example**:
```javascript
let sym = Symbol("Hello");
console.log(typeof sym); // Outputs: symbol
console.log(sym);        // Outputs: Symbol(Hello)
```

---

### **2. Non-Primitive Data Types**
Non-primitive (or reference) data types are objects or collections of values. These types can hold multiple values or more complex structures.

#### **2.1 Object**
An `Object` is a collection of key-value pairs. Keys are called properties, and functions inside objects are called methods.

- **Example**:
```javascript
let person = {
    firstName: "Luiza",
    lastName: "Shaikh",
};
console.log(person.firstName + " " + person.lastName); // Outputs: Luiza Shaikh
```

---

#### **2.2 Array**
An `Array` is a collection of values stored in a single variable. Values in an array can be of different data types.

- **Example**:
```javascript
let a = new Array(); // Empty array
let b = new Array(10); // Array with 10 empty slots
let d = new Array(1, 2, 3, "Hello"); // Array with values
console.log("value of a=" + a); // Outputs: value of a=
console.log("value of b=" + b); // Outputs: value of b,,,,,,,,,
console.log("value of d=" + d); // Outputs: value of d=1,2,3,Hello
```

> Note: While JavaScript does not natively support two-dimensional arrays, you can create an array of arrays to achieve similar functionality.

---

### **Difference Between Primitive and Non-Primitive Data Types**

| **Primitive**                     | **Non-Primitive**                 |
|------------------------------------|------------------------------------|
| Predefined by JavaScript.          | Created by the programmer.         |
| Represent a single value.          | Can represent collections or entities. |
| Immutable (values cannot be changed). | Mutable (values can be updated).  |
| Examples: Number, String, Boolean. | Examples: Object, Array.          |

Understanding these data types is essential for writing efficient and error-free JavaScript code!