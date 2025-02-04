let str = "my name is robin";

// Step 1: Split the string into words
let words = str.split(' ');

// Step 2: Create an empty array to store capitalized words
let capitalizedWords = [];

// Step 3: Loop through each word
for (let i = 0; i < words.length; i++) {
  let word = words[i]; // Get the current word
  let firstLetter = word[0].toUpperCase(); // Capitalize the first letter
  let restOfWord = word.slice(1); // Get the rest of the word
  let capitalizedWord = firstLetter + restOfWord; // Combine them
  capitalizedWords.push(capitalizedWord); // Add the capitalized word to the array
}

// Step 4: Join the capitalized words back into a single string
let result = capitalizedWords.join(' ');

console.log(result); // Output: "My Name Is Robin"

let str = "hello world! this is javascript.";
let words = str.split(" "); 
let result = "";

for (let i = 0; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}

result = result.trim(); // Remove the trailing space

console.log(result); // Output: "Hello World! This Is Javascript."