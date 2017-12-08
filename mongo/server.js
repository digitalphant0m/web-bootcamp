let MongoClient = require('mongodb').MongoClient
let express = require('express')
let app = express()

// Connection URL
const url = 'mongodb://digitalphant0m:Gandalf27@lstacenuorti-shard-00-00-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-01-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-02-bq2i4.mongodb.net:27017/test?ssl=true&replicaSet=LSTACENUORTI-shard-0&authSource=admin'

app.use('/', express.static('app'))

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

// start server
app.listen(3000, () => {
  console.log('listening on 3000\n\n')
})

// mongo server connect
MongoClient.connect(url, (err, db) => {
  console.log("MongoDB is running on: %s", url)

})
//  db.close()