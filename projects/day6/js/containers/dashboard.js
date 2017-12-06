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
        title: 'Thor',
        image: '/images/',
        description: 'Thor is the God of Thunder',
        link: '',
        linkText: 'More Info'
        
    })
    
    container.append(thorCard.getContent())
    
    let hulkCard = new Card({
        title: 'Hulk'
        image: '/images/',
        description: 'Hulk is raging fire, Thor is more like smoldering fire',
        link: '',
        linkText: 'More Info'
    })

    container.append(hulkCard.getContent())
    
    return container
    
    }
}
