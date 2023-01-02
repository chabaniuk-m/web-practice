const kits = ["crash", "kick", "snare", "tom"];

const mainEl = document.querySelector("main");

kits.forEach((kit) => {
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("btn");
  buttonEl.innerText = kit;
  buttonEl.style.backgroundImage = "url(\"media/" + kit + ".png\")";
  mainEl.appendChild(buttonEl);
  const audioEL = document.createElement("audio");
  audioEL.src = "media/" + kit + ".mp3";
  mainEl.appendChild(audioEL);
  buttonEl.addEventListener("click", () => {
    audioEL.play();
  });
  window.addEventListener("keydown", event => {
    if (event.key == kit.charAt(0)) {
      audioEL.play();
      buttonEl.style.transform = "scale(0.9)";
      setTimeout(() => {
        buttonEl.style.transform = "scale(1)";
      }, 150);
    }
  });
})