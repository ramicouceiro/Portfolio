const menuButton = document.querySelector(".burger_menu");
const menu = document.querySelector(".nav__btn");
const btn = document.querySelectorAll(".nav__btn__link");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("nav_open");
});

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("nav_open");
  });
});
