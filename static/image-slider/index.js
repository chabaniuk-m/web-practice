const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");

const imgsEls = document.querySelectorAll("img");

let currentImg = Math.floor(imgsEls.length / 2);

updateImg();

nextEl.addEventListener("click", () => {
  ++currentImg;
  updateImg();
});

prevEl.addEventListener("click", () => {
  --currentImg;
  updateImg();
})

function updateImg() {
  imageContainerEl.style.transform = `translateX(-${currentImg * 500}px)`;
}