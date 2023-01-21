const menuButton = document.querySelector(".burger_menu");
const menu = document.querySelector(".nav__btn");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("nav_open");
  console.log(menu);
});
