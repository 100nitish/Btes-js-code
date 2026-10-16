// Program to check the number wheather it is +ve, -ve and zero.

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const num= parseInt(prompt("Enter Nuber: "));

if(num>0){
    console.log("Number is Positive");
}
else if(num<0){
    console.log("Number is Negative")
}
else{
    console.log("Number is Zero")
}
