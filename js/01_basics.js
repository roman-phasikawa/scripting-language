/* Lab 01: JS Basics, Output, Scope & Comments */

// 1. Output Methods
console.log("OUTPUT METHODS");
console.log("Console Output");
// document.write("<h3>JS Basics</h3>");
// alert("Alert Box");
console.log("");

// 2. Data Types & Variables
console.log("DATA TYPES & VARIABLES");
var name = "Ram";
let age = 20;
const college = "TU";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("College: " + college);
console.log();

// 3. Scope Demonstration (var vs let vs const)
console.log("SCOPE DEMONSTRATION");
var gVar = "Global";

function testScope() {
  var fVar = "Function Scope";

  if (true) {
    var bVar = "var (ignores block)";
    let bLet = "let (restricted to block)";
    console.log("Inside Block: " + bLet);
  }

  console.log("Outside Block: " + bVar);
  // console.log(bLet); // Error: bLet is not defined
}
testScope();
console.log();

// 4. Expression & Statement
console.log("EXPRESSION & STATEMENT");
let a = 10,
  b = 20;
let sum = a + b; // Expression (evaluates to 30)

if (sum >= 30) {
  // Statement (controls execution flow)
  console.log("Sum = " + sum);
}
