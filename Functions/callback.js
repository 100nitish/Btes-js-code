//Write a function that accepts another function as an argument and execte it.

function callback(name, call){
    console.log("Hello"+name);
    call();

}
function msg(){
    console.log("welcome")
}
callback("Nitish",msg)

//Create calculator using callback function.

function calculator(a,b, operator){
    operator(a,b);

}
function add(a,b){
    console.log(a+b);
}
function subtract(a,b){
    console.log(a-b);

}
function multiply(a,b){
    console.log(a*b);
}
function divide(a,b){
    console.log(a/b);
}
calculator(3,4,add);

//Create an operator(a,b, operation) function that performs different operation using callback.

function calculator(a,b, operator){
    operator(a,b);

}
function add(a,b){
    console.log(a+b);
}
function subtract(a,b){
    console.log(a-b);

}
function multiply(a,b){
    console.log(a*b);
}
function divide(a,b){
    console.log(a/b);
}
calculator(3,4,add);


//Write a funciton that accepts a callback and executes it after a specified delay.

function delayedfunction(call2,delay){
    setTimeout(call2,delay);

}
function msg2(){
    console.log("this is deley")
}
delayedfunction(msg2,2000)
