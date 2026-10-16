//Program to Print Day by Entering Numbers

// Input two numbers and an + operator print the result
import Promptsync from "prompt-sync";
const prompt = Promptsync();
// const num1= parseInt(prompt("Enter Number1: "));
// const num2= parseInt(prompt("Enter Number2: "));

const Day = parseInt(prompt("Enter Day: "));
switch(Day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;    

    default:
        console.log("xyz") 
             
        
}


