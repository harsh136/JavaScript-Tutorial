// split() divides a String into an ordered list of substrings and returns them as a new Array
// it's syntax is: string.split(separator, limit)
// separator: the pettern (string or RegEx) where split should occure
// limit: non-negative integer specifying the maximum number of substrings to include in the array

const someString = "I'm Learning JavaScript";
console.log(someString.split(" ")); // [ "I'm", 'Learning', 'JavaScript' ]

// you can find the nuumber of words in a sentence by using the lenght property
console.log(someString.split(" ").length); // 3

const language = "Java";
console.log(language.split("")); // [ 'J', 'a', 'v', 'a' ]

// using limit
const fruits = "apple,banana,orange,grape";
console.log(fruits.split(",", 2)); // [ 'apple', 'banana' ]

//  Omitting the Separator
console.log(language.split()); // [ 'Java' ]
