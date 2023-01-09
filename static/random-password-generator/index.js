const btnEl = document.querySelector("button");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-con");

const chars = "#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_abcdefghijklmnopqrstuvwxyz{|}~"

btnEl.addEventListener("click", () => {
  let password = "";
  for (let i = 0; i < 14; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  console.log(password);
  inputEl.value = password;
});

copyIconEl.addEventListener("click", () => {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
  alertCopy();
});

function alertCopy() {
  alertEl.style.opacity = "1";
  // alertEl.style.transition = "opacity 500ms ease-in-out";
  setTimeout(() => {
    alertEl.style.opacity = "0";
  }, 3000);
}