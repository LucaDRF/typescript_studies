// ?? is a coalesce that only works with null or undefined, empty strings or 0 will remain with their value
// differently of using ||, since '' and 0 would be false

const checkInput = (input: any) => input ?? 'DEFAULT';
const checkInputUsingCondition = (input: any) => input || 'DEFAULT';

const undef = undefined;
const zero = 0;
const emptyString = '';

console.log(checkInput(undef));
console.log(checkInputUsingCondition(undef));

console.log(checkInput(zero));
console.log(checkInputUsingCondition(zero));

console.log(checkInput(emptyString));
console.log(checkInputUsingCondition(emptyString));

