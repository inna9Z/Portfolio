//import handleFormData from './form.mjs';

const humburger = document.querySelector(".humburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close");

const about = document.getElementById("about-link");
const experience = document.getElementById("experience-link");
const skills = document.getElementById("skills-link");
const work = document.getElementById("work-link");
const contact = document.getElementById("contact-link");
const submitForm = document.querySelector('.contacts__btn');

humburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

function handleMenuItemClick(element) {
  element.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

handleMenuItemClick(about);
handleMenuItemClick(experience);
handleMenuItemClick(skills);
handleMenuItemClick(work);
//handleMenuItemClick(contact);

// window.addEventListener('DOMContentLoaded', () => {
//   submitForm.addEventListener('click', (e) => handleFormData(e));
// });


