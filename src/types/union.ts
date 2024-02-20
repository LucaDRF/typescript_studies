function combine (elem1 : string | number, elem2 : string | number) {
    // return elem1 + elem2; typescript throw a warning because the type is union,
    // so it could be any type that doesnt have the '+' method. Must do check first

    if (typeof elem1 === 'number' && typeof elem2 === 'number') {
        return elem1 + elem2;
    } else {
        return elem1.toString() + elem2.toString();
    }


}

const combinedAges = combine(30, 20);
console.log(combinedAges);

const combinedNames = combine('Luca', 'Isabella');
console.log(combinedNames);
