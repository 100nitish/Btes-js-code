// async: The async keyword is used to define a function that always returns a Promise.

// - await: The await keyword is used inside an async function to wait for a Promise to settle 

// before continuing execution of that function.

// Example 1 - Returning a Normal Value

async function test() {
    return "Hello";
    
}
let result = test();
console.log(result);
result.then((data)=>{
    console.log(data);
})


//.then()
async function test1() {
    return "Hello";
    
}
test().then((data)=>{
    console.log(data);
})


// Returning a Number

async function add(val1){
    return 2
}
let Value = add(2);
add().then(val=>{
    console.log(val);
})
.catch(e=>{
    console.log(e)
})

const pro = new Promise((res,rej)=>{
    let success= false;
    if(success){
        res("JS")
    }else{
        rej("Error")
    }
})
async function getData(){
    return pro;
}

getData()
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e);
})