function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null or undefined values
  }
  return a + b; // Normal addition
}

console.log(foo(1, null)); // Output: null
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(0,2)); // Output: 2