# **📚 Day 65: Design Patterns in JavaScript – Factory, Singleton, Observer Patterns**  

Today, we’ll explore three important design patterns: **Factory**, **Singleton**, and **Observer** patterns. Understanding these patterns will help you write more efficient, maintainable, and organized code.  

---

## **🔹 1. Factory Pattern**  

📌 The **Factory Pattern** is a creational pattern that provides a way to create objects without specifying the exact class of the object that will be created. This is useful when the object creation process involves complex logic or when you want to abstract the instantiation process.  

### **Example of Factory Pattern**  
```js
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`Driving a ${this.brand}`);
    }
}

class Bike {
    constructor(brand) {
        this.brand = brand;
    }
    ride() {
        console.log(`Riding a ${this.brand}`);
    }
}

class VehicleFactory {
    static createVehicle(type, brand) {
        switch (type) {
            case 'car':
                return new Car(brand);
            case 'bike':
                return new Bike(brand);
            default:
                throw new Error('Vehicle type not supported');
        }
    }
}

// Usage
const myCar = VehicleFactory.createVehicle('car', 'Toyota');
myCar.drive(); // "Driving a Toyota"

const myBike = VehicleFactory.createVehicle('bike', 'Yamaha');
myBike.ride(); // "Riding a Yamaha"
```

---

## **🔹 2. Singleton Pattern**  

📌 The **Singleton Pattern** restricts a class to a single instance and provides a global point of access to that instance. This is useful when exactly one object is needed to coordinate actions across the system.  

### **Example of Singleton Pattern**  
```js
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance; // Return existing instance
        }
        Database.instance = this; // Save the instance
        this.connection = null; // Initialize connection
    }
    
    connect() {
        if (!this.connection) {
            this.connection = 'Database connected';
            console.log(this.connection);
        }
        return this.connection;
    }
}

// Usage
const db1 = new Database();
db1.connect(); // "Database connected"

const db2 = new Database();
db2.connect(); // "Database connected"

console.log(db1 === db2); // true (both are the same instance)
```

---

## **🔹 3. Observer Pattern**  

📌 The **Observer Pattern** defines a one-to-many dependency between objects, so that when one object (the subject) changes state, all its dependents (observers) are notified and updated automatically. This is useful for implementing event handling systems.  

### **Example of Observer Pattern**  
```js
class Subject {
    constructor() {
        this.observers = []; // Store observers
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(`${this.name} received data: ${data}`);
    }
}

// Usage
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello Observers!');
// Output:
// Observer 1 received data: Hello Observers!
// Observer 2 received data: Hello Observers!
```

---

## **📝 Tasks for You**  
1️⃣ Implement a **Factory Pattern** to create different types of notifications (e.g., email, SMS, push notifications).  
2️⃣ Create a **Singleton Pattern** for a settings manager that ensures only one instance is used throughout your application.  
3️⃣ Build a simple **Observer Pattern** implementation where multiple observers listen for changes in a stock price, and log updates when the price changes.  

---

🎯 **[Next Lesson (Day 66): LeetCode Hard Problems: LRU Cache](../day_66/README.md)!**  
Let me know if you have any questions about these design patterns! 🚀

[**Back to Home**](../../../)