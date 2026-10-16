// //Promise with setTimeout

// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise completed")
//     },5000);
// });

// promise.then(value=>{
//     console.log(value)
// })

// // .then() only runs after fulfillment 

// const p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Data received")
//     },2000);
// })

// p.then(value=>{
//     console.log(value);
// })


//Handling erros with .catch()

const p1 = new Promise((res,rej)=>{
    
    rej("Something went worng")
});
p1.then(val=>{
console.log(val)
})

p1.catch(e=>{
    console.log(e)
})