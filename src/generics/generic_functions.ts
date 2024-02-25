// creating T ensures that the parameter is not any object, but an object with values:
function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
}
// extends means that T must be an object
function merge1<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj1 = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
const mergedObj2 = merge1({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj1); // defined as only an object
// mergedObj1.name doesnt exist
console.log(mergedObj2); // defined as an object with all the values
// mergedObj2.name exists

interface Lengthy {
    length: number;
}
// T must have the propertys from the interface Lengthy
// this way, the function is flexible enough to receive any type that has length as a property
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';

    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }

    return [element, descriptionText];
}
  
console.log(countAndDescribe(['Sports', 'Cooking']));

// ensures that U is one of the keys of T
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}
  
extractAndConvert({ name: 'Max' }, 'name');
