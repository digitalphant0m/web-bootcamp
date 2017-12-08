let Swapi = require('./swapi')
import Dashboard from './containers/dashboard.js'

let swapi = new Swapi()

export default class App {

  constructor() {
    document.body.style.background = 'url("/images/sw_background.png") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')

    let dashboard = new Dashboard()

    content.append(dashboard.getContent())
    dashboard.animate()

  }
  getData() {
      swapi.getData((arr) => {
      //  swapi.insertDocuments(arr)
        swapi.query((params) => {
            console.log('params',params)

        })
      })
  }
}

let app = new App()
window.app = app
