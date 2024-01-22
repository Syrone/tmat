document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelectorAll('[data-video-button]')
  const modalWrapper = document.querySelector('.videoModal__Wrapper')
  const modal = document.querySelector('.videoModal')

  openBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modalWrapper.classList.remove('videoModal__Wrapper--Hidden')
      modal.classList.remove('videoModal--Hidden')
      document.body.style.overflowY = 'hidden'
    })
  })

  modalWrapper.addEventListener('click', e => {
    if (e.target.contains(modal)) {
      modalWrapper.classList.add('videoModal__Wrapper--Hidden')
      modal.classList.add('videoModal--Hidden')
      document.body.style.overflowY = 'scroll'
    }
  })
})