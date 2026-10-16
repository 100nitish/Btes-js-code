//Create a student object and print all propeties dynamically

const student={
    name:"nitish",
    age:"22",
    course:"js",
    city:"Lucknow"
}

// console.log(student)

//Add a property dynamically and display updated object

let property="duration";
let value="6 months"
student[property]=value;
// console.log(student);


//Delete a property and verify removal

// delete student["city"];
// delete student["age"];
delete student.city,student.age;

console.log(student);

//Count number of keys in an object

// let count = Object.keys(student).length;

// console.log(count);

let cn=0;
for(keys in student)
{
    cn++;
}
console.log(cn);

//Check if given key exist in object

let key = "name";
if(key in student){
    console.log("Key Exist")
}
else{
    console.log("Key is not Exist")
}

//Cloan an object using spread operator

// let studenCopy = {...student}
// console.log(studenCopy)
// studenCopy.name="pawan";
// console.log(studenCopy)

//Clone an object using Object.assign()

let studenCopy = Object.assign({},student);
studenCopy.age="23";
console.log(studenCopy);

//Demonstrate reference vs copy behavior


//reference
//student1=student;

//copy
//let studenCopy = {...student}

//Create shallow copy

const newStudent={
    name:"Suraj",
    age:"34",
    address:{
        city:"jaunpur",
        pin:"334994"
    }
}
const newStudent1=newStudent;
newStudent1.address.city="Baliya";
console.log(newStudent.address.city);
console.log(newStudent1.address.city);


//Create deep copy and prove original unchanged

const newStudent2=structuredClone(newStudent);

newStudent2.address.city="Mumbai";

console.log(newStudent);
console.log(newStudent2);

//Print all by Object.keys()

console.log(Object.keys(newStudent));

//Print all values using Object.values

console.log(Object.values(newStudent))

//Print key values pairs using Object.entries()

console.log(Object.entries(newStudent))

//convert object in array of keys 

// by using Object.keys method

//conver entries array back to object

// console.log(Object.fromEntries(newStudent))

//Merge two objects with overlapping keys.

const obj1={
    color:"green",
    brand:"nexus"
}
const obj2={
    color:"brown",
    brand:"jene",
    
}

let res={...obj1}
for(let key in obj2){
    if(!(key in res)){
        res[key]=obj2[key];
    }
}

console.log(res);

//Reverse merge order and compare results


let res2 = { ...obj2 };

for (let key in obj1) {
    if (!(key in res2)) {
        res2[key] = obj1[key];
    }
}

console.log(res2);

//Override specific values while merging

const res3={...obj1,...obj2}
console.log(res3)


//Freeze object and test automation.
