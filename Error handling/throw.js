let age=15;

try{
    if(age<18){
        throw new Error("You are Not Eligible")
    }
    console.log("you are eligible")
}catch(e){
    console.log("Error",e.message)
}