# Hoisting in JavaScript

Hoisting is JavaScript's default behavior of moving **declarations** to the top of their scope before code execution.

---

## How It Works

The JavaScript engine scans your code in two phases:
1. **Compilation phase**: All declarations are registered in memory
2. **Execution phase**: Code runs line by line

This means you can use variables and functions **before** they appear in your code.

---

## Variable Hoisting

### `var`
- Declaration is hoisted to the top
- Initialization stays in place
- Accessing before declaration returns `undefined`

### `let` and `const`
- Declarations are hoisted but **not initialized**
- Accessing before declaration throws a ReferenceError (Temporal Dead Zone)

---

## Function Hoisting

### Function Declarations
- Fully hoisted (both name and body)
- Can be called before they appear in code

### Function Expressions
- Only the variable declaration is hoisted
- The function body is not
- Calling before assignment throws an error

---

## Key Takeaway

Hoisting allows flexible code organization but can cause confusion. Declare variables at the top of their scope and prefer `let`/`const` over `var` to avoid unexpected behavior.
