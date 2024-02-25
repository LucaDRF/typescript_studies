// the keyof operator takes an object type and produces a string or numeric literal union of its keys

type PointA = { x: 'number', y: 'number' };
type Pa = keyof PointA;
// equivalent to: 'x' | 'y'
let p: Pa;
// p = 'z'; error
p = 'x';


// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

const PointB = { x: 'number', y: 'number' };
type Pb = typeof PointB;
// type receives all the types from the object PointB
