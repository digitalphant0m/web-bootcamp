let api = require('star-wars-api')
let MongoClient = require('mongodb').MongoClient

class Swapi {
    constructor(){
        this.url = 'mongodb://digitalphant0m:Gandalf27@lstacenuorti-shard-00-00-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-01-bq2i4.mongodb.net:27017,lstacenuorti-shard-00-02-bq2i4.mongodb.net:27017/test?ssl=true&replicaSet=LSTACENUORTI-shard-0&authSource=admin'
    }

    getData(callback) {
        let swapi = new api();

        let array = []
        let objPeople = {}
        let objPlanets = {}
        let homeWorld

        // get star wars people
        swapi.get('people', '')
            .then(people =>  {

            people.results.forEach((person) => {
                // forEach film of person
            /*    person.films.forEach((film) => {
                    swapi.get(film).then((result) => {
                        let _films = result.name
                        console.log(_films)
                     });
                })
                // forEach person return their homeworld
                swapi.get(person.homeworld).then((result) => {
                    homeWorld = result.name
                    //console.log(homeWorld)
                 });
                 */
                objPeople = {
                    name : person.name,
                    birth_year:  person.birth_year,
                    hair_color: person.hair_color,
                    //home_world: homeWorld
                }
                array.push(objPeople)
            })
             callback(array)
            // .fail(console.error)
             //.done
        })

        return array
    }

    insertDocuments(docs) {
       MongoClient.connect(this.url, (err,db) => {
         if(!err) {
           let collection = db.collection('mydb')
           collection.insertMany(docs, (err,result) => {
            // console.log(result)
           })
           db.close()
         }
         else {
           console.log(err)
         }

       })
     }

     query(params) {
        MongoClient.connect(this.url, (err, db) => {
          if (err) throw err
          var query = { name: "Obi-Wan Kenobi" };
           let collection = db.collection('mydb')
            collection.find(query).toArray((err, result) => {
            if (err) throw err
            params(result)
            db.close();
          })
         // .fail(console.error)
          //.done
      })
     return params
     }


}

module.exports = Swapi
