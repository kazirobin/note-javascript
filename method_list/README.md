# Most Commonly Used JavaScript Functions

Here's a comprehensive list of essential JavaScript functions that every developer should know, categorized by their purpose:

## Array Methods (Most Frequently Used)

1. **`map()`** - Creates a new array by transforming every element
2. **`filter()`** - Returns a new array with elements that pass a test
3. **`reduce()`** - Reduces an array to a single value
4. **`forEach()`** - Executes a function for each array element
5. **`find()`** - Returns the first element that satisfies a condition
6. **`findIndex()`** - Returns the index of the first matching element
7. **`some()`** - Checks if at least one element passes a test
8. **`every()`** - Checks if all elements pass a test
9. **`includes()`** - Checks if an array contains a value
10. **`slice()`** - Returns a portion of an array
11. **`splice()`** - Adds/removes elements from an array
12. **`concat()`** - Merges two or more arrays
13. **`sort()`** - Sorts array elements
14. **`flat()`** - Flattens nested arrays
15. **`flatMap()`** - Maps then flattens the result

## String Methods

1. **`toLowerCase()`/`toUpperCase()`** - Changes string case
2. **`trim()`** - Removes whitespace from both ends
3. **`split()`** - Splits string into an array
4. **`substring()`/`slice()`** - Extracts a portion of string
5. **`replace()`** - Replaces matched substring
6. **`includes()`** - Checks if string contains substring
7. **`startsWith()`/`endsWith()`** - Checks beginning/end of string
8. **`indexOf()`/`lastIndexOf()`** - Finds position of substring
9. **`padStart()`/`padEnd()`** - Pads string to target length
10. **`repeat()`** - Repeats string multiple times

## Object Methods

1. **`Object.keys()`** - Returns array of object's own property names
2. **`Object.values()`** - Returns array of object's own property values
3. **`Object.entries()`** - Returns array of key-value pairs
4. **`Object.assign()`** - Copies properties between objects
5. **`Object.freeze()`** - Prevents object modification
6. **`Object.seal()`** - Prevents adding/removing properties
7. **`Object.create()`** - Creates new object with prototype
8. **`Object.hasOwnProperty()`** - Checks if property exists on object

## Function Methods

1. **`bind()`** - Creates new function with bound `this` value
2. **`call()`** - Calls function with given `this` and arguments
3. **`apply()`** - Similar to call but takes array of arguments
4. **`toString()`** - Returns function source code as string

## Number Methods

1. **`toFixed()`** - Formats number with fixed decimals
2. **`parseInt()`/`parseFloat()`** - Converts string to number
3. **`isNaN()`** - Checks if value is NaN
4. **`isFinite()`** - Checks if value is finite number
5. **`Math.random()`** - Generates random number 0-1
6. **`Math.round()`/`floor()`/`ceil()`** - Rounding functions
7. **`Math.min()`/`max()`** - Finds min/max in arguments
8. **`Math.pow()`** - Exponentiation
9. **`Math.sqrt()`** - Square root

## Date Methods

1. **`Date.now()`** - Current timestamp
2. **`getFullYear()`/`getMonth()`/`getDate()`** - Date components
3. **`getHours()`/`getMinutes()`/`getSeconds()`** - Time components
4. **`getTime()`** - Milliseconds since epoch
5. **`toISOString()`** - ISO format string
6. **`toLocaleString()`** - Locale-specific string

## JSON Methods

1. **`JSON.parse()`** - Converts JSON string to object
2. **`JSON.stringify()`** - Converts object to JSON string

## Promise Methods

1. **`then()`** - Handles promise resolution
2. **`catch()`** - Handles promise rejection
3. **`finally()`** - Executes after promise settles
4. **`Promise.all()`** - Waits for all promises to resolve
5. **`Promise.race()`** - Returns first settled promise
6. **`Promise.resolve()`/`reject()`** - Creates resolved/rejected promise

## ES6+ Special Functions

1. **`Array.from()`** - Creates array from array-like object
2. **`Object.fromEntries()`** - Creates object from key-value pairs
3. **`String.raw()`** - Raw string template tag
4. **`Object.getOwnPropertyDescriptors()`** - Gets all property descriptors
5. **`Object.setPrototypeOf()`** - Sets object prototype

## Functional Programming Helpers

1. **`debounce()`** (Lodash/implementation) - Limits function calls
2. **`throttle()`** (Lodash/implementation) - Limits function call rate
3. **`memoize()`** (Lodash/implementation) - Caches function results
4. **`curry()`** (Lodash/implementation) - Curries a function
5. **`compose()`/`pipe()`** - Function composition utilities

## Browser/DOM Methods (for Web Development)

1. **`querySelector()`/`querySelectorAll()`** - DOM element selection
2. **`addEventListener()`** - Attaches event handlers
3. **`setTimeout()`/`setInterval()`** - Timed execution
4. **`fetch()`** - HTTP requests
5. **`localStorage.getItem()`/`setItem()`** - Client-side storage

These functions form the core toolkit for most JavaScript development tasks. Mastering them will give you strong foundational skills for both frontend and backend JavaScript development.
