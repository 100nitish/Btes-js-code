class AuthenticationError extends Error{
    constructor(message){
        super(message);
        this.name = "AuthenticationError"
    }
}

function login(username, password){
    if(!username || !password){
        throw new AuthenticationError("Username and Password required");
    }
    if(username !=="Nitish"){
        throw new AuthenticationError("Invalid credentials");
    }
    if(password !=="admin123"){
        throw new AuthenticationError("Invalid credentials");
    }
    return "Login Successful";
}

try{
    let result = login("Nitish","wrongpass");
    console.log(result);
}catch(e){
    if(e instanceof AuthenticationError){
        console.log("Login Failed:", e.message);
        console.log("Login Failed",e.name);
    }else{
        console.log("Unexpected Error:",error.message);
    }
}