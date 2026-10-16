//Program to declare and print a variable usring var.

var a=10;
console.log(a)
var a=12;
console.log(a)

//Program to declare and print a variable using let.

let b=20;

console.log(b)
b=22;
console.log(b)

// Program to declare a constant using const.

const c=30;
console.log(c);

// Program to demonstrate block scope using let.

function test(){
    var jj=33;
    if(true){
        let kk=55;
        console.log(jj)
        console.log(kk)
    }
    
}
test()


// Progrma to store and print multiple variable in one time

var name="pawan"
let age = 33
const department = "Quality";

console.log(name, age, department);

// Program to declare an undefined variable and print it.

let jk;
console.log(jk);


// Program to create an array and print its value.

let dr= [34,33,45,54]
console.log(dr)