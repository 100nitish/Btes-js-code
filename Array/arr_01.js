//Write a program to find the second larges number in an array

let a=[1,4,5,6,2];

let l=a[0];
let sl=a[0];

for(let i=0;i<a.length;i++){
    if(a[i]>l){
        sl=l;
        l=a[i];
    }else if(a[i]>sl && a[i]!==l){
        sl=a[i];
    }
}
console.log(`Larges ${l}`)
console.log(`Second Largest ${sl}`)