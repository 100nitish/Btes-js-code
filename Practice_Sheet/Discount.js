//Program to print final price of bill after discount when is bill is total >1000;

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const total= parseInt(prompt("Enter Bill Amount: "));

if(total>1000){
    let discount = total*10/100;
    let finalbill = total-discount;
    console.log(`Your Discount is:${discount}`);
    console.log(`Your FinalBill is${finalbill}`);
}else{
    console.log(`Ther is no discoutn for this amount`)
    console.log(`Your final bill is ${total}`);
}