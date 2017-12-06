const swapi = require('swapi-node');

getCharacters() {
    swapi.getPerson(1).then((result) => {
        console.log(result)
    })
}
