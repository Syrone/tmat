document.addEventListener('DOMContentLoaded', () => {
  const confirmBtn = document.querySelector('[data-modal-button-action="confirm"]')
  const cancelBtn = document.querySelector('[data-modal-button-action="cancel"]')

  const modalWrapper = document.querySelector('.modal18__Wrapper')
  const modal = document.querySelector('.modal18')

  confirmBtn.addEventListener('click', () => {
    modalWrapper.classList.add('modal18__Wrapper--Hidden')
    modal.classList.add('modal18--Hidden')
    document.body.style.overflowY = 'visible'
  })
})