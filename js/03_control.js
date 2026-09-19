/* Lab 03: Control Structures (Conditionals & Loops) */

// 1. Conditional Statements (if, if-else, else-if)
console.log("CONDITIONAL STATEMENTS");
console.log(" ");

// Single If
console.log("If");
let numCheck = 15;
if (numCheck > 0) {
  console.log(numCheck + " is Positive");
}
console.log(" ");

// If-Else & Else-If (Leap Year & Age Category)
console.log("If-Else");
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}
console.log(" ");

console.log("Else-If");
let age = 20;
if (age < 13) {
  console.log("Category: Child");
} else if (age < 20) {
  console.log("Category: Teenager");
} else {
  console.log("Category: Adult");
}
console.log("");

// 2. Switch Case Statement
console.log("SWITCH CASE STATEMENT");
let code = 200;
switch (code) {
  case 200:
    console.log("Status: OK / Success");
    break;
  case 404:
    console.log("Status: Not Found");
    break;
  case 500:
    console.log("Status: Server Error");
    break;
  default:
    console.log("Status: Unknown");
}
console.log("");

// 3. For Loop (Sum & Even Numbers 1 to 10)
console.log("FOR LOOP");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Even Number: " + i);
  }
  sum += i;
}
console.log("Sum of 1 to 10 = " + sum);
console.log("");

// 4. While Loop (Reversing a Number)
console.log("WHILE LOOP");
let num = 1234,
  rev = 0,
  temp = num;
while (temp > 0) {
  let rem = temp % 10;
  rev = rev * 10 + rem;
  temp = Math.floor(temp / 10);
}
console.log("Original: " + num + " | Reversed: " + rev);
console.log("");

// 5. Do-While Loop (Factorial Calculation)
console.log("DO-WHILE LOOP");
let n = 5,
  fact = 1,
  k = n;
do {
  fact *= k;
  k--;
} while (k > 0);
console.log("Factorial of " + n + " = " + fact);
