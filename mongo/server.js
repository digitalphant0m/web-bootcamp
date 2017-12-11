let express = require('express')
let app = express()
let assert = require('assert')
let MongoClient = require('mongodb').MongoClient

let url = 'mongodb://digitalphant0m:Gandalf27@lstacenuorti-shard-00-00-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-01-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-02-bq2i4.mongodb.net:27017/test?ssl=true&replicaSet=LSTACENUORTI-shard-0&authSource=admin'

app.use('/', express.static('app'))

app.get('/api/characters', (request, response) => {

  MongoClient.connect(url, (connectError, db) => {
    assert.equal(null, connectError)

    // Get the documents collection
    var collection = db.collection('characters')

    let data = collection.find()
    data.toArray((error, result) => {
      console.log(result)
      response.json(result)
      db.close()
    })
  })
})

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

// Start server
let server = app.listen(app.get('port'), function() {
  console.log(`Express is running on port ${app.get('port')}`)
})
