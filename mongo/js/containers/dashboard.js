import Card from '../components/card'

export default class Dashboard {
  constructor () {
  }

   getData() {
   }


  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#dddddd'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'left'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('Jarvis Web Project')

    container.appendChild(title)

    let lukeCard = new Card({
      title: '',
      image: '',
      description: '',
      link: '',
      linkText: ''
    })
    container.append(lukeCard.getContent())

    return container
  }

  animate() {
  }
}
