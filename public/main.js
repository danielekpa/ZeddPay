const mobileFormButton = document.querySelector('.zeddHome__form button')
const desktopFormButton = document.querySelector('.search-wrapper button')
const overlayContainer = document.querySelector('.zeddHome__modalOverlay')
const closeButton = document.querySelector('.zeddHome__modalCloseButton')
const btnsArray = [mobileFormButton, desktopFormButton]

btnsArray.forEach(btn => {
  btn.addEventListener('click', () => {
    overlayContainer.style.display = 'flex'
  })
})


closeButton.addEventListener('click', () => {
  overlayContainer.style.display = 'none'
})