# Scope = Visibility
Scope determines the accessibility of a variable

## Variables have three types of scope:
- Global
- Function (Local)
- Block

## Global
Declared outside any function or block and are accessible throughout the entire program.

```javascript
// Global variables
let globalVar = "I'm global";
const anotherGlobal = 42;

function showGlobal() {
    console.log(globalVar); // "I'm global"
    console.log(anotherGlobal); // 42
}

showGlobal();

// Can access from anywhere
console.log(globalVar); // "I'm global"
```

## Function Scope (Local Scope)
Declared inside a function and is only accessible within that function.

```javascript
function localVarExample() {
    let localVar = "I'm local";
    const anotherLocal = 100;
    
    console.log(localVar); // "I'm local"
}

localVarExample();

// These will cause ReferenceError
console.log(localVar); // ReferenceError: localVar is not defined
console.log(anotherLocal); // ReferenceError: anotherLocal is not defined
```

## Block Scoped
Variables declared with `let` and `const` are only accessible within the nearest block `{}`.

```javascript
{
    let blockVar = "I'm block-scoped";
    const blockConstant = "Cannot reassign";
    
    console.log(blockVar); // "I'm block-scoped"
}

// These will cause ReferenceError
console.log(blockVar); // ReferenceError
console.log(blockConstant); // ReferenceError
```
