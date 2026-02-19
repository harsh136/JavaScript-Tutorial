// let is a modern approach of variable decleration, it was introducedin ES6
// let is block scoped, it cannot be re-declared but it can be re-assigned
let a = 20;
console.log(a); //20

let x = 2;
if (x === 2) {
  let x = 3;
  console.log(x);
}
console.log(x);

function testScope() {
  if (true) {
    let x = "I am block scoped";
    console.log(x);
  }
  // console.log(x);
}
testScope();
