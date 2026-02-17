// JavaScript moves all var declarations to the top of the scope
//  it does not move the assignment, this results in the variable being undefined if accessed early
//Example:
console.log(name); //gives undefined instead of an error

var name = "Harsh";

console.log(name);
