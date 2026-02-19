// var is Function scoped.
// unlike normal variables, var ignores the if or for block and its scope is the entire function
// Example:
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
}
console.log(x);

function testScope() {
  if (true) {
    var x = "I am function scoped";
  }
  console.log(x);
}
testScope();
