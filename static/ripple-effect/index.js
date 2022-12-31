const btnEl = document.querySelector(".button");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft
  const y = event.pageY - btnEl.offsetTop;
  console.log("x = " + x + ", y = " + y);

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});