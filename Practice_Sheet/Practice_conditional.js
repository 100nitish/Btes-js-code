import Promptsync from "prompt-sync";
const prompt = Promptsync();
const year= parseInt(prompt("Entr"))

if(year % 400 === 0 || (year % 4 === 0 && year % 100 !==0)){
    console.log(year +" is a leap year")
}else{
    console.log(year+" is Not a Leap year")
}