const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");
const textareaEl = document.getElementById("text");

textareaEl.addEventListener("keyup", () => {
  const text = textareaEl.value;
  const len = text.length;
  console.log(`key ${text.charAt(len - 1)} is pressed`);
  if (len > 50) {
    textareaEl.value = text.substring(0, 50);
  } else {
    remainingEl.innerText = 50 - len;
    totalEl.innerText = len
  }
});