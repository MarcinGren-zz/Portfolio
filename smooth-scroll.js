const navItems = document.querySelectorAll('.nav_link')

function scrollHrefIntoView() {
  event.preventDefault()
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
    block: 'start'
  })
  // from toggle-navbar.js - having to write that kinda sucks but want to keep it simple with just a few small js files
  toggleNavbar()
}

navItems.forEach(item => item.addEventListener('click', scrollHrefIntoView))
