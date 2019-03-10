var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navigation_nav')

function toggleNavbar() {
  burger.classList.toggle('open')
  navbar.classList.toggle('hidden')
}

burger.addEventListener('click', toggleNavbar)