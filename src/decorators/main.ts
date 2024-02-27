// decorators allow us to call functions before the creation of the class, so they are only called once

// factory functions let you pass an argument when calling the decorator
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) { // here is passed the class
    console.log('aaaaaaa', logString);
    console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name;
    }
    }
}

// here the order is: from the bottom decorators to the top decorators

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);
