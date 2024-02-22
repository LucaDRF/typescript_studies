class Company {
    // name: string; // default is public
    // private readonly id: number; readonly ensures that even inside the class, id cannot be changed
    private employees: string[] = []; // only the class can access
  
    constructor(private readonly id: number, public name: string) { // do this instead of assign each parameter to their equivalent 
    //   this.name = n;
    }
  
    describe(this: Company) {
      console.log('Company: ' + this.name);
    }
  
    addEmployee(employee: string) {
        // this.id = 10; cannot do this because of readonly
        // validation etc
        this.pushEmployee(employee);
    }

    private pushEmployee(employee: string) { // method can only be inside the class, right after validation
        this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  const company = new Company(1, 'Accounting');
  
  company.addEmployee('Max');
  company.addEmployee('Manu');
  
  // company.employees[2] = 'Anna'; private and protected methods avoid this
  
  company.describe();
  company.name = 'NEW NAME';
  company.printEmployeeInformation();