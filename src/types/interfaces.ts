interface obj {
    a: string,
    b?: number,
    readonly readKey: string,
    readonly readObj: { a: string, b: number }, // can change the properties but cannot be reassigned,
    [index: number]: boolean, // any extra key in the object that is a number must be a boolean (cannot use if there is a key with the same type)
    [propName: string]: any // any other key except the ones declare can be anything
}


// creating array using interface
interface array {
    [index: number]: string
};

const arrayString : array = ['a'];

// extending

interface Colorful {
    color: string;
  }
   
interface Thing {
    type: string;
}

interface Thing { // will add this property to the existing interface
    size: number;
}
   
interface ColorfulThing extends Colorful, Thing {}

const cc: ColorfulThing = {
type: 'shoe',
color: "red",
size: 42,
};