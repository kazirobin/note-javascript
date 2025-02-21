# **📚 Day 72: Mini Project – Chat App with WebSockets**  

In today's mini project, we'll create a simple **Chat Application** using **WebSockets**. This will allow real-time communication between clients and the server, showcasing how WebSockets can be used effectively in web applications.

---

## **🔹 Overview of WebSockets**  

### **What are WebSockets?**  
WebSockets provide a full-duplex communication channel over a single, long-lived connection. Unlike HTTP, which is request-response oriented, WebSockets allow for continuous data exchange between the client and server, making it ideal for real-time applications like chat apps, live notifications, and gaming.

### **Key Features of WebSockets:**
- Low latency: Allows for near-instantaneous data transfer.
- Persistent connection: Keeps the connection open, reducing overhead from frequent HTTP requests.
- Bi-directional communication: Both the client and server can send messages independently.

---

## **🔹 Setting Up the Chat Application**  

### **1. Initialize a Node.js Server:**

1. **Create a new directory for your project:**
   ```bash
   mkdir chat-app
   cd chat-app
   ```

2. **Initialize a new Node.js project:**
   ```bash
   npm init -y
   ```

3. **Install the required packages:**
   ```bash
   npm install express ws
   ```

4. **Create the server file (`server.js`):**

```js
// server.js
const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = new Set();

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Broadcast message to all connected clients
        clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        clients.delete(ws);
        console.log('Client disconnected');
    });
});

app.use(express.static('public')); // Serve static files from 'public' directory

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
```

### **2. Create the Client Side:**

1. **Create a `public` directory:**
   ```bash
   mkdir public
   ```

2. **Create an `index.html` file inside the `public` directory:**

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat App</title>
    <style>
        body { font-family: Arial, sans-serif; }
        #messages { max-height: 400px; overflow-y: auto; border: 1px solid #ccc; margin-bottom: 10px; }
        #messageInput { width: 80%; }
        #sendButton { width: 18%; }
    </style>
</head>
<body>
    <h1>Chat Application</h1>
    <div id="messages"></div>
    <input id="messageInput" type="text" placeholder="Type your message..." />
    <button id="sendButton">Send</button>

    <script>
        const ws = new WebSocket('ws://localhost:3000');
        const messagesDiv = document.getElementById('messages');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');

        ws.onmessage = function(event) {
            const message = document.createElement('div');
            message.textContent = event.data;
            messagesDiv.appendChild(message);
            messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
        };

        sendButton.onclick = function() {
            const message = messageInput.value;
            if (message) {
                ws.send(message);
                messageInput.value = ''; // Clear input
            }
        };
    </script>
</body>
</html>
```

### **3. Run the Application:**

1. **Start the server:**
   ```bash
   node server.js
   ```

2. **Open multiple browser windows or tabs at `http://localhost:3000` to test the chat functionality.**

---

## **🔹 Project Enhancements (Optional):**
- **Usernames**: Allow users to set a username and display it with their messages.
- **Message Timestamps**: Add timestamps to each message for better context.
- **Styling**: Improve the CSS for better user experience.
- **Persist Messages**: Use a simple in-memory store or a database to save chat history.

---

## **📝 Tasks for You**  
1️⃣ Implement the optional enhancements listed above to improve the chat application.  
2️⃣ Experiment with adding more features, such as private messaging or chat rooms.  
3️⃣ Explore deploying your chat application using platforms like Heroku or Vercel.

---

🎯 **[Next Lesson (Day 73-74): Revision & Debugging](../day_73-74/README.md)!**  
Let me know if you have any questions about the chat app or WebSockets! 🚀

[**Back to Home**](../../../README.md)