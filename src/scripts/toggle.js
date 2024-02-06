const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobileMenu')
const closeMenu = document.getElementById('closeMenu')

hamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('-translate-x-full')
})

closeMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('-translate-x-full')
})
