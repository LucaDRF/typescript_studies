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
