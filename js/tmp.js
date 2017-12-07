let program = require('commander')
let SWAPI = require('./swapi')

program
    .command('fetch')
    .action(() => {
        let swapi = new SWAPI()
        swapi.getCharacters()
    })

program.parse(process.argv)

if(!program.args.length) {
    program.help()
}
