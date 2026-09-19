/* Lab 06: Built-in Objects (Number, Boolean, String, Math, Date, RegExp) */

// 1. Number Object
console.log("NUMBER OBJECT");
let myNumber = new Number(10);

console.log("Number Object =", myNumber);
console.log("toExponential() =", myNumber.toExponential());
console.log("toFixed(2) =", myNumber.toFixed(2));
console.log("toString() =", myNumber.toString());
console.log("valueOf() =", myNumber.valueOf());
console.log("toLocaleString() =", myNumber.toLocaleString());
console.log("");

// 2. Boolean Object
console.log("BOOLEAN OBJECT");
let myBoolean = new Boolean(true);

console.log("Boolean Object =", myBoolean);
console.log("Value of myBoolean Object =", myBoolean.valueOf());
console.log("String value of =", myBoolean.toString());
console.log("");

// 3. String Object
console.log("STRING OBJECT");
let str = "Hello JavaScript";
console.log("String =", str);
console.log("String Length =", str.length);
console.log("charAt(0) =", str.charAt(0));
console.log("concat() =", str.concat(" World"));
console.log("indexOf('a') =", str.indexOf("a"));
console.log("lastIndexOf('a') =", str.lastIndexOf("a"));
console.log("localeCompare() =", "apple".localeCompare("banana"));
console.log("");

// 4. Math Object
console.log("MATH OBJECT");
console.log("Math.PI =", Math.PI);
console.log("Math.abs(-10) =", Math.abs(-10));
console.log("Math.round(4.6) =", Math.round(4.6));
console.log("Math.floor(4.9) =", Math.floor(4.9));
console.log("Math.ceil(4.1) =", Math.ceil(4.1));
console.log("Math.pow(2, 3) =", Math.pow(2, 3));
console.log("Math.sqrt(16) =", Math.sqrt(16));
console.log("Math.max(5, 12, 8) =", Math.max(5, 12, 8));
console.log("Math.random() =", Math.random().toFixed(2));
console.log("");

// 5. Date Object
console.log("DATE OBJECT");
let now = new Date();
console.log("Date Object =", now);
console.log("Current Date =", now.toDateString());
console.log("Year =", now.getFullYear());
console.log("Month (0-11) =", now.getMonth());
console.log("Date =", now.getDate());
console.log("Day (0-6) =", now.getDay());
console.log("Hours =", now.getHours());
console.log("Minutes =", now.getMinutes());
console.log("Seconds =", now.getSeconds());
console.log("TimeString =", now.toTimeString());
console.log("");

// 6. RegExp Object
console.log("REGEXP OBJECT");
let pattern = new RegExp("^[1-9]\\d*$");

console.log("RegExp Object =", pattern);
// exec() returns an array containing match details if found, or null if no match
console.log("exec('123') =", pattern.exec("123"));
// test() returns true if the string matches the pattern, otherwise false
console.log("test('123') =", pattern.test("123"));
