/* Lab 05: Functions & Objects */

// 1. Function Creation, Parameters, Return & Calling
console.log("FUNCTION CREATION, PARAMETERS & RETURN");
function add(a, b) {
  return a + b; // Return statement
}
let sum = add(5, 10); // Calling function
console.log("Sum =", sum);
console.log("");

// 2. Arguments Object
console.log("ARGUMENTS OBJECT");
function showArgs() {
  console.log("Arg 0 =", arguments[0]);
  console.log("Arg 1 =", arguments[1]);
  console.log("Total Args =", arguments.length);
}
showArgs("BCA", 2026);
console.log("");

// 3. Nested Functions
console.log("NESTED FUNCTIONS");
function outer() {
  let outerVar = "Outer";

  function inner() {
    let innerVar = "Inner";
    console.log("Access =", outerVar + " & " + innerVar);
  }
  inner(); // Calling nested function
}
outer();
console.log("");

// 4. Arrow Functions
console.log("ARROW FUNCTIONS");
const square = (x) => x * x;
const greet = () => "Hello!";
console.log("Square of 4 =", square(4));
console.log("Greeting =", greet());
console.log("");

// 5. Objects Creation (Literal, Object Constructor & Function Constructor)
console.log("OBJECT CREATION METHODS");

// Method A: Object Literal
let obj1 = {
  name: "Ram",
  age: 20,
};
console.log("Literal Object =", obj1);

// Method B: Object Constructor (new Object())
let obj2 = new Object();
obj2.name = "Sita";
obj2.age = 22;
console.log("Object Constructor =", obj2);

// Method C: Function Constructor
function Student(name, age) {
  this.name = name;
  this.age = age;
}
let obj3 = new Student("Hari", 21);
console.log("Function Constructor =", obj3);
