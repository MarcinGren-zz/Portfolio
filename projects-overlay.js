const projects = document.querySelectorAll('.project_container')

function toggleHiddenOverlay() {
  this.firstElementChild.classList.toggle('hide_project')
}

projects.forEach(
  proj => ['mouseenter', 'mouseleave'].forEach(
    event => proj.addEventListener(event, toggleHiddenOverlay)))