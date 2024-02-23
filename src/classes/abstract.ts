abstract class Department {
    // make sure that every class that extends this, have his own version of the abstract methods/attributes
    protected abstract employees: string[]; // must be protected or public

    constructor(protected readonly id: number, public name: string) {}

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
      }
}

class ITDepartment extends Department {
    constructor(id: number, protected employees: string[]) {
      super(id, 'IT');
    }
  
    describe() {
      console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    constructor(id: number, protected employees: string[]) {
      super(id, 'Accounting');
    }
  
    describe() {
      console.log('Accounting Department - ID: ' + this.id);
    }
}

// const department = new Department(); cannot instanciate abstract classes
const it = new ITDepartment(1, ['a']);

it.describe();

const accounting = new AccountingDepartment(2, ['b']);

accounting.describe();