const star1El = document.getElementById("star-1");
const star2El = document.getElementById("star-2");
const star3El = document.getElementById("star-3");
const star4El = document.getElementById("star-4");
const star5El = document.getElementById("star-5");
const farEl = document.querySelectorAll(".far");

star1El.addEventListener("click", () => {
  star1El.style.color = "#f0f011";
  star2El.style.color = "lightgray";
  star3El.style.color = "lightgray";
  star4El.style.color = "lightgray";
  star5El.style.color = "lightgray";
  farEl.forEach(el => {
    el.style.transform = "translateX(0)";
  });
});

star2El.addEventListener("click", () => {
  star1El.style.color = "#f0f011";
  star2El.style.color = "#f0f011";
  star3El.style.color = "lightgray";
  star4El.style.color = "lightgray";
  star5El.style.color = "lightgray";
  farEl.forEach(el => {
    el.style.transform = "translateX(-56px)";
  });
});

star3El.addEventListener("click", () => {
  star1El.style.color = "#f0f011";
  star2El.style.color = "#f0f011";
  star3El.style.color = "#f0f011";
  star4El.style.color = "lightgray";
  star5El.style.color = "lightgray";
  farEl.forEach(el => {
    el.style.transform = "translateX(-112px)";
  });
});

star4El.addEventListener("click", () => {
  star1El.style.color = "#f0f011";
  star2El.style.color = "#f0f011";
  star3El.style.color = "#f0f011";
  star4El.style.color = "#f0f011";
  star5El.style.color = "lightgray";
  farEl.forEach(el => {
    el.style.transform = "translateX(-168px)";
  });
});

star5El.addEventListener("click", () => {
  star1El.style.color = "#f0f011";
  star2El.style.color = "#f0f011";
  star3El.style.color = "#f0f011";
  star4El.style.color = "#f0f011";
  star5El.style.color = "#f0f011";
  farEl.forEach(el => {
    el.style.transform = "translateX(-224px)";
  });
});
