const initApp = () => {
  const profileOverlay = document.getElementById("profile-overlay")
  const profileLink = document.getElementsByClassName("profile-link")
  const profileClose = document.getElementById("profile-close")
  const navbarTie = document.getElementById("navbar-tie")
  const mobileToggler = document.getElementById("mobile-toggler")
  const mobileNavigation = document.getElementById("mobile-navigation")

  mobileToggler.addEventListener("click", () => {
    mobileNavigation.classList.toggle("show")
  })

  mobileNavigation.addEventListener("click", () => {
    mobileNavigation.classList.remove("show")
  })

  profileLink[0].addEventListener("click", () => {
    profileOverlay.classList.toggle("show")
  })

  profileLink[1].addEventListener("click", () => {
    profileOverlay.classList.toggle("show")
  })

  profileClose.addEventListener("click", () => {
    profileOverlay.classList.remove("show")
  })

  window.addEventListener("scroll", () => {
    const verticalScrollPx = window.scrollY
  
    if (verticalScrollPx > 100) {
      navbarTie.classList.add('scollup');
    } else {
      navbarTie.classList.remove('scollup')
    }
  })
}

document.addEventListener("DOMContentLoaded", initApp)


