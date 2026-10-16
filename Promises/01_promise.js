// const promise = new Promise((res,rej)=>{
//     res(33);
// });
// promise.then(value =>{
//     console.log(value)
// });


let promise = new Promise(function(res,rej){
    res(33)
    console.log("hello promise");
})

console.log("Bye");
setTimeout(function(){
    console.log("just in 5 sec")
},5000)
console.log(promise)
console.log("go")
