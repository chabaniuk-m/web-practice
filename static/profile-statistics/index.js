const experienceEl = document.getElementById("experience");
const websitesEl = document.getElementById("websites");
const appsEl = document.getElementById("apps");

const experienceTimeout = 1000.0 / 15;
let experience = 0;
const websitesTimeout = 1000.0 / 260;
let websites = 0;
const appsTimeout = 1000.0 / 27;
let apps = 0;

async function updateExperience() {
  experienceEl.innerText = experience;
  if (++experience <= 15) {
    setTimeout(updateExperience, experienceTimeout);
  }
}

async function updateWebsites() {
  websitesEl.innerText = websites;
  if (++websites <= 260) {
    setTimeout(updateWebsites, websitesTimeout);
  }
}

async function updateApps() {
  appsEl.innerText = apps;
  if (++apps <= 27) {
    setTimeout(updateApps, appsTimeout);
  }
}

updateExperience();
updateWebsites();
updateApps();