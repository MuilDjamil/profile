import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js'
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js'

const firebaseConfig = {
  databaseURL: "https://web-profile-4f250-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const portofolioRef = ref(database, "projects")
const skillsetRef = ref(database, "skillset")

const initApp = () => {
  const navBtnEl = document.getElementById("nav-button")
  const navigationEl = document.getElementById("navigation")
  const projectListEl = document.getElementById("project-list")
  const skillsetListEl = document.getElementById("skillset-list")

  navBtnEl.addEventListener("click", () => {
    navigationEl.classList.toggle("mobile")
  })

  navigationEl.addEventListener("click", () => {
    navigationEl.classList.remove("mobile")
  })

  onValue(skillsetRef, (snapshot) => {
    const skillsetList = Object.values(snapshot.val());
    let skillsetListDOM = ""

    skillsetListEl.textContent = ""

    skillsetList.forEach((skill) => {
      skillsetListDOM += `
        <div class="skillset__item">
          <div class="skillset__decription">
            <p>${skill.name}</p>
            <p class="skillset__decription-percentage">${skill.percentage}%</p>
          </div>
          <div class="skillset__progress-bar">
            <div class="skillset__bar" style="width:${skill.percentage}%"></div>
          </div>
        </div>
      `;
    })
    
    skillsetListEl.innerHTML += skillsetListDOM
  })

  onValue(portofolioRef, (snapshot) => {
    const projectList = Object.values(snapshot.val());
    let projectListDOM = ""

    projectListEl.textContent = ""

    projectList.forEach((project) => {
      projectListDOM += `
        <div class="projects__item">
          <img src="${project.thumb}" alt="project3">
          <a class="projects__show" target="_blank" href="${project.url}">
            <iconify-icon icon="mdi:eye"></iconify-icon>
          </a>
        </div>
      `;
    })
    
    projectListEl.innerHTML += projectListDOM
  })
}

document.addEventListener("DOMContentLoaded", initApp)