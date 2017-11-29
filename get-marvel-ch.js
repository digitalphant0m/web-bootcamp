let api = require('marvel-api')
 
let marvel = api.createClient({
  publicKey: 'c2489fcd2d8ead99b5caa7e5ab898fab'
, privateKey: 'b64d2faa654fcbb7d2a37cfb4b62b353a4f06e0e'
})


marvel.characters.findAll(function(err, results) {
  if (err) {
    return console.error(err)
  }
 
  console.log(results)
})


