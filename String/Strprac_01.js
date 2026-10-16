// Write a program to count the number of character in a string.

let str = "javascript";
let len= str.length;
console.log(len);

//Write a program to reverse a string without using built-in reverse funtions.

console.log(str.split("").reverse().join(""))

let rev = "";

for(let char of str){
    rev=char+rev;

}
console.log(rev);

//Write a program to check whether a string is a palindrome.

let pal ="tpircsavaj";
if(pal===rev){
    console.log("String is Palindrome")
}else{
    console.log("String is not a palindrome")
}

//Write a program to count vowels and consonants in a string.

// let cn=0;

// function consonants(){
//     for(let con of str){
//         if(con==='a'|| con==='e'||con==='i'||con==='o'||con==='u'){
//             cn++;

//         }
//     }
    
// }
// console.log(cn)

// let vowels = 'a';
let count=0;
let conscout=0
for(let char of str)
{
    if("aeiou".includes(char))
    {
        count++;
    }
    else{
        conscout++;

    }
}
console.log(count);
console.log(conscout);

// console.log(str.includes('aeiou'));

//Write a program to convert all characters of a string to uppercase and lowercase.

console.log(str.toUpperCase());

//Write a program to count the occurrence of a specifc character in a string.


let ch = 'a'
let cn=0;
for(let occ of str){
    if(occ === ch){
        cn++;
    }
}
console.log(cn)

//Write a program to find duplicate characters in a string.

// for(let i = 0; i< len;i++){
//     let cnt = 0;
//     for(let j =0;j<len;j++){
//         if(str[i]===str[j]){
//             cnt++
//         }
//     }
//     if(cnt>1&&str.indexOf(str[i]===i)){
//         console.log(str[i],"count is",cnt)
//         console.log(str.indexOf(str[i]===i))
//     }
// }


// let str="java"
// let mark
//   mark{j:true,a:true,v:true}
// for(let i=0;i<str.length;i++)
// {
    
//     if(!mark[str[i]])
//     {
//       let count=0;
//         for(let j=0;j<str.length;j++)
//         {
//                if(str[i]===str[j])
//                {
//                 count++
//                  // console.log("count " + str[i] + " "+ count)
//                }
//               if(count>=2)
//                {
//                 // console.log(str[i] + " "  + count)
//                }
//         }
     
//         mark[str[i]]=true
//     }

// }

let str1="java"
let mark={}

for(let i=0;i<str.length;i++)
{
    let count=0;
    if(!mark[str[i]])
    {

        for(let j=0;j<str.length;j++)
        {
               if( str[i]===str[j])
               {
                count++
               }
               if(count>2)
               {
                console.log(str[i] + " "  + count)
               }
        }
        mark[str[i]]=true
    }

}




// Write a program to remove duplicate characters in a string.

let str2 = "Programming";
let res = "";

for (let i = 0; i < str2.length; i++) {
    let cn2 = 0;

    for (let j = 0; j < str2.length; j++) {
        if (str2[i] === str2[j]) {
            cn2++;
        }
    }

    if (cn2 === 0) {
        res = res + str2[i];
    }
}

console.log(res);


//Write a Program to print largest character in a string.

let sen="I am learning javascript programming";
let words = sen.split(" ");

let largest="";
for(let i=0;i<words.length;i++){
    if(words[i].length>largest.length){
        largest=words[i];
    }
}
console.log("Larges word:",largest);
console.log("Length:",largest.length);