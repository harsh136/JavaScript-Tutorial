// includes() method is the modern standard for checking if a string contains a specific sequence of characters
// It returns a boolean value (true or false).
const hobby = "I love Coding";

console.log(hobby.includes("love")); // true

console.log(hobby.includes("coding")); // false, the method is case-sensitive

// To perform a case-insensitive check, convert the string to lowercase first
console.log(hobby.toLowerCase().includes("coding"));

// using position parameter
console.log(hobby.includes("o", 5));
