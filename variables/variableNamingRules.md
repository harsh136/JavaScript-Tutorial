# Variable Naming Rules in JavaScript

Rules you must follow when naming variables, plus conventions that improve code quality.

---

## Mandatory Rules (Syntax)

Breaking these causes errors.

| Rule | Valid | Invalid |
|------|-------|---------|
| **Start with letter, underscore, or dollar sign** | `name`, `_count`, `$price` | `1stPlace`, `@user` |
| **After first character, use letters, numbers, underscores, or dollar signs** | `user2`, `first_name`, `item$` | `first-name`, `user@home` |
| **No spaces** | `userName` | `user name` |
| **Case-sensitive** | `Name` and `name` are different variables | — |
| **Cannot use reserved keywords** | `myVar` | `let`, `class`, `return`, `function` |

### Reserved Keywords to Avoid
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`, `let`, `static`, `await`, `enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`, `abstract`, `boolean`, `byte`, `char`, `double`, `final`, `float`, `goto`, `int`, `long`, `native`, `short`, `synchronized`, `throws`, `transient`, `volatile`

---

## Naming Conventions (Best Practices)

These prevent errors and make code readable.

### camelCase for Variables and Functions
Start lowercase, capitalize each new word.

```javascript
let userName = "Alice";
let totalItemCount = 42;

function calculateTotal() {
    // ...
}
```

### PascalCase for Classes and Constructors
Capitalize every word including the first.

```javascript
class UserProfile {
    // ...
}

class ShoppingCart {
    // ...
}
```

### UPPER_SNAKE_CASE for Constants
Use when the value is truly fixed and meaningful.

```javascript
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = "https://api.example.com";
const PI = 3.14159;
```

### Descriptive Names
Avoid single letters (except loop counters). Names should explain purpose.

| Unclear | Clear               |
| ------- | ------------------- |
| `x`     | `userAge`           |
| `data`  | `userProfileData`   |
| `fn`    | `calculateTax`      |
| `arr`   | `shoppingCartItems` |

### Boolean Variables
Prefix with `is`, `has`, `can`, or `should` to indicate true/false nature.

```javascript
let isActive = true;
let hasPermission = false;
let canEdit = true;
let shouldDisplay = false;
```

---

## Quick Reference

| Type                           | Convention         | Example          |
| ------------------------------ | ------------------ | ---------------- |
| Regular variables              | camelCase          | `currentUser`    |
| Functions                      | camelCase          | `getUserData()`  |
| Classes                        | PascalCase         | `UserAccount`    |
| True constants                 | UPPER\_SNAKE\_CASE | `MAX_SIZE`       |
| Private variables (convention) | Leading underscore | `_internalCache` |

---

# Programming Principle
### Code is read more often than it is written.
Spend extra seconds on clear names to save minutes of confusion later.
