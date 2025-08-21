<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Examples - KL University Student Context</title>
</head>
<body>
<h1>JavaScript Examples with KL University Context</h1>
<p>Check the <b>Console</b> (F12 → Console) for logs.</p>

<script>
/* ==============================================
   BASIC JAVASCRIPT EXAMPLES (KL University)
   ============================================== */

// JS HOME
console.log("Welcome to KL University!");

// JS Introduction
console.log("JavaScript can display and process student data at KL University.");

// JS Where To
console.log("You can run JavaScript in browser or link external files.");

// JS Output
document.body.innerHTML += "<p>KL University Student Portal</p>";
alert("Welcome Student!");
console.log("Student Portal Loaded");

// JS Statements
let marks1 = 85; let marks2 = 90; let totalMarks = marks1 + marks2;
console.log("Total Marks:", totalMarks);

// JS Syntax
let studentName = "Deepak"; let semester = 5;

// JS Comments
// Student data example
/* Department:
   Computer Science & Engineering
*/

// JS Variables
var regNo = "Y23CS123";
let department = "CSE";
const universityName = "KL University";

// JS Let
let credits = 20;
credits = 24; // allowed

// JS Const
const maxCredits = 30;

// JS Operators
let attendance = 80 + 5;
let eligibleForExam = (attendance >= 75);
console.log("Eligible for exam?", eligibleForExam);

// JS Arithmetic
let avgMarks = (85 + 90 + 88) / 3;
console.log("Average Marks:", avgMarks);

// JS Assignment
let cgpa = 7.5;
cgpa += 0.2;
console.log("Updated CGPA:", cgpa);

// JS Data Types
let nameStr = "Arjun";
let rollNum = 101;
let studentObj = {name: "Meena", dept: "ECE"};
let subjects = ["Maths", "Physics", "CSE"];
console.log(typeof nameStr, typeof rollNum, typeof studentObj, Array.isArray(subjects));

// JS Functions
function greetStudent(name) { return "Welcome " + name + " to KL University!"; }
console.log(greetStudent("Ravi"));

// JS Objects
let student = {name: "Nisha", regNo: "Y23IT045", dept: "IT"};

// JS Object Properties
console.log(student.name);
console.log(student["regNo"]);

// JS Object Methods
let student2 = {
  name: "Manoj",
  greet: function() { return "Hello " + this.name + ", welcome back!"; }
};
console.log(student2.greet());

// JS Object Display
console.log(JSON.stringify(student2));

// JS Events
document.body.innerHTML += `<button onclick="alert('Logged in Successfully')">Login</button>`;

// JS Strings
let course = "Web Development";

// JS String Templates
let faculty = "Dr. Suresh";
console.log(`Faculty in charge: ${faculty}`);

// JS Numbers
let enrolledStudents = 3500;

// JS BigInt
let studentID = 98765432123456789n;

// JS Arrays
let courseList = ["DBMS", "DSA", "AI"];

// JS Dates
let today = new Date();
console.log("Date:", today);

// JS Math
let highestMarks = Math.max(78, 88, 93);

// JS Random
let randomRoll = Math.floor(Math.random() * 100) + 1;
console.log("Random Roll Number:", randomRoll);

// JS Booleans
let hasLibraryAccess = true;

// JS Comparisons
console.log(credits >= 20);

// JS If Else
if (attendance >= 75) console.log("Eligible for Exams"); else console.log("Not Eligible");

// JS Switch
let day = 3;
switch (day) {
  case 1: console.log("Monday: Classes Start"); break;
  case 3: console.log("Wednesday: Lab Session"); break;
}

// JS Loop For
for (let i = 1; i <= 3; i++) console.log("Year", i);

// JS Loop For In (object keys)
for (let key in student) console.log(key, student[key]);

// JS Loop For Of (iterables)
for (let course of courseList) console.log(course);

// JS Loop While
let year = 1;
while (year <= 4) { console.log("Year", year); year++; }

// JS Break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log("Semester", i);
}

// JS Iterables
for (let char of "B.Tech") console.log(char);

// JS Iterators
let years = [1, 2, 3, 4];
let iterator = years[Symbol.iterator]();
console.log(iterator.next().value);

// JS typeof
console.log(typeof universityName);

// JS toString()
let marks = 450;
console.log(marks.toString());

// JS Type Conversion
let regNoStr = String(10123);
let regNoNum = Number("10123");

// JS Bitwise
console.log(5 & 1);

// JS Errors
try { unknownFunction(); }
catch (err) { console.log("Error:", err.message); }

// JS Scope
function showDept() {
  let dept = "CSE";
  console.log("Department:", dept);
}
showDept();

// JS Hoisting
console.log(myVar); // undefined
var myVar = "KL Student";

/* ==============================================
   SETS & MAPS (KL University Context)
   ============================================== */

// JS Sets - unique roll numbers
let rollSet = new Set(["Y23CS001", "Y23CS002", "Y23CS003"]);
rollSet.add("Y23CS004");
rollSet.add("Y23CS002"); // duplicate ignored
console.log("Roll Set:", rollSet);

// JS Set Methods
let hostelSet = new Set();
hostelSet.add("Block A");
hostelSet.add("Block B");
console.log("Has Block A?", hostelSet.has("Block A"));
hostelSet.delete("Block B");
console.log("Hostel size:", hostelSet.size);
hostelSet.clear();
console.log("Hostel cleared:", hostelSet.size);

// JS Set Logic - course registration
let setA = new Set(["DBMS", "AI", "ML"]);
let setB = new Set(["ML", "IoT", "Cloud"]);
let union = new Set([...setA, ...setB]);
console.log("All Courses:", union);
let intersection = new Set([...setA].filter(c => setB.has(c)));
console.log("Common Courses:", intersection);
let difference = new Set([...setA].filter(c => !setB.has(c)));
console.log("Unique to SetA:", difference);

// JS Set Reference Example
let demoSet = new Set();
demoSet.add("CSE");
demoSet.add("ECE");
console.log(demoSet.has("CSE"));
demoSet.delete("ECE");
console.log(demoSet.size);
demoSet.clear();
console.log(demoSet.size);

// JS Maps - course credits
let courseCredits = new Map();
courseCredits.set("DBMS", 4);
courseCredits.set("DSA", 3);
console.log("DBMS Credits:", courseCredits.get("DBMS"));
console.log("Has DSA?", courseCredits.has("DSA"));
courseCredits.delete("DSA");
console.log("Courses count:", courseCredits.size);
for (let [course, credit] of courseCredits) {
  console.log(course, ":", credit);
}

</script>
</body>
</html>
