// join() is just the opposite of split()
// split() converts strings into array, join() converts array into string
// syntax: array.join(saperator), if we do not spaerator it will saperate elements with a "," comma

const language = ["J", "a", "v", "a"];
console.log(language.join("")); // Java

const greeting = ["Hello", "World!"];
console.log(greeting.join(" ")); // Hello World!

const fruits = ["Apple", "Banana", "Mango"];
const result = fruits.join(); // No argument provided
console.log(result); // Apple,Banana,Mango
