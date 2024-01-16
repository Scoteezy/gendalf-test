/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import "swiper/css/bundle";
import "accordion-js/dist/accordion.min.css";

import "../scss/style.scss";
import Swiper from "swiper/bundle";
import Accordion from "accordion-js";

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-mobile");
  const menuItem = document.querySelectorAll(".nav__link");
  const hamburger = document.querySelector(".hamburger");
  const body = document.body;
  const telInput = document.getElementById("tel");
  console.log(telInput.value);
  console.log(body);
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-mobile_active");
    body.classList.toggle("menu-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-mobile_active");
      body.classList.toggle("menu-active");
    });
  });
  telInput.addEventListener("change", (e) => {
    if (e.target.value) {
      if (
        e.target.value.split("")[0].toString() === "8" ||
        e.target.value.split("")[0].toString() === "+"
      ) {
      } else {
        const newText = "+7" + e.target.value;
        e.target.value = newText;
      }
    }
  });
  let inputs = document.querySelectorAll(".input__file");
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector(".input__file-button-text").innerText;

    input.addEventListener("change", function (e) {
      let fileName = this.files[0].name;
      if (this.files.length != 0) {
        label.querySelector(".input__file-button-text").innerText =
          "Выбран файл: " + fileName;
      } else {
        label.querySelector(".input__file-button-text").innerText = labelVal;
      }
    });
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
new Accordion(".accordion-container");
