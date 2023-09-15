const initApp = () => {
  const mobileToggler = document.getElementById("mobile-toggler")
  const mobileNavigation = document.getElementById("mobile-navigation")

  mobileToggler.addEventListener("click", () => {
    mobileNavigation.classList.toggle("show")
  })

  mobileNavigation.addEventListener("click", () => {
    mobileNavigation.classList.remove("show")
  })
}

document.addEventListener("DOMContentLoaded", initApp)