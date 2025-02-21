# **📚 Day 17: Prototypes & Inheritance in JavaScript**  

Today, we’ll explore:  
✅ **Prototypes** → How JavaScript objects inherit properties  
✅ **Prototype Chain** → How JS looks up properties  
✅ **Inheritance** → Creating objects that inherit from other objects  

---

## **🔹 1. Understanding Prototypes**  
📌 Every JavaScript object has an internal link to another object called its **prototype**.  
📌 The prototype itself is also an object and has its own prototype, forming a **prototype chain**.  

✅ **Example 1: Checking an Object’s Prototype**  
```js
const obj = {};
console.log(Object.getPrototypeOf(obj)); // Output: {} (default prototype)
```
🔹 In JavaScript, objects inherit properties and methods from `Object.prototype`.  

---

### **✅ Example 2: Prototypes in Action**  
```js
const person = {
  greet() {
    console.log("Hello!");
  }
};

const user = Object.create(person); // Inherits from person
user.greet(); // Output: "Hello!"
```
🔹 `user` **does not have** a `greet` method but **inherits** it from `person` via the prototype chain.  

---

## **🔹 2. Prototype Chain**  
📌 If a property or method is **not found** in an object, JavaScript looks up the **prototype chain**.  

✅ **Example: Prototype Lookup**  
```js
const animal = {
  makeSound() {
    console.log("Animal sound");
  }
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.bark(); // Output: "Woof!" (own property)
dog.makeSound(); // Output: "Animal sound" (inherited from prototype)
```
**Explanation:**  
- `dog` does not have `makeSound()`, so JS looks up the prototype chain to `animal`.  

---

## **🔹 3. Constructor Functions & Prototypes**  
📌 Constructor functions **automatically use prototypes** for shared properties.  

✅ **Example: Adding Methods to a Prototype**  
```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.sayHello(); // Output: "Hello, my name is Alice"
```
**Why use prototypes?**  
- If we define `sayHello()` inside `Person`, **each object gets its own copy** (wasting memory).  
- With `Person.prototype.sayHello()`, **all instances share the method**, making it efficient.  

---

## **🔹 4. Inheritance Using Prototypes**  
📌 We can use prototypes to **inherit** properties and methods from another constructor function.  

✅ **Example: Inheriting from Another Constructor Function**  
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log("Some generic sound...");
};

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a new method
Dog.prototype.bark = function () {
  console.log("Woof! Woof!");
};

const buddy = new Dog("Buddy", "Golden Retriever");
buddy.makeSound(); // Output: "Some generic sound..." (inherited)
buddy.bark(); // Output: "Woof! Woof!"
```
**Explanation:**  
1. `Animal` has a `makeSound()` method.  
2. `Dog` **inherits** from `Animal` using `Object.create(Animal.prototype)`.  
3. `buddy` gets access to both `makeSound()` and `bark()`.  

---

## **🔹 5. Class Syntax (Modern Way to Use Prototypes & Inheritance)**  
📌 ES6 introduced the `class` keyword, which is just **syntactic sugar** over prototypes.  

✅ **Example: Using `class` Instead of Constructor Functions**  
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

const rex = new Dog("Rex", "German Shepherd");
rex.makeSound(); // Output: "Some generic sound..."
rex.bark(); // Output: "Woof! Woof!"
```
**Why use `class`?**  
- More readable and structured.  
- Works the same way as prototypes **under the hood**.  

---

## **📝 Task for You**  
1️⃣ Create a `Car` constructor function with `brand` and `model` properties. Add a method `start()` to the prototype.  
2️⃣ Create a `SportsCar` constructor that inherits from `Car`. Add a `boost()` method.  
3️⃣ Rewrite the above example using `class`.  

---

🎯 **[Next Lesson (Day 18): ES6 Classes, Constructor Functions](../day_18/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../README.md)