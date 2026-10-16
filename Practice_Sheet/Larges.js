//Input three numbers and print the largest.

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const a= parseInt(prompt("Enter the Number1: "));
const b= parseInt(prompt("Enter the Number2: "));
const c= parseInt(prompt("Enter the Number3: "));

if((a>=b && a>=c)){
    console.log(a+" is a largest number")
}else if((b>=a && b>=c)){
    console.log(b+" is a largest number")
}
else{
    console.log(c+" is a largest number")
}