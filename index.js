const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favoriteColor = form.favoriteColor.value

  const users = document.querySelector('#users')

  users.appendChild(renderList(userName,age,favoriteColor))

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)

//functions
function renderList(userName, age, favoriteColor){
    const list = document.createElement('ul')
  const nameItem = renderListItem('Name', userName)
  const ageItem = renderListItem('Age', age)
  const colorItem = renderListItem('Fav Color', renderColor())

  //colorItem.appendChild(renderColor())

  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)

  return list
}
function renderListItem(stat, statValue){
    const listItem = document.createElement('li')
    listItem.textContent = `${stat}: `
    try {
        listItem.appendChild(statValue)
    } catch (error) {
        listItem.textContent += `${statValue}`
    }

    return listItem;
}
function renderColor(){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = form.favoriteColor.value;
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}
