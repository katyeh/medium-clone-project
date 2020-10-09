
const openLoginModal = document.getElementById('splashlogin');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementById('overlay')


openLoginModal.addEventListener('click', () => {
  console.log("hello")
  const modal = document.getElementById('login__modal')
  openModal(modal)
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
