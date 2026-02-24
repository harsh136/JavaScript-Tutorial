// there are 3 ways to create a sting in javascript (actually 4 🙂, with the use of string() function and constructor)

// Using String Literals
// Single Quots
let greet = "Hello there";
console.log(greet);

// Double Quots
let greeting = "Good Morning";
console.log(greeting);

// Tamplate Literals
// they are special, we can embed code expressions directly into it by using ${}
let tamplateLiterals = (user) => {
  console.log(`Hello ${user}`); // this is called string interpolation.
  //Embedding variables or expressions directly using ${variable}
};
tamplateLiterals("harsh");

// Strings are immptable, once created they cannot be changed, instead a new string is created

let word = `Hello`;
word[0] = `J`;
console.log(word); //unchanged
