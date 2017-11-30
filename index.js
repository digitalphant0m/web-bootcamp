let program = require('commander')
let Marvel = require('./marvel') 

program
    .command('fetch')
    .action(() => {
        console.log('Characters')
        let marvel = new Marvel()
        marvel.getCharacters()
    })

program
    .command('thor')
    .action(() => {
        console.log('Thor')
        let marvel = new Marvel()
        marvel.getThor()
    })

program.parse(process.argv)

if(!program.args.length) {
    program.help()
}
