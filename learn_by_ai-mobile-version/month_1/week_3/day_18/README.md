# **📚 Day 18: ES6 Classes & Constructor Functions in JavaScript**  

Today, we’ll cover:  
✅ **Constructor Functions** → The traditional way to create objects  
✅ **ES6 Classes** → The modern and cleaner way  
✅ **Inheritance with `extends` and `super`**  

---

## **🔹 1. Constructor Functions**  
📌 A **constructor function** is a normal function used to create multiple objects of the same type.  
📌 It follows **naming convention**: The first letter is capitalized.  
📌 We use the `new` keyword to create objects.  

✅ **Example: Constructor Function for a `Person` Object**  
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const alice = new Person("Alice", 25);
alice.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
```
**How It Works:**  
1. `new Person("Alice", 25)` creates an object.  
2. `this.name = name` assigns values.  
3. The method `sayHello()` is added to `Person.prototype` so all instances share it.  

---

## **🔹 2. ES6 Classes**  
📌 **Classes in JavaScript** are just **syntactic sugar** over constructor functions.  
📌 They make **object-oriented programming (OOP)** cleaner and easier to read.  

✅ **Example: Creating a Class with a Constructor**  
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const bob = new Person("Bob", 30);
bob.sayHello(); // Output: Hello, my name is Bob and I am 30 years old.
```
**Why Use `class`?**  
- Easier to read and maintain.  
- Functions are automatically added to the prototype.  

---

## **🔹 3. Class Inheritance (`extends` and `super`)**  
📌 **Inheritance** allows us to create a new class based on an existing class.  
📌 `extends` → Makes a class inherit from another class.  
📌 `super()` → Calls the parent class constructor.  

✅ **Example: Creating a `Student` Class that Inherits from `Person`**  
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for grade ${this.grade}.`);
  }
}

const john = new Student("John", 20, "A");
john.sayHello(); // Output: Hello, my name is John and I am 20 years old.
john.study(); // Output: John is studying for grade A.
```
**How It Works:**  
1. `Student` **inherits** from `Person`.  
2. `super(name, age)` calls the parent constructor to initialize properties.  
3. `Student` adds a new method `study()`.  

---

## **🔹 4. Getters & Setters in Classes**  
📌 **Getters** (`get`) allow us to access properties like a variable.  
📌 **Setters** (`set`) allow us to modify properties with validation.  

✅ **Example: Using Getters & Setters**  
```js
class Circle {
  constructor(radius) {
    this._radius = radius; // Use _radius to avoid direct modification
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      console.log("Radius must be positive.");
    }
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5
console.log(myCircle.area); // Output: 78.54
myCircle.radius = 10;
console.log(myCircle.area); // Output: 314.16
```
**Why Use Getters & Setters?**  
- **Encapsulation**: Prevent direct modification of important properties.  
- **Computed properties**: The `area` is **automatically updated** when `radius` changes.  

---

## **🔹 5. Static Methods**  
📌 **Static methods** belong to the class itself, **not** to instances.  
📌 Used for utility functions.  

✅ **Example: Static Methods in a Class**  
```js
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathHelper.add(5, 3)); // Output: 8
console.log(MathHelper.subtract(10, 4)); // Output: 6
```
🚨 `MathHelper.add()` is called **directly on the class** → **no need to create an instance**.  

---

## **📝 Task for You**  
1️⃣ Create a `Car` class with `brand`, `model`, and `year` properties. Add a method `start()`.  
2️⃣ Create an `ElectricCar` class that extends `Car` and adds a `batteryLife` property.  
3️⃣ Add **getters and setters** for `batteryLife`.  

---

🎯 **[Next Lesson (Day 19): Call, Apply, Bind Methods](../day_19/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)