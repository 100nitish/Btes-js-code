//Program to write check vowel and consonant.

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const Char= prompt("Enter Word: ");

if(Char ==='a'|| Char ==='e' || Char ==='i'|| Char ==='o'|| Char ==='u'){
    console.log("Charcter is vowel")

}else{
    console.log("Character is Consonant")
}
