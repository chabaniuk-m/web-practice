const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
  const color = randomColor();
}

const colorContainerEls = document.querySelectorAll(".color-container");

function generateColors() {
  colorContainerEls.forEach((container) => {
    const color = randomColor();
    container.style.backgroundColor = color;
    container.innerText = color;
  })
}

generateColors();

function randomColor() {
  const chars = "0123456789ABCDEF";
  const colorCodeLen = 6;
  let color = "";
  for (let i = 0; i < colorCodeLen; ++i) {
    color += chars.charAt(Math.floor(Math.random() * 16));
  }
  return "#" + color;
}