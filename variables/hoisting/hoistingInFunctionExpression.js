// function that is assigned to a variable is called Function Expression. It can be anonymous (without name) or named
// Not fully hoisted, only variable is hoisted and it is unsafe to call early

greetUser(); // ReferenceError: Cannot access 'greet' before initialization
let greet = function () {
  console.log("Hello Harsh");
};

// same this happens with const and var
