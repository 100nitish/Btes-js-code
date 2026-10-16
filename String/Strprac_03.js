//Write a program to remove all vowels from a string.
let str = "Hello World";
let res = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (
        ch !== "a" && ch !== "e" &&
        ch !== "i" && ch !== "o" &&
        ch !== "u" && ch !== "A" &&
        ch !== "E" && ch !== "I" &&
        ch !== "O" && ch !== "U"
    ) {
        res = res + ch;
    }
}

console.log(res);

//Write a program to check whether a string contains only digits.
let str1 = "123456";
let isDigit = true;

for (let i = 0; i < str1.length; i++) {
    if (str1[i] < "0" || str1[i] > "9") {
        isDigit = false;
        break;
    }
}

if (isDigit && str1.length > 0) {
    console.log("String contains only digits");
} else {
    console.log("String does not contain only digits");
}

//Write a program to print characters that appea only once in a string.

let str2 = "programming";
let res1 = "";

for (let i = 0; i < str2.length; i++) {
    let count = 0;

    for (let j = 0; j < str2.length; j++) {
        if (str2[i] === str2[j]) {
            count++;
        }
    }

    if (count === 1) {
        res1 = res1 + str2[i];
    }
}

console.log(res1);


//Write a program to split a sentence into words and print then in reverse order.
let str3 = "Hello World How Are You";

let words = str3.split(" ");
let res2 = "";

for (let i = words.length - 1; i >= 0; i--) {
    res2 = res2 + words[i] + " ";
}

console.log(res2.trim());

// Write a program to truncate a string after a given number of chracters and append "...."

let str4 = "JavaScript Programming";
let limit = 10;
let res3 = "";

for (let i = 0; i < limit && i < str4.length; i++) {
    res3 = res3 + str4[i];
}

res3 = res3 + "...";

console.log(res3);

// Write a program to campare two strings ignoring case sensitivity
function equalignorecase(str1,str2){
    if(str1.toLowerCase()===str2.toLowerCase()){
        console.log("Strings are equal")
    }
    else{
        console.log("Strings are not equal")
    }
}
equalignorecase("hello","world")
