// //Promise.all()

// //Suppose you have three promises

// const p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Data1")
//     },3000)
// })
// const p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Data2")
//     },2000)
// })
// const p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Data3")
//     },1000)
// })
// Promise.all([p1,p2,p3])
//       .then(res=>{
//         console.log(res)
//       })


// If One promise is rejected

const p1 = Promise.resolve("Data1")
const p2 = Promise.reject("Da1")
const p3 = Promise.resolve("Data1")
Promise.all([p1,p2,p3])
      .then(res=>{
        console.log(res)
      })