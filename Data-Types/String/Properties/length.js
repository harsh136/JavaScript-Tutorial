// length is a string property that tells the number of characters a string have
// it is not a method, so we can not use it as lenght(), instead we use .lenght
let userName = `Harsh`;
console.log(userName.length); // this will return 5

// even special characters such \n, \t or even a spece " " is counted
let introdction = `\n${userName}\t`;
console.log(introdction.length);
