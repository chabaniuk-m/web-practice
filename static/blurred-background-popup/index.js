const buttonEl = document.querySelector(".btn");
const mainEl = document.querySelector("main");
const popupEl = document.querySelector(".popup-container");
const closeEl = document.querySelector(".close-icon");

buttonEl.addEventListener("click", () => {
  mainEl.classList.add("active");
  popupEl.style.visibility = "visible";
})

closeEl.addEventListener("click", () => {
  popupEl.style.visibility = "hidden";
  mainEl.classList.remove("active");
})