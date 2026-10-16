// Armstrong of a Number

let n=127;
let temp = n;
let sum =0;

while(temp>0){
    let d = temp%10;
    sum = sum+(d*d*d)
    temp = Math.floor(temp/10);
}
console.log(sum)