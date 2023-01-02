const bgImageEl = document.querySelector(".bg-image");

window.addEventListener("scroll", () => {
  console.log("scrolling");
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.scrollY / window.innerHeight;
  bgImageEl.style.backgroundSize = 100 - window.scrollY / window.innerHeight * 60 + "%";
}