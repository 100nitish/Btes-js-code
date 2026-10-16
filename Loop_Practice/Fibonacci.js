// Print Fibonacci series
import Promptsync from "prompt-sync";
const prompt = Promptsync();
const num= parseInt(prompt("Enter Number: "));

let a = 0;
let b = 1;

for(let i=1;i<=num;i++){
    
    let c=a+b;
    a=b;
    b=c;
    
}
console.log(a);