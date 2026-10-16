//Write a recursive function to calculate factorial

function fact(n){
    if(n===0 || n===1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(3))

//Write a recursive fucntion to generate fibonacci number
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 10;

console.log(fibonacci(n));

//Write a recursive funtion to calculate the power of a number;
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}

let base = 2;
let exponent = 5;

console.log(power(base, exponent));

// Write a recursive funtion to find the GCD of two numbers.
function gcd(a, b) {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}

let a = 12;
let b = 18;

console.log(gcd(a, b));