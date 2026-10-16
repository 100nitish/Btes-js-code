let n = 121;
let r =0;
while(n>0){
    let d=n%10;
    r= r*10+d;
    n=Math.floor(n/10);

}
console.log(r)

if(n=r){
    console.log("Number is palindorme");
}else{
    console.log("Number is not palindrome.")
}