const sla = (a : string) : number => {
    const aParsed : number = +a

    return aParsed + 2;
};

function printCoord(pt: { x: number; y: number, z?: number }) { // use , or ;
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    console.log("The coordinate's z value is " + pt.z?.toFixed(1));
}

printCoord({x: 1, y: 2});

const promise = async () : Promise<number> => { // can only be used with es6+++
    return 26
};

// Contextual typing for function - parameter s inferred to have type string
['a', 'b'].forEach(function (s) {
    console.log(s.toUpperCase());
  });
   

const result = sla('50');
console.log(result);

let undefinedFunction:  Function; // ensure that variable is a Function
let definedFunction: (name1: string, name2: string) => number;
// ensure that variable has a function with the specified parameters and return type
// can be used to specifie the types of the callback function

undefinedFunction = sla;
definedFunction = sla;

const result1 = undefinedFunction('2');
const result2 = definedFunction('2', '5');

console.log(result1);
console.log(result2);
// result1 has type any because the Funcion was not specified, whereas result2 has the right type since its defined
