const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const user = {
      'Name': form.userName.value,
      'Age': form.age.value,
      'Favorite Color': renderColor(form.favoriteColor.value),
  }

  const users = document.querySelector('#users')
  users.appendChild(renderList(user))

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)

//functions
function renderList(user){
    const list = document.createElement('ul')
    for(var key in user){
      list.appendChild(renderListItem(key, user[key]))
  }
  return list
}
function renderListItem(stat, statValue){
    const listItem = document.createElement('li')
    listItem.textContent = `${stat}: `
    try {
        listItem.appendChild(statValue)
    } catch (error) {
        listItem.textContent += statValue
    }

    return listItem;
}
function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color;
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}
