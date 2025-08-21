let s = new Set([1, 2, 3]);
console.log(typeof s);  // "object"
console.log(s instanceof Set);  // true


let today = new Date.UTC(5.30);
console.log("Date:", today);

let students = ["Deepak", "Anjali", "Rahul"];
students.push("Sita");     // Add at end
students.unshift("Amit");  // Add at start
students.splice(2, 1, "Raj"); // Replace at index 2

console.log("All Students:", students);
console.log("Second Student:", students[1]);

// Loop through students (for...of)
console.log("Looping through students:");
for (let student of students) {
    console.log(student);
}

// 5. SET (unique departments)
let departments = new Set(["CSE", "ECE", "MECH", "CSE"]); // Duplicate "CSE" removed
console.log("Departments:", departments);

// Loop through Set
for (let dept of departments) {
    console.log("Department:", dept);
}



// Arrow function (calculate average marks)
let calcAverage = (marks) => {
    let total = marks.reduce((sum, m) => sum + m, 0);
    return total / marks.length;
};
let marks = [85, 90, 88];
console.log("Average Marks:", calcAverage(marks));

// 7. LOOPS
console.log("While loop - Roll Numbers:");
let rn = 101;
while (rn <= 103) {
    console.log("Roll No:", rn);
    rn++;
}

console.log("Do...while loop - Hostel Floors:");
let floor = 1;
do {
    console.log("Hostel Floor:", floor);
    floor++;
} while (floor <= 3);

// 8. for...in loop (object properties)
console.log("Student Info:");
for (let key in studentInfo) {
    console.log(`${key}: ${studentInfo[key]}`);
}


// 1. Basic Math Properties
console.log("PI:", Math.PI);
console.log("Euler's Number:", Math.E);
console.log("Square Root of 2:", Math.SQRT2);

// 2. Rounding
console.log("Round 4.7:", Math.round(4.7));    // 5
console.log("Round 4.3:", Math.round(4.3));    // 4
console.log("Ceil 4.1:", Math.ceil(4.1));      // 5
console.log("Floor 4.9:", Math.floor(4.9));    // 4
console.log("Truncate 4.9:", Math.trunc(4.9)); // 4

// 3. Absolute Value
console.log("Absolute of -25:", Math.abs(-25)); // 25

// 4. Power and Square Root
console.log("2^3:", Math.pow(2, 3));           // 8
console.log("Square root of 49:", Math.sqrt(49)); // 7

// 5. Min and Max (Student marks example)
let marks = [85, 90, 78, 95];
console.log("Highest Marks:", Math.max(...marks)); // 95
console.log("Lowest Marks:", Math.min(...marks));  // 78

// 6. Random Numbers
console.log("Random between 0 and 1:", Math.random());
console.log("Random between 1 and 10:", Math.floor(Math.random() * 10) + 1);

// 7. Trigonometry (Angle in radians)
console.log("Sin(0):", Math.sin(0));
console.log("Cos(0):", Math.cos(0));

// 8. Logarithms
console.log("Natural log of 10:", Math.log(10));
console.log("Base-10 log of 100:", Math.log10(100));

// 9. Exponent
console.log("e^3:", Math.exp(3));


// 1. Creating a Map
let studentMap = new Map();

// 2. Adding key-value pairs (set)
studentMap.set("101", { name: "Deepak", dept: "CSE" });
studentMap.set("102", { name: "Anjali", dept: "ECE" });
studentMap.set("103", { name: "Rahul", dept: "MECH" });

// 3. Getting values (get)
console.log("Student 101:", studentMap.get("101"));

// 4. Checking existence (has)
console.log("Has Roll No 102?", studentMap.has("102")); // true
console.log("Has Roll No 105?", studentMap.has("105")); // false

// 5. Size of Map
console.log("Total Students:", studentMap.size);

// 6. Deleting a key
studentMap.delete("103");
console.log("After deletion:", studentMap);

// 7. Looping through Map
console.log("Looping using for...of (entries):");
for (let [rollNo, details] of studentMap) {
    console.log(`Roll No: ${rollNo}, Name: ${details.name}, Dept: ${details.dept}`);
}

console.log("Looping through keys:");
for (let rollNo of studentMap.keys()) {
    console.log("Roll No:", rollNo);
}

console.log("Looping through values:");
for (let details of studentMap.values()) {
    console.log("Details:", details);
}

// 8. Using forEach
studentMap.forEach((details, rollNo) => {
    console.log(`(forEach) ${rollNo} => ${details.name} (${details.dept})`);
});

// 9. Clearing all entries
studentMap.clear();
console.log("After clearing:", studentMap);


// 1. Creating a Set
let deptSet = new Set(["CSE", "ECE", "MECH", "CSE"]); 
// Duplicate "CSE" will be ignored

console.log("Departments:", deptSet);

// 2. Adding values
deptSet.add("CIVIL");
deptSet.add("IT");

// 3. Checking if value exists
console.log("Has CSE?", deptSet.has("CSE"));   // true
console.log("Has BIO?", deptSet.has("BIO"));   // false

// 4. Size of Set
console.log("Total Departments:", deptSet.size);

// 5. Deleting a value
deptSet.delete("MECH");
console.log("After deletion:", deptSet);

// 6. Looping through Set
console.log("Looping with for...of:");
for (let dept of deptSet) {
    console.log("Department:", dept);
}

console.log("Looping with forEach:");
deptSet.forEach(dept => {
    console.log("(forEach) Department:", dept);
});

// 7. Converting Set to Array
let deptArray = Array.from(deptSet);
console.log("Array from Set:", deptArray);

// 8. Clearing the Set
deptSet.clear();
console.log("After clearing:", deptSet);