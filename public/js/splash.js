
const openLoginModal = document.querySelectorAll(".splash-login");
const closeModalButtons = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementById('overlay')
const demoLogin = document.getElementById('demo')
const insertDemoName = document.getElementById('email__input')
const insertDemoPassword = document.getElementById('password__input')




demoLogin.addEventListener('click', () => {
  const modal = document.getElementById('login__modal')
  openModal(modal);
  insertDemoName.value= "demo@user.com";
  insertDemoPassword.value = "password123";
})

openLoginModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById('login__modal')
    openModal(modal)
  })
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

const openSignUpModal = document.querySelectorAll(".splash__contents-signup");
const closeSignUpModal = document.querySelector(".button-div__button");

openSignUpModal.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(".modal2")
    openModal(modal)
  })
})

closeSignUpModal.addEventListener('click', () => {
  console.log("getting click")
  const modal = document.querySelector(".modal2")
  console.log(modal)
  closeModal(modal)
})
