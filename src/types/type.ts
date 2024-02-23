// This allows you to avoid unnecessary repetition and manage types centrally.

type UserType = { name: string; age: number };
 
function greet(user: UserType) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: UserType, checkAge: number) {
  return checkAge > user.age;
}

// Can be used to store union types

type Combinable = {
    firstElement: string | number,
    secondElement: string | number,
    combinationType: 'to_number' | 'to_string' // union between two literals
}

// defining an array of defined objects
type Person = {
  name: string;
  age: number;
  gender: 'male' | 'female';
}[];

const personArray: Person = [{
  name: 'Luca',
  age: 20,
  gender: 'male'
}, {
  name: 'Luca',
  age: 20,
  gender: 'male'
}];
