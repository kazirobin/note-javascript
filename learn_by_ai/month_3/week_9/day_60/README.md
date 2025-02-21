# **📚 Day 60: Mini Project – To-Do List**  

Today, we’ll build a **To-Do List App** using **HTML, CSS, and JavaScript**. The app will allow users to:  
✅ **Add new tasks**  
✅ **Mark tasks as completed**  
✅ **Delete tasks**  
✅ **Persist tasks using Local Storage**  

---

## **🔹 Features of the To-Do List**  
1️⃣ Users can **add** tasks.  
2️⃣ Tasks can be **marked as complete** by clicking on them.  
3️⃣ Users can **delete** tasks.  
4️⃣ Tasks are **saved in Local Storage** (so they remain after a refresh).  

---

## **🔹 HTML Structure**  
Create a simple layout with an input field, a button, and a list to display tasks.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>To-Do List</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        ul { list-style: none; padding: 0; }
        li { padding: 10px; cursor: pointer; border-bottom: 1px solid #ddd; }
        .completed { text-decoration: line-through; color: gray; }
        .delete-btn { margin-left: 10px; color: red; cursor: pointer; }
    </style>
</head>
<body>
    <h2>To-Do List</h2>
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button id="addTaskBtn">Add Task</button>
    <ul id="taskList"></ul>

    <script>
        const taskInput = document.getElementById("taskInput");
        const addTaskBtn = document.getElementById("addTaskBtn");
        const taskList = document.getElementById("taskList");

        // Load tasks from Local Storage
        function loadTasks() {
            taskList.innerHTML = "";
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach(task => addTaskToDOM(task.text, task.completed));
        }

        // Save tasks to Local Storage
        function saveTasks() {
            let tasks = [];
            document.querySelectorAll("li").forEach(task => {
                tasks.push({ text: task.textContent.replace("❌", "").trim(), completed: task.classList.contains("completed") });
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // Add a task to the DOM
        function addTaskToDOM(taskText, completed = false) {
            let li = document.createElement("li");
            li.textContent = taskText;
            if (completed) li.classList.add("completed");

            // Mark as completed on click
            li.addEventListener("click", () => {
                li.classList.toggle("completed");
                saveTasks();
            });

            // Add delete button
            let deleteBtn = document.createElement("span");
            deleteBtn.textContent = " ❌";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                li.remove();
                saveTasks();
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        }

        // Add a new task
        addTaskBtn.addEventListener("click", () => {
            let taskText = taskInput.value.trim();
            if (taskText) {
                addTaskToDOM(taskText);
                saveTasks();
                taskInput.value = "";
            }
        });

        // Load tasks on page load
        loadTasks();
    </script>
</body>
</html>
```

---

## **🔹 How It Works**  
✔ **Click "Add Task"** → Adds a new task.  
✔ **Click a task** → Marks it as **completed**.  
✔ **Click ❌** → Deletes the task.  
✔ **Refresh the page** → Tasks remain **persisted** using **Local Storage**.  

---

## **📝 Additional Features to Try**  
🔹 Add an **edit button** to modify tasks.  
🔹 Implement a **"Clear All" button** to delete all tasks.  
🔹 Add **categories** (Work, Personal, etc.).  
🔹 Use **CSS animations** for better UI.  

---

🎯 **[Next Lesson (Day 61-62): Debouncing & Throttling (Performance Optimization)](../day_61-62/)!**  
Let me know if you need any improvements or explanations! 🚀
[**Back to Home**](../../../)
