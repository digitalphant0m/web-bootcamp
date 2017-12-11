let program = require('commander')
let Swapi = require('./swapi')

program
    .command('insert')
    .action(() => {
        console.log('Inserting Data into Mongo...')
        let swapi = new Swapi()
          swapi.getCharacters((arr) => {
            swapi.insertDocuments(arr)
            /*swapi.query((params) => {
                console.log('params',params)

            })
            */
          })
      })

program.parse(process.argv)

if(!program.args.length) {
    program.help()
}
