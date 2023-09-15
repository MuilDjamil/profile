export function skillsetListDOM(skillsetList) {
  const skillsetListEl = document.getElementById("skillset-list")

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
}

export function projectListDOM(projectList) {
  const projectListEl = document.getElementById("project-list")

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
}