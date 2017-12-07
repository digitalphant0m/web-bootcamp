let MongoClient = require('mongodb').MongoClient;
let StarWarsAPI = require('star-wars-api');
let express = require('express')
let app = express()

app.use('/', express.static('app'))

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)

const url = 'mongodb://digitalphant0m:<PASSWORD>@lstacenuorti-shard-00-00-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-01-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-02-bq2i4.mongodb.net:27017/test?ssl=true&replicaSet=LSTACENUORTI-shard-0&authSource=admin'

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    let dbase = db.db("mydb");
    dbase.collection('swapi').find().toArray((err, results) => {
      console.log(results)

      /*for (var key in results) {
          var obj = results[key];
          console.log(obj['fullname'])

      }
      */

      // send HTML file populated with data here
    })
});

app.listen(3000, () => {
  console.log('listening on 3000\n\n')
})
