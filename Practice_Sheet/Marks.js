//Program to chekc the grade accroding to the marks.

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const Marks= parseInt(prompt("Enter the Marks"));

if(Marks >=90){
    console.log("A")
}else if(Marks >= 60){
    console.log("B")
}
else if(Marks >=33){
    console.log("C")
}
else{
    console.log("F")
}