# **📚 Day 28: Project - Weather App using Fetch API**  

Today, we’ll build a **Weather App** using JavaScript and the **Fetch API** to get real-time weather data from an API.  

---

## **🔹 1. Features of the Weather App**  
✅ Get current weather for any city  
✅ Display temperature, humidity, and weather conditions  
✅ Handle errors (invalid city, network issues)  

---

## **🔹 2. API Setup - OpenWeatherMap**  
📌 Sign up at [OpenWeatherMap](https://openweathermap.org/) and get a **free API key**.  
📌 Use the **API endpoint**:  
```plaintext
https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric
```
🔹 Replace `{CITY}` with the city name and `{API_KEY}` with your key.  
🔹 `units=metric` returns the temperature in Celsius.  

---

## **🔹 3. Project Structure**  
📂 `index.html` – Basic UI  
📂 `style.css` – Styling  
📂 `script.js` – Fetch API logic  

---

## **🔹 4. Code Implementation**  

### **📌 Step 1: Create `index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Weather App</h1>
        <input type="text" id="city" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
        <div id="weatherResult"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
---

### **📌 Step 2: Add Styles in `style.css`**
```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 50px;
}

.container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    background: #f0f0f0;
}

input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
}

button {
    padding: 10px;
    cursor: pointer;
}

#weatherResult {
    margin-top: 20px;
    font-size: 18px;
}
```
---

### **📌 Step 3: Fetch API in `script.js`**
```js
async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        
        if (!response.ok) throw new Error("City not found");
        
        let data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌤 Condition: ${data.weather[0].description}</p>
    `;
    document.getElementById("weatherResult").innerHTML = weatherHTML;
}
```
---

## **🔹 5. Enhancements for You to Try**  
✅ Show an **icon** for weather conditions.  
✅ Add **loading animation** while fetching data.  
✅ Use **local storage** to save the last searched city.  

---

🎯 **[Next Lesson (Day 29): Array Basics, Two Pointers Technique](../../../month_2/week_5/day_29/README.md) !**  
Let me know if you have any questions! 🚀

[**Back to Home**](../../../)