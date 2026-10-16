//Input a number and check if it lies between 10 and 50 and wheather it is even.

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const Number= parseInt(prompt("Enter the Number: "));

if(Number>=10 && Number<=50){
    if(Number%2===0){
        console.log("Number is Even")
    }else{
        console.log("Number is Odd")
    }
}else{
    console.log("Number is not Lie b/w 10 and 50")
}
