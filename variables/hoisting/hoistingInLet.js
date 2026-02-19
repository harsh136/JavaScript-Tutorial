//hoisting in let:
try {
  console.log(age); // ReferenceError: Cannot access 'age' before initialization
} catch (err) {
  console.log(err);
}

let age = 25;
console.log(age); // 25
