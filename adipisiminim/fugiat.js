// Example usage in another module
const { merge } = require('./mergeModule'); // CommonJS syntax

const mergedObject = merge({ a: 1 }, { b: 2 });
console.log(mergedObject); // Output: { a: 1, b: 2 }
