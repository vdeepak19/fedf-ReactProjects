// JS HOME
console.log("Hello World!");

// JS Introduction
console.log("JavaScript can change HTML content, styles, and more.");

// JS Where To
console.log("External or Internal JS can be used.");

// JS Output
document.body.innerHTML += "<p>Hello World!</p>";
alert("This is an alert");
console.log("Message in console");

// JS Statements
let x = 5; let y = 6; let z = x + y; console.log(z);

// JS Syntax
let nameVar = "John"; let age = 30;

// JS Comments
// Single-line comment
/* Multi-line comment */

// JS Variables
var city = "London";
let country = "UK";
const pi = 3.14;

// JS Let
let a = 10; a = 20;

// JS Const
const constName = "Alice";

// JS Operators
let sum = 5 + 3;
let isEqual = (sum === 8);

// JS Arithmetic
let total = (5 * 2) + (10 / 2);

// JS Assignment
let assignVar = 10;
assignVar += 5;

// JS Data Types
let str = "Hello";
let num = 42;
let obj = {name: "John"};
let arr = [1, 2, 3];

// JS Functions
function greet(name) { return "Hello " + name; }
console.log(greet("Sam"));

// JS Objects
let person = {name: "John", age: 30};

// JS Object Properties
console.log(person.name);
console.log(person["age"]);

// JS Object Methods
let person2 = {
  name: "John",
  greet: function() { return "Hi " + this.name; }
};
console.log(person2.greet());

// JS Object Display
console.log(JSON.stringify(person2));

// JS Events
document.body.innerHTML += `<button onclick="alert('Button clicked!')">Click</button>`;

// JS Strings
let text = "Hello World";

// JS String Templates
let user = "Sam";
console.log(`Hello, ${user}!`);

// JS Numbers
let n = 42;

// JS BigInt
let big = 123456789012345678901234567890n;

// JS Arrays
let fruits = ["Apple", "Banana", "Mango"];

// JS Dates
let now = new Date();
console.log(now);

// JS Math
let r = Math.sqrt(16);

// JS Random
let rand = Math.random();

// JS Booleans
let isDone = true;

// JS Comparisons
console.log(5 > 3);

// JS If Else
if (5 > 3) console.log("Yes"); else console.log("No");

// JS Switch
let day = 2;
switch (day) {
  case 1: console.log("Mon"); break;
  case 2: console.log("Tue"); break;
}

// JS Loop For
for (let i = 0; i < 3; i++) console.log(i);

// JS Loop For In
for (let key in person) console.log(key, person[key]);

// JS Loop For Of
for (let fruit of fruits) console.log(fruit);

// JS Loop While
let i = 0;
while (i < 3) { console.log(i); i++; }

// JS Break
for (let j = 0; j < 5; j++) {
  if (j === 3) break;
  console.log(j);
}

// JS Iterables
for (let char of "Hi") console.log(char);

// JS Iterators
let arr2 = [1,2,3];
let it = arr2[Symbol.iterator]();
console.log(it.next().value);

// JS typeof
console.log(typeof "Hello");

// JS toString()
let num2 = 123;
console.log(num2.toString());

// JS Type Conversion
let str2 = String(123);
let num3 = Number("123");

// JS Bitwise
console.log(5 & 1);

// JS Errors
try { nonExistent(); }
catch (err) { console.log(err.message); }

// JS Scope
function testScope() {
  let x = 10; 
  console.log(x);
}
testScope();

// JS Hoisting
console.log(hoistedVar);
var hoistedVar = 5;

// JS Modules
// (Would normally be in separate files - example only)
export const modName = "John"; // file1.js
// import { modName } from './file1.js'; // file2.js
// console.log(modName);


// 1. Creating Strings
let str1 = "KL University";
let str2 = 'Computer Science';
let str3 = `Student: Deepak`; // Template literal

console.log(str1);
console.log(str2);
console.log(str3);

// 2. String Property
console.log("Length of str1:", str1.length);

// 3. Case Conversion
let name = "Deepak";
console.log(name.toUpperCase()); // "DEEPAK"
console.log(name.toLowerCase()); // "deepak"

// 4. Searching
let uni = "KL University";
console.log(uni.indexOf("Uni"));   // 3
console.log(uni.includes("KL"));   // true
console.log(uni.startsWith("KL")); // true
console.log(uni.endsWith("ty"));   // true

// 5. Extracting
let dept = "Computer Science";
console.log(dept.slice(0, 8));    // "Computer"
console.log(dept.substring(9));   // "Science"
console.log(dept.substr(0, 8));   // "Computer" (deprecated but works)

// 6. Replacing
let sentence = "I study in KL College";
console.log(sentence.replace("College", "University"));

// 7. Trimming
let messy = "   Hello KL   ";
console.log(messy.trim());      // "Hello KL"
console.log(messy.trimStart()); // "Hello KL   "
console.log(messy.trimEnd());   // "   Hello KL"

// 8. Splitting & Joining
let csv = "CSE,ECE,MECH";
let arr = csv.split(","); 
console.log(arr);               // ["CSE", "ECE", "MECH"]
console.log(arr.join(" - "));   // "CSE - ECE - MECH"

// 9. Template Literals
let student = "Anjali";
let branch = "CSE";
let message = `Welcome ${student} to ${branch} department in KL University!`;
console.log(message);