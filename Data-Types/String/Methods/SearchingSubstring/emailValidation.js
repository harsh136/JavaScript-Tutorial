// let's write a code to check if an e-mail is valid or not using indexOf()

const email = "user@gmail.com";

if (email.indexOf("@") !== -1) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid! Missing '@' symbol");
}
