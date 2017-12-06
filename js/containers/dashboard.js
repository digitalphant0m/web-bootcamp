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

    return container

    }
}
