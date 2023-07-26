const {createFile} = require('./helpers/multiplicar.js');
const argv = require('./argv/argv.js');


 const {b, l} = argv;
console.log(b,l)

console.clear();

createFile(b,l)
    .then((res)=> {
        console.log(res, 'creado');
    });