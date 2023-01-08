const newYearEl = document.getElementById("new-year");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let timer;

function updateTimer() {
  const date = new Date();
  newYearEl.innerText = date.getFullYear() + 1;
  daysEl.innerText = (isLeap(date.getFullYear()) ? 366 : 365) - daysFromStartOfTheYear(date);
  hoursEl.innerText = 24 - date.getHours();
  minutesEl.innerText = 60 - date.getMinutes();
  secondsEl.innerHTML = 60 - date.getSeconds();
  timer = setTimeout(() => {
    updateTimer();
  }, 1000);
}

function isLeap(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
} 

function daysFromStartOfTheYear(date) {
  res = 0;
  m = date.getMonth();
  console.log(m);
  if (m >= 1) res += 31;
  if (m >= 2) res += isLeap() ? 29 : 28;
  if (m >= 3) res += 31;
  if (m >= 4) res += 30;
  if (m >= 5) res += 31;
  if (m >= 6) res += 30;
  if (m >= 7) res += 31;
  if (m >= 8) res += 31;
  if (m >= 9) res += 30;
  if (m >= 10) res += 31;
  if (m >= 11) res += 30;
  return date.getDate() + res;
}

updateTimer();