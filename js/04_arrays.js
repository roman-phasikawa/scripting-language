/* Lab 04: Arrays */

// 1. Array Creation, Reading & Writing
console.log("ARRAY CREATION, READING & WRITING");

let arr = [1, 2, 3];
let mixedArr = [1, "BCA", true];
let complexArr = [{ id: 1 }, [1, 2]];

console.log("Simple =", arr);
console.log("Mixed =", mixedArr);
console.log("Complex =", complexArr);

console.log("First =", arr[0]);
console.log("Second =", arr[1]);

arr[3] = 4;
console.log("Add at index 3 =", arr);

arr[arr.length] = 5;
console.log("Add at end =", arr);
console.log("");

// 2. Constructor, Length & Prototype
console.log("CONSTRUCTOR, LENGTH & PROTOTYPE");
let newArr = new Array(10, 20, 30);
console.log("Constructor =", newArr);
console.log("Length =", arr.length);
console.log("Prototype Check =", Array.prototype.constructor === Array);
console.log("");

// 3. Array Methods
console.log("ARRAY METHODS");
arr.push(6);
console.log("push(6) =", arr);

arr.unshift(0);
console.log("unshift(0) =", arr);

arr.pop();
console.log("pop() =", arr);

arr.shift();
console.log("shift() =", arr);

arr.splice(1, 1, 9);
console.log("splice(1, 1, 9) =", arr);

let doubled = arr.map((val) => val * 2);
console.log("map() =", doubled);

let merged = arr.concat([7, 8]);
console.log("concat() =", merged);

let index = arr.indexOf(3);
console.log("indexOf(3) =", index);

let joinedStr = arr.join("-");
console.log("join('-') =", joinedStr);

let strVal = arr.toString();
console.log("toString() =", strVal);
console.log("");

// 4. Multidimensional Array
console.log("MULTIDIMENSIONAL ARRAY");
let matrix = [
  [1, 2],
  [3, 4],
];

console.log("Matrix =", matrix);
console.log("Row 0, Col 1 =", matrix[0][1]);

matrix[1][1] = 99;
console.log("After modify =", matrix[1]);

console.log("Traverse Matrix:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log("[" + i + "][" + j + "] =", matrix[i][j]);
  }
}
