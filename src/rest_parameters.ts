//  rest parameters allow the function to receive as many parameters as you want

function add(...numbers: number[]) { // definition must be an array
// can be a tuple: [number, number, string]
// can be an array of one type or other arrays of one type : number[] | string[]
// and can be an array with multiple types: (number | string)[]
    console.log(numbers);    

    return numbers.reduce((acc, number) => {
        return acc += number;
    }, 0);
}

const addResult = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log('oi', addResult);

export {}