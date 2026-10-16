// Print sum of natural Numbers

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const num= parseInt(prompt("Enter Number: "));

let sum=0;

for(let i=1;i<=num;i++){
   
     sum=sum+i;
}
console.log(sum)

