# 📚 JavaScript Call Stack – সম্পূর্ণ ইন্টারভিউ প্রশ্ন ও উত্তর (বাংলা)

## 🧠 মৌলিক ধারণা

### ১. JavaScript-এ Call Stack কী?
Call Stack হলো একটি ডেটা স্ট্রাকচার যা JavaScript ইঞ্জিন ফাংশন কল ট্র্যাক করতে ব্যবহার করে। এটি **Last-In, First-Out (LIFO)** পদ্ধতিতে কাজ করে, অর্থাৎ সর্বশেষ যে ফাংশন কল হয়েছে, সেটিই প্রথমে সম্পন্ন হয়।

### ২. Call Stack কীভাবে কাজ করে?
- একটি ফাংশন কল হলে, একটি **stack frame** তৈরি হয় এবং স্ট্যাকে যোগ হয়।
- যদি সেই ফাংশন আরেকটি ফাংশন কল করে, তাহলে নতুন ফ্রেম যোগ হয়।
- ফাংশন সম্পন্ন হলে, তার ফ্রেম স্ট্যাক থেকে সরিয়ে ফেলা হয়।
- এই প্রক্রিয়া চলতে থাকে যতক্ষণ না স্ট্যাক খালি হয়।

### ৩. একটি ফাংশন কল হলে কী ঘটে?
- একটি নতুন stack frame তৈরি হয়।
- ফাংশনের আর্গুমেন্ট, লোকাল ভেরিয়েবল এবং return address সংরক্ষিত হয়।
- ফাংশনের কোড সেই ফ্রেমে এক্সিকিউট হয়।
- যদি অন্য ফাংশন কল হয়, তাহলে একই প্রক্রিয়া পুনরাবৃত্তি হয়।

### ৪. Call Stack-এর গুরুত্ব কী?
- এটি ফাংশনের **execution context** ধরে রাখে।
- সঠিক **execution order** নিশ্চিত করে।
- **ডিবাগিং**-এ সহায়তা করে, যেমন stack trace দেখায়।

### ৫. Call Stack-এ ‘LIFO’ বলতে কী বোঝায়?
**LIFO (Last-In, First-Out)** অর্থ:
- সর্বশেষ যোগ হওয়া ফাংশন প্রথমে সম্পন্ন হয়।
- এটি nested ফাংশন কলের সঠিক রিটার্ন অর্ডার নিশ্চিত করে।

## 🔄 এক্সিকিউশন মডেল

### ৬. Call Stack কীভাবে synchronous ও asynchronous কোড পরিচালনা করে?
- **Synchronous কোড** সরাসরি call stack-এ এক্সিকিউট হয়।
- **Asynchronous কোড** (যেমন `setTimeout`, `fetch`) **event loop** দ্বারা পরিচালিত হয়:
  - async টাস্ক browser API-তে পাঠানো হয়।
  - সম্পন্ন হলে, তার callback **task queue**-তে যোগ হয়।
  - call stack খালি হলে, event loop সেই callback স্ট্যাকে পাঠায়।

### ৭. Call Stack ও Event Loop-এর সম্পর্ক কী?
- **Call Stack** synchronous কোড এক্সিকিউট করে।
- **Event Loop** call stack ও task queue পর্যবেক্ষণ করে।
- stack খালি হলে, queued callback স্ট্যাকে পাঠায়।

### ৮. JavaScript-এ Event Loop কী?
Event Loop হলো একটি মেকানিজম যা:
- call stack ও task/microtask queue পর্যবেক্ষণ করে।
- stack খালি হলে queued callback এক্সিকিউট করে।
- **non-blocking**, asynchronous আচরণ সম্ভব করে।

### ৯. Synchronous ও Asynchronous এক্সিকিউশনের পার্থক্য কী?
| Execution Type | বর্ণনা                                          | উদাহরণ                        |
|----------------|--------------------------------------------------|--------------------------------|
| Synchronous     | এক লাইনের পর আরেকটি sequentially এক্সিকিউট হয়     | `let x = add(2, 3);`           |
| Asynchronous    | callback/promises ব্যবহার করে independently হয় | `setTimeout(() => {}, 1000);`  |

## ⚠️ ত্রুটি ও অপ্টিমাইজেশন

### ১০. Stack Overflow Error কী?
যখন call stack তার সর্বোচ্চ সীমা অতিক্রম করে, তখন **stack overflow** ঘটে। সাধারণত:
- গভীর বা অনন্ত **recursion** এর কারণে।
- base case না থাকলে।

