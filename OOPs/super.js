// In javascript, the super keyword is used to access properties and methods of a parent(superclass).
//It is mainly used in class inheritence

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    display() {
        console.log(this.name);
        console.log(this.breed);
    }
}

let dog = new Dog("Tommy", "Labrador");

dog.display();