const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navigation_nav')

function toggleNavbar() {
  burger.classList.toggle('open')
  navbar.classList.toggle('hidden')
}

burger.addEventListener('click', toggleNavbar)