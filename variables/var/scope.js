// var is Function scoped.
// unlike normal variables, var ignores the if or for block and its scope is the entire function
// Example:
function testScope() {
  if (true) {
    var x = "I am function scoped";
  }
  console.log(x);
}
testScope();
