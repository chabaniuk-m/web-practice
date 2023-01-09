const searchBarConEl = document.querySelector(".search-bar-con");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarConEl.classList.toggle("active");
});