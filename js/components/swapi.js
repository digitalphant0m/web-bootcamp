let StarWarsAPI = require('star-wars-api');

class Swapi {
    constructor() {
    }

    getCharacters() {
        let swapi = new StarWarsAPI();

        swapi.get('people', 1)
            .then(person =>  {
             console.log(JSON.stringify(person, null, 2))
        })
        .done()
    }

}

module.exports = Swapi
