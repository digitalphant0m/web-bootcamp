let program = require('commander')
//let Swapi = require('../js/swapi')

program
    .command('fetch')
    .action(() => {
        console.log('Fetching ...')
        let swapi = new Swapi()
        swapi.getData()
    })

program.parse(process.argv)

if(!program.args.length) {
    program.help()
}
