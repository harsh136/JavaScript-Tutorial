// to access a character from a string we have following ways:
// using index value
let aString = `Hello`;
console.log(aString[0]); // this will return H

// using at() method. We need to give the index value to the at() method to specify the element we want
// at(index)

console.log(aString.at(0)); // this will also return H

// here's a trick to access the very last character of a given string

console.log(aString.at(-1)); // this will return o
console.log(aString.at(-2)); //this will return l

// here's another way to access the last character of a string

console.log(aString[aString.length - 1]); // just like we were accessing the index value above
