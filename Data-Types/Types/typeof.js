// typeof operator:
console.log(typeof "hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // Symbol
console.log(typeof 10n); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object (arrays are special objects)
let test = () => {};
console.log(typeof test); // function
// typeof null is a famous bug
console.log(typeof null); // object (it should be null)
