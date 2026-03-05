// slice() is used to extract a portion of a String
// it returns a new string containing a selected portion
// syntax: slice(start, end)
// start: extraction begins
// end: extraction stops (not included)

let text = "JavaScript";
console.log(text.slice(0, 4)); //Java

// if end index not given, slice will just extract everything from the start index
// this is called Omitting the End Index

console.log(text.slice(4)); //Script, from where to start continues till the end

// using negative index:
// We can use negative numbers to count backward from the end of the string

const FILENAME = "myfile.jpg";
console.log(FILENAME.slice(-4)); //.jpg, where to end extraction from the end of the string

// slice can return an enpty string in the following few cases:

// when start > end

console.log("Hello".slice(3, 1)); // output ""

// when start > string length

console.log("Hello".slice(3, 1)); // Output: ""

// if negative (-ve) index > beginning of the string, it returns the whole string

console.log("Hi".slice(-5));
