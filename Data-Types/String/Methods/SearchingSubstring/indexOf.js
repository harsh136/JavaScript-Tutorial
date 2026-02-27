// indexOf looks for substring within the given string, starting from the given position
// returns the position where the match was found or -1 if nothing can be found
// by default, it search from index 0 of the string
let someString = `Hello this is a string`;
console.log(someString.indexOf("Hello")); // this will return 0 as Hello is at the first index

console.log(someString.indexOf("S")); // -1, not found, the search is case-sensitive

console.log(someString.indexOf("is", 10)); //11
