//.finally()

//.finally() executes whether the Promise succeeds or fails.

//If promise success

// const p = new Promise((res,rej)=>{
//     res("success")
// })
// p.then(val=>{
//     console.log(val)
// })
// .catch(e=>console.log(e))
// .finally(()=>{
//     console.log("Operation finished")
// })

//If promise fails

const p1 = new Promise((res,rej)=>{
    rej("Error shows")
})
p1.then(val=>{
    console.log(val);
})
.catch(e=>{
    console.log(e)
})
.finally(()=>{
    console.log("Operation finished")
});
