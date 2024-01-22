document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.burgerIcon')
  const popupBg = document.querySelector('.header__popupWrapper')
  const popup = document.querySelector('.header__popup')
  const popupCloseIcon = document.querySelector('.header__popup-close')

  burgerIcon.addEventListener('click', () => {
    popupBg.classList.add('header__popupWrapper--Active')
    popup.classList.add('header__popup--Active')
    document.body.style.overflowY = 'hidden'
  })

  popupBg.addEventListener('click', e => {
    if (e.target.contains(popup)) {
      popupBg.classList.remove('header__popupWrapper--Active')
      popup.classList.remove('header__popup--Active')
      document.body.style.overflowY = 'scroll'
    }
  })

  popupCloseIcon.addEventListener('click', () => {
    popupBg.classList.remove('header__popupWrapper--Active')
    popup.classList.remove('header__popup--Active')
    document.body.style.overflowY = 'scroll'
  })

  /* Click on each list item */
  const popupMenuItem = popup.querySelectorAll('.header__popup-ul-li')
  popupMenuItem.forEach(item => {
    item.addEventListener('click', () => {
      popupBg.classList.remove('header__popupWrapper--Active')
      popup.classList.remove('header__popup--Active')
      document.body.style.overflowY = 'scroll'
    })
  })
})