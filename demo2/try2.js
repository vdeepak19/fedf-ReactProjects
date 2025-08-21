let mySet = new Set();

// add()
mySet.add(1);
mySet.add(2);

// has()
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

// delete()
mySet.delete(2);

// size
console.log(mySet.size); // 1

// clear()
mySet.clear();
console.log(mySet.size); // 0
