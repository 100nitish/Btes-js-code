// ==================================================
// JAVASCRIPT ARRAY ITERATION METHODS - NOTES
// ==================================================
//
// Array iteration methods are used to operate on
// every element of an array.
//
// ==================================================


// --------------------------------------------------
// 1. for...of
// --------------------------------------------------
// Used to get the VALUES of an array one by one.

let arr1 = [10, 20, 30, 40];

for (let value of arr1) {
    console.log(value);
}

// Output:
// 10
// 20
// 30
// 40



// --------------------------------------------------
// 2. for...in
// --------------------------------------------------
// Used to get the INDEXES of an array.

let arr2 = [10, 20, 30, 40];

for (let index in arr2) {
    console.log(index);
}

// Output:
// 0
// 1
// 2
// 3



// --------------------------------------------------
// 3. forEach()
// --------------------------------------------------
// Executes a function for every array element.

let arr3 = [10, 20, 30, 40];

arr3.forEach(function(value) {
    console.log(value);
});

// Output:
// 10
// 20
// 30
// 40



// forEach() with index

let arr3b = [10, 20, 30];

arr3b.forEach(function(value, index) {
    console.log(index, value);
});

// Output:
// 0 10
// 1 20
// 2 30



// --------------------------------------------------
// 4. map()
// --------------------------------------------------
// Creates a NEW array by performing an operation
// on every element.

let arr4 = [10, 20, 30, 40];

let result4 = arr4.map(function(value) {
    return value * 2;
});

console.log(result4);
// Output: [20, 40, 60, 80]



// --------------------------------------------------
// 5. flatMap()
// --------------------------------------------------
// Performs map() and then flattens the result.

let arr5 = [1, 2, 3];

let result5 = arr5.flatMap(function(value) {
    return [value, value * 2];
});

console.log(result5);
// Output: [1, 2, 2, 4, 3, 6]



// --------------------------------------------------
// 6. filter()
// --------------------------------------------------
// Creates a NEW array containing elements
// that satisfy a condition.

let arr6 = [10, 15, 20, 25, 30];

let result6 = arr6.filter(function(value) {
    return value > 20;
});

console.log(result6);
// Output: [25, 30]



// --------------------------------------------------
// 7. reduce()
// --------------------------------------------------
// Reduces an array to a single value.
//
// Commonly used for:
// - Sum
// - Total
// - Product
// - Calculations

let arr7 = [10, 20, 30, 40];

let result7 = arr7.reduce(function(total, value) {
    return total + value;
}, 0);

console.log(result7);
// Output: 100



// reduce() for multiplication

let arr7b = [2, 3, 4];

let result7b = arr7b.reduce(function(total, value) {
    return total * value;
}, 1);

console.log(result7b);
// Output: 24



// --------------------------------------------------
// 8. reduceRight()
// --------------------------------------------------
// Works like reduce(), but starts from
// the RIGHT side of the array.

let arr8 = ["A", "B", "C", "D"];

let result8 = arr8.reduceRight(function(result, value) {
    return result + value;
}, "");

console.log(result8);
// Output: DCBA



// --------------------------------------------------
// 9. every()
// --------------------------------------------------
// Checks whether EVERY element satisfies
// a condition.
//
// Returns true or false.

let arr9 = [10, 20, 30, 40];

let result9 = arr9.every(function(value) {
    return value > 5;
});

console.log(result9);
// Output: true



let arr9b = [10, 20, 3, 40];

let result9b = arr9b.every(function(value) {
    return value > 5;
});

console.log(result9b);
// Output: false



// --------------------------------------------------
// 10. some()
// --------------------------------------------------
// Checks whether AT LEAST ONE element satisfies
// a condition.
//
// Returns true or false.

let arr10 = [10, 20, 30, 40];

let result10 = arr10.some(function(value) {
    return value > 30;
});

console.log(result10);
// Output: true



// --------------------------------------------------
// 11. Array.from()
// --------------------------------------------------
// Creates an array from an iterable or array-like value.

let str11 = "HELLO";

let result11 = Array.from(str11);

console.log(result11);
// Output: ["H", "E", "L", "L", "O"]



// Array.from() with numbers

let result11b = Array.from([10, 20, 30]);

console.log(result11b);
// Output: [10, 20, 30]



// --------------------------------------------------
// 12. keys()
// --------------------------------------------------
// Returns an iterator containing array indexes.

