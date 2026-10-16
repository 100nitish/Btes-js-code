//Write a program to calculate the square of a number.

function square(a){
    console.log(a*a)
}
square(5)


// Write a function that accepts two numbers and returns the larger value.

function largeNum(a,b){
    if(a>b){
        console.log(`Greate num is ${a}`)
    }else{
        console.log(`Greater num is ${b}`)
    }

}
largeNum(4,5)

//write a function that accepts a strign and return its revers.

function Reverse(a){


   return a.split("").reverse().join("");
   

}
console.log(Reverse("nitish"))

//Write a function to calculate the factorial of a number.

function factorial(n) {
    let f = 1;

    for (let i = 1; i <= n; i++) {
        f = f * i;
    }

    return f;
}

console.log(factorial(2));

//Write a function to check whether a number is prime.

function Prime(p){
    if(p<2){
        return false;
    }
    for(let i=2;i<p;i++){
        if(p%i===0){
            return false
        }
    }
    return true;

}
console.log(Prime(2))


