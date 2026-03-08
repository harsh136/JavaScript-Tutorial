// Data-Type is catogarized into two types
// 1: Primitive -> they are immutable (cannot be changed once created) and stored directly inside the stack
// 2: Non Primitive/Reference type -> They are objects that are stored by reference in the heap

// Primitives: there are 7 primitive types ->
let someNumber = 23; // Number, integer/floating point

// Special values:
let a = 2 / 0; // Infinity
console.log(someNumber * "Hello"); // NaN, not a number

let someString = "Hello there!"; // String

let isActive = true; // Boolean

let noValue = undefined; // undefined (default value of variable)
let defaultVaue;
console.log(typeof defaultVaue); // undefined

let nothing = null; // null, it is assigned by the user intentionally

let unique = Symbol("001"); // Symbol, it is immutable, unique every time
let id = Symbol("unique-id");
let id2 = Symbol("unique-id"); // different symbol
console.log(id === id2); // false

let bigNumber = 9876543210987653n; // BigInt, for storing bigger integer values

// Non-Primitive / Reference types ->
// Objects -> (Collection of key-value pairs)
let user = {
  name: "Harsh",
  age: 22,
  address: {
    city: "Varanasi",
    state: "Uttar Pradesh",
  },
};
// Objects are reference types
let user2 = user;
user2.age = 25;
console.log(user.age); // 25

// Arrays -> (Ordered list of values)
let anArray = [1, 2, 3, "Hello", true, "Bye!", { seven: 7 }];
console.log(anArray);

// Functions -> (Reusable block of code)
let doSomething = function () {
  const nameOfUser = "Harsh";
  return console.log(`Hello ${nameOfUser}`);
};
doSomething(); // calling function

// for type checking, we use typeof operator:
console.log(typeof doSomething); // function
