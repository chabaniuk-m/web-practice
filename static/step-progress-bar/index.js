const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front");

const stepsEl = document.querySelectorAll(".step");

let currChecked = 1

nextEl.addEventListener("click", () => {
  if (currChecked < stepsEl.length) {
    currChecked++;
  }
  console.log(currChecked);
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  if (currChecked > 0) {
    currChecked--;
  }
  console.log(currChecked);
  updateStepProgress();
});

function updateStepProgress() {
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `<i class="fas fa-check"></i><small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ? "Final" : "Step " + idx}</small>`;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });

  progressEl.style.width = `${100 / (stepsEl.length - 1) * (currChecked - 1)}%`;

  if (currChecked == 1) {
    prevEl.disabled = true;
    nextEl.disabled = false;
  } else if (currChecked == stepsEl.length) {
    nextEl.disabled = true;
    prevEl.disabled = false;
  } else {
    nextEl.disabled = false;
    prevEl.disabled = false;
  }
}