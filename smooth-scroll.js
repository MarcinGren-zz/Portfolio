const navItems = document.querySelectorAll('.nav_link')

function scrollHrefIntoView() {
  event.preventDefault()
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
    block: 'start'
  })
}

navItems.forEach(item => item.addEventListener('click', scrollHrefIntoView))
