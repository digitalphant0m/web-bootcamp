var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL
var url = 'mongodb://localhost:27017/actuate';

MongoClient.connect(url, (err, db) => {
  let collection = db.collection('documents')
  
  
    
  console.log("Connected correctly to server");
  db.close();
});
