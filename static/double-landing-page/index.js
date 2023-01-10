const conEl = document.querySelector(".con");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () =>{
  conEl.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", () => {
  conEl.classList.remove("active-left");
})

rightEl.addEventListener("mouseenter", () =>{
  conEl.classList.add("active-right");
});

rightEl.addEventListener("mouseleave", () => {
  conEl.classList.remove("active-right");
})