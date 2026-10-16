// Take username and password, verify against predefined credentiras, print success/failure.

import Promptsync from "prompt-sync";
const prompt = Promptsync();
const username= prompt("Enter Username: ");
const password= prompt("Enter Password: ");

let user= "test@gmail.com";
let pass= "user@123"

if((user===username && pass === password)){
    console.log("Login Sucessful")
}
else{
    console.log("Login Failed")
}