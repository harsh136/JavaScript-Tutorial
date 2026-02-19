// const is a keyword that connot be re-assigned after it is initialised

const name = "Harsh";
console.log(name);

const number = 9;
try {
  number = 10;
} catch (err) {
  console.log(err);
}
console.log(number);
