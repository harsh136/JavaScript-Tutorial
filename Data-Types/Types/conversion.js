// JavaScript is loosely typed, meaning variables can change types
// Explicit Conversion -> Manual

// → Number
console.log(Number("123")); // 123
console.log(Number("12.34")); // 12.34
console.log(Number("")); // 0
console.log(Number("hello")); // NaN (Not a Number)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// → String
String(123)(
  // "123"
  123,
).toString(); // "123"
String(true); // "true"
String(null); // "null"
String(undefined); // "undefined"

// → Boolean
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("hello"); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean({}); // true (objects are truthy)
Boolean([]); // true (arrays are truthy)

// Shorthand boolean conversion (double negation)
!!"hello"; // true
!!0; // false
