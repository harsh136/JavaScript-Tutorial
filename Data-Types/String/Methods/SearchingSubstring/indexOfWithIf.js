// there can be some issue while using indexOf with if

let aString = "Hello this is a String";

if (aString.indexOf("Hello")) {
  console.log("Found it"); // doesn't work! if considers 0 to be false and Hello is at index 0
}

// we should check for -1, which means substring not present

if (aString.indexOf("Hello") != -1) {
  console.log("Found it"); // works
}
