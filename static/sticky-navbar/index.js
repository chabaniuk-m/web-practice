const navEl = document.querySelector("nav");
const mainEl = document.querySelector("main");

console.log(navEl.offsetHeight);
console.log(mainEl.offsetTop);

window.addEventListener("scroll", () => {
  console.log("scrollY = " + window.scrollY + "\nheight = " + mainEl.clientHeight)
  if (window.scrollY > mainEl.clientHeight) {
    navEl.classList.add("active");
  } else {
    navEl.classList.remove("active");
  }
  console.log(navEl.classList);
})