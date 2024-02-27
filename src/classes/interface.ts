interface Greetable {
    name: string;

    greet(phrase: string): void;
}

interface Age {
    age: number;
}

// implemented interfaces ensures that the classes have all the attributes and methods of the interface

class Person implements Greetable, Age {
    constructor(public name: string, public age: number) {}

    greet(phrase: string) {
        console.log(phrase + this.name);
    }
}

export {}