let arr12 = ["A", "B", "C"];

let keys12 = arr12.keys();

for (let key of keys12) {
    console.log(key);
}

// Output:
// 0
// 1
// 2



// --------------------------------------------------
// 13. entries()
// --------------------------------------------------
// Returns an iterator containing
// [index, value] pairs.

let arr13 = ["A", "B", "C"];

let entries13 = arr13.entries();

for (let entry of entries13) {
    console.log(entry);
}

// Output:
// [0, "A"]
// [1, "B"]
// [2, "C"]



// --------------------------------------------------
// 14. with()
// --------------------------------------------------
// Creates a NEW array with an element replaced.
// It does NOT change the original array.

let arr14 = [10, 20, 30, 40];

let result14 = arr14.with(1, 200);

console.log(result14);
// Output: [10, 200, 30, 40]

console.log(arr14);
// Output: [10, 20, 30, 40]



// --------------------------------------------------
// 15. Spread Operator (...)
// --------------------------------------------------
// Used to expand elements of an array.
//
// Common uses:
// - Copy array
// - Combine arrays
// - Pass array values

let arr15 = [10, 20, 30];

let copy15 = [...arr15];

console.log(copy15);
// Output: [10, 20, 30]



// Combine arrays

let a15 = [10, 20];
let b15 = [30, 40];

let result15 = [...a15, ...b15];

console.log(result15);
// Output: [10, 20, 30, 40]



// --------------------------------------------------
// 16. Rest Operator (...)
// --------------------------------------------------
// Collects multiple values into an array.
//
// Rest is mainly used in function parameters.

function sum16(...numbers) {

    let total = 0;

    for (let value of numbers) {
        total = total + value;
    }

    return total;
}

console.log(sum16(10, 20, 30));
// Output: 60



// ==================================================
// IMPORTANT EXAMPLES
// ==================================================


// --------------------------------------------------
// for...of vs for...in
// --------------------------------------------------

let arr17 = ["A", "B", "C"];

for (let value of arr17) {
    console.log("Value:", value);
}

// Value: A
// Value: B
// Value: C


for (let index in arr17) {
    console.log("Index:", index);
}

// Index: 0
// Index: 1
// Index: 2



// --------------------------------------------------
// map() vs filter()
// --------------------------------------------------

let numbers18 = [10, 20, 30, 40];


// map() changes/transforms every element

let doubled18 = numbers18.map(function(value) {
    return value * 2;
});

console.log(doubled18);
// [20, 40, 60, 80]


// filter() selects elements based on condition

let greater18 = numbers18.filter(function(value) {
    return value > 20;
});

console.log(greater18);
// [30, 40]



// --------------------------------------------------
// every() vs some()
// --------------------------------------------------

let numbers19 = [10, 20, 30];


// every() -> ALL elements must satisfy condition

console.log(
    numbers19.every(function(value) {
        return value > 5;
    })
);
// true


// some() -> AT LEAST ONE element must satisfy condition

console.log(
    numbers19.some(function(value) {
        return value > 25;
    })
);
// true



// ==================================================
// QUICK REVISION
// ==================================================

// for...of      -> Get values
// for...in      -> Get indexes
// forEach()     -> Execute function for every element
// map()         -> Create new array by changing values
// flatMap()     -> map() + flat()
// filter()      -> Select matching elements
// reduce()      -> Reduce array to one value
// reduceRight() -> Reduce from right side
// every()       -> Check ALL elements
// some()        -> Check AT LEAST ONE element
// from()        -> Create array from iterable
// keys()        -> Get indexes
// entries()     -> Get index + value
// with()        -> Replace element without changing original
// Spread (...)  -> Expand array values
// Rest (...)    -> Collect values into an array



// ==================================================
// QUICK REVISION TABLE
// ==================================================

// for...of       -> Values
// for...in       -> Indexes
// forEach()      -> Loop through array
// map()          -> Transform elements
// flatMap()      -> Transform + flatten
// filter()       -> Select elements
// reduce()       -> Single result
// reduceRight()  -> Single result from right
// every()        -> All true?
// some()         -> Any true?
// from()         -> Convert to array
// keys()         -> Array indexes
// entries()      -> Index + value
// with()         -> Replace without modifying
// Spread (...)   -> Expand
// Rest (...)     -> Collect