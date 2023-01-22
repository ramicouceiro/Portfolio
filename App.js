$(document).ready(function () {
  const menuButton = $(".burger_menu");
  const menu = $(".nav__btn");
  const menuLink = $(".nav__btn__link");

  menuButton.click(function () {
    menu.toggleClass("nav_open");
  });

  menuLink.click(function () {
    menu.toggleClass("nav_open");
  });
});
