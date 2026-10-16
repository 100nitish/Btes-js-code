//Function Expressions & Arrow Functions

//Convert a function declaration into a function expression

const add=function(a,b){
    return a+b;
}
console.log(add(3,4));

//Convert a function expressiion into an arrow
const mul =(a,b)=>a*b;
console.log(mul(3,3));


//Write an arrow function to calculate the cube of a number;


const cube = (a)=>a*a*a;

console.log(cube(3))

//Write an arrow funciotn that returns a student object;

const Obj =()=>({name:"pawan",age:22});
console.log(Obj().name)

