//Demonstrate global scope and local scope using funtion;

let a=10;
function scope(){
    let b =20;
    function block(){
        let c=30;

    }
    console.log(b);
    
}
scope()
// console.log(b)

console.log(a)

//Create a counter using a closure.

function outer(){
    let count =0;
    function inner(){
        count++;
        return count;
    }
    return inner;
}
let counter = outer()
console.log(counter())
console.log(counter())
console.log(counter())

//Create a private variable using clouser

function Private(){
    let g=222;
    function prival(){
        console.log(g)
    }
    return prival;
}
let outval = Private();
outval();


//Create a Function Factory that returns another function.

function createMultipler(num){
    function numval(val){
        return num*val;
    }
    return numval;
}
let calculate = createMultipler(2)
console.log(calculate(4))

// Create a discount calculator using a function factory.

function discountCalculator(discount){
    function price(pri){
        return pri-(pri*discount/100);
    }
    return price;
}
let discount10 = discountCalculator(10);
console.log(discount10(1000));
