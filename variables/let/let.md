# The `let` Keyword

Introduced in **ES6 (2015)**, `let` is used to declare variables that can be reassigned.

---

## Key Characteristics

### 1. Block Scope
Variables declared with `let` only exist within the block `{}` where they are defined (e.g., inside loops, conditionals, or functions).

### 2. No Re-declaration
You cannot declare the same variable name twice within the same scope using `let`. Attempting to do so throws an error.

### 3. Re-assignable
The value of a `let` variable can be changed after declaration.

### 4. Temporal Dead Zone (TDZ)
Variables declared with `let` cannot be accessed before their declaration in the code. Accessing them too early results in a ReferenceError.

---

## When to Use
Use `let` when you need a variable whose value will change over time, and you want to limit its scope to a specific block for better control and predictability.
