const circleEls = document.querySelectorAll(".circle");
const imageEls = document.querySelectorAll(".image-con img");

let timer;
let currIndex = 0;

circleEls.forEach((circle, idx) => {
  circle.addEventListener("click", () => {
    clearTimeout(timer);
    currIndex = idx;
    changeImage();
  })
})

function changeImage() {
  const i = currIndex % circleEls.length;
  const move = i * -560;
  circleEls.forEach((circle, idx) => {
    if (idx === i) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  imageEls.forEach(image => {
    image.style.transform = `translateY(${move}px)`;
  });
  ++currIndex;
  timer = setTimeout(changeImage, 3000);
}

changeImage();