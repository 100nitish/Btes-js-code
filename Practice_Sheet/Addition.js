// Input two numbers and an + operator print the result
import Promptsync from "prompt-sync";
const prompt = Promptsync();
const num1= parseInt(prompt("Enter Number1: "));
const num2= parseInt(prompt("Enter Number2: "));

const operator = prompt("Enter the Operator: ")
switch(operator){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    case "%":
        console.log(num1%num2);
        break;    

    default:
        console.log("xyz") 
             
        
}


