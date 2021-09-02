const mobileFormButton = document.querySelector('.zeddHome__form button')
const desktopFormButton = document.querySelector('.search-wrapper button')
const overlayContainer = document.querySelector('.zeddHome__modalOverlay')
const closeButton = document.querySelector('.zeddHome__modalCloseButton')
const btnsArray = [mobileFormButton, desktopFormButton]


const validate = async (inputField, errorField) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
  if (inputField.value.length == 0) {
    inputField.classList.add('error_active')
    errorField.innerHTML = "Email Field can't be empty 🙄"
    errorField.style.display = 'block'
    setTimeout(() => {
      inputField.classList.remove('error_active')
      errorField.innerHTML = ""
      errorField.style.display = 'none'
    }, 1500)
  } else if (re.test(String(inputField.value).toLowerCase()) !== true) {
    inputField.classList.add('error_active')
    errorField.innerHTML = "This isn't an email guy 😏"
    errorField.style.display = 'block'
    setTimeout(() => {
      inputField.classList.remove('error_active')
      errorField.innerHTML = ""
      errorField.style.display = 'none'
    }, 1500)
  } else {
    const response = await fetch('https://zeddpay-newletter-api.herokuapp.com/api/users/add',  {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({ email: inputField.value})
    })
    if (response.status !== 201) {
      inputField.classList.add('error_active')
      errorField.innerHTML = "Nice Try, Email Already Exists!😂"
      errorField.style.display = 'block'
      setTimeout(() => {
        inputField.classList.remove('error_active')
        errorField.innerHTML = ""
        errorField.style.display = 'none'
      }, 1500)
    } else {
      inputField.value = ''
      overlayContainer.style.display = 'flex'      
    }
  }         
}


mobileFormButton.addEventListener('click', (e) => {
  e.preventDefault()
  const mobileInput = document.querySelector('.zeddHome__form input')
  const errorEl = document.querySelector('.error_isActiveText')  
  validate(mobileInput, errorEl)
})


desktopFormButton.addEventListener('click', (e) => {
  e.preventDefault()
  const desktopInput = document.querySelector('.search-wrapper input')
  const errorEl = document.querySelector('.error_isActiveText.desktop')  
  validate(desktopInput, errorEl)
})

closeButton.addEventListener('click', () => {
  overlayContainer.style.display = 'none'
})

