// used to remove whitespace from both the start and the end of a string
// it returns a new string without affecting the original one
// does not affect whitespace in the middle of the string
const userName = "      Harsh      ";
const greeting = `Hello ${userName.trim()}`;
console.log(greeting);
console.log(userName.trim().length);

// console.log(null.trim()); // this will give a type error
// console.log(undefined.trim()); // this will also give a type error
