//Objects are variables that can store values and functions.

//Values are stored in key value pairs called properties.

//Function are stored as key:function() pairs called functions.

const obj1={
    name:"nitish",
    age:22,
    role:"Software Engineer"
}

console.log(obj1);
console.log(obj1.name);

//How to create an object
//1.object literals
//2.spaces and line break
//3. Empty Objects

const person={};
person.firstname="Pawan",
person.lastname="Negi",
person.age=34;

console.log(person);

//new Object() keyword

const Laptop = new Object({
    Company:"Dell",
    color:"Blue",

})
console.log(Laptop)


//Object Accessing Properties
//-Dot Notation
//-Bracket Notation
//-Expression

console.log(Laptop.Company)
console.log(Laptop["color"])

//Changing property
Laptop.color="Black";
console.log(Laptop.color);
//Adding New Properties

Laptop.Size="15.5 inches";

console.log(Laptop)

//Delete Property

delete Laptop.color;

console.log(Laptop);

//Nested Objects

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car3)


//This keyword
const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function () {
    return this.id;
  }
};

console.log(person1.getId());

// console.log(number)
// console.log(person1)

//Object Keys()

// console.log("\n--- Object.keys()---")

const testUser = {
    username:"student1",
    role:"tester",
    active:true
};

console.log("\nOriginal Object:",testUser);

const keys = Object.keys(testUser);
console.log("Keys:",keys)

// Object.Value()
const values = Object.values(testUser);
console.log(values)

//JSON Stringify

console.log(JSON.stringify(testUser))

//JSON parse









