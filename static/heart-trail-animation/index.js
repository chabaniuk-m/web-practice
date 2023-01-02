const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {

  console.log(`x = ${event.offsetX}, y = ${event.offsetY}`);
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  const hue = Math.floor(Math.random() * 360);
  spanEl.animate(
    {
      filter: [`hue-rotate(${hue}deg)`, `hue-rotate(${hue + 720}deg)`],
      opacity: [1, 1],
      transform: ['translate(-50%, -50%)', 'translate(-50%, -5000%)']
    },
    {
      duration: 6000,
      iterations: Infinity
    }
  )

  bodyEl.appendChild(spanEl);

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
})