//Unwanted Execution of the code

try{
    let a=10;
    b=0;
    if(b===0){
        throw new Error("Cannot divide by zero");
    }
    let res=a/b;
    console.log(res)
}catch(e){
    console.log("Error",e.message);
}