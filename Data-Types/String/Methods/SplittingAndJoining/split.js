// split() divides a String into an ordered list of substrings and returns them as a new Array
// it's syntax is: string.split(separator, limit)
// separator: the pettern (string or RegEx) where split should occure
// limit: non-negative integer specifying the maximum number of substrings to include in the array

const someString = "I'm Learning JavaScript";
console.log(someString.split(" ")); // [ "I'm", 'Learning', 'JavaScript' ]

const language = "Java";
console.log(language.split(""));

// using limit
const fruits = "apple,banana,orange,grape";
console.log(fruits.split(",", 2)); // [ 'apple', 'banana' ]
