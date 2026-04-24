# Type Conversion
Type conversion (or coercion) is the process of converting a value from one data type to another.

## Types of Conversion:
- Implicit (Coercion)
- Explicit (Casting)

## Implicit Conversion (Coercion)
JavaScript automatically converts types.

```javascript
// String Coercion (Number to String)
let result = '5' + 10; 
console.log(result); // "510" (Number 10 becomes a string)

// Boolean Coercion
if ("hello") {
    console.log("Truthy!"); // Strings are "truthy"
}

// Numeric Coercion
let sum = '10' - 5;
console.log(sum); // 5 (String '10' becomes a number)
```

## Explicit Conversion (Casting)
Manually converting a value using built-in functions.

```javascript
// To Number
let str = "123";
let num = Number(str); 
console.log(typeof num); // "number"

// To String
let val = 456;
let strVal = String(val);
console.log(typeof strVal); // "string"

// To Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
```
