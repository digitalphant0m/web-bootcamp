//let MongoClient = require('mongodb').MongoClient
let express = require('express')
let app = express()

app.use('/', express.static('app'))

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)



app.listen(3000, () => {
  console.log('listening on 3000')
})


/*

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});


var uri = "mongodb://digitalphant0m:Gandalf27@lstacenuorti-shard-00-00-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-01-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-02-bq2i4.mongodb.net:27017/admin?replicaSet=LSTACENUORTI-shard-0&ssl=true";
MongoClient.connect(uri, function(err, database) {
    if (err) return console.log(err)
     db = database
     app.listen(3000, () => {
       console.log('listening on 3000')
     })
});

*/ 
