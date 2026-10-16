// ==================================================
// JAVASCRIPT ARRAY SEARCH METHODS - NOTES
// ==================================================


// --------------------------------------------------
// 1. indexOf()
// --------------------------------------------------
// Returns the index of the first occurrence
// of a specified element.
//
// If the element is not found, it returns -1.

let arr1 = [10, 20, 30, 20, 40];

console.log(arr1.indexOf(20));
// Output: 1

console.log(arr1.indexOf(50));
// Output: -1



// --------------------------------------------------
// 2. lastIndexOf()
// --------------------------------------------------
// Returns the index of the last occurrence
// of a specified element.
//
// If the element is not found, it returns -1.

let arr2 = [10, 20, 30, 20, 40];

console.log(arr2.lastIndexOf(20));
// Output: 3

console.log(arr2.lastIndexOf(50));
// Output: -1



// --------------------------------------------------
// 3. includes()
// --------------------------------------------------
// Checks whether an array contains a specified element.
//
// Returns true or false.

let arr3 = [10, 20, 30, 40];

console.log(arr3.includes(30));
// Output: true

console.log(arr3.includes(50));
// Output: false



// --------------------------------------------------
// 4. find()
// --------------------------------------------------
// Returns the first element that satisfies
// the given condition.
//
// If no element is found, it returns undefined.

let arr4 = [10, 15, 20, 25, 30];

let result4 = arr4.find(function(value) {
    return value > 20;
});

console.log(result4);
// Output: 25



// --------------------------------------------------
// 5. findIndex()
// --------------------------------------------------
// Returns the index of the first element
// that satisfies the given condition.
//
// If no element is found, it returns -1.

let arr5 = [10, 15, 20, 25, 30];

let result5 = arr5.findIndex(function(value) {
    return value > 20;
});

console.log(result5);
// Output: 3



// --------------------------------------------------
// 6. findLast()
// --------------------------------------------------
// Returns the last element that satisfies
// the given condition.
//
// If no element is found, it returns undefined.

let arr6 = [10, 15, 20, 25, 30];

let result6 = arr6.findLast(function(value) {
    return value > 20;
});

console.log(result6);
// Output: 30



// --------------------------------------------------
// 7. findLastIndex()
// --------------------------------------------------
// Returns the index of the last element
// that satisfies the given condition.
//
// If no element is found, it returns -1.

let arr7 = [10, 15, 20, 25, 30];

let result7 = arr7.findLastIndex(function(value) {
    return value > 20;
});

console.log(result7);
// Output: 4



// ==================================================
// EXAMPLE WITH DUPLICATE VALUES
// ==================================================

let numbers = [10, 20, 30, 20, 40, 20];

console.log(numbers.indexOf(20));
// Output: 1

console.log(numbers.lastIndexOf(20));
// Output: 5

console.log(numbers.includes(20));
// Output: true



// ==================================================
// FIND METHODS WITH CONDITIONS
// ==================================================

let numbers2 = [5, 12, 18, 25, 30];


// Find first number greater than 20

let firstGreater = numbers2.find(function(value) {
    return value > 20;
});

console.log(firstGreater);
// Output: 25



// Find index of first number greater than 20

let firstGreaterIndex = numbers2.findIndex(function(value) {
    return value > 20;
});

console.log(firstGreaterIndex);
// Output: 3



// Find last number greater than 20

let lastGreater = numbers2.findLast(function(value) {
    return value > 20;
});

console.log(lastGreater);
// Output: 30



// Find index of last number greater than 20

let lastGreaterIndex = numbers2.findLastIndex(function(value) {
    return value > 20;
});

console.log(lastGreaterIndex);
// Output: 4



// ==================================================
// QUICK REVISION
// ==================================================

// indexOf()        -> Find first index
// lastIndexOf()    -> Find last index
// includes()       -> Check if element exists
// find()           -> Find first matching element
// findIndex()      -> Find first matching index
// findLast()       -> Find last matching element
// findLastIndex()  -> Find last matching index



// ==================================================
// IMPORTANT DIFFERENCE
// ==================================================

// indexOf()
// Searches for an exact value.

let a = [10, 20, 30];

console.log(a.indexOf(20));
// Output: 1


// find()
// Searches using a condition.

let b = [10, 20, 30];

console.log(b.find(function(value) {
    return value > 15;
}));
// Output: 20