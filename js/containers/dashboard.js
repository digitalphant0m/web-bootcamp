import Card from '../components/card'

export default class Dashboard {
    constructor() {
    }

    getContent() {
    
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('h1')
    title.style.color = '#dddddd'
    title.style.textAlign = 'center'
    title.append('Jarvis Web Project')

    container.appendChild(title)

    let thorCard = new Card({
        title: 'Thor'
    })
    
    container.append(thorCard.getContent())
    
    let hulkCard = new Card({
        title: 'Hulk'
    })

    container.append(hulkCard.getContent())
    
    return container
    
    }
}
