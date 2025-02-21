# **📚 Day 70: Web Workers & Service Workers**  

Today, we will explore **Web Workers** and **Service Workers**, two powerful features in JavaScript that enable you to run scripts in the background, improving the performance and responsiveness of web applications.

---

## **🔹 Web Workers**  

### **What are Web Workers?**  
Web Workers allow you to run scripts in background threads, enabling parallel processing. This helps keep your web application responsive, as heavy computations can be offloaded to these workers.

### **Key Features of Web Workers:**
- Run in a separate thread, preventing UI blocking.
- Communicate with the main thread via the `postMessage` API.
- Cannot manipulate the DOM directly; they operate in a separate global context.

### **Creating a Web Worker:**
1. **Create a Worker Script:** This is a separate JavaScript file that contains the code to run in the worker.

```js
// worker.js
self.onmessage = function(event) {
    const result = event.data * 2; // Example computation
    self.postMessage(result); // Send result back to main thread
};
```

2. **Instantiate the Worker in the Main Script:**

```js
// main.js
const worker = new Worker('worker.js');

worker.onmessage = function(event) {
    console.log('Result from worker:', event.data);
};

worker.postMessage(5); // Send data to worker
```

---

## **🔹 Service Workers**  

### **What are Service Workers?**  
Service Workers act as a proxy between the web application and the network. They enable features like caching, background sync, and push notifications. They play a crucial role in Progressive Web Apps (PWAs).

### **Key Features of Service Workers:**
- Intercept network requests and cache responses for offline use.
- Run in the background, separate from the main browser thread.
- Can listen for and respond to events like fetch, push, and sync.

### **Setting Up a Service Worker:**
1. **Register the Service Worker:**

```js
// main.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
        console.error('Service Worker registration failed:', error);
    });
}
```

2. **Implementing the Service Worker:**

```js
// service-worker.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});
```

### **Using Caching:**
You can use the `caches` API within the Service Worker to cache resources for offline use.

```js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll(['/', '/index.html', '/styles.css', '/script.js']);
        })
    );
});
```

---

## **📝 Tasks for You**  
1️⃣ Create a simple web application that uses a Web Worker to perform a computationally heavy task (e.g., calculating Fibonacci numbers).  
2️⃣ Implement a Service Worker for your web application that caches the site’s assets and serves them for offline access.  
3️⃣ Explore how to use push notifications with Service Workers. Set up a simple notification when the user returns to the site after being away.

---

🎯 **[Next Lesson (Day 71): CORS, Security Best Practices](../day_71/)!**  
Let me know if you have any questions about Web Workers or Service Workers! 🚀

[**Back to Home**](../../../)