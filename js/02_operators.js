/* Lab 02: JS Operators */

// 1. Arithmetic Operators
console.log("ARITHMETIC OPERATORS");
let a = 15,
  b = 4;
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));

let x = 10,
  y = 10;
console.log("++x = " + (++x));
console.log("y++ = " + (y++));
console.log("--x = " + (--x));
console.log("y-- = " + (y--));
console.log("");

// 2. Assignment Operators
console.log("ASSIGNMENT OPERATORS");
let n = 20;
n = 10;
console.log("n = " + n);
console.log("n += 5 -> " + (n += 5));
console.log("n -= 3 -> " + (n -= 3));
console.log("n *= 2 -> " + (n *= 2));
console.log("n /= 4 -> " + (n /= 4));
console.log("n %= 4 -> " + (n %= 4));

let flags = 5;
console.log("flags &= 3 -> " + (flags &= 3));
console.log("flags |= 2 -> " + (flags |= 2));
console.log("flags ^= 1 -> " + (flags ^= 1));
console.log("");

// 3. Comparison Operators
console.log("COMPARISON OPERATORS");
let p = 10,
  q = "10";
console.log("p == q -> " + (p == q));
console.log("p === q -> " + (p === q));
console.log("p != q -> " + (p != q));
console.log("p !== q -> " + (p !== q));
console.log("p > 5 -> " + (p > 5));
console.log("p < 5 -> " + (p < 5));
console.log("p >= 10 -> " + (p >= 10));
console.log("p <= 8 -> " + (p <= 8));
console.log("");

// 4. Logical Operators
console.log("LOGICAL OPERATORS");
let isBCA = true,
  pass = false;
console.log("isBCA && pass -> " + (isBCA && pass));
console.log("isBCA || pass -> " + (isBCA || pass));
console.log("!pass -> " + !pass);
console.log("");

// 5. Conditional (Ternary) Operator
console.log("CONDITIONAL OPERATOR");
let mark = 75;
let res = mark >= 40 ? "Pass" : "Fail";
console.log("mark >= 40 ? 'Pass' : 'Fail' -> " + res);
console.log("");

// 6. Typeof Operator
console.log("TYPEOF OPERATOR");
let str = "TU",
  num = 100,
  bool = true,
  obj = { id: 1 },
  fn = function () {},
  un;

console.log("typeof str -> " + typeof str);
console.log("typeof num -> " + typeof num);
console.log("typeof bool -> " + typeof bool);
console.log("typeof obj -> " + typeof obj);
console.log("typeof fn -> " + typeof fn);
console.log("typeof un -> " + typeof un);