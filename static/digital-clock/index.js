const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let part = h > 12 ? "PM" : "AM";
  h = h > 12 ? h - 12 : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = part;
  setTimeout(() => updateClock(), 1000);
}

updateClock();