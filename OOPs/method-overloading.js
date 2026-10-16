class Calculator {
    add(a, b) {
        return a + b;
    }

    add(a, b, c) {
        return a + b + c;
    }
}

let obj = new Calculator();

console.log(obj.add(10, 20));
console.log(obj.add(10, 20, 30));

