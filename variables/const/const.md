# The `const` Keyword

A keyword used to declare variables that **cannot be reassigned** after their initial value is set.

---

## Key Characteristics

### 1. Mandatory Initialization
Must be assigned a value at the moment of declaration. You cannot declare an empty `const` variable.

### 2. No Reassignment
The variable binding cannot be changed to point to a different value after initialization. Any attempt to reassign throws an error.

### 3. Block Scoping
The variable only exists within the block `{}` where it is defined, such as inside loops, conditionals, or functions.

### 4. Temporal Dead Zone (TDZ)
Cannot be accessed before its declaration in the code. Accessing it too early results in a ReferenceError.

---

## Important Note
While the variable itself cannot be reassigned, the contents of objects and arrays declared with `const` can still be modified.

## When to Use
Use `const` as your default choice for variable declarations. It prevents accidental changes and makes your code's intent clearer. Only use `let` when you explicitly need to reassign the variable.
