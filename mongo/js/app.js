let Swapi = require('./swapi')

let swapi = new Swapi()

swapi.getData((arr) => {
  swapi.insertDocuments(arr)
  swapi.query((params) => {
      console.log('params',params)
  })
})
