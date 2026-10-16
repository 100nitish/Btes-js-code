// function CheckValue(value){
//     if(false){
//         throw new Error("Custom Error message")
//     }
//     return "success";

// }
// try{
//     console.log(CheckValue(2))
// }catch(e){
//     console.log("Error",e.message)
// }

class ValidationError extends Error {
    constructor(message){
        super(message);
        // this.name="ValidationError";
    }

}
function ValidateEmail(email){
    if(!email.includes("@")){
        throw new ValidationError("user have entered Invalid email forma....")
    }
    return "Valid Email";
}
try{
    console.log(ValidateEmail("abc.com"))
}
catch(e){
    if(e instanceof ValidationError){
        console.log("Validation Error:", e.name);
    }
    else{
        console.log("Unknown Error", e.message);
    }
}


class AgeError extends Error {
    constructor(message){
        super(message);
        this.name="Age Error";
    }

}

function CheckAge(age){
    if(age<18){
        throw new AgeError("Age is not eligible");
    }
    return "Age is eligible";
}
try{
    console.log(CheckAge(12))
}
catch(e){
    if(e instanceof AgeError){
        console.log(e.name)
    }
    else{
        console.log(e.message)
    }
}