const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;

// ! say to typescript that this value will never be null

const value = userInputElement1.value;
// the variable will now have all the properties from the type it was casted
// useful for when you have a union type but you dont know what type is
