//Promise Chaining

//Promise can be chained.

const p= new Promise((res,rej)=>{
    res(10)
})
p.then(val=>{
    console.log(val);
    return val*2;
})
.then(val=>{
    console.log(val);
    return val+5;
})
.then(val=>{
    console.log(val);
})