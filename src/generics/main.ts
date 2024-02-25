// generic is a type that yields another types
// examples:

const names: Array<string> = ['a'];
names[0].split('a'); // let you use string methods and attribues because you declared before that this array would have strings

const promise: Promise<string> = new Promise((resolve, reject) => {
    return setTimeout(() => {
        return 'Olá!';
    }, 2000);
});

promise.then(result => {
    result.split(''); // same here
});
