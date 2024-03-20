const { IsNotEmpty, IsNumber, IsPositive, validate } = require('class-validator');
//  npm i class-validator
//  decorators with class validation 


class Product {
  @IsNotEmpty()
  title: string;
  @IsNumber()
  @IsPositive()
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
  
const newProd = new Product('', -5.99);
validate(newProd).then((errors: any) => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});
