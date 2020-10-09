
const openLoginModal = document.getElementById('splashlogin');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementById('overlay')


openLoginModal.addEventListener('click', () => {
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

const openSignUpModal = document.querySelector(".splash__contents-signup");
const closeSignUpModal = document.querySelector(".button-div__button");

openSignUpModal.addEventListener('click', () => {
  const modal = document.querySelector(".modal2")
  openModal(modal)
})

closeSignUpModal.addEventListener('click', () => {
  console.log("getting click")
  const modal = document.querySelector(".modal2")
  console.log(modal)
  closeModal(modal)
})
