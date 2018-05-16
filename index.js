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
    const list = document.createElement('dl')
    for(var key in user){
      list.appendChild(renderListItem(key, user[key]))
  }
  return list
}
function renderListItem(stat, statValue){
    const listItem = document.createElement('li')
    const term = document.createElement('dt')
    term.textContent = stat;

    const description = document.createElement('dd')

    try {
        description.appendChild(statValue)
    } catch (error) {
        description.textContent += statValue
    }

    listItem.appendChild(term)
    listItem.appendChild(description)
    return listItem;
}
function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color;
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}
