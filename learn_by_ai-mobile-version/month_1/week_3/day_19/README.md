# **📚 Day 19: Call, Apply, and Bind Methods in JavaScript**  

Today, we’ll cover:  
✅ **`call` Method** → Invoking a function with a specific `this` value.  
✅ **`apply` Method** → Similar to `call`, but passes arguments as an array.  
✅ **`bind` Method** → Creates a new function with a bound `this` value.  

---

## **🔹 1. Understanding `this` in JavaScript**  
📌 The `this` keyword refers to the object that is **calling the function**.  
📌 But sometimes, we need to manually control what `this` refers to.  

✅ **Example: `this` in an Object Method**  
```js
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: "Hello, my name is Alice"
```
🔹 `this.name` refers to `"Alice"` because `greet()` is called on `person`.  

---

## **🔹 2. `call()` Method**  
📌 **`call()` allows us to invoke a function with a specific `this` value.**  
📌 Syntax:  
```js
functionName.call(thisValue, arg1, arg2, ...);
```

✅ **Example: Using `call()` to Change `this`**  
```js
function introduce() {
  console.log(`Hi, my name is ${this.name}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

introduce.call(person1); // Output: "Hi, my name is Alice"
introduce.call(person2); // Output: "Hi, my name is Bob"
```
🔹 `call(person1)` sets `this` to `person1`, so `this.name` is `"Alice"`.  

✅ **Example: `call()` with Arguments**  
```js
function greet(city, country) {
  console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
}

const user = { name: "John" };

greet.call(user, "New York", "USA"); 
// Output: "Hello, I'm John from New York, USA"
```
🔹 Arguments are passed **individually** in `call()`.  

---

## **🔹 3. `apply()` Method**  
📌 **`apply()` works the same as `call()`, but arguments are passed as an array.**  
📌 Syntax:  
```js
functionName.apply(thisValue, [arg1, arg2, ...]);
```

✅ **Example: Using `apply()` Instead of `call()`**  
```js
greet.apply(user, ["London", "UK"]); 
// Output: "Hello, I'm John from London, UK"
```
🔹 **Key Difference:**  
- `call(user, "New York", "USA")` → Arguments are **separate**.  
- `apply(user, ["London", "UK"])` → Arguments are **inside an array**.  

✅ **Example: `apply()` with `Math.max()`**  
```js
const numbers = [10, 5, 8, 20];

console.log(Math.max.apply(null, numbers)); // Output: 20
```
🔹 `apply()` is useful for functions like `Math.max()` that require separate arguments.  

---

## **🔹 4. `bind()` Method**  
📌 **`bind()` creates a new function with `this` permanently set to a specific value.**  
📌 Syntax:  
```js
const newFunction = functionName.bind(thisValue, arg1, arg2, ...);
```

✅ **Example: Using `bind()`**  
```js
const greetJohn = greet.bind(user, "Paris", "France");
greetJohn(); // Output: "Hello, I'm John from Paris, France"
```
🔹 Unlike `call()` and `apply()`, `bind()` **does not call the function immediately**.  
🔹 It **returns a new function** that can be called later.  

✅ **Example: `bind()` for Object Methods**  
```js
const person = {
  name: "Alice",
  sayName() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const sayHello = person.sayName.bind(person);
sayHello(); // Output: "Hello, my name is Alice"
```
🔹 `sayName.bind(person)` ensures that `this` always refers to `person`.  

---

## **🔹 5. Real-World Use Cases**  

### **🔹 `call()` for Inheritance**
✅ **Example: Borrowing Methods from Another Object**
```js
const person = {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const employee = {
  firstName: "John",
  lastName: "Doe"
};

console.log(person.fullName.call(employee)); // Output: "John Doe"
```
🔹 `employee` borrows the `fullName()` method from `person` using `call()`.  

---

### **🔹 `bind()` for Event Listeners**
✅ **Example: Ensuring `this` Refers to the Correct Object**
```js
const button = {
  text: "Click me!",
  handleClick() {
    console.log(`Button clicked: ${this.text}`);
  }
};

const buttonElement = document.createElement("button");
buttonElement.innerText = button.text;
buttonElement.addEventListener("click", button.handleClick.bind(button));
document.body.appendChild(buttonElement);
```
🔹 `bind(button)` ensures `this.text` refers to the `button` object inside `handleClick()`.  

---

## **📝 Task for You**  
1️⃣ Create a `Person` object with a `describe()` method. Use `call()` to invoke it for another object.  
2️⃣ Use `apply()` to find the maximum number from an array `[5, 12, 8, 20]`.  
3️⃣ Create an object with a method and use `bind()` to ensure it works as expected in `setTimeout()`.  

---

🎯 **[Next Lesson (Day 20): Modules (`import/export`)](../day_20/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../README.md)