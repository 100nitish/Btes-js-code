// Write a program to extract the username from an email address.

let email="Deendev@gmail.com";
let username="";

for(let i=0;i<email.length;i++){
    if(email[i]==="@"){
        break;
    }
    username=username+email[i];
}
console.log(username)

//alternate

let email1 = "nitish@gmail.com";

let username1= email1.split("@")[0];

console.log(username1);


//Write a program to check whether two strings are anagram
let str1 = "nitin";
let str2 = "jatin2";

let isAnagram = true;


if(str1.length !== str2.length){
    isAnagram = false;
}
else{
    for(let i=0;i<str1.length;i++){
        let count1=0;
        let count2=0;
        for(let j=0;j<str2.length;j++){
            if(str1[i]===str2[j]){
                count1++;
            }
            if(str1[i]===str2[j]){
                count2++;
            }
            if(count1 !== count2){
                isAnagram = false;
                break;
            }
        }
    }
}
if(isAnagram){
    console.log("Strings are anagram");

}
else{
    console.log("Strings are not an anagram");
}


//Alternate

let s1 =str1.split("").reverse().join("");
let s2 =str2.split("").reverse().join("");

if(s1===s2){
    console.log("Strings are anagarm");
}
else{
    console.log("Strngs are not anagram");
}


//Write a program to count how many words exist in a sentence.

let sen1="This is programm";

let cnt=0;
for(let i=0;i<sen1.length;i++){
    
    if(sen1[i]===" "){
       continue;
    }
    cnt++;
    
}
console.log(cnt)


//Write a program to print the frequency of each character in a string.
let str = "programming";
let freq = {};

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (freq[ch]) {
        freq[ch]++;
    } else {
        freq[ch] = 1;
    }
}

console.log(freq);


//Write a program to capitalize the first letter of each word in a sentence.

let str3 = "hello world how are you";

let words = str3.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    result = result + words[i][0].toUpperCase() + words[i].slice(1) + " ";
}

console.log(result);