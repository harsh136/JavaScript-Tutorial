// Explicit Conversion -> Manual

// -> Number
console.log(Number("123")); // 123
console.log(Number("12.34")); // 12.34
console.log(Number("")); // 0
console.log(Number("hello")); // NaN (Not a Number)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// -> String
console.log(String(123)); // "123"
console.log((123).toString()); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// -> Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true (objects are truthy)
console.log(Boolean([])); // true (arrays are truthy)

// Shorthand boolean conversion (double negation)
console.log(!!"hello"); // true
console.log(!!0); // false
