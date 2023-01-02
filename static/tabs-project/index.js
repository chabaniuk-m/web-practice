const tabs = document.querySelector(".tabs");
const buttons = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (event) => {
  console.log(event.target.dataset.id);
  const id = event.target.dataset.id;

  if (id) {
    buttons.forEach((btn) => {
      btn.classList.remove("live");
    });
    event.target.classList.add("live");
    articles.forEach((article) => {
      article.classList.remove("live");
    });
    const el = document.getElementById(event.target.dataset.id);
    el.classList.add("live");
  }
});