const timeEl = document.querySelector("h1");
const btnEl = document.querySelector("button");
const hoursSelectorEl = document.querySelector(".hours select");
const minutesSelectorEl = document.querySelector(".minutes select");
const ampmSelectorEl = document.querySelector(".ampm select");
const hourOptionsEl = document.querySelector(".hours select option");
const minuteOptionsEl = document.querySelector(".minutes select option");
const ampmOptionsEl = document.querySelector(".ampm select option");
const notificationEl = document.querySelector(".notification");
const alarmsConEl = document.querySelector(".alarms-con");

let alarmTime = '',
notificationTimer,
deleteTimer,
alarmTimes = [],
alarmObjects = JSON.parse(localStorage.getItem("alarms")) || [],
ringtone = new Audio("./files/ringtone.wav");

function init() {
  alarmObjects.forEach(obj => {
    alarmsConEl.appendChild(createAlarmEl(obj.time, obj.repeat));
  });
  for (let i = 12; i > 0; --i) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    hoursSelectorEl.appendChild(option);
  }
  for (let i = 59; i >= 0; --i) {
    const option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    minutesSelectorEl.appendChild(option);
  }
  let option = document.createElement("option");
  option.value = "AM";
  option.innerText = "AM";
  ampmSelectorEl.appendChild(option);
  option = document.createElement("option");
  option.value = "PM";
  option.innerText = "PM";
  ampmSelectorEl.appendChild(option);
}

function checkSelections() {
  return hoursSelectorEl.value != "Hour" && minutesSelectorEl.value != "Minute" && ampmSelectorEl.value != "AM/PM";
}

function setAlarm() {
  h = hoursSelectorEl.value;
  m = minutesSelectorEl.value;
  p = ampmSelectorEl.value;
  alarmTime = getTime(h, m, p);
}

function stopRingtone() {
  ringtone.pause();
  btnEl.innerText = "Add Alarm";
}

function getTime(h, m, p, s) {
  if (h > 12) {
    h -= 12;
    p = 'PM';
  }
  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  return `${h}:${m}:${s} ${p}`;
}

function updateTime() {
  const date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  p = 'AM';
  const time = getTime(h, m, p, s);
  timeEl.innerText = time;
  if (alarmTime === time) {
    console.log("Alarm!!!");
    ring();
  }
  setTimeout(updateTime, 1000);
}

function resetSelections() {
  hourOptionsEl.selected = true;
  minuteOptionsEl.selected = true;
  ampmOptionsEl.selected = true;
}

function createAlarmEl(alarmTime, repeat) {
  const alarmEl = document.createElement("div");
  alarmEl.classList.add("alarm");
  const alarmIcon = document.createElement("div");
  alarmIcon.classList.add("alarm-icon");
  let icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-bell");
  alarmIcon.appendChild(icon);
  alarmEl.appendChild(alarmIcon);
  const timeEl = document.createElement("span");
  timeEl.classList.add("time");
  timeEl.innerText = alarmTime;
  alarmEl.appendChild(timeEl);
  const repeatIcon = document.createElement("div");
  repeatIcon.classList.add("repeat-icon");
  icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-1");
  icon.addEventListener("click", (event) => {
    console.log("clicked on repeat");
    const icon = event.target;
    if (icon.classList.contains("fa-repeat")) {
      console.log("repeat contains class 'fa-repeat'");
      icon.style.transform = "scale(0)";
      setTimeout(() => {
        icon.style.transform = "scale(1)";
      }, 300);
      setTimeout(() => {
        icon.classList.remove("fa-repeat");
        icon.classList.add("fa-1");
      }, 300);
    } else {
      console.log("repeat contains class 'fa-1'")
      icon.style.transform = "scale(0)";
      setTimeout(() => {
        icon.classList.remove("fa-1");
        icon.classList.add("fa-repeat");
        icon.style.transform = "scale(1)";
      }, 300);
    }
  });
  repeatIcon.appendChild(icon);
  alarmEl.appendChild(repeatIcon);
  const deleteIcon = document.createElement("div");
  deleteIcon.classList.add("delete-icon");
  const trash = document.createElement("i");
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash-can");
  trash.addEventListener("click", () => {
    clearTimeout(deleteTimer);
    const parent = trash.parentElement.parentElement;
    if (parent.classList.contains("remove")) {
      console.log("Current alarm contains class 'remove'");
      parent.classList.remove("remove");
      parent.classList.add("sweep");
      setTimeout(() => {
        parent.style.display = 'none';
      }, 800);
    } else {
      console.log("Add class 'remove' to alarm");
      parent.classList.add("remove");
      deleteTimer = setTimeout(() => {
        parent.classList.remove("remove");
      }, 3000);
    }
  })
  deleteIcon.appendChild(trash);
  alarmEl.appendChild(deleteIcon);
  console.log(alarmEl);
  return alarmEl;
}

function addAlarm(alarmTime) {
  alarmTimes.push(alarmTime);
  alarmObjects.push({
    time: alarmTime,
    repeat: false
  });
  alarmsConEl.appendChild(createAlarmEl(alarmTime, false));
  localStorage.setItem("alarms", JSON.stringify(alarmObjects));
}

btnEl.addEventListener("click", () => {
  if (btnEl.innerText === "Add Alarm") {
    if (checkSelections()) {
      alarmTime = getTime(
        hoursSelectorEl.value,
        minutesSelectorEl.value,
        ampmSelectorEl.value,
        0
      );
      resetSelections();
      addAlarm(alarmTime);
      notificationEl.classList.add("popup");
      notificationEl.innerText = `Your alarm is set to ${alarmTime}`;
      notificationTimer = setTimeout(() => {
        notificationEl.classList.remove("popup");
      }, 4000);
      console.log(`Alarm time is set to ${alarmTime}`)
    } else {
      window.alert("Please choose hour, minute and AM/PM");
    }
  } else {
    stopRingtone();
    resetSelections();
  }
});

function ring() {
  btnEl.innerText = "Clear Alarm";
  ringtone.play();
  ringtone.loop = true;
}

init();
updateTime();
