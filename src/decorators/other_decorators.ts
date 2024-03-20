function PropertysLog(target: any, propertyName: string | Symbol) {
    // target is the prototype of the object: the methods inside
    // executed when the property is defined
    console.log('Property decorator!');
    console.log(target, propertyName);
}
  
function AccessorsLog(target: any, name: string, descriptor: PropertyDescriptor) {
    // target is the prototype of the object: the methods inside
    // descriptor returns the getters and setters created with the name and some configurations
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
  
function MethodsLog(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    // target is the prototype of the object: the methods inside
    // descriptor ia an object with some configurations
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// you can add individually a decorator to each parameter
function ParametersLog(target: any, name: string | Symbol, position: number) {
    // name of the method is used
    // position of the argument: 1º argument(0), 2ºargument(1)
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
  
// order is: property -> accessor -> parameter -> method
class Product {
    @PropertysLog
    title: string;
    private _price: number;
  
    @AccessorsLog
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('Invalid price - should be positive!');
      }
    }
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
  
    @MethodsLog
    getPriceWithTax(@ParametersLog tax: number) {
      return this._price * (1 + tax);
    }
}
  
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

export {}
