export default class Card {
    constructor(options) {
    this.options = options
    }

    getContent() {
        let card = document.createElement('div')

        card.classList.add('col-6')
        card.style.height = '400px'
        card.style.margin = '1%'
        card.style.cursor = 'pointer'
        card.style.boxShadow = '0px 0px 3px #888888'
        card.style.borderWidth = '2px'
        card.style.borderStyle = 'none'
        card.style.borderColor = 'gold'
        card.style.background = 'rgba(0, 0, 0, 0.4)'
        card.style.borderRadius = '25px'

        let cardHeader = document.createElement('div')
        cardHeader.style.height = '10%'

        let cardTitle = document.createElement('div')
        cardTitle.append(this.options.title)
        
        cardTitle.style.color = '#dddddd'
        cardTitle.style.margin = 'auto'
        cardTitle.style.textAlign = 'center'
        cardTitle.style.fontWeight = 'bold'
        cardTitle.style.fontSize = '24px'
        cardTitle.style.width = '100%'

        cardHeader.append(cardTitle)        
 
        card.append(cardHeader)
       
        let cardFooter = createElement('div')
        cardFooter.style.height = '10%'
        cardFooter.style.textAlign = 'center'

        let cardFooterLink = createElement('a')
        cardFooterLink.href = this.options.link
        cardFooterLink.append(this.options.linkText)
        cardFooterLink.style.color = '#dddddd'
        cardFooterLink.style.margin = 'auto'
        cardFooterLink.style.fontSize = '10px'
 
        return card
    }
}
