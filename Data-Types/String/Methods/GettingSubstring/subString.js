// it works same as slice, but it is an older way to extract a string
// the only difference between slice() and substring() is they behave very differently when handling negative numbers or swapped arguments
// the main two difference are:
// when given a negative index substring() it treats it as 0
// If start index > end index, substring() automatically swaps those arguments

const someText = "Hello World";
console.log(someText.substring(0, 5)); // Hello

console.log(someText.substring(-5)); // Hello World, it treats -ve numbers (-5 in this case) as 0

console.log(someText.substring(5, 1)); // ello, it swaped the arguments
