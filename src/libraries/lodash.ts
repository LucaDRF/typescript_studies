const _ = require('lodash');
//  to use require you also need npm i --save-dev @types/node

console.log(_.shuffle([ 1, 2, 3 ]));

// npm i --save-dev @types/lodash must use this to 'translate' lodash to typescript and avoid errors
// this add the types to all lodash methods
