// ==================================================
// JAVASCRIPT ARRAY METHODS - NOTES
// ==================================================


// --------------------------------------------------
// 1. ARRAY LENGTH
// --------------------------------------------------
// Returns the number of elements in an array.

let arr1 = [10, 20, 30, 40];

console.log(arr1.length);
// Output: 4



// --------------------------------------------------
// 2. toString()
// --------------------------------------------------
// Converts an array into a string.

let arr2 = [10, 20, 30];

console.log(arr2.toString());
// Output: 10,20,30



// --------------------------------------------------
// 3. at()
// --------------------------------------------------
// Returns an element using its index.

let arr3 = [10, 20, 30, 40];

console.log(arr3.at(2));
// Output: 30

console.log(arr3.at(-1));
// Output: 40



// --------------------------------------------------
// 4. join()
// --------------------------------------------------
// Joins array elements using a separator.

let arr4 = ["A", "B", "C"];

console.log(arr4.join("-"));
// Output: A-B-C



// --------------------------------------------------
// 5. pop()
// --------------------------------------------------
// Removes the last element.

let arr5 = [10, 20, 30];

arr5.pop();

console.log(arr5);
// Output: [10, 20]



// --------------------------------------------------
// 6. push()
// --------------------------------------------------
// Adds an element at the end.

let arr6 = [10, 20];

arr6.push(30);

console.log(arr6);
// Output: [10, 20, 30]



// --------------------------------------------------
// 7. shift()
// --------------------------------------------------
// Removes the first element.

let arr7 = [10, 20, 30];

arr7.shift();

console.log(arr7);
// Output: [20, 30]



// --------------------------------------------------
// 8. unshift()
// --------------------------------------------------
// Adds an element at the beginning.

let arr8 = [20, 30];

arr8.unshift(10);

console.log(arr8);
// Output: [10, 20, 30]



// --------------------------------------------------
// 9. Array.isArray()
// --------------------------------------------------
// Checks whether a value is an array.

let arr9 = [10, 20, 30];

console.log(Array.isArray(arr9));
// Output: true

console.log(Array.isArray("Hello"));
// Output: false



// --------------------------------------------------
// 10. delete
// --------------------------------------------------
// Deletes an element but leaves an empty position.

let arr10 = [10, 20, 30];

delete arr10[1];

console.log(arr10);
// Output: [10, empty, 30]



// --------------------------------------------------
// 11. concat()
// --------------------------------------------------
// Combines two or more arrays.

let arr11a = [10, 20];
let arr11b = [30, 40];

let result11 = arr11a.concat(arr11b);

console.log(result11);
// Output: [10, 20, 30, 40]



// --------------------------------------------------
// 12. copyWithin()
// --------------------------------------------------
// Copies elements to another position
// inside the same array.

let arr12 = [10, 20, 30, 40];

arr12.copyWithin(1, 2);

console.log(arr12);
// Output: [10, 30, 40, 40]



// --------------------------------------------------
// 13. flat()
// --------------------------------------------------
// Converts a nested array into a single-level array.

let arr13 = [10, [20, 30], [40, 50]];

console.log(arr13.flat());
// Output: [10, 20, 30, 40, 50]



// --------------------------------------------------
// 14. slice()
// --------------------------------------------------
// Returns a portion of an array.
// It does NOT change the original array.

let arr14 = [10, 20, 30, 40, 50];

let result14 = arr14.slice(1, 4);

console.log(result14);
// Output: [20, 30, 40]

console.log(arr14);
// Output: [10, 20, 30, 40, 50]



// --------------------------------------------------
// 15. splice()
// --------------------------------------------------
// Used to add, remove, or replace elements.
// It changes the original array.

// Remove elements

let arr15 = [10, 20, 30, 40];

arr15.splice(1, 2);

console.log(arr15);
// Output: [10, 40]


// Add elements

let arr15b = [10, 20, 40];

arr15b.splice(2, 0, 30);

console.log(arr15b);
// Output: [10, 20, 30, 40]


// Replace elements

let arr15c = [10, 20, 30, 40];

arr15c.splice(1, 1, 25);

console.log(arr15c);
// Output: [10, 25, 30, 40]



// --------------------------------------------------
// 16. toSpliced()
// --------------------------------------------------
// Similar to splice(), but it does NOT change
// the original array.

let arr16 = [10, 20, 30, 40];

let result16 = arr16.toSpliced(1, 2);

console.log(result16);
// Output: [10, 40]

console.log(arr16);
// Output: [10, 20, 30, 40]



// ==================================================
// QUICK REVISION
// ==================================================

// length      -> Count elements
// toString()  -> Array to string
// at()        -> Get element
// join()      -> Join elements
// pop()       -> Remove last
// push()      -> Add at end
// shift()     -> Remove first
// unshift()   -> Add at beginning
// isArray()   -> Check array
// delete      -> Delete element
// concat()    -> Combine arrays
// copyWithin()-> Copy inside array
// flat()      -> Flatten nested array
// slice()     -> Get part of array
// splice()    -> Add/remove/replace
// toSpliced() -> Non-destructive splice