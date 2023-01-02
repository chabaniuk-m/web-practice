const mainEl = document.querySelector("main");

const careers = ["YouTuber ", "Web Developer ", "Freelancer ", "Instructor "];

let i = 0;
let c = 0;

updateText();

function updateText() {
  mainEl.innerHTML = `<h1>I am a ${careers[i].slice(0,c)}</h1>`;
  ++c;
  if (c == careers[i].length) {
    i = i == careers.length - 1 ? 0 : i + 1;
    c = 0;
    setTimeout(updateText, 1000);
  } else {
    setTimeout(updateText, 200);
  }
}

