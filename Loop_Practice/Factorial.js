//Print Factorial of a Number;

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const num= parseInt(prompt("Enter Number: "));

let f=1;
for(let i=1;i<=num;i++){
    f=f*i;
}
console.log(f);
