// A tuple type is another sort of Array type that knows exactly how many elements it contains,
// and exactly which types it contains at specific positions.

type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) { // or pair: StringNumberPair
    const [string, number] = pair; // desestructuring

    const a = pair[0].toLowerCase();
    const b = pair[1].toString();
    // ...
  }

const a : StringNumberPair = ['hi', 2];

a.push('ola'); // be careful with push and pop methods, they dont warn if you change de tuple
a.pop();
a.pop();

// console.log(a[1].toString()); this would make an error and typescript would not warn

doSomething(["hello", 42]);
doSomething(a);

type Either2dOr3d = [number, number, number?]; // Optional tuple elements can only come at the end

type StringNumberBooleans = [string, number, ...boolean[]];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

function doSomething2(pair: readonly [string, number]) { 
    // pair[0] = "hello!"; error!
    // ...
}