// Implicit Conversion (Type Coercion) -> Automatic

// -> String Coercion: works with '+' operator and performs concatenation
let text;

text = "3" + 2; // "32"
console.log(text);
text = "3" + null; // "3null"
console.log(text);
text = 5 + 5 + "1"; // "101" (Left-to-right: 5+5=10, then 10+'1')
console.log(text);

// -> Numeric Coercion: works with operators like '-', '*', '/' or '%' and converts strings and other types into numbers
let num;

num = "10" - "5"; // 5
console.log(num);
num = "10" * 2; // 20
console.log(num);
num = "10" / "2"; // 5
console.log(num);
num = "10" - "hi"; // NaN (The string "hi" cannot be a number)
console.log(num);

// -> Booleans to numbers: true = 1, false = 0
let bool;

bool = 10 + true;
console.log(bool); // 11
bool = 10 - false;
console.log(bool); // 10
