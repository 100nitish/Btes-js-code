// Promise and synchronous code

console.log("start");
Promise.resolve().then(()=>{
    console.log("Promise");
})
console.log("end")

//Promise vs setTimeout

console.log("start");
setTimeout(()=>{
    console.log("Timeout")
},0)
Promise.resolve().then(()=>{
    console.log("Promise");
})
console.log("end")