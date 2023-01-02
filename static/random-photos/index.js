const buttonEl = document.querySelector(".btn");
const mainEl = document.querySelector("main");

buttonEl.addEventListener("click", ()=> {
  addNewImages();
})

function addNewImages() {
  for (let i = 0; i < 10; ++i) {
    const imageEl = document.createElement("img");
    imageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    mainEl.appendChild(imageEl);
  }
}