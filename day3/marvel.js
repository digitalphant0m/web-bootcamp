let api = require('marvel-api')

let marvel = api.createClient({
  publicKey: 'c2489fcd2d8ead99b5caa7e5ab898fab'
, privateKey: 'b64d2faa654fcbb7d2a37cfb4b62b353a4f06e0e'
})

class Marvel {

    getCharacters() {
        marvel.characters.findAll()
            .then((data) => {
                console.log(JSON.stringify(data, null, 2))
            })
            .fail(console.err)
            .done()
        }

    getThor() {
        marvel.characters.findByName('thor')
            .then((data) => {
                console.log(JSON.stringify(data, null, 2))
            })
            .fail(console.err)
            .done()
        }
    }

module.exports = Marvel
