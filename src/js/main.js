/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import "../scss/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-mobile");
  const menuItem = document.querySelectorAll(".nav__link");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-mobile_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-mobile_active");
    });
  });
});
