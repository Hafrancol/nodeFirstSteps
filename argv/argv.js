const { error } = require('console');

const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: '1',
        describe: 'x marks the spot',
        type: 'number'
    })
    .option('l', {
        alias: 'list',
        demandOption: true,
        default: 'false',
        describe: 'x marks the spot',
        type: 'boolean'
    })
    .check((argv) => {
        console.log('hola', argv)
        if(isNaN(argv.b)){
            throw error("You must to send a number")
        }
        return true;
      })
    .argv





    module.exports = argv;