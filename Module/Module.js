

export function add(a,b){
    return a+b;
}

const name="Nitish";
const age=23;

export {name,age}

export function multiply(a,b){
    return a*b;
}

export function myfunction(name){
    return `Hello,${name}`
}

//module.js
export class Person {
    constructor(name){
        this.name = name;
    }
    greet(){
        return `Hello, ${this.name}`
    }
}