class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        // use this to ensure that the 'this' where is called, has the same data from the 'this' of the constructor
        console.log("Department: " + this.name);
    }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// avoiding the class method to be called where doesnt have all the data

// const accountingCopy1 = { describe: accounting.describe };
// accountingCopy1.describe(); 
// error throwed -> 
// The 'this' context of type '{ describe: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.
// Property 'name' is missing in type '{ describe: (this: Department) => void; }' but required in type 'Department'.

accountingCopy.describe();
