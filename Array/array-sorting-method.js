// ==================================================
// JAVASCRIPT ARRAY SORTING METHODS - NOTES
// ==================================================


// ==================================================
// ALPHABETIC SORT
// ==================================================


// --------------------------------------------------
// 1. sort()
// --------------------------------------------------
// Sorts array elements alphabetically by default.
// It changes the original array.

let arr1 = ["Banana", "Apple", "Mango", "Orange"];

arr1.sort();

console.log(arr1);
// Output: ["Apple", "Banana", "Mango", "Orange"]



// --------------------------------------------------
// 2. reverse()
// --------------------------------------------------
// Reverses the order of elements.
// It changes the original array.

let arr2 = ["Apple", "Banana", "Mango", "Orange"];

arr2.reverse();

console.log(arr2);
// Output: ["Orange", "Mango", "Banana", "Apple"]



// --------------------------------------------------
// 3. toSorted()
// --------------------------------------------------
// Sorts the array without changing the original array.

let arr3 = ["Banana", "Apple", "Mango", "Orange"];

let result3 = arr3.toSorted();

console.log(result3);
// Output: ["Apple", "Banana", "Mango", "Orange"]

console.log(arr3);
// Original array remains unchanged



// --------------------------------------------------
// 4. toReversed()
// --------------------------------------------------
// Reverses the array without changing the original array.

let arr4 = ["Apple", "Banana", "Mango", "Orange"];

let result4 = arr4.toReversed();

console.log(result4);
// Output: ["Orange", "Mango", "Banana", "Apple"]

console.log(arr4);
// Original array remains unchanged



// --------------------------------------------------
// 5. Sorting Objects
// --------------------------------------------------
// Objects can be sorted using a compare function.

let students = [
    { name: "Pawan", age: 25 },
    { name: "Rahul", age: 22 },
    { name: "Amit", age: 28 }
];

students.sort(function(a, b) {
    return a.age - b.age;
});

console.log(students);

// Output:
// Rahul - 22
// Pawan - 25
// Amit - 28



// ==================================================
// NUMERIC SORT
// ==================================================


// --------------------------------------------------
// 6. Numeric Sort
// --------------------------------------------------
// By default, sort() treats numbers as strings.
//
// Example:
// [10, 5, 20, 2]
// becomes
// [10, 2, 20, 5]
//
// Use a compare function for numeric sorting.

let numbers1 = [10, 5, 20, 2, 15];

numbers1.sort(function(a, b) {
    return a - b;
});

console.log(numbers1);
// Output: [2, 5, 10, 15, 20]



// --------------------------------------------------
// Descending Numeric Sort
// --------------------------------------------------
// Use b - a for descending order.

let numbers2 = [10, 5, 20, 2, 15];

numbers2.sort(function(a, b) {
    return b - a;
});

console.log(numbers2);
// Output: [20, 15, 10, 5, 2]



// --------------------------------------------------
// 7. Random Sort
// --------------------------------------------------
// Randomly sorts the array.
//
// Math.random() returns a random number
// between 0 and 1.

let arr7 = [1, 2, 3, 4, 5];

arr7.sort(function() {
    return Math.random() - 0.5;
});

console.log(arr7);
// Output: Random order



// ==================================================
// MATH.min() AND Math.max()
// ==================================================


// --------------------------------------------------
// 8. Math.min()
// --------------------------------------------------
// Returns the smallest number.

let numbers8 = [10, 5, 20, 2, 15];

console.log(Math.min(...numbers8));
// Output: 2



// --------------------------------------------------
// 9. Math.max()
// --------------------------------------------------
// Returns the largest number.

let numbers9 = [10, 5, 20, 2, 15];

console.log(Math.max(...numbers9));
// Output: 20



// ==================================================
// HOME MADE MIN()
// ==================================================


// --------------------------------------------------
// 10. Home Made Min()
// --------------------------------------------------
// Find the smallest number without using Math.min().

function homeMin(arr) {

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }

    }

    return min;
}

let numbers10 = [10, 5, 20, 2, 15];

console.log(homeMin(numbers10));
// Output: 2



// ==================================================
// HOME MADE MAX()
// ==================================================


// --------------------------------------------------
// 11. Home Made Max()
// --------------------------------------------------
// Find the largest number without using Math.max().

function homeMax(arr) {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

    }

    return max;
}

let numbers11 = [10, 5, 20, 2, 15];

console.log(homeMax(numbers11));
// Output: 20



// ==================================================
// FIND MIN AND MAX WITHOUT BUILT-IN METHODS
// ==================================================

let numbers12 = [10, 5, 20, 2, 15];

let min = numbers12[0];
let max = numbers12[0];

for (let i = 1; i < numbers12.length; i++) {

    if (numbers12[i] < min) {
        min = numbers12[i];
    }

    if (numbers12[i] > max) {
        max = numbers12[i];
    }
}

console.log("Minimum:", min);
// Output: Minimum: 2

console.log("Maximum:", max);
// Output: Maximum: 20



// ==================================================
// QUICK REVISION
// ==================================================


// sort()
// -> Sorts array alphabetically by default
// -> Changes original array


// reverse()
// -> Reverses array
// -> Changes original array


// toSorted()
// -> Sorts array
// -> Does NOT change original array


// toReversed()
// -> Reverses array
// -> Does NOT change original array


// Numeric Sort
// -> Use a - b for ascending
// -> Use b - a for descending


// Math.min()
// -> Finds smallest number


// Math.max()
// -> Finds largest number


// Home Made Min()
// -> Finds smallest number using loop


// Home Made Max()
// -> Finds largest number using loop



// ==================================================
// IMPORTANT DIFFERENCES
// ==================================================


// Ascending:
// a - b

let ascending = [30, 10, 20, 5];

ascending.sort(function(a, b) {
    return a - b;
});

console.log(ascending);
// Output: [5, 10, 20, 30]



// Descending:
// b - a

let descending = [30, 10, 20, 5];

descending.sort(function(a, b) {
    return b - a;
});

console.log(descending);
// Output: [30, 20, 10, 5]



// ==================================================
// QUICK REVISION TABLE
// ==================================================


// sort()          -> Sort array
// reverse()       -> Reverse array
// toSorted()      -> Sort without changing original
// toReversed()    -> Reverse without changing original
// Numeric Sort    -> Sort numbers
// Random Sort     -> Random order
// Math.min()      -> Find minimum
// Math.max()      -> Find maximum
// Home Min()      -> Find minimum using loop
// Home Max()      -> Find maximum using loop
// Objects         -> Sort objects using compare function