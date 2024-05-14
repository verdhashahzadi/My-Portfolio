var generateName = require('sillyname');
var sillyName = generateName();

console.log( `Random name is ${sillyName}`);

const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'
console.log(`Random name is ${superheroes}`)
