let paragraph = document.createElement('p')
paragraph.innerHTML = 'This is JS generated paragraph tag'

let paragraphSecond = document.createElement('p')

paragraphSecond.innerHTML = 'Below is an example of a anchor tag for a link'

let heading = document.createElement('h1')

heading.innerHTML = 'This is a example of a heading'

let anchorTag = document.createElement('a')

anchorTag.innerHTML = 'This is an example of  a link'

anchorTag.setAttribute('href', 'https://www.google.com/') 

let body = document.getElementById('content')

body.append(heading)
body.append(paragraph)

body.append(paragraphSecond)
body.append(anchorTag)



