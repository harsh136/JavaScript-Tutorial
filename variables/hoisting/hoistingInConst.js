//hoisting in const:
try {
  console.log(rollNumber); // ReferenceError: Cannot access 'rollNumber' before initialization
} catch (err) {
  console.log(err);
}
const rollNumber = 1242440700;
console.log(rollNumber);
