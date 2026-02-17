# `var` in JavaScript

In JavaScript, **`var`** is the original keyword used to declare variables.  
It is now considered outdated and has largely been replaced by **`let`** and **`const`** in modern JavaScript.

---

## Key Characteristics of `var`

### Function Scope
- Variables declared with `var` are **function-scoped**.
- This means they are accessible throughout the entire function in which they are declared.
- They are **not block-scoped**, so blocks like `if`, `for`, or `while` do not create a new scope.

---

### Hoisting
- JavaScript **hoists** `var` declarations to the top of their scope.
- Only the **declaration** is moved, not the **assignment**.
- If accessed before assignment, the variable will have the value `undefined`.

---

### Redeclaration Allowed
- You can **redeclare** the same variable name multiple times within the same scope using `var`.
- This does **not** produce an error.
- This behavior can sometimes lead to unexpected bugs.

---

### Global Object Attachment
- When declared in the **global scope** (outside any function),
  `var` becomes a property of the global object.
- In browsers, this global object is `window`.

---

## Why Avoid `var`?
- Lack of block scope
- Risk of accidental redeclaration
- Hoisting-related confusion

Modern best practice:
- Use **`let`** for variables that may change.
- Use **`const`** for variables that should not be reassigned.
