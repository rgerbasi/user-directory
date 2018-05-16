const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favoriteColor = form.favoriteColor.value

  const users = document.querySelector('#users')

  const list = document.createElement('ul')

  const nameItem = renderListItem('Name: ', userName)
  const ageItem = renderListItem('Age: ', age)
  const colorItem = renderListItem('Fav Color: ', undefined)
    /*
  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`

  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  */
  colorItem.appendChild(renderColor())

  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)

  users.appendChild(list)

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)


//functions
function renderColor(){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = form.favoriteColor.value;
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}
function renderListItem(stat, statValue){
    const listItem = document.createElement('li')
    listItem.textContent = stat + statValue
    return listItem;
}