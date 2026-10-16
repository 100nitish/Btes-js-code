

// import {add,name, age,multiply} from'./Module.js'
import * as curr from './Module.js'
//Namespace import

//import config from `./Module.js`
//Import All (Namespace Import)
//It imports all named export from a module into a single object




let result = curr.add(2,3)
console.log(result)
console.log(curr.name)
console.log(curr.age)

let res1=curr.multiply(3,4);
console.log(res1)

console.log(curr.myfunction("Virat"))

const p1 = new curr.Person("Raju");
console.log(p1.greet())

// console.log(config)



//Namespace

//A special object containing all exports from the module.
// import * as name from module
//purpose  - Organize,access, and reference module export safely
//prototype - The namespace is a plain object with no prototype
//(Object.getPrototypeOf(math)===null).

