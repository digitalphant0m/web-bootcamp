export default class Card {
  constructor (options) {
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
    card.style.background  = 'rgba(0, 0, 0, 0.4)'
    card.style.borderRadius = '25px'

    let cardHeader = document.createElement('div')
    cardHeader.style.height = '10%'

    let cardTitle = document.createElement('div')
    cardTitle.append(this.options.name)

    cardTitle.style.color = '#dddddd'
    cardTitle.style.margin = 'auto'
    cardTitle.style.textAlign = 'center'
    cardTitle.style.fontWeight = 'bold'
    cardTitle.style.fontSize = '24px'
    cardTitle.style.width = '100%'
    cardHeader.append(cardTitle)

    card.append(cardHeader)

    let cardBody = document.createElement('div')
    cardBody.style.height = '80%'
    cardBody.style.display = 'flex'
    cardBody.style.margin = 'auto'

    let cardImageContainer = document.createElement('div')
    cardImageContainer.style.flex = '.5'

    let cardImage = document.createElement('img')
    cardImage.src = this.options.image
    cardImageContainer.append(cardImage)
    cardBody.append(cardImageContainer)

    let cardList = document.createElement('ul')

    let cardDescription = document.createElement('li')
    cardDescription.style.flex = '1'
    cardDescription.style.padding = '10px'
    cardDescription.append(this.options.description)

    cardDescription.style.color = '#dddddd'
    cardDescription.style.fontSize = '20px'
    cardList.append(cardDescription)


    let cardBirthYear = document.createElement('li')
    cardBirthYear.innerHTML = 'Birth Year: ';
    cardBirthYear.style.padding = '10px'
    cardBirthYear.style.flex = '1'
    cardBirthYear.append(this.options.birth_year)

    cardBirthYear.style.color = '#dddddd'
    cardBirthYear.style.fontSize = '20px'
    cardList.append(cardBirthYear)

    let cardHairColor = document.createElement('li')
    cardHairColor.innerHTML = 'Hair Color: ';
    cardHairColor.style.padding = '10px'
    cardHairColor.style.flex = '1'
    cardHairColor.append(this.options.hair_color)

    cardHairColor.style.color = '#dddddd'
    cardHairColor.style.fontSize = '20px'
    cardList.append(cardHairColor)

    cardBody.append(cardList)

    card.append(cardBody)

    let cardFooter = document.createElement('div')
    cardFooter.style.height = '10%'
    cardFooter.style.textAlign = 'center'

    let cardFooterLink = document.createElement('a')
    cardFooterLink.href = this.options.link
    cardFooterLink.append(this.options.linkText)
    cardFooterLink.style.color = '#dddddd'
    cardFooterLink.style.margin = 'auto'
    cardFooterLink.style.fontSize = '18px'

    cardFooter.append(cardFooterLink)

    card.append(cardFooter)

    return card
  }

}
