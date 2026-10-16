// const pro = new Promise((res,rej)=>{
//     console.log("This is pending");

//     setTimeout(()=>{
//         console.log("This is promise fulfilled");
//         res(true);
//     },2000);
// })

//Your rejected Promise

const pro1 = new Promise((res,rej)=>{
    console.log("This is pending");
    setTimeout(()=>{
        console.log("Promise is not completee");
        rej("Error show")
    },5000)
})

pro1.then(val=>{
    console.log(val)
})
pro1.catch(e=>{
    console.log(e)
})