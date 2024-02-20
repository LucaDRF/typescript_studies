console.log('olaaa');

interface Obj {
    x: number,
    y: any
}

let obj : Obj = { x: 0, y: null };
console.log(obj?.x);
console.log(obj.y);
obj.x = 2;
