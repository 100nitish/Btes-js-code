//Function Parameters

//write a function using default parameter.

function DefaultPara(a=5){
    return a*a
}
console.log(DefaultPara(2))

// Write a function that accepts any number of argument using rest parameters.

function Rest(...don){
    let sum=0;
    for(let i of don){
        sum = sum+i;
    }
    return sum;
}
console.log(Rest(1,2,3))

//Pass an array of values to  function using the spread operator.

function Spread(a,b,c){
    return a+b+c;
}
let num =[2,4,5]
console.log(Spread(...num))


//Write a function that accepts a student's name and unlimited marks using rest paraments.

function Student(name,...marks){
    console.log(name)
    for(let i of marks){
        
        return marks;
    }
   
}
console.log(Student("nitish",34,55,66))