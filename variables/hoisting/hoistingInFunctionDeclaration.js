// named function is called Function Decleration
// it is fully hoisted and can be called before it is defined

sayHello(); // this works with no error
function sayHello() {
  console.log("Hello World");
}