### ১১. Stack Overflow Error কীভাবে এড়ানো যায়?
- **base case** সহ recursive ফাংশন লিখুন।
- সম্ভব হলে **iteration** ব্যবহার করুন।
- **Tail Call Optimization** ব্যবহার করুন (যদি ইঞ্জিন সমর্থন করে)।

### ১২. Call Stack-এ ফাংশনের মধ্যে error হলে কী হয়?
- যদি error ধরা না হয়, তাহলে তা **stack উপরে** propagate করে।
- যতক্ষণ না `try...catch` ব্লক পাওয়া যায়, stack unwind হয়।
- যদি ধরা না পড়ে, তাহলে global context-এ পৌঁছে প্রোগ্রাম ক্র্যাশ করতে পারে।

### ১৩. Tail Call Optimization কী এবং এটি Call Stack-এর সাথে কীভাবে সম্পর্কিত?
Tail Call Optimization (TCO) এমন একটি কৌশল যেখানে recursive কল যদি ফাংশনের শেষ কাজ হয়, তাহলে নতুন ফ্রেম না বানিয়ে বর্তমান ফ্রেম পুনঃব্যবহার করা হয়। এটি deep recursion-এ stack overflow প্রতিরোধ করে।

## 🧩 উন্নত ধারণা

### ১৪. Call Stack কীভাবে Promises ও Microtasks-এর সাথে কাজ করে?
- Promise-এর `.then`, `.catch` callback **microtask queue**-তে যায়।
- Microtasks **regular tasks** এর আগে এক্সিকিউট হয় যখন stack খালি থাকে।
- এটি দ্রুত ও নির্ভরযোগ্য async আচরণ নিশ্চিত করে।

### ১৫. Call Stack কি একসাথে একাধিক ফাংশন কল পরিচালনা করতে পারে?
না। JavaScript **single-threaded**, তাই call stack একবারে একটি ফাংশন এক্সিকিউট করে। concurrency অর্জিত হয় asynchronous callback ও event loop-এর মাধ্যমে।

### ১৬. Debugging-এর সময় Call Stack দেখা যায় কি?
হ্যাঁ। Chrome বা Firefox-এর Developer Tools-এ **call stack trace** দেখা যায় যখন execution pause হয় বা breakpoint হিট করে। প্রতিটি ফ্রেম ও তার ভেরিয়েবল দেখা যায়।

### ১৭. Call Stack ও Heap-এর মধ্যে পার্থক্য কী?
| বৈশিষ্ট্য       | Call Stack                        | Heap                              |
|----------------|-----------------------------------|-----------------------------------|
| উদ্দেশ্য       | ফাংশন কল ট্র্যাক করে               | ডায়নামিক মেমোরি সংরক্ষণ করে      |
| স্ট্রাকচার     | LIFO stack                        | Unordered memory allocation       |
| ব্যবহার         | Execution context                 | অবজেক্ট, ক্লোজার, বড় ডেটা        |

### ১৮. Stack Frame কী?
Stack Frame হলো call stack-এ একটি ফাংশন কলের রেকর্ড। এটি ধারণ করে:
- ফাংশনের আর্গুমেন্ট
- লোকাল ভেরিয়েবল
- return address

### ১৯. JavaScript-এ Closure কী?
Closure হলো একটি ফাংশন যা তার **outer scope**-এর ভেরিয়েবল retain করে, এমনকি outer ফাংশন return করার পরেও। এটি ব্যবহৃত হয়:
- ডেটা encapsulation-এ
- state বজায় রাখতে

### ২০. Recursion ও Iteration কীভাবে Call Stack-কে ভিন্নভাবে প্রভাবিত করে?
- **Recursion** প্রতিটি কলের জন্য নতুন stack frame তৈরি করে, যা overflow ঘটাতে পারে।
- **Iteration** একই ফ্রেম পুনঃব্যবহার করে, যা মেমোরি-সাশ্রয়ী।

---

✅ **ইন্টারভিউ টিপস:** Call Stack ব্যাখ্যা করতে প্রস্তুত থাকুন ডায়াগ্রাম বা লাইভ কোড দিয়ে। Event Loop ও asynchronous আচরণের সাথে এর সম্পর্ক বোঝা JavaScript দক্ষতার জন্য গুরুত্বপূর্ণ।
