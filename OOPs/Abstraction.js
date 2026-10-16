class Abstraction{
    method(){
        throw new Error("Must implement")
    }
}

class concreteclass extends Abstraction
{
    show(){
        console.log("Hello Harry")
    }
}
let obj = new concreteclass();
obj.show()