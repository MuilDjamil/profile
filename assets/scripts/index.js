import Firebase from "./firebase.js"
import { skillsetListDOM, projectListDOM } from "./DOM.js"

const initApp = () => {
  const firebase = new Firebase()
  const navBtnEl = document.getElementById("nav-button")
  const navigationEl = document.getElementById("navigation")

  navBtnEl.addEventListener("click", () => {
    navigationEl.classList.toggle("mobile")
  })

  navigationEl.addEventListener("click", () => {
    navigationEl.classList.remove("mobile")
  })

  firebase.skillsetValueHandling(skillsetListDOM)
  firebase.projectsValueHandling(projectListDOM)
}

document.addEventListener("DOMContentLoaded", initApp)