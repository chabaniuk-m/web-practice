const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));
console.log(list);

list.forEach(task => {
  toDoList(task);
})

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = task ? task.name : inputEl.value;
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = '';
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkBtnEl);
  const trashEl = document.createElement("div");
  trashEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(trashEl);
  if (task && task.checked) {
    liEl.classList.add("checked");
  }

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  let list = []
  liEls.forEach(el => {
    list.push({
      name: el.innerText,
      checked: el.classList.contains("checked")
    });
  });
  localStorage.setItem("list", JSON.stringify(list))
}