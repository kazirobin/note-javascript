# **📚 Day 40: Project - URL Shortener Using HashMap**  

Today, we’ll build a simple URL shortener that generates a short version of a long URL using a HashMap for storage.  

---

## **🔹 Project Overview**  

A URL shortener takes a long URL and converts it into a shorter, more manageable format. The shortened URL should be unique and can be used to retrieve the original URL.

### **Key Features**:  
- Generate a short URL for a given long URL.
- Retrieve the original long URL from the short URL.
- Store the mappings using a HashMap (or Object).

---

## **🔹 Implementation Steps**  

1. **HashMap for Storage**: Use a HashMap to store the mapping between short URLs and long URLs.
2. **Base URL**: Define a base URL for the short links.
3. **Unique ID Generation**: Create a simple mechanism to generate unique IDs for short URLs.
4. **Encode and Decode Methods**: Implement methods for encoding (shortening) and decoding (retrieving) URLs.

### **Code Implementation**:
```js
class UrlShortener {
    constructor() {
        this.urlMap = new Map(); // HashMap for storing URLs
        this.baseUrl = "http://short.url/"; // Base URL for shortened links
        this.id = 0; // Counter for unique IDs
    }

    // Method to generate a unique short URL
    encode(longUrl) {
        const shortUrl = this.baseUrl + this.id; // Create short URL
        this.urlMap.set(shortUrl, longUrl); // Store in HashMap
        this.id++; // Increment ID for next short URL
        return shortUrl;
    }

    // Method to retrieve the original long URL
    decode(shortUrl) {
        return this.urlMap.get(shortUrl); // Retrieve from HashMap
    }
}

// Example usage
const urlShortener = new UrlShortener();
const longUrl = "https://www.example.com/some/long/url";
const shortUrl = urlShortener.encode(longUrl);
console.log(shortUrl); // Output: http://short.url/0
console.log(urlShortener.decode(shortUrl)); // Output: https://www.example.com/some/long/url
```

### **Features Explained**:
- **encode**: This method generates a unique short URL by appending an incremental ID to the base URL. It stores the mapping in the HashMap.
- **decode**: This method retrieves the original long URL by looking it up in the HashMap using the short URL.

### **Time Complexity**:  
- Both `encode` and `decode` methods have a time complexity of **O(1)** due to the constant time operations on the HashMap.

### **Space Complexity**:  
- The space complexity is **O(n)**, where n is the number of URLs stored in the HashMap.

---

## **📝 Tasks for You**  
1️⃣ Test the `UrlShortener` class by encoding and decoding multiple URLs.  
2️⃣ Implement additional features, such as handling duplicate long URLs or generating random short URL strings.

---

🎯 **[Next Lesson (Day 41-42): Exploring More Advanced Projects](../day_41-42/README.md)!**  
Let me know if you have any questions or need help with the implementation! 🚀

[**Back to Home**](../../../README.md)