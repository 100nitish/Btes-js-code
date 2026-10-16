// let s="";
// let a=s.split(" ")
// for(let i=0;i<a.length;i++){
//     a[i]=a[i].split("").reverse().join("");
// }
// console.log(a.join(" "))



// //Long
// let str="Raj Kumar aaj nahi aaya gau se";
// let arr=str.split(" ")
// let ll=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(ll.length<arr[i].length){
//         ll=arr[i];

//     }
// }
// console.log(ll)

//remove duplicate


// let str = "programming";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     let found = false;

//     for (let j = 0; j < result.length; j++) {
//         if (str[i] === result[j]) {
//             found = true;
//             break;
//         }
//     }

//     if (found === false) {
//         result = result + str[i];
//     }
// }

// console.log(result);


//Anagram

let str1 = "listen";
let str2 = "silent";

if (str1.length !== str2.length) {
    console.log("Not Anagrams");
} else {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                count++;
                str2 = str2.slice(0, j) + str2.slice(j + 1);
                break;
            }
        }
    }

    if (count === str1.length) {
        console.log("Anagrams");
    } else {
        console.log("Not Anagrams");
    }
}


//count vowel

let str7 = "gaming"
let cn=0;
let vowels= "aeiou"
for(let char of str7){
    if(vowels.includes(char)){
        cn++;
    }
}
console.log(cn)

//frequency
let str5 = "programming in";
let obj = {};
for(let i=0;i<str5.length;i++){
    if(str5[i]===" "){
        continue;
    }
    else if(obj[str5[i]]){
        obj[str5[i]]++;
    }
    else{
        obj[str5[i]]=1
    }
    
}
console.log(obj)


//Write a program to print characters that appea only once in a string.

let str9 = "programming";
let res1 = "";

for (let i = 0; i < str9.length; i++) {
    let count = 0;

    for (let j = 0; j < str9.length; j++) {
        if (str9[i] === str9[j]) {
            count++;
        }
    }

    if (count === 1) {
        res1 = res1 + str9[i];
    }
}

console.log(res1);

//Find the first occerance of each character


let str = "programming";
let ch = "g";
let index = -1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
        index = i;
        break;
    }
}

if (index !== -1) {
    console.log("First occurrence at index:", index);
} else {
    console.log("Character not found");
}

